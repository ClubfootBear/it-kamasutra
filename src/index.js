import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from "./redux/redux_store";
import {Context} from "./redux/Context";



let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <Context.Provider value={store}>
            <App
                // store={store}
                // state={state}
                // dispatch={store.dispatch.bind(store)}
                // state={state}
            />
            </Context.Provider>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState());

store.subscribe(()=> {
    let state = store.getState()
    rerenderEntireTree(state)
});

reportWebVitals();
