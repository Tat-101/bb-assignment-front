import { toast } from 'react-toastify';
import * as Yup from 'yup';
import { createUser } from '../../../services/userService';
import { useUser } from '../../../context/UserContext';

export const useForm = () => {
  const { loadUsers } = useUser();

  // Validation schema using Yup
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, 'Name must be at least 2 characters')
      .required('Name is required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
  });

  // Initial form values
  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  // Handle form submission
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      // console.log('Form Data:', values);
      await createUser(values);
      loadUsers();

      toast.success('Form submitted successfully!'); // Display success toast
      resetForm();
    } catch (error) {
      toast.error('Failed to create user');
    } finally {
      setSubmitting(false);
    }
  };

  return {
    initialValues,
    validationSchema,
    handleSubmit,
  };
};
