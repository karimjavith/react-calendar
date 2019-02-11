//__test__/App.test.js
import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import {
  render,
  cleanup,
  wait,
} from "react-testing-library";
import {
  createHistory,
  createMemorySource,
  LocationProvider
} from "@reach/router";
import "jest-dom/extend-expect";
import { reducer } from "../__mocks__/reducer";
import { mockMatchMedia } from "../__mocks__/matchMedia";
import App from "../App";

function renderWithReduxAndRouter(
  ui,
  { initialState, store = createStore(reducer, initialState) } = {},
  { route = "/", history = createHistory(createMemorySource(route)) } = {}
) {
  return {
    ...render(
      <Provider store={store}>
        <LocationProvider history={history}>{ui}</LocationProvider>
      </Provider>
    ),
    store,
    history
  };
}

test("should render <App /> component with day view", async () => {
  mockMatchMedia(false, "max-width: 1200px");
  const {
    container,
    getByText,
    history: { navigate }
  } = renderWithReduxAndRouter(<App />, {
    initialState: {
      calendar: { isFetching: false }
    }
  });
  await wait().then(jest.runOnlyPendingTimers());
  expect(getByText("Event calendar")).toBeInTheDocument();
  expect(getByText("My Calendars")).toBeInTheDocument();

  expect(container.firstChild).toMatchSnapshot();
});

test("should render <App /> component with week view", async () => {
  mockMatchMedia(true, "max-width: 1200px");
  const {
    container,
    getByText,
    history: { navigate }
  } = renderWithReduxAndRouter(<App />, {
    route: "/weekCalendar",
    initialState: {
      calendar: { isFetching: false }
    }
  });
  await wait().then(jest.runOnlyPendingTimers());
  expect(
    container.querySelectorAll(".week-calendar-container")
  ).toMatchSnapshot();
});
test("should render <App /> component with day view for smaller devices", async () => {
  mockMatchMedia(true, "max-width: 400px");
  const {
    container,
    history: { navigate }
  } = renderWithReduxAndRouter(<App />, {
    initialState: {
      calendar: { isFetching: false }
    }
  });
  await wait().then(jest.runOnlyPendingTimers());
  expect(
    container.querySelector(".day-calendar-container")
  ).toMatchSnapshot();
});
