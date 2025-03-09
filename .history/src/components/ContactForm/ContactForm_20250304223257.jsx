import css from "./ContactForm.module.css";
import * as Yup from "yup";

export default function ContactForm({ onAdd }) {
  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .min(3, "Too short")
      .max(50, "Too long")
      .required("Required"),
  });

  const initialValues = {
    name: "",
    number: "",
  };

  const FeedbackForm = () => {
    const nameFieldId = useId();
    const numberFieldId = useId();

    const handleSubmit = (values, evt) => {
      evt.preventDefault();
      evt.target.reset();
    };

    return (
      <Formik
        initialValues={{ initialValues }}
        onSubmit={handleSubmit}
        validation={FeedbackSchema}
      >
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="nameFieldId">Name</label>
            <Field type="text" name:"uname" ></Field>
          </div>

          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      </Formik>
    );
  };
}
