import { FETCH, CREATE, UPDATE, DELETE } from '../constants/actionTypes';

export default (fruits = [], action) => {
  switch (action.type) {
    case FETCH:
        return action.payload;      
    case CREATE:
      return [...fruits, action.payload];
    case UPDATE:
      return fruits.map((fruit) => (fruit._id === action.payload._id ? action.payload : fruit));
    case DELETE:
      return fruits.filter((fruit) => fruit._id !== action.payload);
    default:
      return fruits;
  }
};