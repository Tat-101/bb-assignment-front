import * as Yup from 'yup';

export const useForm = () => {
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
  const handleSubmit = (values, { setSubmitting }) => {
    console.log('Form Data:', values);
    setSubmitting(false);
  };

  return {
    initialValues,
    validationSchema,
    handleSubmit,
  };
};
