import { Formik, Form, Field, ErrorMessage } from "formik";
import css from "./ContactForm.module.css";
import * as Yup from "yup";
import { nanoid } from "nanoid";

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

export default function ContactForm({ onAdd }) {
  const initialValues = {
    name: "",
    number: "",
  };

  const handleSubmit = (values, actions) => {
    console.log("handleSubmit", values);

    onAdd(values);
    actions.resetForm();
  };

  // const handleSubmit =(event) => {
  // event.preventDefault();
  //   onAdd({
  //     name: event.target.elements.name.value;
  //     number: event.target.elements.number.value;
  //   })
  // }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validation={UserSchema}
    >
      {(props) => (
        <Form className={css.form} onSubmit={props.handleSubmit}>
          <div className={css.container}>
            <label className={css.label}>Name</label>
            <Field className={css.input} type="text" name="name" />
            <ErrorMessage className={css.error} name="name" component="span" />
          </div>
          <div className={css.container}>
            <label className={css.label}>Number</label>
            <Field className={css.input} type="text" name="number" />
            <ErrorMessage
              className={css.error}
              name="number"
              component="span"
            />
          </div>

          <button className={css.button} type="submit">
            Add contact
          </button>
        </Form>
      )}
    </Formik>
  );
}
