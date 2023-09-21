import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectMessages } from '../../selectors/messagesSelector';
import { Grid, Typography, useTheme } from '@mui/material';
import {
  setIsResponseLoading,
  setMessages,
} from '../../reducers/messagesSlice';
import { useQuery } from 'react-query';
import { getAllMessages } from '../../api/messages';
import { AxiosError } from 'axios';

export const ChatHistory: React.FC = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const messages = useSelector(selectMessages);
  const isEmptyHistory = messages.length === 0;

  const { error, isLoading } = useQuery('messages', getAllMessages, {
    onSuccess: (data) => {
      dispatch(setMessages(data));
    },
  });

  if (isLoading) {
    dispatch(setIsResponseLoading(true));
  } else {
    dispatch(setIsResponseLoading(false));
  }

  if (error) {
    return <h3>Error</h3>;
  }

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
