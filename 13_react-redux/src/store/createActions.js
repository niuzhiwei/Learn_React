import {
    SUB_NUMBER,
    ADD_NUMBER,
    CHANGE_BANNERS,
    CHANGE_RECOMMENDS,
    FETCH_HOME_MULTIDATA,
} from "./constances.js";
import axios from "axios";

export const addAction = (num) => {
    return {
        type: ADD_NUMBER,
        num,
    };
};

export const subAction = (num) => ({
    type: SUB_NUMBER,
    num,
});

export const changeBannersAction = (banners) => ({
    type: CHANGE_BANNERS,
    banners,
});

export const changeRecommendsAction = (recommends) => ({
    type: CHANGE_RECOMMENDS,
    recommends,
});

//redux-thunk中定义的action函数
export const getHomeMultidataAction = (dispatch, getState) => {
    axios({ url: "http://123.207.32.32:8000/home/multidata" }).then((res) => {
        const data = res.data.data;
        dispatch(changeBannersAction(data.banner.list));
        dispatch(changeRecommendsAction(data.recommend.list));
    });
};

//redux-saga拦截的action
export const fetchHomeMultidataAction = {
    type: FETCH_HOME_MULTIDATA,
};
