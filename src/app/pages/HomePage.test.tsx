import React from 'react';
import '@testing-library/jest-dom';
import { cleanup, fireEvent, screen, waitFor } from '@testing-library/react';
import { render } from 'app/utils/test-utils';
import { HomePage } from './HomePage';
afterEach(cleanup);

describe('User have not logged in', () => {
  it('Should show user/pass inputs', () => {
    const { getByText, getByPlaceholderText } = render(<HomePage />);

    expect(getByPlaceholderText('email')).toBeInTheDocument();
    expect(getByPlaceholderText('password')).toBeInTheDocument();
    expect(getByText('Login / Register')).toBeInTheDocument();
  });
});
