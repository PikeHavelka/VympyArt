import "./ArtGalleryIllustrations.css"

function ArtGalleryIllustrations(props) {
  return (
    <div className="illustrations">
      <div className="video-illustrations">
        {props.illustrationsVideos.map((oneIllustrations, indexIllustrations) => {

          return (
            <div className="one-video-illustration" key={indexIllustrations}>
              <video
                src={oneIllustrations}
                controls
                preload="metadata">
              </video>
            </div>
          )
        })}
      </div>

      <div className="image-illustrations">
        {props.illustrationsImages.map((oneIllustration, illustrationIndex) => {

          return <div className="one-image-illustration" key={illustrationIndex}>
            <img
              className={props.show ? "clicked" : ""}
              src={oneIllustration}
              alt="Some Artist Illustration"
              onClick={() => props.popUpImage(oneIllustration, illustrationIndex)}
            />
          </div>
        })}
      </div>
    </div>
  )
}

export default ArtGalleryIllustrations