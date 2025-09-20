import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App.jsx";

test("renderiza título da aplicação", () => {
  render(<App />);
  expect(screen.getByText(/Login/i)).toBeInTheDocument();
});
