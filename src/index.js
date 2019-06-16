import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// THEME
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import muiTheme from './theme/muiTheme';

import itemsHandlerReducer from './store/reducers/itemsHandlerReducer';


const logger = store => {
    return next => {
        return action => {
            const result = next(action);
            return result;
        }
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(itemsHandlerReducer, composeEnhancers(applyMiddleware(logger , thunk)));

ReactDOM.render(<Provider store={store}><MuiThemeProvider theme={muiTheme}><App /></MuiThemeProvider></Provider>, document.getElementById('root'));

serviceWorker.unregister();
