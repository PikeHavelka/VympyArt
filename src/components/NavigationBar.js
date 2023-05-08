import "./NavigationBar.css"

function NavigationBar({ scrollToGallery, scrollToContact, scrollToCommission }) {

  return (
    <nav>
      <ul>
        <li>
          <button onClick={(e) => scrollToGallery(e)}>
            Gallery
          </button>
        </li>

        <li>
          <button onClick={(e) => scrollToCommission(e)}>
            Commission
          </button>
        </li>

        <li>
          <button onClick={(e) => scrollToContact(e)}>
            Contact
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default NavigationBar