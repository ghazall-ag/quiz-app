import React from 'react'

function Trivia({data,setTimeOut,qNum,setQNum}) {
  return (
  <div className="trivia">
<div className="question">what's is best car?</div>
<div className="answers">
    <div className="answer wrong">BMW1</div>
    <div className="answer">BMW</div>
    <div className="answer">BMW</div>
    <div className="answer">BMW</div>

</div>

  </div>
  )
}

export default Trivia