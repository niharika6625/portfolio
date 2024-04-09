import React, { useEffect } from 'react';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import Tooltip from '@mui/material/Tooltip';
import PropTypes from 'prop-types';
import './StyledProjectModal.scss';

const ProjectModal = ({ open, onClose, handleClickOpen, color, project }) => {
  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  useEffect(() => {
    console.log('open', open);
  }, [open]);

  const { title, description } = project;
  return (
    <>
      <div className="projectDescTrigger">
        <Tooltip title="App Features" placement="top">
          <Button
            variant="contained"
            startIcon={<AutoStoriesIcon fontSize="large" />}
            style={{
              backgroundColor: color,
              color: 'white',
              paddingRight: '5px',
            }}
            onClick={() => handleClickOpen()}
          ></Button>
        </Tooltip>
      </div>
      <div>
        {open && (
          <Dialog
            open={open}
            TransitionComponent={Transition}
            onClose={onClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle>{title}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-slide-description">
                <div
                  dangerouslySetInnerHTML={{
                    __html: description,
                  }}
                ></div>
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={onClose}>Close</Button>
            </DialogActions>
          </Dialog>
        )}
      </div>
    </>
  );
};

ProjectModal.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  project: PropTypes.object,
  handleClickOpen: PropTypes.func,
  color: PropTypes.string,
};

export default ProjectModal;
