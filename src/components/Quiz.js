import React, {useState} from 'react'
import { QuizData } from './QuizData'
import Result from './Result';

const Quiz = () => {
    
    const [currQuestion, setCurrQuestion] = useState(0)

    const [score, setScore] = useState(0);
    const [clicked, setClicked] = useState(0);

    const [showres, setShowRes] = useState(0);

    const changeQuestion = () =>{
        updateScore();
        if(currQuestion < QuizData.length-1){
            setCurrQuestion(currQuestion+1);
            setClicked(0);
        }
        else{
            setShowRes(true)
        }
    }

    const updateScore = () => {
        if(clicked === QuizData[currQuestion].answer){
            setScore(score+1);
        }
    }


    const resetAll = () =>{
        setShowRes(false);
        setCurrQuestion(0);
        setClicked(0);
        setScore(0);
    }
  return (
    <>
    <p className="heading-txt">Quiz Master</p>

<div className="container">
    {showres ? (
    <Result score={score} totalScore={QuizData.length} tryAgain={resetAll}/>
    ) : (
        <>
    <div className="question">
        <span id="question-number">{currQuestion+1}.</span>
        <span id="question-txt">{QuizData[currQuestion].question}</span>
    </div>

    <div className="option-container">
        {QuizData[currQuestion].options.map((option, i) => {
            return (
                <button 
                className={`option-btn ${
                    clicked === i+1 ? "checked" : null
                }`} 
                key={i}
                onClick={() => setClicked(i+1)}>
                    {option}
                </button>
            )
        })}
    </div>

    {clicked ? null : <p>Please select one option.</p>}
    <input type="button" value="Next" id="next-button" onClick={changeQuestion}  disabled={!clicked}/>
    </>)}
</div>
    </>
  )
}

export default Quiz