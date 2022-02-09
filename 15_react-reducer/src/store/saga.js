import { takeEvery, put, all } from "redux-saga/effects";
import axios from "axios";
import { FETCH_HOME_MULTIDATA } from "./home/constants";
import {
  changeBannersAction,
  changeRecommendsAction,
} from "./home/actionCreators";

function* fetchHomeMultidata(action) {
  console.log(action);
  const res = yield axios.get("http://123.207.32.32:8000/home/multidata");
  console.log(res);
  const banners = res.data.data.banner.list;
  const recommends = res.data.data.recommend.list;

  yield all([
    yield put(changeBannersAction(banners)),
    yield put(changeRecommendsAction(recommends)),
  ]);
}

function* mySaga() {
  //takeLatest一次只能监听一个对应的action
  //takeEvery每一个都会被执行
  yield takeEvery(FETCH_HOME_MULTIDATA, fetchHomeMultidata);
}

export default mySaga;
