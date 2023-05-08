import "./TheMain.css"
import ArtGallery from "./ArtGallery"
import TheContact from "./TheContact"
import TheCommission from "./TheCommission"
import { forwardRef } from "react"

const TheMain = forwardRef ((props, ref) => {

  return (
    <main>
      <ArtGallery ref={props.artGalleryRef}/>
      <TheCommission ref={props.theCommissionRef}/>
      <TheContact ref={props.theContactRef}/>
    </main>
  )
})

export default TheMain