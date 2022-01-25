import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import reducerA from './reducer/reducerA';
import reducerB from './reducer/reducerB';
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

//combining the two reducers and refering with a rootReducer variable
const rootReducer = combineReducers({
  "rA" : reducerA,
  "rB" : reducerB
})

//creating the store
const store = createStore(rootReducer);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
