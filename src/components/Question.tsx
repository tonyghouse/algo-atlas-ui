import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { Progress } from "@/components/ui/progress"
import { Checkbox } from "@/components/ui/checkbox"
import { SectionInfo } from '@/models/SectionInfo';
import { QuestionInfo } from '@/models/QuestionInfo';
import { SourceTextModule } from 'vm';

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
      <Link  target="_blank"  className="hover:underline" to={questionInfo.extLinkUrl}>
        {questionInfo.title}
      </Link>
    </li>
  );

}

export default Question