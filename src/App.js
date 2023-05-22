import TheHeader from "./components/TheHeader"
import TheMain from "./components/TheMain"
import TheFooter from "./components/TheFooter"
import { useRef } from "react"

function App() {
  const artGalleryRef = useRef(null)
  const theCommissionRef = useRef(null)
  const theContactRef = useRef(null)

  /* Scroll To Gallery from NavigationBar */
    const scrollToGallery = (e) => {
    e.preventDefault()

    window.scrollTo({
      top: artGalleryRef.current.offsetTop,
      behavior: "smooth"
    })
  }

  /* Scroll to Commission from NavigationBar */
  const scrollToCommission = (e) => {
    e.preventDefault()

    window.scrollTo({
      top: theCommissionRef.current.offsetTop,
      behavior: "smooth"
    })
  }

  /* Scroll To Contact from NavigationBar */
  const scrollToContact = (e) => {
    e.preventDefault()
    
    window.scrollTo({
      top: theContactRef.current.offsetTop,
      behavior: "smooth"
    })
  }

  return (
    <div className="container">
      <TheHeader scrollToGallery={scrollToGallery} scrollToContact={scrollToContact} scrollToCommission={scrollToCommission} />
      <TheMain artGalleryRef={artGalleryRef} theContactRef={theContactRef} theCommissionRef={theCommissionRef} />
      <TheFooter />
    </div>
  )
}

export default App