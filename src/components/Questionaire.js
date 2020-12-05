import React from 'react';

const Questionaire = ({ handleNextQuestion, showAnswer, handleAnswer, data: {question, correct_answer, incorrect_answers} }) => {
    const shuffledAnswers = [correct_answer, ...incorrect_answers].sort(() => Math.random() - 0.5);
    return(
    <div className="flex flex-col">
        <div className="bg-white text-purple-800 p-10 rounded shadow shadow-md rounded-lg">
          <h2 className="text-2xl" dangerouslySetInnerHTML= {{ __html: question}} />
        </div>
        <div className="grid grid-cols-2 gap-6 mt-6">
            {shuffledAnswers.map((answer, idx) => {
                const textColor = showAnswer ? answer === correct_answer ? 'text-green-500' : 'text-red-500' : 'text-purple-700';
                return(
                <button key={idx} className={`${textColor} bg-white p-4 font-semibold rounded shadow mb-4`} onClick={() => handleAnswer(answer)} dangerouslySetInnerHTML= {{ __html: answer}} />
            )})}
        </div>
        {showAnswer && 
            <button onClick={handleNextQuestion} className="ml-auto bg-purple-700 p-4 text-white font-semibold rounded shadow mb-4">Next Question</button>
        }
        
    </div>
)};

export default Questionaire;