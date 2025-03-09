import { Formik, Form, Field, ErrorMessage } from "formik";
import css from "./ContactForm.module.css";
import * as Yup from "yup";
import { useId } from "react";

export default function ContactForm({ onAdd }) {
  const UserSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.number()
      .min(3, "Too short")
      .max(50, "Too long")
      .required("Required"),
  });

  const initialValues = {
    name: "",
    number: "",
  };

  const FeedbackForm = () => {};

  const handleSubmit = (values, actions) => {
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={{ initialValues }}
      onSubmit={handleSubmit}
      validation={UserSchema}
    >
      <Form className={css.form} onSubmit={handleSubmit}>
        <div className={css.container}>
          <label className={css.label}>Name</label>
          <Field className={css.input} type="text" name="name" />
          <ErrorMessage className={css.error} name="name" component="span" />
        </div>
        <div className={css.container}>
          <label className={css.label}>Number</label>
          <Field className={css.input} type="text" name="number" />
          <ErrorMessage className={css.error} name="number" component="span" />
        </div>

        <button className={css.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
