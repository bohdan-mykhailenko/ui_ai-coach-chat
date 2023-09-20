import React from 'react';
import { useSelector } from 'react-redux';
import { selectMessages } from '../../selectors/messagesSelector';
import ChatMessageitemsList from '../ChatMessagesList/ChatMessagesList';
import { Grid } from '@mui/material';

export const ChatHistory: React.FC = () => {
  const messages = useSelector(selectMessages);
  const isEmptyHistory = messages.length === 0;

  return (
    <Grid>
      {isEmptyHistory ? (
        <h2>Start conversation...</h2>
      ) : (
        <ChatMessageitemsList messages={messages} />
      )}
    </Grid>
  );
};
