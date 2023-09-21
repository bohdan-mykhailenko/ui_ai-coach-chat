import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectMessages } from '../../selectors/messagesSelector';
import { Grid, Typography, useTheme } from '@mui/material';
import { setMessages } from '../../reducers/messagesSlice';
import { useQuery } from 'react-query';
import { getAllMessages } from '../../api/messages';
import { ChatMessagesList } from '../ChatMessagesList';
import { Loader } from '../Loader';
import { ErrorResponse } from '../ErrorResponse';
import { AxiosError } from 'axios';

export const ChatHistory: React.FC = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const messages = useSelector(selectMessages);
  const [hasFetchedMessages, setHasFetchedMessages] = useState(false);
  const chatListRef = useRef<HTMLDivElement>(null);
  const isEmptyHistory = messages.length === 0;

  const { error, isLoading } = useQuery('messages', getAllMessages, {
    enabled: !hasFetchedMessages,
    onSuccess: (data) => {
      dispatch(setMessages(data));

      setHasFetchedMessages(true);
    },
  });

  useEffect(() => {
    if (chatListRef.current) {
      chatListRef.current.scrollIntoView(false);
    }
  }, [messages]);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorResponse error={error as AxiosError} />;
  }

  return (
    <Grid ref={chatListRef}>
      {isEmptyHistory ? (
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
      ) : (
        <ChatMessagesList messages={messages} />
      )}
    </Grid>
  );
};
