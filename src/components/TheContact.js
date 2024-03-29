import "./TheContact.css"
import { forwardRef } from "react"
import { useFormik } from "formik"
import * as Yup from "yup"
import axios from "axios"

const TheContact = forwardRef((props, ref) => {

  /* Formik logics */
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      yourEmail: "",
      message: "",
      terms: false
    },

    /* Validate form (errors) */
    validationSchema: Yup.object({
      firstName: Yup.string()
        .min(2, "First name can't be less than 2 characters.")
        .max(20, "First name can't be more than 20 characters."),

      lastName: Yup.string()
        .min(2, "Last name can't be less than 2 characters.")
        .max(20, "Last Name can't be more than 20 characters."),

      yourEmail: Yup.string()
        .email("Invalid email address"),

      message: Yup.string()
        .min(20, "Message must be more than 20 characters.")
    }),

    /* Submit form */
    onSubmit: (values, { resetForm }) => {
      resetForm()
      
      const msg = {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.yourEmail,
        body: values.message
      }
      
      axios.post("https://dev-null.xyz/api/send_email", msg)
        .then(() => alert("Your message was successfully sent."))
    },
  })

  return (
    <section className="the-contact" ref={ref}>
      <h1>Contact</h1>

      <div className="contact-text">
        <p>If you are interested in commission or any other request please use the form below to send me a message, and I will get back to you as soon as possible.</p>

        <p>Please check first the COMISSION section before contacting me for all the information you need.</p>
      </div>

      <form onSubmit={formik.handleSubmit}>
        <label
          htmlFor="firstName"
          className={formik.touched.firstName && formik.errors.firstName ? "error-msg" : ""}
        >
          {formik.touched.firstName && formik.errors.firstName ? formik.errors.firstName : "First Name"}
        </label>

        <input
          className={formik.touched.firstName && formik.errors.firstName ? "error-msg-border" : ""}
          id="firstName"
          type="text"
          placeholder="John"
          name="firstName"
          value={formik.values.firstName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          required
        />

        <label
          htmlFor="lastName"
          className={formik.touched.lastName && formik.errors.lastName ? "error-msg " : ""}
        >
          {formik.touched.lastName && formik.errors.lastName ? formik.errors.lastName : "Last Name"}
        </label>

        <input
          className={formik.touched.lastName && formik.errors.lastName ? "error-msg-border" : ""}
          id="lastName"
          type="text"
          placeholder="Doe"
          name="lastName"
          value={formik.values.lastName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          required
        />

        <label
          htmlFor="yourEmail"
          className={formik.touched.yourEmail && formik.errors.yourEmail ? "error-msg " : ""}
        >
          {formik.touched.yourEmail && formik.errors.yourEmail ? formik.errors.yourEmail : "Your Email"}
        </label>

        <input
          className={formik.touched.yourEmail && formik.errors.yourEmail ? "error-msg-border" : ""}
          id="yourEmail"
          type="email"
          placeholder="jhnd@gmail.com"
          name="yourEmail"
          value={formik.values.yourEmail}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          required
        />

        <label 
          htmlFor="message"
          className={formik.touched.message && formik.errors.message ? "error-msg" : ""}
        >
          {formik.touched.message && formik.errors.message ? formik.errors.message : "Message"}
        </label>

        <textarea
          className={formik.touched.message && formik.errors.message ? "error-msg-border" : ""}
          cols="30"
          rows="10"
          name="message"
          placeholder="Your message to artist VYMPY."
          value={formik.values.message}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          required
        />

        <div className="personal-data-accept">
          <input 
            name="terms"
            id="terms"
            type="checkbox"
            checked={formik.values.terms}
            onChange={formik.handleChange}
            required
          />
          
          <label 
            htmlFor="terms"
            className={formik.errors.firstName && formik.errors.lastName && formik.errors.message ? "error-msg" : ""}
          >
            I agree to the use of my personal information.
          </label>
        </div>

        <input type="submit" value="Submit message" />
      </form>
    </section>
  )
})

export default TheContact