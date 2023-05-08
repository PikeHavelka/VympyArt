import "./TheHeader.css"
import penguinLogoDark from "../assets/icons/penguinBlack.png"
import penguinLogoLight from "../assets/icons/penguireversn.png"
import iconsData from "../iconsData"
import NavBar from "./NavigationBar"
import TheTheme from "./TheTheme"
import { useState } from "react"

function TheHeader({ scrollToGallery, scrollToContact, scrollToCommission }) {
  const [showThemeIcon, setShowThemeIcon] = useState(false)

  return (
    <header>
      <TheTheme setShowThemeIcon={setShowThemeIcon} showThemeIcon={showThemeIcon}/>

      <NavBar scrollToGallery={scrollToGallery} scrollToContact={scrollToContact} scrollToCommission={scrollToCommission} />

      <div className="penguin-logo">
        {showThemeIcon ? <img src={penguinLogoLight} alt="" /> : <img src={penguinLogoDark} alt="" /> }
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