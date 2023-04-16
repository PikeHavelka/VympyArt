import "./TheMain.css"
import ArtGallery from "./ArtGallery"
import { forwardRef } from "react"

const TheMain = forwardRef((props, ref) => {

  return (
    <main>
      <ArtGallery ref={ref}/>
    </main>
  )
})

export default TheMain