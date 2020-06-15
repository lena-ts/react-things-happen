import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './components/App';
import {Provider} from 'react-redux'
import {store, saveToLocalStorage} from './store'
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import PrivacyPolicy from "./components/PrivacyPolicy";
import Intro from "./components/Intro";
import ErrorPage from "./components/ErrorPage";
import ErrorBoundary from "./components/ErrorBoundary";

store.subscribe(() => saveToLocalStorage(store.getState()));

ReactDOM.render(
  <React.StrictMode>
      <ErrorBoundary>
      <Router>
          <section className="intro-wrapper">
              <div className="intro">
                  <Switch>
                      <Route path="/react-things-happen" exact>
                          <Intro />
                          <div className="smartphone">
                              <div className="content">
                                  <Provider store={store}>
                                      <App/>
                                  </Provider>
                              </div>
                          </div>
                      </Route>
                      <Route path="/react-things-happen/privacy-policy">
                          <Intro />
                          <PrivacyPolicy/>
                      </Route>
                      <Route component={ErrorPage} />
                  </Switch>
              </div>
          </section>
      </Router>
      </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
