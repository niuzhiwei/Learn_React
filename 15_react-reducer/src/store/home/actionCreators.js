import {
  CHANGE_RECOMMENDS,
  CHANGE_BANNERS,
  FETCH_HOME_MULTIDATA,
} from "./constants";
import axios from "axios";

export const changeBannersAction = (banners) => ({
  type: CHANGE_BANNERS,
  banners,
});

export const changeRecommendsAction = (recommends) => ({
  type: CHANGE_RECOMMENDS,
  recommends,
});

//redux-thunk
export const getHomeMultidataAction = (dispatch, getState) => {
  axios({ url: "http://123.207.32.32:8000/home/multidata" }).then((res) => {
    const data = res.data.data;
    dispatch(changeBannersAction(data.banner.list));
    dispatch(changeRecommendsAction(data.recommend.list));
  });
};

//redux-saga拦截action
export const fetchHomeMultidataAction = {
  type: FETCH_HOME_MULTIDATA,
};
