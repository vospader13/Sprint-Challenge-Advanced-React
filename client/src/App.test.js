import React from 'react';
import ReactDOM, { render } from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  
    render(<App />);
});



describe('player list component', () => {
  it('renders without crashing', () => {
  //    functionsum(sum(2,2).toBe(4))

  const sum = (a,b) => {
      return a+b;
  }
  expect(sum(2,2)).toBe(4)
  })
})