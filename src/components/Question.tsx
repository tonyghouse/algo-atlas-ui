"use client"
import { useEffect, useState } from 'react'
import { Checkbox } from "@/components/ui/checkbox"
import { QuestionInfo } from '@/models/QuestionInfo';

import Link from 'next/link';

function Question(questionInfo:QuestionInfo) {


  const [markQuestion,setMarkQuestion] = useState<boolean>(false);
  useEffect(()=>{
    const markedQuestionsJson = localStorage.getItem("markedQuestions");
    const markedQuestions: string[] = markedQuestionsJson ? JSON.parse(markedQuestionsJson) : [];

    const index = markedQuestions.indexOf(questionInfo.id); 
    if(index >-1){
      setMarkQuestion(true);
    }
  },[]);

  function changeMarkQuestion(q: QuestionInfo) {
    const markedQuestionsJson = localStorage.getItem("markedQuestions");
    const markedQuestions: string[] = markedQuestionsJson ? JSON.parse(markedQuestionsJson) : [];

    const index = markedQuestions.indexOf(q.id); 
    if(index < 0){
      markedQuestions.push(q.id);
    } else{
      markedQuestions.splice(index, 1);
    }

    localStorage.setItem("markedQuestions", JSON.stringify(markedQuestions));

    setMarkQuestion(!markQuestion);
  }


  return (
    <li className="flex items-center gap-3">
      <Checkbox
       checked = {markQuestion}
        onClick={(e) => {
          changeMarkQuestion(questionInfo);
        }}
      />
      <Link  target="_blank"  className="hover:underline" href={questionInfo.extLinkUrl}>
        {questionInfo.title}
      </Link>
    </li>
  );

}

export default Question