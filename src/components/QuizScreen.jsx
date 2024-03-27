import React, { useState, useRef, useEffect } from "react";
import QuestionList from "../data/questions.json";
import QuizResult from "./QuizResult.jsx";
import Question from "./Question";

function QuizScreen({ retry }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [markedAnswers, setMarkedAnswers] = useState(
    new Array(QuestionList.length).fill(null)
  );
  const isQuestionEnd = currentQuestionIndex === QuestionList.length;

  function calculateResult() {
    let correct = 0;
    markedAnswers.forEach((answerIndex, index) => {
      if (answerIndex === QuestionList[index].correctOptionIndex) {
        correct++;
      }
    });
    return {
      total: QuestionList.length,
      correct,
      percentage: Math.trunc((correct / QuestionList.length) * 100),
    };
  }

  return (
    <div className="quiz-screen">
      {isQuestionEnd ? (
        <QuizResult result={calculateResult()} retry={retry} />
      ) : (
        <Question
          question={QuestionList[currentQuestionIndex]}
          totalQuestions={QuestionList.length}
          currentQuestion={currentQuestionIndex + 1}
          setAnswer={(index) => {
            setMarkedAnswers((prevAnswers) => {
              const newAnswers = [...prevAnswers];
              newAnswers[currentQuestionIndex] = index;
              return newAnswers;
            });
            setCurrentQuestionIndex(currentQuestionIndex + 1);
          }}
        />
      )}
    </div>
  );
}

export default QuizScreen;
