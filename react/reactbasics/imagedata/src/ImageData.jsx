const ImageData = (props) => {
    return (
      <>
        <ul>
          {props.images.map((image) => (
            <li>
              <h1>{image.name}</h1>
            
              <img src={image.thumbnail} alt={image.name}/>
            </li>
          ))}
        </ul>
      </>
    );
  };
  
  export default ImageData;