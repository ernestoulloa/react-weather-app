import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Box } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const Loading = () => (
  <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
    <Typography color="textPrimary" variant="h4">
      Loading...
    </Typography>
    <CircularProgress />
  </Box>
);

export default Loading;
