import React, { act } from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FormComponent from '../Form';
import { useForm } from '../useForm';
import * as Yup from 'yup';

jest.mock('../useForm');

const validationSchema = Yup.object({});

describe('FormComponent', () => {
  beforeEach(() => {
    useForm.mockReturnValue({
      initialValues: { name: '', email: '', password: '' },
      validationSchema,
      handleSubmit: jest.fn(),
    });
  });

  test('renders the form fields and submit button', () => {
    render(<FormComponent />);

    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
  });

  test('submits the form successfully', async () => {
    const mockHandleSubmit = jest.fn();
    useForm.mockReturnValue({
      initialValues: { name: '', email: '', password: '' },
      validationSchema,
      handleSubmit: mockHandleSubmit,
    });

    render(<FormComponent />);

    fireEvent.change(screen.getByLabelText(/name/i), {
      target: { value: 'John Doe' },
    });
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: 'john@example.com' },
    });
    fireEvent.change(screen.getByLabelText(/password/i), {
      target: { value: 'password' },
    });

    fireEvent.click(screen.getByRole('button', { name: /submit/i }));

    await waitFor(() => {
      expect(mockHandleSubmit).toHaveBeenCalled();
    });
  });

  test('displays submitting state', async () => {
    useForm.mockReturnValue({
      initialValues: { name: '', email: '', password: '' },
      validationSchema,
      handleSubmit: jest.fn(),
    });

    render(<FormComponent />);

    await act(async () => {
      fireEvent.click(screen.getByRole('button', { name: /submit/i }));
    });

    expect(
      screen.getByRole('button', { name: /submitting/i }),
    ).toBeInTheDocument();
  });
});
