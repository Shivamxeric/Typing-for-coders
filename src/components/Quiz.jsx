import React from 'react'
import { useState,useEffect } from 'react';

function Quiz() {

    const questions = [
        {
            question: "What is the color of water",
            options: ["transparent","white","black","your"],
            answer : 4
        },
        {
            question: "what is life",
            options: ["nothing","lie","enjoy","meaningless"],
            answer : 1
        },
        {
            question: "what is darkness part of our life",
            options: ["sleep","night","day","reality"],
            answer : 4
        },
    ];

    const [timer, setTimer] = useState(30);        
    const [score, setScore] = useState(0);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [result, setResult] = useState(false);

useEffect(() => {

if (timer > 0 ) {
    const interval = setInterval(() => {
        setTimer(timer - 1);
    }, 1000);
    return () => clearInterval(interval);
}
else{
    setResult(true);

}
}, [timer]);

const handleAnswer = (selectedOption) => {
    const currentQuestion = questions[currentQuestionIndex];

    if (selectedOption === currentQuestion.answer) {
        setScore(score + 1);
    }

    if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
    }else{
        setResult(true)
    }
};

if (result) {
    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
                <h1>Quiz Completed!</h1>
                <p>Your Score: {score}  / {questions.length}</p>
            </div>
    );
}


  return (
    <div>
<h1>React Quiz web</h1>
<div>
    Time Remaining {timer}s
</div>
<div>
    <p>
        {questions[currentQuestionIndex].question}
    </p>
    {questions[currentQuestionIndex].options.map((option,index) => (
        <button key={index} onClick={() => handleAnswer(index)}>{option}</button>
    ))}
</div>
    </div>
  )
}

export default Quiz