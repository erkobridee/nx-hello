import React from 'react';
/*
  act
  https://testing-library.com/docs/react-testing-library/example-intro#act
*/
import { render, waitFor } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';

// https://react-testing-examples.com/jest-rtl/fetch/
// https://github.com/skidding/react-mock/tree/master/packages/fetch
import { FetchMock } from '@react-mock/fetch';

import { /*ApiResponse,*/ API_URL } from '@nx-hello/api-interface';

import App from './app';

const renderComponent = () =>
  render(
    <BrowserRouter>
      <FetchMock
        mocks={[{ matcher: API_URL, response: { message: 'mocked response' } }]}
      >
        <App />
      </FetchMock>
    </BrowserRouter>
  );

describe('App', () => {
  it('should render successfully', async () => {
    const { baseElement } = renderComponent();

    await waitFor(() => expect(baseElement).toBeTruthy());
  });

  it('should have a greeting as the title', async () => {
    const { getByText } = renderComponent();

    await waitFor(() => expect(getByText('Welcome to my-site!')).toBeTruthy());
  });
});
