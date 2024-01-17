import './ImageList.css';
import ImageShow from "./ImageShow";

function ImageList({ images }) {
  
  const renderedImages = images.map((img) => {
    return <ImageShow image={img} key={img.id}/>
  })  
  return (
    <>
      <h3>Images List: </h3>
      {renderedImages.length === 0 ? (
        <div
          style={{
            color: "#555",
            backgroundColor: "#add8e6",
            fontSize: "16px",
            padding: "10px",
            borderRadius: "5px",
            marginTop: "20px",
            border: "1px solid #87ceeb",
            display: "inline-block",
          }}
        >
          No results yet, search for something!
        </div>
      ) : (
        <div className="image-list">{renderedImages}</div>
      )}
    </>
  );
}

export default ImageList;
