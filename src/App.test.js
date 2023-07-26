import { render, screen, fireEvent } from '@testing-library/react';
import Calculator from './components/calculator/calculator.component';

// Example test case for addition
test('calculates addition correctly', () => {
  // Render the calculator component
  render(<Calculator />);

  // Find the number keys and the equal button
  const twoButton = screen.getByText('2');
  const plusButton = screen.getByText('+');
  const threeButton = screen.getByText('3');
  const equalButton = screen.getByText('=');

  // Simulate user interaction: 2 + 3 =
  fireEvent.click(twoButton);
  fireEvent.click(plusButton);
  fireEvent.click(threeButton);
  fireEvent.click(equalButton);

  // Assert the result displayed on the calculator screen
  const resultDisplay = screen.getByTestId('result-display');
  expect(resultDisplay).toHaveTextContent('5');
});