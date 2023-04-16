import TheHeader from "./components/TheHeader"
import TheMain from "./components/TheMain"
import TheFooter from "./components/TheFooter"
import { useRef } from "react"

function App() {
  const artGalleryRef = useRef(null)

  // Scroll To Gallery from NavigationBar
    const scrollToGallery = (e) => {
    e.preventDefault()

    window.scrollTo({
      top: artGalleryRef.current.offsetTop,
      behavior: "smooth"
    })
  }

  return (
    <div className="container">
      <TheHeader scrollToGallery={scrollToGallery}/>
      <TheMain ref={artGalleryRef} />
      <TheFooter />
    </div>
  )
}

export default App