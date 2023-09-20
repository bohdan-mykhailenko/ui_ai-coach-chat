import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectMessages } from '../../selectors/messagesSelector';
import { Grid, Typography, useTheme } from '@mui/material';
import { ChatMessagesList } from '../ChatMessagesList';
import axios from 'axios';
import { setMessages } from '../../reducers/messagesSlice';

export const ChatHistory: React.FC = () => {
  const dispatch = useDispatch();
  const [messages, setNewMessages] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/messages')
      .then((response) => {
        setNewMessages(response.data);
        dispatch(setMessages(response.data));
      })
      .catch((error) => {
        console.error('Error fetching messages:', error);
      });
  }, []);

  const theme = useTheme();
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
