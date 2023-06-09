import "./TheTheme.css"
import { useEffect } from "react"
import { TiAdjustBrightness, TiAdjustContrast } from "react-icons/ti"

function TheTheme({ setShowThemeIcon, showThemeIcon }) {

  const lightTheme = () => {
    document.querySelector("body").setAttribute("data-theme", "light")
    localStorage.setItem("data-theme", "light")
    setShowThemeIcon(false)
  }

  const darkTheme = () => {
    document.querySelector("body").setAttribute("data-theme", "dark")
    localStorage.setItem("data-theme", "dark")
    setShowThemeIcon(true)
  }
  
  /* Remember theme */
  useEffect(() => {
    if (localStorage.getItem("data-theme") === "dark") {
      document.querySelector("body").setAttribute("data-theme", "dark")
      setShowThemeIcon(true)
    } else {
      document.querySelector("body").setAttribute("data-theme", "light")
      setShowThemeIcon(false)
    }
  }, [setShowThemeIcon])


  return (
    <div className="theme-btns" title="Change Theme">
      <button onClick={lightTheme} className={showThemeIcon ? "" : "hide-btn"}>
        <TiAdjustBrightness className="theme-icon sun-icon" />
      </button>

      <button onClick={darkTheme} className={showThemeIcon ? "hide-btn" : ""}>
        <TiAdjustContrast className="theme-icon moon-icon" />
      </button>
    </div>
  )
}

export default TheTheme