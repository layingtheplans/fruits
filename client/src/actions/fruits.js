import { FETCH, CREATE, DELETE } from '../constants/actionTypes';

import * as api from '../api/index.js';

export const getFruitByName = (name) => async (dispatch) => {
  try {
    const { data } = await api.fetchFruit(name);
    dispatch({ type: FETCH, payload: data });

  } catch (error) {
    console.log(error.message);
  }
};

export const createFruit = (fruit) => async (dispatch) => {
  try {
    const { data } = await api.createFruit(fruit);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteFruit = (id) => async (dispatch) => {
  try {
    await api.deleteFruit(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};
