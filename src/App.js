import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import configureStore from "./redux/store";
import CalendarContainer from "./components/Calendar/container/CalendarContainer";
import "./App.css";

const store = configureStore();
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <main>
              <Switch>
                <Route path="/" component={CalendarContainer}>
                </Route>
              </Switch>
            </main>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
