import "./TheContact.css"
import { forwardRef, useState } from "react"

const TheContact = forwardRef ((props, ref) => {
  const [userQuestion, setUserQuestion] = useState({ firstName: "", lastName: "", email: "", question: ""})
  
  const handleForm = (e) => {
    e.preventDefault()

    console.log(userQuestion)
    setUserQuestion({ firstName: "", lastName: "", email: "", question: "" })
  }

  const formChange = (e) => {
    const name = e.target.name
    const value = e.target.value

    setUserQuestion({...userQuestion, [name]: value})
  }

  return (
    <section className="the-contact" ref={ref}>
      <h1>Contact</h1>

    <div className="contact-text">
      <p>If you are interested in commission or any other request please use the form below to send me a message, and I will get back to you as soon as possible.</p>

      <p>Please check first the COMISSION section before contacting me for all the information you need.</p>
    </div>

      <form onSubmit={handleForm}>
        <input 
          type="text"
          placeholder="First Name"
          name="firstName"
          value={userQuestion.firstName}
          onChange={(e) => formChange(e)}
        />

        <input
          type="text"
          placeholder="Last Name"
          name="lastName"
          value={userQuestion.lastName}
          onChange={(e) => formChange(e)}
        />

        <input
          type="email"
          placeholder="your email@"
          name="email"
          value={userQuestion.email}
          onChange={(e) => formChange(e)}
        />

        <textarea
          cols="30"
          rows="10"
          name="question"
          placeholder="Some text..."
          value={userQuestion.question}
          onChange={(e) => formChange(e)}
        >
        </textarea>

        <input type="submit" value="Submit" />
      </form>
    </section>
  )
})

export default TheContact