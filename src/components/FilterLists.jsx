import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';

export default function FilterLists(props) {
  const [searchValue, setSearchValue] = useState({
    optionSelected: 'all',
    value: '',
  });
  function searchTask() {
    let tempArr2;
    if (searchValue.optionSelected == 'all') {
      tempArr2 = props.array;
    } else if (searchValue.optionSelected == 'completed') {
      tempArr2 = props.array.filter((obj) => {
        if (obj.done == true) {
          return obj;
        }
      });
    } else {
      tempArr2 = props.array.filter((obj) => {
        if (obj.done == false) {
          return obj;
        }
      });
    }
    let tempArr = tempArr2.filter((obj) => {
      if (obj.value.includes(searchValue.value)) {
        return obj;
      }
    });
    if (tempArr.length == 0) {
      props.setFilterErrorMsg('Sorry, There is no such task!!');
      setSearchValue({
        optionSelected: searchValue.optionSelected,
        value: '',
      });
      props.setTaskArray(props.array);
    } else {
      props.setTaskArray(tempArr);
    }
  }
  return (
    <div className="filterDivBgColor">
      <div classname="filterDiv">
        <TextField
          type="search"
          placeholder="Search task"
          value={searchValue.value}
          onChange={(e) => {
            props.setErrorMessage(null);
            props.setFilterErrorMsg(null);
            setSearchValue((previousState) => ({
              ...previousState,
              value: e.target.value,
            }));
          }}
        />
        <Select
          value={searchValue.optionSelected}
          onChange={(e) => {
            props.setErrorMessage(null);
            props.setFilterErrorMsg(null);
            setSearchValue((previousState) => ({
              ...previousState,
              optionSelected: e.target.value,
            }));
          }}
        >
          <option value={'all'}>All</option>
          <option value={'completed'}>Completed</option>
          <option value={'pending'}>Pending</option>
        </Select>
        <Button onClick={() => searchTask()} variant="contained">
          Filter
        </Button>
      </div>
      <p className="todoError">{props.filterErrorMsg}</p>
    </div>
  );
}

FilterLists.propTypes = {
  array: PropTypes.array,
  setTaskArray: PropTypes.func,
  filterErrorMsg: PropTypes.func,
  setFilterErrorMsg: PropTypes.func,
  setErrorMessage: PropTypes.func,
};
