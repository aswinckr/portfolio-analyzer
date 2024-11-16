"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface BreakdownSection {
  title: string;
  score: number;
  content?: string;
  comments?: string;
  suggestions?: string;
}

interface CaseStudyReportProps {
  overallScore: number;
  sections: BreakdownSection[];
}

/**
 * CaseStudyReport component displays a detailed report with an overall score and expandable sections
 * @param {number} overallScore - The overall score out of 5
 * @param {BreakdownSection[]} sections - Array of sections with scores and details
 */
export default function CaseStudyReport({
  overallScore,
  sections,
}: CaseStudyReportProps) {
  const [expandedSections, setExpandedSections] = useState<{
    [key: string]: boolean;
  }>({});

  const toggleSection = (title: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  /**
   * Escapes quotes in text content for safer rendering
   * @param {string} text - The text to escape
   * @returns {string} Escaped text with quotes converted to HTML entities
   */
  const escapeQuotes = (text: string): string => {
    return text.replace(/"/g, "&quot;");
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8 w-full">
      {/* Left Column - Overall Score */}
      <div className="lg:w-1/4 p-6 bg-[#1C1C24] rounded-lg">
        <h2 className="text-xl font-semibold mb-2">Overall Score</h2>
        <div className="text-5xl font-bold text-blue-500">
          {overallScore.toFixed(1)}/5
        </div>
      </div>

      {/* Right Column - Breakdown Sections */}
      <div className="lg:w-3/4 space-y-4">
        {sections.map((section, index) => (
          <div key={index} className="bg-[#1C1C24] rounded-lg">
            <button
              onClick={() => toggleSection(section.title)}
              className="w-full px-6 py-4 flex items-center justify-between hover:bg-[#25252d] rounded-lg"
            >
              <span className="text-lg font-medium">{section.title}</span>
              <div className="flex items-center gap-4">
                <span className="text-blue-500 font-semibold">
                  {section.score}/5
                </span>
                {expandedSections[section.title] ? (
                  <ChevronUp className="w-5 h-5" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
              </div>
            </button>

            {expandedSections[section.title] && (
              <div className="px-6 pb-4 space-y-4">
                {section.content && (
                  <div>
                    <h3 className="text-sm font-medium text-gray-400 mb-1">
                      Content
                    </h3>
                    <p
                      className="text-gray-200 italic"
                      dangerouslySetInnerHTML={{
                        __html: `"${escapeQuotes(section.content)}"`,
                      }}
                    />
                  </div>
                )}
                {section.comments && (
                  <div>
                    <h3 className="text-sm font-medium text-gray-400 mb-1">
                      Comments
                    </h3>
                    <p className="text-gray-200">{section.comments}</p>
                  </div>
                )}
                {section.suggestions && (
                  <div>
                    <h3 className="text-sm font-medium text-gray-400 mb-1">
                      Suggestions
                    </h3>
                    <p className="text-gray-200">{section.suggestions}</p>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
