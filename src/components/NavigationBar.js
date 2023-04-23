import "./NavigationBar.css"

function NavigationBar({ scrollToGallery, scrollToContact }) {

  return (
    <nav>
      <ul>
        <li>
          <a href="" onClick={(e) => scrollToGallery(e)}>
            Gallery
          </a>
        </li>

        <li>
          <a href="">
            Commission
          </a>
        </li>

        <li>
          <a href="" onClick={(e) => scrollToContact(e)}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default NavigationBar