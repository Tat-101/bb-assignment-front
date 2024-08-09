import { Formik, Form } from 'formik';
import { useForm } from '../../../hooks/useForm';
import { Button, Input } from '../../atoms';
import { useUser } from '../../../context/UserContext';

const FormComponent = () => {
  const { initialValues, validationSchema, handleSubmit } = useForm();
  const { updateUser } = useUser();

  const handleUserFormSubmit = (values, formikHelpers) => {
    updateUser(values);
    handleSubmit(values, formikHelpers);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleUserFormSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="space-y-4">
          <Input label="Name" name="name" type="text" />
          <Input label="Email" name="email" type="email" />
          <Input label="Password" name="password" type="password" />

          <Button
            type="submit"
            disabled={isSubmitting}
            variant="primary"
            size="medium"
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default FormComponent;
