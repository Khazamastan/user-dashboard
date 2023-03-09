import App from "./App";
import { render, screen, cleanup, fireEvent, act, waitFor } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import * as actions from "./actions";
import { createMemoryHistory } from 'history';
import { Router } from 'react-router';

const initialState = { output: 10 };
const mockStore = configureStore();
let store;

const createRouterWrapper = (history) => ({ children }) => (
  <Router history={history}>{children}</Router>
);

beforeEach(cleanup);
afterEach(cleanup);
describe("App", () => {
  test('Should load the App', () => {
    store = mockStore(initialState);
    render(<Provider store={store}><App /></Provider>);
    expect(screen.getByText('Welcome !')).toBeTruthy();
    expect(screen.getByText('Home')).toBeTruthy();
    expect(screen.getByText('Register')).toBeTruthy();
    expect(screen.getByText('Users')).toBeTruthy();
  });

  test('On Click on navigation items should navigate', () => {
    store = mockStore(initialState);
    const history = createMemoryHistory();
    render(<Provider store={store}><App /></Provider>, { wrapper: createRouterWrapper(history) });
    expect(screen.getByText('Register')).toBeTruthy();
    act(() => {
      fireEvent.click(screen.getByText('Register'));
    })
    waitFor(() => {
      console.log(history.location.pathname);
      expect(history.location.pathname).toBe('/register');
    })
  });

  test('Should Fetch Users', () => {
    store = mockStore(initialState);
    const spy = jest.spyOn(actions, "initGetUsers");
    render(<Provider store={store}><App /></Provider>);
    expect(spy).toHaveBeenCalled();
  });

})