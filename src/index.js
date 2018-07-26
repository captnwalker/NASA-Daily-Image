// React handles the stateless UI while Redux handles the apps state.
// Redux decouples state responsibilities from React.

import React from 'react'; // import the main react dependency
import ReactDOM from 'react-dom'; // import reactDOM
import { Provider } from 'react-redux'; // npm that connects react to redux
import Store from './Store'; // import the redux state store
import App from './app/App'; // import the main app component

import './assets/stylesheets/styles.scss';

ReactDOM.render(
    <Provider store={Store}>
        < App />
    </Provider>,
document.getElementById('root') // takes the rendered App component and mounts it to the #root element
); 
