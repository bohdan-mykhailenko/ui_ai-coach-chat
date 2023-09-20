import React, { useState } from 'react';
import axios from 'axios';
import {
  Button,
  FormGroup,
  Grid,
  Icon,
  IconButton,
  TextField,
  useTheme,
} from '@mui/material';
import { SendIcon } from '../../icons/SendIcon';

export const ChatForm: React.FC = () => {
  const theme = useTheme();
  const [inputText, setInputText] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'http://localhost:5000/api/generate-story',
        { userStoryInput: inputText },
      );

      console.log(response.data.generatedStory);
    } catch (error) {
      console.error('Error sending request:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid
        container
        spacing={2}
        alignItems="center"
        sx={{
          width: '1000px',
        }}
      >
        <Grid item xs={10} sm={10} md={11}>
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
        <Grid item xs={2} sm={2} md={1}>
          <IconButton type="submit">
            <SendIcon />
          </IconButton>
        </Grid>
      </Grid>
    </form>
  );
};
