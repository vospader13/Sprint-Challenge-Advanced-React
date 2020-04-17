import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ReactDOM from 'react-dom';
import App from './App';
import { Navbar } from './components/Navbar';
import { PlayerList } from './components/PlayerList';
import { PlayerCard } from './components/PlayerCard';
import UseDarkMode, { darkMode, setDarkMode} from './Hooks/UseDarkMode';


test('renders App without crashing', () => {
  
  render(<App />);
  
});

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("making sure the darkMode state is working", () => {
  expect(darkMode).toBeInTheDocument;
})

describe("the setDarkMode state is working well", ( ) => {
  it("making sure the setDarkMode state is working", () => {
    expect(setDarkMode).toBeInTheDocument;
  })
});


it('renders "name" text', () => {
  const { queryByText } = render(
    <App />
    );
    const name = queryByText(/Name/i);
  });
it('renders "country" text', () => {
  const { queryByText } = render(
    <App />
    );
    const country = queryByText(/Country/i);
  });
it('renders "searches" text', () => {
  const { queryByText } = render(
    <App />
    );
    const searches = queryByText(/Searches/i);
  });