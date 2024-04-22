import React, { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import StyledQuizScore from './StyledQuizScore.js';
import CustomButton from '../../../../components/CustomButton.jsx';
import { addUsersQuizScore } from '../../../../store/reducers/quiz/quiz.js';

export default function QuizScore({ questionsList }) {
  const [score, setScore] = useState(0);
  const [scoreData, setScoreData] = useState([]);
  const params = useParams();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userInfoData = useSelector((state) => state.authentication.userInfo);
  const usersQuizScoreData = useSelector((state) => state.quiz.usersQuizScore);

  useEffect(() => {
    calculateScore();
  }, []);

  function handleHomeNavigation() {
    navigate('/quizDashboard');
  }

  const calculateScore = () => {
    let scoreData = 0;
    let data = questionsList.map((obj, index) => {
      scoreData += obj.userAnswer == obj.ans ? 1 : 0;
      return {
        questionNo: index + 1,
        question: obj.ques,
        yourAnswer:
          obj.userAnswer == ''
            ? 'Not Attempted'
            : obj.options.find((optionObj) => obj.userAnswer == optionObj.optionId).text,
        correctAnswer: obj.options.find((optionObj) => obj.ans == optionObj.optionId).text,
        score: obj.userAnswer == obj.ans ? 1 : 0,
      };
    });

    let parsedusersQuizScoreData = JSON.parse(JSON.stringify(usersQuizScoreData));
    let userDataObj = parsedusersQuizScoreData.find((obj) => obj.id == userInfoData.id);
    if (userDataObj) {
      let userCatObj = userDataObj.quizScoreData.find((obj) => obj.catId == params.catId);
      if (userCatObj) {
        let userLevelObj = userCatObj.levelScoreData.find((obj) => obj.levelId == params.levelId);
        if (userLevelObj) {
          let newScore = (scoreData / 5) * 100;
          if (newScore > userLevelObj.Score) {
            userLevelObj.Score = newScore;
          }
        } else {
          let newLevelObj = {
            levelId: params.levelId,
            Score: (scoreData / 5) * 100,
          };
          userCatObj.levelScoreData.push(newLevelObj);
        }
      } else {
        let newCatObj = {
          catId: params.catId,
          levelScoreData: [
            {
              levelId: params.levelId,
              Score: (scoreData / 5) * 100,
            },
          ],
        };
        userDataObj.quizScoreData.push(newCatObj);
      }
    } else {
      let newUserQuizData = {
        id: userInfoData.id,
        quizScoreData: [
          {
            catId: params.catId,
            levelScoreData: [
              {
                levelId: params.levelId,
                Score: (scoreData / 5) * 100,
              },
            ],
          },
        ],
      };
      parsedusersQuizScoreData.push(newUserQuizData);
    }
    dispatch(addUsersQuizScore(parsedusersQuizScoreData));

    setScore(scoreData);
    setScoreData(data);
  };

  return (
    <StyledQuizScore>
      <div className="quizScorePageWrapper">
        <h3 className="quizScoreHeading">Your total Score is {score}</h3>
        <TableContainer component={Paper}>
          <Table
            sx={{
              minWidth: 650,
            }}
            aria-label="simple table"
          >
            <TableHead
              sx={{
                background: '#e0e0f2',
                fontSize: '2rem',
                fontWeight: 'bold',
              }}
            >
              <TableRow>
                <TableCell
                  sx={{
                    fontSize: '0.8rem',
                    fontWeight: 'bold',
                  }}
                >
                  Ques No.
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: '0.8rem',
                    fontWeight: 'bold',
                  }}
                >
                  Question
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: '0.8rem',
                    fontWeight: 'bold',
                  }}
                >
                  Your Answer
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: '0.8rem',
                    fontWeight: 'bold',
                  }}
                >
                  Correct Answer
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: '0.8rem',
                    fontWeight: 'bold',
                  }}
                >
                  Score
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {scoreData.map((obj, index) => (
                <TableRow
                  key={index + 1}
                  sx={{
                    '&:last-child td, &:last-child th': {
                      border: 0,
                    },
                  }}
                >
                  <TableCell>{obj.questionNo}</TableCell>
                  <TableCell>{obj.question}</TableCell>
                  <TableCell>{obj.yourAnswer}</TableCell>
                  <TableCell>{obj.correctAnswer}</TableCell>
                  <TableCell>{obj.score}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <CustomButton onClick={handleHomeNavigation} text="Back to Home" backgroundColor="yellow" />
      </div>
    </StyledQuizScore>
  );
}

QuizScore.propTypes = {
  questionsList: PropTypes.array,
};
