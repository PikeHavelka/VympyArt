import "./ArtGallery.css"
import { useState, useEffect, forwardRef, useReducer } from "react"
import { ImCircleLeft, ImCircleRight, ImCross } from "react-icons/im"

// Store all ArtImages from folder images
// function importAll(path) {
//   return Object.values(
//     require.context("../assets/images/" + path, false, /\.(png|jpe?g|svg)$/).keys()
//       .reduce((images, item) => {
//         images[item.replace("./", "")] = require("../assets/images/" + path + "/" + item)
//         return images
//       }, {})
//   )
// }

// const images = importAll("")
// const dwarfImages = importAll("dwarfs")
// const animalImages = importAll("animals")
// const girlsImages = importAll("girls")
// const otherImages = importAll("others")

function importAll(r) {
  let images = []
  r.keys().forEach((item, index) => {
    images[index] = r(item)
  })
  return images
}

const images = importAll(require.context("../assets/images", true, /\.(png|jpe?g|svg)$/))
/**************************************************/

const dwarfImages = importAll(require.context("../assets/images/dwarfs", false, /\.(png|jpe?g|svg)$/))

const animalImages = importAll(require.context("../assets/images/animals", false, /\.(png|jpe?g|svg)$/))

const girlsImages = importAll(require.context("../assets/images/girls", false, /\.(png|jpe?g|svg)$/))

const otherImages = importAll(require.context("../assets/images/others", false, /\.(png|jpe?g|svg)$/))


const ACTIONS = {
  DWARFS: "dwarfs",
  GIRLS: "girls",
  ANIMALS: "animals",
  OTHERS: "others",
  RESET: "reset"
}

const reducer = (state, action) => {
  switch (action.type){
    case ACTIONS.DWARFS:
      return {
        artImages: dwarfImages,
        notificationContent: "Dwarfs"
      }
    case ACTIONS.GIRLS:
      return {
        artImages: girlsImages,
        notificationContent: "Girls"
      }
    case ACTIONS.ANIMALS:
      return {
        artImages: animalImages,
        notificationContent: "Animals"
      }
    case ACTIONS.OTHERS:
      return {
        artImages: otherImages,
        notificationContent: "Others"
      }
    case ACTIONS.RESET:
      return {
        artImages: images,
        notificationContent: ""
      }
    default:
      return state
  }
}

const defaultState = {
  artImages: images,
  notificationContent: ""
}

/**************************************************/
const ArtGallery = forwardRef ((props, ref) => {
  const [show, setShow] = useState(false)
  const [popImg, setPopImg] = useState()
  const [movieIndex, setMovieIndex] = useState()
  const [state, dispatch] = useReducer(reducer, defaultState)

  const handleDwarfs = () => {
    dispatch({ type: ACTIONS.DWARFS })
  }

  const handleGirls = () => {
    dispatch({ type: ACTIONS.GIRLS})
  }

  const handleAnimals = () => {
    dispatch({ type: ACTIONS.ANIMALS})
  }

  const handleOthers = () => {
    dispatch({ type: ACTIONS.OTHERS})
  }
  const handleReset = () => {
    dispatch({ type: ACTIONS.RESET})
  }


  const popUpImage = (image, oneMovieIndex) => {
    setPopImg(image)
    setShow(true)
    setMovieIndex(oneMovieIndex)
  }

  // Close popUpImg
  const closePopImage = () => {
    setShow(false)
  }

  // Move with popUpImg - left
  const previousImage = () => {
    let newIndex = movieIndex - 1

    if (newIndex < 0) {
      newIndex = state.artImages.length - 1
    }
    
    setPopImg(state.artImages[newIndex])
    setMovieIndex(newIndex)
  }

  // Move with popUpImg - right
  const nextImage = () => {
    let newIndex = movieIndex + 1

    if (newIndex === state.artImages.length){
      newIndex = 0
    }

    setPopImg(state.artImages[newIndex])
    setMovieIndex(newIndex)
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
  }, [movieIndex])

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

        <div className="btn-img-style">
          <button onClick={handleGirls}>Girls</button>
          <button onClick={handleDwarfs}>Dwarfs</button>
          <button onClick={handleAnimals}>Animals</button>
          <button onClick={handleOthers}>Others</button>
          <button onClick={handleReset}>Reset</button>
        </div>

        <h1>{state.notificationContent}</h1>

      <div className="all-images">
        {state.artImages.map((oneMovie, movieIndex) => {

            return <div className="one-image" key={movieIndex}>
              <img 
                className={show ? "clicked" : ""} 
                src={state.artImages[movieIndex]} 
                alt="Vympy Art" 
                onClick={() => popUpImage(state.artImages[movieIndex], movieIndex)} 
              />
            </div>
        })}
      </div>
    </section>
  )
})

export default ArtGallery