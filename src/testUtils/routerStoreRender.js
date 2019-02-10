import { render } from "react-testing-library";
import { createStore } from "redux";
import { Provider } from "react-redux";
import {
  render,
} from "react-testing-library";
import {
  createHistory,
  createMemorySource,
  LocationProvider
} from "@reach/router";

const routerStoreRender = (
  ui,
  { initialState, store = createStore(reducer, initialState) } = {},
  { route = "/", history = createHistory(createMemorySource(route)) } = {}
) => {
  return {
    ...render(
      <Provider store={store}>
        <LocationProvider history={history}>{ui}</LocationProvider>
      </Provider>
    ),
    store,
    history
  };
};

// re-export everything
export * from 'react-testing-library'

// override render method
export { routerStoreRender as render }
