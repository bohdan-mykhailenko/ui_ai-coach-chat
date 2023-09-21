import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Message } from '../types/Message';

interface MessagesState {
  isResponseLoading: boolean;
  messages: Message[];
}

const initialState: MessagesState = {
  isResponseLoading: false,
  messages: [],
};

const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    setIsResponseLoading: (state, action: PayloadAction<boolean>) => {
      state.isResponseLoading = action.payload;
    },
    setMessages: (state, action: PayloadAction<Message[]>) => {
      state.messages = action.payload;
    },
    addMessage: (state, action: PayloadAction<Message>) => {
      const newMessage = action.payload;

      const isMessageExist = state.messages.find(
        (message) => message.id === newMessage.id,
      );

      if (!isMessageExist) {
        state.messages = [...state.messages, newMessage];
      }
    },
  },
});

export const { setIsResponseLoading, setMessages, addMessage } =
  messagesSlice.actions;

export default messagesSlice.reducer;
