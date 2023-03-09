import Register from "./Register";
import { render, screen, cleanup, fireEvent, act, waitFor } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

const initialState = { output: 10 };
const mockStore = configureStore();
let store;

beforeEach(cleanup);
afterEach(cleanup);
describe("Register", () => {
  test('Should load the Registration Form', () => {
    store = mockStore(initialState);
    render(<Provider store={store}><Register /></Provider>);
    expect(screen.getByText('Register')).toBeTruthy();
    expect(screen.getByText('First Name')).toBeTruthy();
    expect(screen.getByText('Last Name')).toBeTruthy();
    expect(screen.getByText('Age')).toBeTruthy();
    expect(screen.getByText('Gender')).toBeTruthy();
    expect(screen.getByText('Create User')).toBeTruthy();
    expect(screen.getByText('Reset')).toBeTruthy();
  });

  test('On Change input should change value', () => {
    store = mockStore(initialState);
    let { getByTestId } = render(<Provider store={store}><Register /></Provider>);
    act(() => {
      fireEvent.change(getByTestId('firstName'),{target: {value: 'First name test'}});      
    });

    waitFor(() => {
      expect(getByTestId('firstName').value).toEqual('First name test');
    })
  });

})