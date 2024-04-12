import React from 'react';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';

export default function QuizButton({ onClick, disabled, text, backgroundColor }) {
  let color, hoverColor;

  if (backgroundColor === 'purple') {
    backgroundColor = '#42446e';
    color = 'white';
    hoverColor = '#856088';
  } else if (backgroundColor === 'yellow') {
    backgroundColor = '#ecc600';
    color = 'black';
    hoverColor = '#c7a317';
  }

  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      variant="contained"
      sx={{
        color: color,
        backgroundColor: backgroundColor,
        mt: 2,
        textTransform: 'none',
        '&:hover': {
          backgroundColor: hoverColor,
        },
      }}
    >
      {text}
    </Button>
  );
}

QuizButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  text: PropTypes.string.isRequired,
  backgroundColor: PropTypes.oneOf(['purple', 'yellow']).isRequired,
};
