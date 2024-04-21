import React from 'react';
import { Grid, TextField, Button, Typography } from '@mui/material';
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
  const addValue = () => {
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
  };

  return (
    <>
      <Grid container spacing={2} className="addTaskDiv">
        <Grid item xs={12} sm={8}>
          <TextField
            id="toDoInput"
            value={inputValue}
            label="Enter a Task"
            onChange={(e) => {
              setErrorMessage(null);
              setFilterErrorMsg(null);
              setInputValue(e.target.value);
            }}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Button id="addBtn" onClick={() => addValue()} variant="contained" fullWidth>
            Add
          </Button>
        </Grid>
      </Grid>
      <Typography variant="body2" className="todoError">
        {errorMessage}
      </Typography>
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
