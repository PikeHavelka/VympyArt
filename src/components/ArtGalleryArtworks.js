import "./ArtGalleryArtworks.css"

function ArtGalleryArtworks(props) {

  return (
    <div className="artworks">
      <h3>Videos</h3>
      
      <div className="video-artworks">
        {props.artworksVideos.map( (oneArtwork, indexArtwork) => {

          return (
            <div className="one-video-artwork" key={indexArtwork}>
              <video 
                src={oneArtwork}
                controls
                preload="metadata">
              </video>
            </div>
          )
        })}
      </div>

      <h3>Images</h3>
      <div className="image-artworks">
        {props.artworksImages.map((oneArtwork, indexArtwork) => {

          return (
            <div className="one-image-artwork" key={indexArtwork}>
              <img
                className={props.show ? "clicked" : ""} 
                src={oneArtwork}
                alt="Some Artist Artwork"
                onClick={() => props.popUpImage(oneArtwork, indexArtwork)}
              /> 
            </div>
          )
        })}
      </div>
  </div>
  )
}

export default ArtGalleryArtworks