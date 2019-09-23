import { render, RenderResult } from '@testing-library/react';
import { RouterContext } from 'next-server/dist/lib/router-context';
import App from 'next/app';
import { createRouter } from 'next/router';
import React from 'react';
import Navbar from './Navbar';

describe('Navbar', (): void => {
  let wrapper: RenderResult;

  const router = createRouter('', {}, '', {
    subscription: () => {},
    initialProps: null,
    pageLoader: null,
    Component: Navbar,
    App: App,
    wrapApp: () => {},
  });

  beforeEach(() => {
    wrapper = render(
      <RouterContext.Provider value={router}>
        <Navbar />
      </RouterContext.Provider>,
    );
  });

  it('should have four links', (): void => {
    expect(wrapper.getByTestId('sermons').getAttribute('href')).toEqual('/sermons');
    expect(wrapper.getByTestId('events').getAttribute('href')).toEqual('/events');
    expect(wrapper.getByTestId('steps').getAttribute('href')).toEqual('/steps');
    expect(wrapper.getByTestId('connect').getAttribute('href')).toEqual('/connect');
  });
});
