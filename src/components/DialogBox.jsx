import React from 'react';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';

export default function DialogBox(props) {
  function handleDialogBox(e) {
    if (e.target.id == 'dialogBoxWrapper') {
      props.cancelUpdate();
    }
  }
  return (
    <>
      {props.modal ? (
        <div id="dialogBoxWrapper" onClick={(e) => handleDialogBox(e)}>
          <div id="dialogBox">
            <h2>Edit your task</h2>
            <input
              value={props.idValue.value}
              placeholder="Enter a Task"
              onChange={(e) =>
                props.setIdValue((previousState) => {
                  return {
                    ...previousState,
                    value: e.target.value,
                  };
                })
              }
            />
            <p className="error">{props.dialogBoxError}</p>
            <Button
              onClick={() => props.updateValue()}
              variant="contained"
              sx={{
                marginRight: '15px',
              }}
            >
              Confirm
            </Button>
            <Button onClick={() => props.cancelUpdate()} variant="contained">
              Cancel
            </Button>
          </div>
        </div>
      ) : (
        ''
      )}
    </>
  );
}

DialogBox.propTypes = {
  cancelUpdate: PropTypes.func,
  modal: PropTypes.bool,
  setIdValue: PropTypes.func,
  idValue: PropTypes.object,
  dialogBoxError: PropTypes.func,
  updateValue: PropTypes.func,
};
