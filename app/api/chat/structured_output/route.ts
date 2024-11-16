import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { ChatOpenAI } from "@langchain/openai";
import { PromptTemplate } from "@langchain/core/prompts";

export const runtime = "edge";

const TEMPLATE = `You are an expert designer and portfolio reviewer. Analyze this design portfolio case study based on the provided criteria and evaluate each section's effectiveness (scoring 1-5).
Evaluate these key areas:
- Background and Problem Space
- User Impact and Target Segment
- Design Solutions and Implementation
- Research Insights and Learning
- Competitive Analysis and Unique Value
Input content to analyze:
{input}`;

/**
 * Scrapes content from the given URL using Firecrawl
 */
async function scrapeContent(url: string): Promise<string> {
  const options = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.FIRECRAWL_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      url,
      skipTlsVerification: true,
      formats: ["markdown"],
      onlyMainContent: true,
    }),
  };

  const response = await fetch("https://api.firecrawl.dev/v1/scrape", options);

  if (!response.ok) {
    throw new Error("Failed to scrape content");
  }

  const data = await response.json();

  if (!data.success || !data.data.markdown) {
    throw new Error("No content found at URL");
  }

  return data.data.markdown;
}

/**
 * This handler processes case study content and returns a structured evaluation
 * with scores, comments and suggestions for each section
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const url = body.url;

    if (!url) {
      return NextResponse.json({ error: "URL is required" }, { status: 400 });
    }

    // Scrape content from the URL
    const content = await scrapeContent(url);

    const estimatedTokens = content.length / 4; // Rough estimation: ~4 characters per token
    if (estimatedTokens > 6000) {
      return NextResponse.json(
        { error: "Content too long. Please provide a shorter case study." },
        { status: 400 },
      );
    }

    const prompt = PromptTemplate.fromTemplate(TEMPLATE);
    const model = new ChatOpenAI({
      temperature: 0.3, // Reduced from 0.8 for more consistent results
      model: "gpt-4o-mini",
      maxTokens: 2000, // Added max tokens limit
    });

    // Define the schema for each section's evaluation
    const sectionSchema = z.object({
      score: z
        .number()
        .int() // Ensure integer values
        .min(1)
        .max(5)
        .describe("Score for this section (1-5, integer only)"),
      content: z
        .string()
        .max(500) // Add max length constraint
        .describe(
          "Extract relevant content of this section from the input content",
        ),
      comment: z
        .string()
        .max(500) // Add max length constraint
        .describe(
          "Brief comment on effectiveness (max 500 chars, single line)",
        ),
      suggestion: z
        .string()
        .max(500) // Add max length constraint
        .describe(
          "Brief suggestion for improvement (max 500 chars, single line)",
        ),
    });

    // Main schema for case study evaluation
    const schema = z
      .object({
        background: sectionSchema.describe(
          "Evaluate the background and context",
        ),
        key_problem: sectionSchema.describe("Evaluate the problem definition"),
        whom_does_it_impact: sectionSchema,
        what_are_we_designing: sectionSchema,
        problems_solved: sectionSchema,
        key_research_insights: sectionSchema,
        design_goal: sectionSchema,
        design_solutions: sectionSchema,
        user_flows: sectionSchema,
        learning: sectionSchema,
        unique_selling_point: sectionSchema,
        tone: sectionSchema,
        values: sectionSchema,
        competitor_analysis: sectionSchema,
        overall_score: z
          .number()
          .int()
          .min(1)
          .max(5)
          .describe("Overall score (1-5, integer only)"),
      })
      .describe(
        "Evaluate each aspect of the case study with scores and brief feedback",
      );

    const functionCallingModel = model.withStructuredOutput(schema, {
      name: "case_study_evaluator",
    });

    const chain = prompt.pipe(functionCallingModel);

    const result = await chain.invoke({
      input: content,
    });

    return NextResponse.json(result, { status: 200 });
  } catch (e: any) {
    console.error("Error processing request:", e);

    // Add specific error handling
    if (e.message.includes("OUTPUT_PARSING_FAILURE")) {
      return NextResponse.json(
        {
          error: "Failed to parse AI response. Please try again.",
          details: e.message,
        },
        { status: 422 },
      );
    }

    return NextResponse.json({ error: e.message }, { status: e.status ?? 500 });
  }
}
