import { useState } from 'react';
import './App.css';
import Trivia from './components/Trivia';

function App() {
  const [qNum,setQNum]=useState(5);
  const [timeOut,setTimeOut]=useState(false)

  const data=[
{
id:1,
question:"question 1?",
answers:[
{
  text:"phone",
  correct:false,
},
{
  text:"watches",
  correct:true,
},
{
  text:"desk",
  correct:false,
},
{
  text:"tv",
  correct:false,
}]},
{
  id:2,
  question:"question 2?",
  answers:[
  {
    text:"phone2",
    correct:false,
  },
  {
    text:"watches2",
    correct:true,
  },
  {
    text:"desk2",
    correct:false,
  },
  {
    text:"tv2",
    correct:false,
  }]},

  {
    id:3,
    question:"question 3?",
    answers:[
    {
      text:"phone3",
      correct:false,
    },
    {
      text:"watches3",
      correct:true,
    },
    {
      text:"desk3",
      correct:false,
    },
    {
      text:"tv3",
      correct:false,
    }]},
  
    {
      id:4,
      question:"question 4?",
      answers:[
      {
        text:"phone4",
        correct:false,
      },
      {
        text:"watches4",
        correct:true,
      },
      {
        text:"desk4",
        correct:false,
      },
      {
        text:"tv4",
        correct:false,
      }]},
    
]
  const moneyPyramid=[
    {id:1, amount:"$100" },
    {id:2, amount:"$200" },
    {id:3, amount:"$300" },
    {id:4, amount:"$400" },
    {id:5, amount:"$500" },
    {id:6, amount:"$600" },
    {id:7, amount:"$700" },
    {id:8, amount:"$800" },
    {id:9, amount:"$900" },
    {id:10, amount:"$1000" },
    {id:11, amount:"$1100" },
    {id:12, amount:"$1200" },
    {id:13, amount:"$1300" },
    {id:14, amount:"$1400" },
    {id:15, amount:"$1500" },
    {id:16, amount:"$600" }
  
    
  ];
  return (
    <div className="App">
  <div className="main"> 
  <div className="top">
    <div className="timer">30</div>
  </div>
  <div className="bottom"><Trivia
  data={data}
  setTimeOut={setTimeOut}
  qNum={qNum}
  setQNum={setQNum}
  /> </div>
   </div>
  <div className="pyramid"> 
  <ul className="moneyList">

{moneyPyramid.map(m=>(

<li  key={m.id} className={qNum === m.id ? "moneyListItem active " : "moneyListItem "}>
  <span className="moneyListItemNumber">{m.id}</span>
  <span className="moneyListItemAmount">{m.amount}</span>
</li>  

))}
  </ul>
  
  </div>
    </div>
  );
}

export default App;
