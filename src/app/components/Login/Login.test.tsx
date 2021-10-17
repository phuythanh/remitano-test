import React from 'react';
import '@testing-library/jest-dom';
import { cleanup, fireEvent, screen, waitFor } from '@testing-library/react';
import { render } from 'app/utils/test-utils';
import { Login } from './Login';
import { UserResponse } from 'app/types/user';
import * as userClient from 'app/apis/userClient';
afterEach(cleanup);

describe('User have not logged in', () => {
  it('Should show user/pass inputs', () => {
    const { getByText, getByPlaceholderText } = render(<Login />);

    expect(getByPlaceholderText('email')).toBeInTheDocument();
    expect(getByPlaceholderText('password')).toBeInTheDocument();
    expect(getByText('Login / Register')).toBeInTheDocument();
  });
  it('Should Share button after logged in successfully', async () => {
    const user: UserResponse = {
      email: 'test@gmail.com',
      id: 1,
      password: 'e10adc3949ba59abbe56e057f20f883e',
    };
    const addMock = jest.spyOn(userClient, 'getUserByEmail');

    addMock.mockImplementation((email: string) => Promise.resolve([user]));
    const { getByText, getByPlaceholderText, debug } = render(<Login />);
    const emailE = getByPlaceholderText('email');
    fireEvent.change(emailE, { target: { value: 'test@gmail.com' } });
    const passwordE = getByPlaceholderText('password');
    fireEvent.change(passwordE, { target: { value: '123456' } });
    const registerButton = getByText('Login / Register');

    fireEvent(
      registerButton,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      })
    );
    await waitFor(() => expect(screen.getByText(/Welcome/i)).toBeInTheDocument());
    debug();
  });

  it('Should show user/pass inputs after logged in unsuccessfully', async () => {
    const user: UserResponse = {
      email: 'test@gmail.com',
      id: 1,
      password: 'e10adc3949ba59abbe56e057f20f883e',
    };
    const addMock = jest.spyOn(userClient, 'getUserByEmail');

    addMock.mockImplementation((email: string) => Promise.resolve([user]));
    const { getByText, getByPlaceholderText, debug } = render(<Login />);
    const emailE = getByPlaceholderText('email');
    fireEvent.change(emailE, { target: { value: 'test@gmail.com' } });
    const passwordE = getByPlaceholderText('password');
    fireEvent.change(passwordE, { target: { value: 'wrongPass' } });
    const registerButton = getByText('Login / Register');

    fireEvent(
      registerButton,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      })
    );
    await waitFor(() => expect(getByPlaceholderText(/email/i)).toBeInTheDocument());
    debug();
  });
});
