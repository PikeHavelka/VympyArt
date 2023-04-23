import TheHeader from "./components/TheHeader"
import TheMain from "./components/TheMain"
import TheFooter from "./components/TheFooter"
import { useRef } from "react"

function App() {
  const artGalleryRef = useRef(null)
  const TheContactRef = useRef(null)

  // Scroll To Gallery from NavigationBar
    const scrollToGallery = (e) => {
    e.preventDefault()

    window.scrollTo({
      top: artGalleryRef.current.offsetTop,
      behavior: "smooth"
    })
  }

  // Scroll To Contact from NavigationBar
  const scrollToContact = (e) => {
    e.preventDefault()
    
    window.scrollTo({
      top:TheContactRef.current.offsetTop,
      behavior: "smooth"
    })
  }

  return (
    <div className="container">
      <TheHeader scrollToGallery={scrollToGallery} scrollToContact={scrollToContact} />
      <TheMain artGalleryRef={artGalleryRef} TheContactRef={TheContactRef} />
      <TheFooter />
    </div>
  )
}

export default App