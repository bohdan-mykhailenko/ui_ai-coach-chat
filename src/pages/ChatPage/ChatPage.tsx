import { Grid, useTheme } from '@mui/material';
import React from 'react';
import { Sidebar } from '../../components/Sidebar';
import { ChatContent } from '../../components/ChatContent/ChatContent';

export const ChatPage: React.FC = () => {
  const theme = useTheme();

  return (
    <Grid
      container
      sx={{
        backgroundColor: theme.palette.blue.main,
      }}
    >
      <Grid item>
        <Sidebar />
      </Grid>

      <Grid
        item
        sx={{
          flex: 1,
          overflowX: 'auto',
        }}
      >
        <ChatContent />
      </Grid>
    </Grid>
  );
};
