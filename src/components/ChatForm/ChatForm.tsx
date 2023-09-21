import React, { useState } from 'react';
import {
  Grid,
  IconButton,
  TextField,
  Typography,
  useTheme,
} from '@mui/material';
import { SendIcon } from '../../icons/SendIcon';
import { addMessage } from '../../reducers/messagesSlice';
import { useDispatch, useSelector } from 'react-redux';
import { socketService } from '../../services/socketService';
import { selectMessages } from '../../selectors/messagesSelector';
import { getLastMessageId } from '../../helpers/getLastMessageId';
import { ErrorResponse } from '../ErrorResponse';

export const ChatForm: React.FC = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const messages = useSelector(selectMessages);
  const [inputText, setInputText] = useState('');
  const [isResponseLoading, setIsResponseLoading] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const normalizedInput = inputText.trim();

    if (!normalizedInput) {
      return;
    }

    const userMessageDto = {
      role: 'user',
      content: inputText,
    };

    const newUserMessage = {
      id: getLastMessageId(messages) + 1,
      ...userMessageDto,
    };

    dispatch(addMessage(newUserMessage));

    setInputText('');
    setIsResponseLoading(true);

    socketService.sendMessageToOpenAI(userMessageDto);
  };

  socketService.onOpenAIResponse((data) => {
    if (data.error) {
      return <ErrorResponse errorFromOpenAI={data.error} />;
    }

    dispatch(addMessage(data));

    setIsResponseLoading(false);
  });

  return (
    <form onSubmit={handleSubmit}>
      <Grid
        container
        alignItems="center"
        margin="0 auto"
        sx={{
          width: '70%',

          [theme.breakpoints.down('lg')]: {
            width: '80%',
          },

          [theme.breakpoints.down('md')]: {
            width: '100%',
          },
        }}
      >
        <Grid
          sx={{
            width: '100%',
          }}
        >
          <Typography
            variant="h4"
            color={
              isResponseLoading
                ? theme.palette.gray.main
                : theme.palette.white.main
            }
            sx={{
              marginBottom: '12px',

              textAlign: 'left',

              [theme.breakpoints.down('md')]: {
                marginBottom: '9px',
                fontSize: '16px',
              },

              [theme.breakpoints.down('xs')]: {
                marginBottom: '6px',

                fontSize: '14px',
              },
            }}
          >
            AgileGPT is writing...
          </Typography>
        </Grid>
        <Grid
          item
          sx={{
            flex: 1,
            overflowX: 'auto',
            marginRight: '24px',

            [theme.breakpoints.down('md')]: {
              marginRight: '16px',
            },

            [theme.breakpoints.down('sm')]: {
              marginRight: '10px',
            },

            [theme.breakpoints.down('sm')]: {
              marginRight: '5px',
            },
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

                [theme.breakpoints.down('sm')]: {
                  padding: '10px 15px',
                },

                [theme.breakpoints.down('xs')]: {
                  padding: '10px 10px',
                  fontSize: '14px',
                },
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
          <IconButton
            type="submit"
            sx={{
              svg: {
                width: '32px',
                height: '32px',

                [theme.breakpoints.down('xs')]: {
                  width: '25px',
                  height: '25px',
                },
              },
            }}
          >
            <SendIcon />
          </IconButton>
        </Grid>
      </Grid>
    </form>
  );
};
