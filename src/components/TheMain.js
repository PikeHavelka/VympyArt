import "./TheMain.css"
import ArtGallery from "./ArtGallery"
import { forwardRef } from "react"
import TheContact from "./TheContact"

const TheMain = forwardRef((props, ref) => {

  return (
    <main>
      <ArtGallery ref={props.artGalleryRef}/>
      <TheContact ref={props.TheContactRef}/>
    </main>
  )
})

export default TheMain