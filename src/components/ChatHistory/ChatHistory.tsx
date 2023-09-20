import React from 'react';
import { useSelector } from 'react-redux';
import { selectMessages } from '../../selectors/messagesSelector';
import { Grid, Typography, useTheme } from '@mui/material';
import { ChatMessagesList } from '../ChatMessagesList';

export const ChatHistory: React.FC = () => {
  const theme = useTheme();
  const messages = useSelector(selectMessages);
  const isEmptyHistory = messages.length === 0;

  return (
    <Grid>
      {isEmptyHistory ? (
        <Grid>
          <Typography
            variant="h3"
            color={theme.palette.gray.dark}
            sx={{
              [theme.breakpoints.down('sm')]: {
                fontSize: '18px',
              },

              [theme.breakpoints.down('xs')]: {
                fontSize: '16px',
              },
            }}
          >
            Start conversation with our with Agile Coach!
          </Typography>
        </Grid>
      ) : (
        <ChatMessagesList messages={messages} />
      )}
    </Grid>
  );
};
