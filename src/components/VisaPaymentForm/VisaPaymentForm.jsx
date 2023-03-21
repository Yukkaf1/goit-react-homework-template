import { Field, Form, Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const initialValues = {
  cardHolder: '',
  cardNumber: '',
  cvv: '',
};

const validationSchema = Yup.object({
  cardHolder: Yup.string().required(),
  cardNumber: Yup.string().length(16).required(),
  cvv: Yup.string().length(3).required(),
});

export const VisaPaymentForm = () => {
  const handleSubmit = (values, actions) => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <label>
          <span>Card holder</span>
          <Field name="cardHolder" />
          <ErrorMessage name="cardHolder" component="div" />
        </label>
        <label>
          <span>Card number</span>
          <Field name="cardNumber" />
          <ErrorMessage name="cardNumber" component="div" />
        </label>
        <label>
          <span>CVV</span>
          <Field name="cvv" />
          <ErrorMessage name="cvv" component="div" />
        </label>
        <button type="submit">Pay</button>
      </Form>
    </Formik>
  );
};
