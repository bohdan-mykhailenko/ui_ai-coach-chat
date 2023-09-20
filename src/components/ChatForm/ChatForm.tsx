import React, { useState } from 'react';
import axios from 'axios';
import { Grid, IconButton, TextField, useTheme } from '@mui/material';
import { SendIcon } from '../../icons/SendIcon';
import { addMessage } from '../../reducers/messagesSlice';
import { Message } from '../../types/Message';
import { useDispatch } from 'react-redux';

export const ChatForm: React.FC = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const [inputText, setInputText] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      // const response = await axios.post(
      //   'http://localhost:5000/api/generate-story',
      //   { userStoryInput: inputText },
      // );

      // console.log(response.data.generatedStory);
      const userMessage: Message = {
        role: 'udser',
        content: inputText,
      };

      dispatch(addMessage(userMessage));
    } catch (error) {
      console.error('Error sending request:', error);
    } finally {
      setInputText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid
        container
        spacing={2}
        alignItems="center"
        margin="0 auto"
        sx={{
          width: '70%',

          '@media (max-width: 900px)': {
            width: '80%',
          },

          '@media (max-width: 767px)': {
            width: '100%',
          },

          '@media (max-width: 600px)': {
            width: '100%',
          },
        }}
      >
        <Grid
          item
          sx={{
            flex: 1,
            overflowX: 'auto',
          }}
        >
          <TextField
            type="text"
            value={inputText}
            onChange={handleInputChange}
            fullWidth
            placeholder="Ask me anything that I can help you or your team..."
            sx={{
              div: {
                border: `1px solid ${theme.palette.gray.main}`,
                borderRadius: '20px',

                '&:hover': {
                  borderColor: theme.palette.gray.dark,
                },

                '&:active': {
                  borderColor: theme.palette.black.main,
                },
              },

              input: {
                padding: '16px 20px',
                border: `1px solid ${theme.palette.gray.main}`,
                borderRadius: '20px',
                color: theme.palette.gray.dark,
                fontSize: '16px',
                fontWeight: '700',
                backgroundColor: theme.palette.white.main,
              },

              label: {
                color: theme.palette.gray.main,
                fontSize: '16px',
                fontWeight: '700',
              },
            }}
          />
        </Grid>
        <Grid item>
          <IconButton type="submit">
            <SendIcon />
          </IconButton>
        </Grid>
      </Grid>
    </form>
  );
};