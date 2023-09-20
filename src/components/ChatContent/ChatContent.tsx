import React from 'react';
import { ChatForm } from '../ChatForm';
import { Grid, useTheme } from '@mui/material';
import { ChatHistory } from '../ChatHistory';

export const ChatContent: React.FC = () => {
  const theme = useTheme();

  return (
    <Grid
      container
      direction="column"
      display="grid"
      sx={{
        margin: '42px 0',
        padding: '40px',
        height: 'calc(100vh - 84px)',
        backgroundColor: theme.palette.secondary.main,
        borderRadius: '40px 0px 0px 40px',

        [theme.breakpoints.down('md')]: {
          padding: '30px',
        },

        [theme.breakpoints.down('sm')]: {
          padding: '20px 10px',

          borderRadius: '20px 0px 0px 20px',
        },
      }}
    >
      <Grid
        item
        xs={12}
        sx={{
          flex: 1,
          overflowY: 'auto',
        }}
      >
        <ChatHistory />
      </Grid>
      <Grid
        item
        sx={{
          alignSelf: 'flex-end',
        }}
      >
        <ChatForm />
      </Grid>
    </Grid>
  );
};
