import { createStore, applyMiddleware } from "redux";

// Logger with default options
import logger from "redux-logger";

import reducer from "./reducer";

export default function configureStore() {
  const store = createStore(reducer, applyMiddleware(logger));
  return store;
}