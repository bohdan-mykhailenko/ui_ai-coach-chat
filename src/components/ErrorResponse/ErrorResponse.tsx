import { Grid, Typography } from '@mui/material';
import { AxiosError } from 'axios';
import React from 'react';

interface ErrorResponseProps {
  error: AxiosError;
}

export const ErrorResponse: React.FC<ErrorResponseProps> = ({ error }) => {
  return (
    <Grid>
      <Typography
        variant="h2"
        color="error"
        sx={{
          marginBottom: '20px',
        }}
      >
        Error occured when fetching data
      </Typography>
      <Typography variant="h4" color="error">
        {error.message}
      </Typography>
    </Grid>
  );
};
