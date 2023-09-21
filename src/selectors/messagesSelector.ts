import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

const isResponseLoadingSelector = (state: RootState) =>
  state.messages.isResponseLoading;

export const selectIsResponseLoading = createSelector(
  [isResponseLoadingSelector],
  (isResponseLoading) => isResponseLoading,
);

const messagesSelector = (state: RootState) => state.messages.messages;

export const selectMessages = createSelector(
  [messagesSelector],
  (messages) => messages,
);
