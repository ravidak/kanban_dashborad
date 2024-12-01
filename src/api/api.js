import axios from 'axios';

const API = axios.create({
  baseURL: 'https://api.quicksell.co/v1/internal/frontend-assignment',
});

export const fetchTasks = () => API.get('/tasks');
export const updateTask = (id, data) => API.put(`/tasks/${id}`, data);
export default API;
