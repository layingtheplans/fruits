import axios from 'axios';

const url = 'http://localhost:5000/fruits';

export const fetchFruit = (name) => axios.get(`${url}/${name}`);
export const createFruit = (newFruit) => axios.post(url, newFruit);
export const updateFruit = (id, updatedFruit) => axios.patch(`${url}/${id}`, updatedFruit);
export const deleteFruit = (id) => axios.delete(`${url}/${id}`);
