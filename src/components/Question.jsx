import React, { useRef, useState, useEffect } from "react";
import { flushSync } from "react-dom";

function Question({ question, totalQuestions, currentQuestion, setAnswer }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const timer = useRef(null);
  const progressBar = useRef(null);

  // Function to handle moving to the next question
  function gotoNextQuestion() {
    if (selectedOption !== null) {
      // Only move to the next question if an option is selected
      clearTimeout(timer.current);
      flushSync(() => {
        setAnswer(selectedOption);
      });
      setSelectedOption(null);
    } else {
      // Show a confirmation dialog if the user tries to move to the next question without selecting an option
      alert("Please select an option before moving to the next question.");
    }
  }

  // Effect to manage the progress bar animation and timer
  useEffect(() => {
    progressBar.current.classList.remove("active");
    setTimeout(() => {
      progressBar.current.classList.add("active");
    }, 0);
    timer.current = setTimeout(gotoNextQuestion, 10 * 1000); // 10 sec
    return () => clearTimeout(timer.current);
  }, [question]);

  // Function to handle option selection
  const handleOptionClick = (index) => {
    setSelectedOption(index);
  };

  return (
    <div className="question">
      <div className="progress-bar" ref={progressBar}></div>
      <div className="question-count">
        <b> {currentQuestion} </b> of <b>{totalQuestions}</b>
      </div>
      <div className="main">
        <div className="title">
          <span>Question:</span>
          <p>{question.title}</p>
        </div>
        <div className="options">
          {question.options.map((option, index) => (
            <div
              className={index === selectedOption ? "option active" : "option"}
              key={index}
              onClick={() => handleOptionClick(index)}
            >
              {option}
            </div>
          ))}
        </div>
      </div>
      <div className="control">
        <button onClick={gotoNextQuestion} disabled={selectedOption === null}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Question;
