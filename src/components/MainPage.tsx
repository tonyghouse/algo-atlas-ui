"use client"
import Section from "./Section";
import { SectionInfo } from "@/models/SectionInfo";
import { useEffect, useState } from "react";

import sectionInfoListJson from "../assets/sectionInfoList.json";

function MainPage() {
  const [sectionInfoList, setSectionInfoList] = useState<SectionInfo[]>([]);

  // useEffect(() => {
  //   const storedSectionInfoList = localStorage.getItem("sectionInfoList");
  //   if (storedSectionInfoList) {
  //     setSectionInfoList(JSON.parse(storedSectionInfoList));
  //   }
  // }, []);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const markedQuestionsJson = localStorage.getItem("markedQuestions");
        if (markedQuestionsJson) {
          const markedQuestions: string[] = JSON.parse(markedQuestionsJson);

          markedQuestions.forEach((x) => {
            console.log("Marked question:", x);
          });
        }


        setSectionInfoList(sectionInfoListJson);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <main className="w-full mx-auto py-4 px-2 md:px-4">
        <div className="grid gap-3">
          {sectionInfoList.map((section) => {
            return <Section key={section.title} {...section} />;
          })}
        </div>
      </main>
    </>
  );
}

export default MainPage;
