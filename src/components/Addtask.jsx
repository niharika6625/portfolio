import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';

function Addtask({
  checkValue,
  inputValue,
  setDialogBoxError,
  setArray,
  setInputValue,
  setErrorMessage,
  setFilterErrorMsg,
  errorMessage,
}) {
  function addValue() {
    const date = new Date();
    let nextId = date.getTime();
    if (!checkValue(inputValue)) {
      setDialogBoxError(null);
      setArray((previousState) => {
        return [
          ...previousState,
          {
            id: nextId++,
            value: inputValue,
            done: false,
          },
        ];
      });
      setInputValue('');
    }
    setDialogBoxError(null);
  }
  return (
    <>
      <div className="addTaskDiv">
        <TextField
          id="toDoInput"
          value={inputValue}
          label="Enter a Task"
          onChange={(e) => {
            setErrorMessage(null);
            setFilterErrorMsg(null);
            setInputValue(e.target.value);
          }}
        />
        <Button id="addBtn" onClick={addValue} variant="contained">
          Add
        </Button>
      </div>
      <p className="todoError">{errorMessage}</p>
    </>
  );
}

Addtask.propTypes = {
  checkValue: PropTypes.func,
  inputValue: PropTypes.string,
  setDialogBoxError: PropTypes.func,
  setArray: PropTypes.func,
  setInputValue: PropTypes.func,
  setErrorMessage: PropTypes.func,
  setFilterErrorMsg: PropTypes.func,
  errorMessage: PropTypes.func,
};

export default Addtask;
