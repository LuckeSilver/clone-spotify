import { createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import sagas from "./sagas";
import reducers from "./ducks";

const middlewares = [];

const sagaMonitor =
  process.env.NODE_ENV === "development"
    ? console.tron.createSagaMonitor()
    : null;

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

middlewares.push(sagaMiddleware);

const createApropriateStore =
  process.env.NODE_ENV === "development"
    ? console.tron.createStore()
    : createStore;

const store = createApropriateStore(
  reducers,
  compose(applyMiddleware(...middlewares))
);
//fazendo um comentário de teste
sagaMiddleware.run(sagas);

export default store;
