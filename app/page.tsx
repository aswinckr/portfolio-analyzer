"use client";

import { useState } from "react";
import CaseStudyReport from "@/components/CaseStudyReport";

export default function StructuredOutputPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [url, setUrl] = useState("");
  const [report, setReport] = useState<{
    overallScore: number;
    sections: Array<{
      title: string;
      score: number;
      content: string;
      comments: string;
      suggestions: string;
    }>;
  } | null>(null);

  /**
   * Transforms the API response into the format expected by CaseStudyReport
   */
  const transformResponse = (data: any) => {
    const sections = Object.entries(data)
      .filter(([key]) => key !== "overall_score")
      .map(([key, value]: [string, any]) => ({
        title: key
          .split("_")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" "),
        score: value.score,
        content: value.content,
        comments: value.comment,
        suggestions: value.suggestion,
      }));

    return {
      overallScore: data.overall_score,
      sections,
    };
  };

  /**
   * Handles the form submission and makes the API request
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat/structured_output", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          url: url,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to analyze case study");
      }

      const data = await response.json();
      const transformedData = transformResponse(data);
      setReport(transformedData);
    } catch (error) {
      console.error("Error:", error);
      // You might want to add error state handling here
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-4 p-4 md:p-8 w-[85%] max-w-[1400px] mx-auto">
      <h1 className="text-4xl font-bold mb-4">Case Study Analyzer</h1>

      <form onSubmit={handleSubmit} className="w-full mb-8">
        <div className="flex gap-4">
          <input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter case study URL..."
            className="flex-1 p-4 rounded bg-[#25252d] text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            disabled={isLoading || !url}
            className={`px-6 py-2 rounded bg-blue-500 text-white font-medium whitespace-nowrap
              ${
                isLoading || !url
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-blue-600"
              }`}
          >
            {isLoading ? "Analyzing..." : "Analyze Case Study"}
          </button>
        </div>
      </form>

      {report && (
        <div className="w-full">
          <CaseStudyReport
            overallScore={report.overallScore}
            sections={report.sections}
          />
        </div>
      )}
    </div>
  );
}
