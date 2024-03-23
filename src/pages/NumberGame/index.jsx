import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';
import { useNavigate } from 'react-router-dom';
import clickSound from '../../assets/media/buttonclick.mp3';
import winSound from '../../assets/media/winsound.mp3';
import { URL, CONSTANTS } from '../../helpers/constants'
import "./game.scss";
import { useSelector, useDispatch } from 'react-redux';
import { selectorNumberGame, updateHistoryList } from '../../store/reducers/numberGame'

const { NUMBER_HISTORY } = URL;
const {
  NUMBER_GAME: {
    GAME_TYPE: {
      PLAY,
      WIN,
      START,
    }
  }
} = CONSTANTS;

// 1 start Game -> ganme
// 2 win Game -> win text
// 3 restart game-> start your game

const numberList = [2, 3, 4, 5, 6, 7, ' ', 1]
const numListString = '1234567'

const NumberGame = () => {
  const dispatch = useDispatch();
  const { historyList } = useSelector(selectorNumberGame);
  const naviagte = useNavigate();
  const [selectedIndex, setSelectedIndex] = useState('');
  const [numbers, setNumbers] = useState(numberList);
  const [winCount, setWinCount] = useState(0);
  const [steps, setSteps] = useState(0);
  const [restart, setRestart] = useState(START);
  // const [historyList, setHistoryList] = useState([]);
  const [timer, setTimer] = useState({
    min: 0,
    sec: 0,
    isStart: false
  })

  const playClickAudio = () => {
    new Audio(clickSound).play();
  }

  const playWinAudio = () => {
    new Audio(winSound).play();
  }

  const startTimer = () => {
    setTimeout(() => {
      let {
        min,
        sec
      } = timer;
      let minnute = sec === 59 ? min + 1 : min;
      let second = sec === 59 ? 0 : sec + 1;
      setTimer(() => ({ ...timer, min: minnute, sec: second }))
    }, 1000)

  }

  useEffect(() => {
    if (timer.isStart && restart === PLAY) {
      startTimer();
    }
  }, [timer])

  useEffect(() => {
    setWinCount(historyList.length)
  }, [historyList])

  const handleItemClick = (number, index) => {
    let tempNumbers = [...numbers]
    setSelectedIndex(index);
    if (number === ' ' && (selectedIndex !== '') && selectedIndex !== index) {
      playClickAudio();
      tempNumbers[index] = tempNumbers[selectedIndex];
      tempNumbers[selectedIndex] = ' ';
      setNumbers(tempNumbers)
      setSelectedIndex('')
      setSteps(steps + 1)
    }

  }

  useEffect(() => {
    if (restart === PLAY) {
      let tempNumber = [...numbers];
      tempNumber = tempNumber.sort(() => (Math.random() > .5) ? 1 : -1)
      setNumbers(() => tempNumber)
      setSteps(0);
      setTimer({ min: 0, sec: 0, isStart: true })
    }
  }, [restart])

  useEffect(() => {
    if (numbers.join('').trim() === numListString) {

      const history = {
        steps: steps,
        time: timer.min + ':' + timer.sec,
        date: new Date().toDateString()
      }
      setTimer({})
      dispatch(updateHistoryList(history))
      // setHistoryList(() => {
      //   return [...historyList, history]
      // })

      setRestart(WIN)
    }
  }, [numbers]);


  const handleRestart = (type) => {
    setRestart(type)
  }

  const handleNavigate = (path) => {
    naviagte(path)
  }

  const renderList = () => {
    if (historyList && historyList.length) {
      return (<table>
        <tr>
          <th>Game no.</th>
          <th>Steps</th>
          <th>Time</th>
          <th>Win Date</th>
        </tr>
        {historyList.map((item, index) => {
          return (<tr>
            <td>{index + 1}</td>
            <td>{item.steps}</td>
            <td>{item.time}</td>
            <td>{item.date}</td>
          </tr>)
        })}
      </table>)
    }
    return ''
  }

  const renderStage = () => {
    switch (restart) {
      case START:
        return (
          <div>
            <h3>To win the game you need to re-arrange the numbers starting from the top left, from 1 to 15, and leave the last tile empty.</h3>
            <Button variant="outlined" onClick={() => handleRestart(PLAY)}>Start Game</Button>
            {renderList()}
          </div>
        )
      case PLAY:
      case WIN:
        return (
          <>
            {restart !== PLAY && <div className='win-stage'>
              {playWinAudio()}
              <Alert variant="filled" icon={false} severity="success">You Win ! Congratulations !</Alert>
              <div className='win-stage-buttons'>
                <Stack spacing={2} direction="row">
                  <Button variant="contained" onClick={() => handleRestart(START)}>Return to Home</Button>
                  <Button variant="contained" onClick={() => handleRestart(PLAY)}>Restart Game</Button>
                </Stack>
              </div>
            </div>}
            <div className="game- header">
              <div className="sub-items">
                <p>Time Elapsed : {`${timer.min}:${timer.sec}`}</p>
                <p>Win Count: {winCount}</p>
                <p>Number of moves : {steps}</p>
                <div>
                  <Stack spacing={2} direction="row">
                    <Button variant="contained">Menu</Button>
                    <Button variant="contained" onClick={() => handleNavigate(NUMBER_HISTORY)}>View History</Button>
                  </Stack>
                </div>
              </div>
              <div className="numbers">
                {numbers.map((item, index) => {
                  return (
                    <div
                      className={`number-item ${index === selectedIndex ? 'active' : ''}`}
                      onClick={() => handleItemClick(item, index)}
                    >
                      {item}
                    </div>
                  )
                })}

              </div>
            </div>
          </>
        )
      default:
        break;
    }
  }

  return <div className="grid-container">
    <div className="game-header">
      <h1>The Game of 15 Numbers</h1>
    </div>
    {renderStage()}
  </div>;

};

export default NumberGame;


//win sound is coming twice
//UI of History Page
// add numbers when the complete app is built
//Login functionality yet to be created
