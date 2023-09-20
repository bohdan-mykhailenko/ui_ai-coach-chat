import React from 'react';
import { ChatForm } from '../ChatForm';
import { Grid, useTheme } from '@mui/material';

export const ChatContent: React.FC = () => {
  const theme = useTheme();

  return (
    <Grid
      container
      height="100vh"
      sx={{
        backgroundColor: theme.palette.secondary.main,
      }}
    >
      <ChatForm />
    </Grid>
  );
};
