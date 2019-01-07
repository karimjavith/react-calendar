import { createStore, compose, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import createReducer from './reducers';
const composeEnhancers =
    (process.env.NODE_ENV !== "production" &&
        window._REDUX_DEVTOOL_EXTENSION_COMPOSE) ||
    compose;
const configureStore = (initialState = {}) => {
    return createStore(
        createReducer(),
        initialState,
        composeEnhancers(applyMiddleware(thunkMiddleware))
    );
};

export default configureStore;