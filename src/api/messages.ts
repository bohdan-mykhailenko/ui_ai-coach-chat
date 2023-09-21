import axios from 'axios';
import { API_URL } from '../consts/api';

export const getAllMessages = async () => {
  try {
    const response = await axios.get(`${API_URL}/messages`);

    return response.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
