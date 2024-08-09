import { Formik, Form } from 'formik';
import { useForm } from './useForm';
import { Button, Input } from '../../atoms';
import React from 'react';

const FormComponent = () => {
  const { initialValues, validationSchema, handleSubmit } = useForm();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
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
