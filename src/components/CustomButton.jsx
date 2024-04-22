import React from 'react';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';

export default function CustomButton({
  onClick,
  disabled,
  text,
  backgroundColor,
  textTransform,
  sx,
  buttonProps = {
    type: 'button',
  },
}) {
  let color, hoverColor;

  if (backgroundColor === 'purple') {
    backgroundColor = '#42446e';
    color = 'white';
    hoverColor = '#856088';
  } else if (backgroundColor === 'yellow') {
    backgroundColor = '#e2ba5a';
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
        textTransform: textTransform ? 'uppercase' : 'none',
        '&:hover': {
          backgroundColor: hoverColor,
        },
        ...sx,
      }}
      {...buttonProps}
    >
      {text}
    </Button>
  );
}

CustomButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  textTransform: PropTypes.oneOf(['uppercase', 'none']),
  text: PropTypes.string.isRequired,
  backgroundColor: PropTypes.oneOf(['purple', 'yellow']).isRequired,
  sx: PropTypes.object,
  buttonProps: PropTypes.object,
};
