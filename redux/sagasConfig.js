import { all } from "redux-saga/effects";
import worksSagas from "./store/effects/WorksSagas";
import imageSagas from "./store/effects/ImageSagas";
import categorySagas from "./store/effects/categorySagas";
import socialNetworkSagas from "./store/effects/socialNetworkSagas";
import messageSagas from "./store/effects/messageSagas";

export default function* rootSagas() {
  yield all([
    worksSagas(),
    imageSagas(),
    categorySagas(),
    socialNetworkSagas(),
    messageSagas()
  ]);
}