import { createStore } from 'redux'; // import the createStore method from redux
import rootReducer from './reducers'; // import ALL combined reducers as rootReducer

const Store = createStore(rootReducer); // pass in rootReducer as an argument; root reducer is a combination of ALL reducers

export default Store;