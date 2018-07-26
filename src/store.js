import { createStore, applyMiddleware } from 'redux'; // import the createStore method from redux
import promise from 'redux-promise'; // redux-promise is middleware that handles the promise
import rootReducer from './reducers'; // import ALL combined reducers as rootReducer

const Store = createStore(
    rootReducer, // pass in rootReducer as an argument; root reducer is a combination of ALL reducers
applyMiddleware(promise)
); 



export default Store;