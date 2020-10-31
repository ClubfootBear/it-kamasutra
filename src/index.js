import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from "./redux/redux_store";



let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App
                store={store}
                state={state}
                dispatch={store.dispatch.bind(store)}
                // state={state}
            />
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
