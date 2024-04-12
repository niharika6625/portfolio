import React, { useState, useEffect } from 'react';
import '../assets/css/quizHome.scss';
import QuizButton from '../components/quiz/QuizButton.jsx';
import questionArray from '../components/quiz/QuizQuestions.jsx';
import QuizScore from '../components/quiz/QuizScore.jsx';

export default function QuizHome() {
  const [questionsList, setQuestionsList] = useState(JSON.parse(JSON.stringify(questionArray))); //stores the questionArray
  const [count, setCount] = useState(0); //current question index
  const [displayScore, setDisplayScore] = useState(false); //whether to display the quiz score
  const [timer, setTimer] = useState({
    min: 10,
    sec: 50,
  });

  useEffect(() => {
    setQuestionsList(JSON.parse(JSON.stringify(questionArray)));
  }, []);

  useEffect(() => {
    if (timer.min == 0 && timer.sec == 0) {
      subimtAns();
    } else {
      setTimeout(() => {
        setTimer((prevState) => {
          if (prevState.sec > 0) {
            return {
              min: prevState.min,
              sec: prevState.sec - 1,
            };
          } else {
            return {
              min: prevState.min - 1,
              sec: 60,
            };
          }
        });
      }, 1000);
    }
  }, [timer]);

  function nextQues() {
    setCount(count + 1);
  }
  function prevQues() {
    setCount(count - 1);
  }
  function subimtAns() {
    setDisplayScore(true);
  }

  const handleOptionClick = (obj) => {
    let updatedList = JSON.parse(JSON.stringify(questionsList));
    if (updatedList[count].userAnswer == obj.optionId && updatedList[count].userAnswer != '') {
      updatedList[count].userAnswer = '';
    } else {
      updatedList[count].userAnswer = obj.optionId;
    }
    setQuestionsList(updatedList);
  };

  return (
    <div className="quizPageWrapper">
      {displayScore ? (
        <>
          <QuizScore questionsList={questionsList} />
        </>
      ) : (
        <>
          <div className="leftAlign">
            <QuizButton onClick={subimtAns} text="End Quiz" backgroundColor="yellow" />
            <h3 className="quizTimer">
              {timer.min}:{timer.sec}
            </h3>
          </div>
          <h3 className="question">{questionsList[count].ques}</h3>
          <div className="choicesList">
            {questionsList[count].options.map((obj, key) => {
              return (
                <div
                  key={key}
                  className={
                    obj.optionId == questionsList[count].userAnswer
                      ? 'optionsDiv activeDiv'
                      : 'optionsDiv'
                  }
                  onClick={() => handleOptionClick(obj)}
                >
                  <p className="choicePrefix">{obj.optionId}</p>
                  <p className="choiceText">{obj.text}</p>
                </div>
              );
            })}
          </div>
          <div className="buttonDiv">
            <QuizButton
              disabled={count == 0}
              onClick={prevQues}
              text="Prev"
              backgroundColor="purple"
            />
            {count + 1 == questionsList.length ? (
              <QuizButton onClick={subimtAns} text="Submit" backgroundColor="yellow" />
            ) : (
              <QuizButton onClick={nextQues} text="Next" backgroundColor="purple" />
            )}
          </div>
        </>
      )}
    </div>
  );
}
