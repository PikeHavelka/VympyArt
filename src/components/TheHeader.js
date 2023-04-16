import "./TheHeader.css"
import penguinLogo from "../assets/icons/penguin.png"
import iconsData from "../iconsData"
import NavBar from "./NavigationBar"
import video from "../assets/videos/background-video.mp4"

function TheHeader({ scrollToGallery }) {
  return (
    <header>
      <NavBar scrollToGallery={scrollToGallery}/>

      {/* <video
        src={video} autoPlay loop muted playsInline
        className="background-video">
      </video> */}

      <div className="penguin-logo">
        <img src={penguinLogo} alt="" />
      </div>

      <div className="the-artist-name">
        <h1>Vympy</h1>
        <h2>Art</h2>
      </div>

      <div className="social-icons">
        {iconsData.map( (oneIcon) => {
          const {id, icon, link} = oneIcon

          return <div className="one-icon" key={id}>
            <a href={link}>
              <img src={icon} alt="The Artict social sites" />
            </a>
          </div>
        })}
      </div>

    </header>
  )
}

export default TheHeader