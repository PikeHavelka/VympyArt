import "./TheCommission.css"
import { useState, forwardRef } from "react"

const TheCommission = forwardRef ((props, ref) => {
  const [show, setShow] = useState("")

  return (
    <section className="the-commission" ref={ref}>
      <h1>Commission</h1>

      { show ? <p>ZKOUŠKA</p> : <p>Working on it...</p>}
    </section>
  )
})

export default TheCommission