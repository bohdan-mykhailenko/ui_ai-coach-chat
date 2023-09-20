import { Grid, useTheme } from '@mui/material';
import React from 'react';
import { Sidebar } from '../../components/Sidebar';
import { ChatContent } from '../../components/ChatContent/ChatContent';
import styles from './ChatPage.module.scss';

export const ChatPage: React.FC = () => {
  const theme = useTheme();

  return (
    <Grid
      container
      sx={{
        backgroundColor: theme.palette.blue.main,
      }}
    >
      <Grid item xs={2}>
        <Sidebar />
      </Grid>

      <Grid item xs={10}>
        <ChatContent />
      </Grid>
    </Grid>
  );
};
