import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { toast } from 'react-toastify';
import { createUser } from '../../../../services/userService';
import FormComponent from '../Form';

// Mock the necessary modules
jest.mock('../../../../services/userService');
jest.mock('react-toastify', () => ({
  toast: {
    success: jest.fn(),
    error: jest.fn(),
  },
}));

describe('FormComponent Integration Test', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('submits the form successfully and calls createUser API', async () => {
    createUser.mockResolvedValueOnce({ id: 1, name: 'John Doe' });

    render(<FormComponent />);

    // Simulate user filling out the form
    fireEvent.change(screen.getByLabelText(/name/i), {
      target: { value: 'John Doe' },
    });
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: 'john@example.com' },
    });
    fireEvent.change(screen.getByLabelText(/password/i), {
      target: { value: 'password' },
    });

    // Simulate form submission
    fireEvent.click(screen.getByRole('button', { name: /submit/i }));

    // Wait for the async operations to complete
    await waitFor(() => {
      expect(createUser).toHaveBeenCalledWith({
        name: 'John Doe',
        email: 'john@example.com',
        password: 'password',
      });
      expect(toast.success).toHaveBeenCalledWith(
        'Form submitted successfully!',
      );
    });
  });

  test('handles API failure correctly', async () => {
    createUser.mockRejectedValueOnce(new Error('Failed to create user'));

    render(<FormComponent />);

    // Simulate user filling out the form
    fireEvent.change(screen.getByLabelText(/name/i), {
      target: { value: 'Jane Doe' },
    });
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: 'jane@example.com' },
    });
    fireEvent.change(screen.getByLabelText(/password/i), {
      target: { value: 'password123' },
    });

    // Simulate form submission
    fireEvent.click(screen.getByRole('button', { name: /submit/i }));

    // Wait for the async operations to complete
    await waitFor(() => {
      expect(createUser).toHaveBeenCalledWith({
        name: 'Jane Doe',
        email: 'jane@example.com',
        password: 'password123',
      });
      expect(toast.error).toHaveBeenCalledWith('Failed to create user');
    });
  });
});
