import {useEffect, useState} from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';

import "./game.scss";

const numberList = [14,2,3,4,5,6,7,8,9,10,11,12,13,' ',1,15]
const numListString = '123456789101112131415'

const NumberGame = () => {
  const [selectedIndex, setSelectedIndex] = useState('');
  const [numbers, setNumbers] = useState(numberList);
  const [winCount, setWinCount] = useState(0);
  const [steps, setSteps] = useState(0);
  const [restart, setRestart] = useState(3);

  // 1 start Game -> ganme
  // 2 win Game -> win text
  // 3 restart game-> start your game

  const handleItemClick = (number, index) => {
    let tempNumbers = [...numbers]
    setSelectedIndex(index);
    if(number === ' ' && (selectedIndex !== '') && selectedIndex !== index){
      console.log(tempNumbers[selectedIndex])
      tempNumbers[index] = tempNumbers[selectedIndex];
      tempNumbers[selectedIndex] = ' ';
      setNumbers(tempNumbers)
      setSelectedIndex('')
      setSteps(steps+1)
    }

  }

  useEffect(() => {
    console.log('suffle logic')
    if(restart === 1){
      let tempNumber = [ ...numbers];
      tempNumber = tempNumber.sort(() => (Math.random() > .5) ? 1 : -1)
      setNumbers(() => tempNumber)
      setSteps(0);
    }
  }, [restart])

  useEffect(() => {
    if(numbers.join('').trim() === numListString){
      setWinCount(winCount+1);
      setRestart(2)
    }
  }, [numbers]);


  const handleRestart = (type) => {
    setRestart(type)
  }

  const renderStage = () => {
    switch(restart){
      case 3:
        return(
          <div>
            <h3>To win the game you need to re-arrange the numbers starting from the top left, from 1 to 15, and leave the last tile empty.</h3>
              <Button variant="outlined" onClick={() => handleRestart(1)}>Start Game</Button>
          </div>
        )
      // case 2:
      //   return (
      //     <div className='win-stage'>
      //       <Alert variant="filled" icon={false} severity="success">You Win ! Congratulations !</Alert>
      //       <div className='win-stage-buttons'>
      //         <Stack spacing={2} direction="row">
      //           <Button variant="contained" onClick={() => handleRestart(3)}>Return to Home</Button>
      //           <Button variant="contained" onClick={() => handleRestart(1)}>Restart Game</Button>
      //           <Button variant="contained">View History</Button>
      //         </Stack>
      //       </div> 
      //     </div>
      //   )
      case 1:
      case 2:
        return (
          <>
          {restart !== 1 && <div className='win-stage'>
            <Alert variant="filled" icon={false} severity="success">You Win ! Congratulations !</Alert>
            <div className='win-stage-buttons'>
              <Stack spacing={2} direction="row">
                <Button variant="contained" onClick={() => handleRestart(3)}>Return to Home</Button>
                <Button variant="contained" onClick={() => handleRestart(1)}>Restart Game</Button>
                <Button variant="contained">View History</Button>
              </Stack>
            </div> 
          </div>}
          <div className="game- header">
              <div className="sub-items">
                  <p>Time Elapsed :</p>
                  <p>Win Count: {winCount}</p>
                  <p>Number of moves : {steps}</p>
              <div>
                <Button variant="contained">Shuffle Numbers</Button>
              </div>
          </div>
          <div className="numbers">
            {numbers.map((item, index) => {
              return ( 
                <div 
                  class={`number-item ${index === selectedIndex ? 'active' : ''}` }
                  onClick={() => handleItemClick(item, index)}
                 >
                  {item}
                </div>
                )
            } )}
          </div>
          </div>
          </>
        )
      default:
        break;
    }
  }

  return <div className="grid-container">
           <div className="game- header">
              <h1>The Game of 15 Numbers</h1>
           </div>
          {renderStage()}
         </div>;

};

export default NumberGame;
