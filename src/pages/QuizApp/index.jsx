import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import '../assets/css/quizHome.scss';
import questionArray from './quiz/QuizQuestions/index.jsx';
import QuizScore from './quiz/QuizScore/index.jsx';
import StyledQuizApp from './StyledQuizApp.js';
import CustomButton from '../../components/CustomButton.jsx';

export default function QuizHome() {
  const params = useParams();
  let { catId = '', levelId = '' } = params;
  let filteredQuestion = questionArray.find(
    (item) => item.catId == catId && item.levelId == levelId,
  );
  const [questionsList, setQuestionsList] = useState(filteredQuestion.questions);
  const [count, setCount] = useState(0);
  const [displayScore, setDisplayScore] = useState(false);
  const [timer, setTimer] = useState({
    min: 10,
    sec: 50,
  });

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
    <StyledQuizApp>
      <div className="quizPageWrapper">
        {displayScore ? (
          <>
            <QuizScore questionsList={questionsList} />
          </>
        ) : (
          <>
            <div className="leftAlign">
              <CustomButton onClick={subimtAns} text="End Quiz" backgroundColor="yellow" />
              <h3 className="quizTimer">
                {timer.min}:{timer.sec}
              </h3>
            </div>
            {console.log('questionsList', questionsList)}
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
              <CustomButton
                disabled={count == 0}
                onClick={prevQues}
                text="Prev"
                backgroundColor="purple"
              />
              {count + 1 == questionsList.length ? (
                <CustomButton onClick={subimtAns} text="Submit" backgroundColor="yellow" />
              ) : (
                <CustomButton onClick={nextQues} text="Next" backgroundColor="purple" />
              )}
            </div>
          </>
        )}
      </div>
    </StyledQuizApp>
  );
}
