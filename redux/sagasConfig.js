import { all } from "redux-saga/effects";
import worksSagas from "./store/effects/WorksSagas";
import imageSagas from "./store/effects/ImageSagas";
import categorySagas from "./store/effects/categorySagas";

export default function* rootSagas() {
  yield all([
    worksSagas(),
    imageSagas(),
    categorySagas()
  ]);
}