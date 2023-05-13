import "./ArtGallery.css"
import ArtGalleryArtworks from "./ArtGalleryArtworks"
import ArtGalleryIllustrations from "./ArtGalleryIllustrations"
import ArtGalleryAnimations from "./ArtGalleryAnimations"
import { ImCircleLeft, ImCircleRight, ImCross } from "react-icons/im"
import { useState, useEffect, forwardRef, useReducer, useRef, useCallback } from "react"

/* Store Assets from folders */
function importAll(r) {
  let assets = []
  r.keys().forEach((item, index) => {
    assets[index] = r(item)
  })
  return assets
}

/* Illustrations folder looking for */
const illustrationsVideos = importAll(require.context("../assets/Illustrations", false, /\.(mp4|wmv|mkv|web)$/))
const illustrationsImages = importAll(require.context("../assets/Illustrations", false, /\.(png|jpe?g|svg|gif)$/))

/* Artworks folder looking for */
const artworksVideos = importAll(require.context("../assets/3D_Artworks", false, /\.(mp4|wmv|mkv|web)$/))
const artworksImages = importAll(require.context("../assets/3D_Artworks", false, /\.(png|jpe?g|svg|gif)$/))

/* Animations folder looking for */
const animationsVideos = importAll(require.context("../assets/Animations", false, /\.(mp4|wmv|mkv|web)$/))
const animationsImages = importAll(require.context("../assets/Animations", false, /\.(png|jpe?g|svg|gif)$/))

/**************************************************/
/* Component start */
const ArtGallery = forwardRef ((props, ref) => {
  const [show, setShow] = useState(false)
  const [popImg, setPopImg] = useState()
  const [imageIndex, setImageIndex] = useState()
  const refSection = useRef()

  /* Reducer settings */
  const ACTIONS = {
    ILLUSTRATIONS: "Illustrations",
    ARTWORKS: "3D Artworks",
    ANIMATIONS: "Animations"
  }

  const defaultState = {
    notifications: ""
  }

  const reducer = (state, action) => {
    switch (action.type) {
      case ACTIONS.ILLUSTRATIONS:
        return {
          notifications: ACTIONS.ILLUSTRATIONS
        }
      case ACTIONS.ARTWORKS:
        return {
          notifications: ACTIONS.ARTWORKS
        }
      case ACTIONS.ANIMATIONS:
        return {
          notifications: ACTIONS.ANIMATIONS
        }
      default:
        return state
    }
  }

  const [state, dispatch] = useReducer(reducer, defaultState)
  
  const handleComponent = (componentType) => {
    return () => {
      dispatch({ type: componentType })
    }
  }

  /* Open popUpImg */
  const popUpImage = (image, oneImageIndex) => {
    setPopImg(image)
    setShow(true)
    setImageIndex(oneImageIndex)
  }

  /* Close popUpImg */
  const closePopImage = () => {
    setShow(false)
  }

  /* Move with popUpImg - left */
  const previousImage = useCallback(() => {
    let newIndex = imageIndex - 1

    if (state.notifications === ACTIONS.ARTWORKS) {
      if (newIndex < 0) {
        newIndex = artworksImages.length - 1
      }

      setPopImg(artworksImages[newIndex])
      setImageIndex(newIndex)
    }

    if (state.notifications === ACTIONS.ILLUSTRATIONS) {
      if (newIndex < 0) {
        newIndex = illustrationsImages.length - 1
      }

      setPopImg(illustrationsImages[newIndex])
      setImageIndex(newIndex)
    }

    if (state.notifications === ACTIONS.ANIMATIONS) {
      if (newIndex < 0) {
        newIndex = animationsImages.length - 1
      }

      setPopImg(animationsImages[newIndex])
      setImageIndex(newIndex)
    }
  }, [imageIndex, ACTIONS.ILLUSTRATIONS, ACTIONS.ARTWORKS, ACTIONS.ANIMATIONS, state.notifications])

  /* Move with popUpImg - right */
  const nextImage = useCallback(() => {
    let newIndex = imageIndex + 1

    if (state.notifications === ACTIONS.ARTWORKS) {
      if (newIndex > artworksImages.length - 1){
        newIndex = 0
      }

      setPopImg(artworksImages[newIndex])
      setImageIndex(newIndex)
    }

    if (state.notifications === ACTIONS.ILLUSTRATIONS) {
      if (newIndex > illustrationsImages.length - 1) {
        newIndex = 0
      }

      setPopImg(illustrationsImages[newIndex])
      setImageIndex(newIndex)
    }

    if (state.notifications === ACTIONS.ANIMATIONS) {
      if (newIndex > animationsImages.length - 1) {
        newIndex = 0
      }

      setPopImg(animationsImages[newIndex])
      setImageIndex(newIndex)
    }
  }, [imageIndex, ACTIONS.ILLUSTRATIONS, ACTIONS.ARTWORKS, ACTIONS.ANIMATIONS, state.notifications])

  /* When popUpImg is open, you can move and close them */
  useEffect(() => {
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
  }, [imageIndex, previousImage, nextImage])

  /* Scroll down to section when click */
  const goToSection = () => {
    window.scrollTo({
      top: refSection.current.offsetTop,
      behavior: "smooth"
    })
  }
  
  return (
    <section ref={ref} className="art-gallery">
      <div className="btn-category">
        <button onClick={() =>
          {handleComponent(ACTIONS.ILLUSTRATIONS)();
          goToSection()}}>
            {ACTIONS.ILLUSTRATIONS}
        </button>

        <button onClick={() => {
          handleComponent(ACTIONS.ARTWORKS)();
          goToSection()}}>
            {ACTIONS.ARTWORKS}
        </button>

        <button onClick={() =>
          {handleComponent(ACTIONS.ANIMATIONS)();
          goToSection()}}>
            {ACTIONS.ANIMATIONS}
        </button>
      </div>

      <div className={show ? "show-pop-image" : "hide-pop-image"}>

        <img src={popImg} alt="" />

        <div className="icons-container">
          <ImCircleLeft className="icon arrow-left" onClick={previousImage} />
          <ImCircleRight className="icon arrow-right" onClick={nextImage} />
          <ImCross className="icon cross" onClick={closePopImage} />
        </div>
      </div>

      <div className="notification" ref={refSection}>
        <h1>{state.notifications}</h1>
      </div>

      <div className="sections">
        {state.notifications === ACTIONS.ILLUSTRATIONS && <ArtGalleryIllustrations illustrationsVideos={illustrationsVideos} illustrationsImages={illustrationsImages} popUpImage={popUpImage} />}

        {state.notifications === ACTIONS.ARTWORKS && <ArtGalleryArtworks artworksVideos={artworksVideos} artworksImages={artworksImages} popUpImage={popUpImage} />}

        {state.notifications === ACTIONS.ANIMATIONS && <ArtGalleryAnimations animationsVideos={animationsVideos} animationsImages={animationsImages} popUpImage={popUpImage} />}
      </div>
    </section>
  )
})

export default ArtGallery