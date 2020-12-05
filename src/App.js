import React, { useState, useEffect } from 'react'; 
import Questionaire from './components/Questionaire';

import './App.css';

const API_URL = 'https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple';

function App() {

  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  
  useEffect(() => {
    fetch(API_URL)
    .then(res => res.json())
    .then(data => {
      setQuestions(data.results)
    })
  }, [])

  const handleAnswer = (answer) => {
    if(!showAnswer){
      // Prevent Double answer
      if(answer === questions[currentIndex].correct_answer){
        setScore(score + 1)
      }
    }
    

    setShowAnswer(true)

    
  }

  const handleNextQuestion = () => {
    setShowAnswer(false)
    const newIndex = currentIndex + 1;
    setCurrentIndex( newIndex );
  }

  return (questions.length > 0 ? (
      <div className="container">
        {
          currentIndex > questions.length - 1 ? (
            <h1 className="text-3xl text-white font-bold"> Your Score was {score} </h1>
          ) : (
          <Questionaire data={questions[currentIndex]}  handleNextQuestion={handleNextQuestion} showAnswer={showAnswer}  handleAnswer={handleAnswer} />
          )
        }
        
      </div>  
      ) : (
        <div> Loading.... </div>
      ));
}

export default App;
