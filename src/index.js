import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';

/** TODO: import REDUX **/
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

/** TODO: Add REDUCERS */
// airlineList takes in current state and action.  If action.type is ADD_AIRLINE then the payload upon click (on App.jsx) will be added to a new array
const airlineList = (state = [], action) => {
    console.log("in airlineList()", action);
    if (action.type === 'ADD_AIRLINE') {
        return [...state, action.payload]
    }
    return state;
}

/** TODO: Create store */
const storeAirport = createStore(
    combineReducers({
        // only 1 reducer to start, but if we stretch, will have a 2nd at least
        airlineList
    })
)


// Be sure to add the Provider! Just wrap App with it. Don't copy and paste from lecture, that will cause issues.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        {/* Provider lets redux and react communicate, so we wrap App with Provider */}
        <Provider>
            <App />
        </Provider>
    </React.StrictMode>
);