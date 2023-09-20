import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

const setIsResponseLoadingSelector = (state: RootState) =>
  state.messages.messages;
const messagesSelector = (state: RootState) => state.messages.isResponseLoading;

export const selectMessages = createSelector(
  [messagesSelector],
  (messages) => messages,
);

export const selectIsResponseLoading = createSelector(
  [setIsResponseLoadingSelector],
  (isResponseLoading) => isResponseLoading,
);
