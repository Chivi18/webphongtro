import actionTypes from "./actionTypes";
import * as apis from "../../services";

export const GetCategories = () => async (dispatch) => {
  try {
    const response = await apis.apiGetCategories();

    if (response?.data.err === 0) {
      dispatch({
        type: actionTypes.GET_CATEGORIES,
        categories: response.data.response,
      });
    } else {
      dispatch({
        type: actionTypes.GET_CATEGORIES,
        msg: response.data.msg,
        categories: null,
      });
    }
  } catch (error) {
    dispatch({
      type: actionTypes.GET_CATEGORIES,
      categories: null,
    });
  }
};

export const GetPrices = () => async (dispatch) => {
  try {
    const response = await apis.apiGetPrices();

    if (response?.data.err === 0) {
      dispatch({
        type: actionTypes.GET_PRICES,
        prices: response.data.response.sort((a, b) => {
          return +a.order - +b.order;
        }),
      });
    } else {
      dispatch({
        type: actionTypes.GET_PRICES,
        msg: response.data.msg,
        prices: null,
      });
    }
  } catch (error) {
    dispatch({
      type: actionTypes.GET_PRICES,
      prices: null,
    });
  }
};

export const GetArea= () => async (dispatch) => {
  try {
    const response = await apis.apiGetArea()

    if (response?.data.err === 0) {
      dispatch({
        type: actionTypes.GET_AREAS,
      areas: response.data.response.sort((a, b) => {
          return +a.order - +b.order;
        }),
      });
    } else {
      dispatch({
        type: actionTypes.GET_AREAS,
        msg: response.data.msg,
      areas: null,
      });
    }
  } catch (error) {
    dispatch({
      type: actionTypes.GET_AREAS,
    areas: null,
    });
  }
};

export const GetProvince= () => async (dispatch) => {
  try {
    const response = await apis.apiGetProvince()

    if (response?.data.err === 0) {
      dispatch({
        type: actionTypes.GET_PROVINCE,
      provinces: response.data.response,
      msg:""
      });
    } else {
      dispatch({
        type: actionTypes.GET_PROVINCE,
        msg: response.data.msg,
      provinces: null,
      });
    }
  } catch (error) {
    dispatch({
      type: actionTypes.GET_PROVINCE,
    provinces: null,
    msg:error
    });
  }
};