import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Button from './Button';

describe('Button Component', () => {
  test('renders the button with the correct text', () => {
    render(<Button variant="primary">Click Me</Button>);
    const buttonElement = screen.getByText(/click me/i);
    expect(buttonElement).toBeInTheDocument();
  });

  test('applies the correct classes based on props', () => {
    render(
      <Button variant="primary" size="large">
        Click Me
      </Button>,
    );
    const buttonElement = screen.getByText(/click me/i);
    expect(buttonElement).toHaveClass('bg-blue-500');
    expect(buttonElement).toHaveClass('text-white');
    expect(buttonElement).toHaveClass('hover:bg-blue-600');
    expect(buttonElement).toHaveClass('px-5 py-3 text-lg');
  });

  test('calls onClick function when clicked', () => {
    const handleClick = jest.fn();
    render(
      <Button variant="secondary" onClick={handleClick}>
        Click Me
      </Button>,
    );
    const buttonElement = screen.getByText(/click me/i);
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('is disabled when the disabled prop is true', () => {
    render(
      <Button variant="danger" disabled>
        Click Me
      </Button>,
    );
    const buttonElement = screen.getByText(/click me/i);
    expect(buttonElement).toBeDisabled();
    expect(buttonElement).toHaveClass('opacity-50 cursor-not-allowed');
  });

  test('renders with the correct type attribute', () => {
    render(
      <Button variant="primary" type="submit">
        Submit
      </Button>,
    );
    const buttonElement = screen.getByText(/submit/i);
    expect(buttonElement).toHaveAttribute('type', 'submit');
  });
});
