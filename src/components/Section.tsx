import React from "react";
import { Link } from "react-router-dom";
import { Progress } from "@/components/ui/progress";
import { Checkbox } from "@/components/ui/checkbox";
import { SectionInfo } from "@/models/SectionInfo";
import Question from "./Question";

function Section(section: SectionInfo) {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 space-y-2 border-border border-[0.08rem]">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium">{section.title}</h3>
        <div className="flex justify-between gap-4">
          <div className="text-sm text-gray-500 dark:text-gray-400">
            {section.questionList.length}%
          </div>
          {/* <Progress value={section.questionList.length}/> */}
        
        </div>
      </div>
      <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-400">
        {section.questionList.map((q) => {
          return (
            <Question key={q.title} {...q} />
          );
        })}
      </ul>
    </div>
  );
}

export default Section;
