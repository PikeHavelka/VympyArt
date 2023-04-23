import "./ArtGalleryArtworks.css"
import { useState, useEffect } from "react"
import { ImCircleLeft, ImCircleRight, ImCross } from "react-icons/im"

// Store all ArtAssets from folder images
function importAll(r) {
  let assets = []
  r.keys().forEach((item, index) => {
    assets[index] = r(item)
  })
  return assets
}

const artworksVideos = importAll(require.context("../assets/3D_Artworks", false, /\.(mp4|wmv|gif|mkv|web,)$/))

const artworksImages = importAll(require.context("../assets/3D_Artworks", false, /\.(png|jpe?g|svg)$/))

/**************************************************/
// Component start
function ArtGalleryArtworks(props) {
  const [imageIndex, setImageIndex] = useState()

  return (
    <div className="artworks">
      <div className={props.show ? "show-pop-image" : "hide-pop-image"}>

        <img src={props.popImg} alt="" />

        <div className="icons-container">
          <ImCircleLeft className="icon arrow-left" onClick={props.previousImage} />
          <ImCircleRight className="icon arrow-right" onClick={props.nextImage} />
          <ImCross className="icon cross" onClick={props.closePopImage} />
        </div>
      </div>

      <div className="video-artworks">
        {artworksVideos.map( (oneArtwork, indexArtwork) => {

          return (
            <div className="one-video-artwork" key={indexArtwork}>
              <video 
                src={oneArtwork}
                controls
                preload="metadata">
              </video>
            </div>
          )
        })}
      </div>

      <div className="image-artworks">
        {artworksImages.map((oneArtwork, indexArtwork) => {

          return (
            <div className="one-image-artwork" key={indexArtwork}>
              <img
                className={props.show ? "clicked" : ""} 
                src={oneArtwork}
                alt=""
                onClick={() => props.popUpImage(artworksImages[indexArtwork], indexArtwork)}
              /> 
            </div>
          )
        })}
      </div>
  </div>
  )
}

export default ArtGalleryArtworks