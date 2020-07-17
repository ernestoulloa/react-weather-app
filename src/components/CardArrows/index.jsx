import React from 'react';
import { Box } from '@material-ui/core';
import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded';
import ArrowForwardRoundedIcon from '@material-ui/icons/ArrowForwardRounded';
import IconButton from '@material-ui/core/IconButton';
import PropTypes from 'prop-types';

const CardArrows = (props) => {
  const { showLeft, showRight } = props;

  const handleLeftArrowClick = () => {
    props.onArrowClick('left');
  };
  const handleRightArrowClick = () => {
    props.onArrowClick('right');
  };
  return (
    <Box className="w-100" display="flex" direction="row" alignItems="center" justifyContent="space-between">
      {showLeft ? (
        <IconButton testid="left-arrow" aria-label="left" color="primary" size="medium" onClick={handleLeftArrowClick}>
          <ArrowBackRoundedIcon />
        </IconButton>
      ) : <div />}
      {showRight ? (
        <IconButton testid="right-arrow" aria-label="right" color="primary" size="medium" onClick={handleRightArrowClick}>
          <ArrowForwardRoundedIcon />
        </IconButton>
      ) : <div />}
    </Box>
  );
};

export default CardArrows;

CardArrows.propTypes = {
  onArrowClick: PropTypes.func,
  showLeft: PropTypes.bool,
  showRight: PropTypes.bool,
};

CardArrows.defaultProps = {
  onArrowClick: () => {},
  showLeft: false,
  showRight: true,
};
