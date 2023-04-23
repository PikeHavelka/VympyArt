import "./ArtGallery.css"
import ArtGalleryArtworks from "./ArtGalleryArtworks"
import ArtGalleryIllustrations from "./ArtGalleryIllustrations"
import { useState, useEffect, forwardRef, useReducer } from "react"
import { ImCircleLeft, ImCircleRight, ImCross } from "react-icons/im"

// Store all ArtAssets from folder images
function importAll(r) {
  let assets = []
  r.keys().forEach((item, index) => {
    assets[index] = r(item)
  })
  return assets
}

const illustrations = importAll(require.context("../assets/Illustrations", false, /\.(png|jpe?g|svg)$/))

// Reducer settings
const ACTIONS = {
  ILLUSTRATIONS: "Illustrations"
}

const reducer = (state, action) => {
  switch (action.type){
    case ACTIONS.ILLUSTRATIONS:
      return {
        artAssets: illustrations,
        notificationContent: "Illustrations"
      }
    default:
      return state
  }
}

const defaultState = {
  artAssets: illustrations,
  notificationContent: "Illustrations"
}

/**************************************************/
// Component start
const ArtGallery = forwardRef ((props, ref) => {
  const [show, setShow] = useState(false)
  const [popImg, setPopImg] = useState()
  const [imageIndex, setImageIndex] = useState()
  const [state, dispatch] = useReducer(reducer, defaultState)

  // Btns for imgs change on page
  const handleClick = (type) => {
    return () => {
      dispatch({ type: type })
    }
  }

  // Open popUpImg
  const popUpImage = (image, oneImageIndex) => {
    setPopImg(image)
    setShow(true)
    setImageIndex(oneImageIndex)
  }

  // Close popUpImg
  const closePopImage = () => {
    setShow(false)
  }

  // Move with popUpImg - left
  const previousImage = () => {
    let newIndex = imageIndex - 1

    if (newIndex < 0) {
      newIndex = illustrations.length - 1
    }
    
    setPopImg(illustrations[newIndex])
    setImageIndex(newIndex)
  }

  // Move with popUpImg - right
  const nextImage = () => {
    let newIndex = imageIndex + 1

    if (newIndex > illustrations.length - 1){
      newIndex = 0
    }

    setPopImg(illustrations[newIndex])
    setImageIndex(newIndex)
  }

  // When popUpImg is open, you can move and close them
  useEffect( () => {
      const handleKeyDown = (e) => {
        if (e.key === "Escape") {
            setShow(false)
        } else if (e.key === "ArrowLeft") {
            previousImage()
        } else if (e.key === "ArrowRight") {
            nextImage()
        }
      }

    document.addEventListener("keydown", handleKeyDown)

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [imageIndex])

  return (
    <section ref={ref} className="art-gallery">
        <div className={show ? "show-pop-image" : "hide-pop-image"}>

            <img src={popImg} alt="" />

            <div className="icons-container">
                <ImCircleLeft className="icon arrow-left" onClick={previousImage} />
                <ImCircleRight className="icon arrow-right" onClick={nextImage} />
                <ImCross className="icon cross" onClick={closePopImage} />
            </div>
        </div>

        <div className="btn-img-category">
          <button onClick={handleClick}>Artworks</button>
          <button onClick={handleClick(ACTIONS.ILLUSTRATIONS)}>Illustrations</button>
          <button onClick={handleClick}>Animations</button>
        </div>

        <div className="images-notification">
          <h1>{state.notificationContent}</h1>
        </div>
        
      {/* <ArtGalleryArtworks show={show} popImg={popImg} nextImgae={nextImage} peviousImage={previousImage} closePopImage={closePopImage}/> */}
      
      <ArtGalleryIllustrations />

      <div className="all-images">
        {state.artAssets.map((oneImage, imageIndex) => {

            return <div className="one-image" key={imageIndex}>
              <img 
                className={show ? "clicked" : ""} 
                src={state.artAssets[imageIndex]} 
                alt="Vympy Art" 
                onClick={() => popUpImage(state.artAssets[imageIndex], imageIndex)} 
              />
            </div>
        })}
      </div>
    </section>
  )
})

export default ArtGallery