import "./NavigationBar.css"

function NavigationBar({ scrollToGallery}) {

  return (
    <nav>
      <ul>
        <li>
          <a href="" onClick={(e) => scrollToGallery(e)}>Gallery</a>
        </li>

        <li>
          <a href="">Contact</a>
        </li>

        <li>
          <a href="">NEVÍM</a>
        </li>
      </ul>
    </nav>
  )
}

export default NavigationBar