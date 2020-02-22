import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
// 
it('renders without crashing', () => {
  
  render(<App />);
  
});



describe('player list component', () => {
  it('renders without crashing', () => {
   const sum = (a,b) => {
      return a+b;
  }
  expect(sum(2,2)).toBe(4)
  })
})


test('is dark mode working', () => {
  const darkmodeBtn = getByText('Dark Mode');
  const darkModeOn = getByText('Dark mode on!')

  fireEvent.cleck(darkmodeBtn);

  expect(darkModeOn).hasTextContent();
})