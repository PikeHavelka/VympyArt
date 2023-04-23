import "./TheContact.css"
import { forwardRef } from "react"

const TheContact = forwardRef ((props, ref) => {
  return (
    <div className="the-contact" ref={ref}>
      <h1>TheContact</h1>

      <form>
        <input type="text" placeholder="Full Name"/>
        <input type="text" placeholder="Company Name"/>
        <input type="email" placeholder="Email@"/>
        <textarea name="" id="" cols="30" rows="10"></textarea>
        <input type="submit" value="submit" />
      </form>
    </div>
  )
})

export default TheContact