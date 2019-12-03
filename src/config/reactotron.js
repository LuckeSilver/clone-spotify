<<<<<<< HEAD
import Reactotron from "reactotron-react-js";
import { reactotronRedux } from "reactotron-redux";
import sagaPlugin from "reactotron-redux-saga";

if (process.env.NODE_ENV === "development") {
  const tron = Reactotron.configure()
    .use(reactotronRedux())
    .use(sagaPlugin())
    .connect();
=======
import Reactotron from 'reactotron-react-js';
import { reactotronRedux } from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';

if (process.env.NODE_ENV === 'development') {
  const tron = Reactotron.configure().use(reactotronRedux()).use(sagaPlugin()).connect();
>>>>>>> 7db3698dbd12415d01f0d17785831d95562ec065

  tron.clear();

  console.tron = tron;
<<<<<<< HEAD
}
=======
}
>>>>>>> 7db3698dbd12415d01f0d17785831d95562ec065
