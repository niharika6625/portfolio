import React, { useState } from 'react';
import { Grid, MenuItem } from '@mui/material';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';

export default function FilterLists(props) {
  const [searchValue, setSearchValue] = useState({
    optionSelected: 'all',
    value: '',
  });
  const searchTask = () => {
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
  };

  const handleChange = (e, field) => {
    props.setErrorMessage(null);
    props.setFilterErrorMsg(null);
    setSearchValue((prevState) => ({
      ...prevState,
      [field]: e.target.value,
    }));
  };

  return (
    <div className="filterDivBgColor">
      <div>
        <Grid container spacing={2} className="filterDiv">
          <Grid item xs={12} sm={4}>
            <TextField
              type="search"
              placeholder="Search task"
              value={searchValue.value}
              onChange={(e) => handleChange(e, 'value')}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Select
              value={searchValue.optionSelected}
              onChange={(e) => handleChange(e, 'optionSelected')}
              fullWidth
            >
              <MenuItem value={'all'}>All</MenuItem>
              <MenuItem value={'completed'}>Completed</MenuItem>
              <MenuItem value={'pending'}>Pending</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Button onClick={searchTask} variant="contained" fullWidth>
              Filter
            </Button>
          </Grid>
        </Grid>
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
