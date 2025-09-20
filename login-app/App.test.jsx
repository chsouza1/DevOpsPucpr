import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('renderiza o texto de boas-vindas', () => {
  render(<App />);
  expect(screen.getByText(/Vite \+ React/i)).toBeInTheDocument();
});
