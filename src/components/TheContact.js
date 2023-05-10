import "./TheContact.css"
import { forwardRef } from "react"
import { useFormik } from "formik"
import * as Yup from "yup"

const TheContact = forwardRef ((props, ref) => {
  // const nameRegex = /^[a-zA-Z]+$/

  /* Formik logics */
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      yourEmail: "",
      yourQuestion: ""
    },

  /* Validate form */
    validationSchema: Yup.object({
      firstName: 
        Yup.string().max(20, "First name can't be more than 20 characters.").required("First name is required!"),

      lastName: 
        Yup.string().max(20, "Last Name can't be more than 20 characters.").required("Last name is required!"),

      yourEmail: 
        Yup.string().required("Please fill the field!"),

      yourQuestion: 
        Yup.string().min(20, "Question must be more than 20 characters.").required("Please fill the field!")
    }),

  /* Submit form */
    onSubmit: (values) => {
      console.log(values)
    }
  })
  console.log(formik.errors.firstName)
  
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
          className={formik.errors.firstName ? "error-msg" : "firstName"}
        >
          {formik.errors.firstName ? formik.errors.firstName : "Fist Name"}
        </label>

        <input
          className={formik.errors.firstName ? "error-msg-border" : "firstName"} 
          id="firstName"
          type="text"
          placeholder="John"
          name="firstName"
          value={formik.values.firstName}
          onChange={formik.handleChange}
          required
        />

        <label htmlFor="lastName">
          {formik.errors.lastName ? formik.errors.lastName : "Last Name"}
        </label>

        <input
          id="lastName"
          type="text"
          placeholder="Doe"
          name="lastName"
          value={formik.values.lastName}
          onChange={formik.handleChange}
          required
        />

        <label htmlFor="yourEmail">
          {formik.errors.yourEmail ? formik.errors.yourEmail : "Your Email"}
        </label>

        <input
          id="yourEmail"
          type="email"
          placeholder="iwashere@gmail.com"
          name="yourEmail"
          value={formik.values.yourEmail}
          onChange={formik.handleChange}
          required
        />

        <textarea
          cols="30"
          rows="10"
          name="yourQuestion"
          placeholder="Sorry for everything"
          value={formik.values.yourQuestion}
          onChange={formik.handleChange}
          required
        >
        </textarea>

        <input type="submit" value="Submit" />
      </form>
    </section>
  )
})

export default TheContact