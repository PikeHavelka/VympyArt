import "./ArtGalleryAnimations.css"

function ArtGalleryAnimations(props) {
  return (
    <div className="animations">
      <h3>Videos</h3>

      <div className="video-animations">
        {props.animationsVideos.map((oneAnimation, indexAnimation) => {

          return (
            <div className="one-video-animation" key={indexAnimation}>
              <video
                src={oneAnimation}
                controls
                preload="metadata">
              </video>
            </div>
          )
        })}
      </div>

      <h3>Gifs</h3>
      <div className="image-animations">
        {props.animationsImages.map((oneAnimation, indexAnimation) => {

          return (
            <div className="one-image-animation" key={indexAnimation}>
              <img
                className={props.show ? "clicked" : ""}
                src={oneAnimation}
                alt="Some Artist Animation"
                onClick={() => props.popUpImage(oneAnimation, indexAnimation)}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ArtGalleryAnimations