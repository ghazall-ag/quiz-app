import React, { useState,useEffect } from 'react'

function Trivia({data,setTimeOut,qNum,setQNum}) {
    const [question,setQuestion]=useState(null)
    const [selecteAnswer,setSelecteAnswer]=useState(null)


    useEffect(()=>{
        setQuestion(data[qNum-1]);
    },[data,qNum])

    const handelClick=(a)=>{
      setSelecteAnswer(a);
    }
  return (
   <div className="trivia">
   <div className="question">{question?.question}</div>
   <div className="answers">

  {question?.answers.map((a)=>(
     <div className={setSelecteAnswer === a ? className: "answer"} key={data.id} on onClick={()=>handelClick(a)}>{a.text}</div>
  ))}
  

</div>

  </div>
  )
}

export default Trivia