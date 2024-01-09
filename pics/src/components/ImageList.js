import './ImageList.css';
import ImageShow from "./ImageShow";

function ImageList({ images }) {
  
  const renderedImages = images.map((img) => {
    return <ImageShow image={img} key={img.id}/>
  })  
  console.log("renderedImages", renderedImages);

  return <div className='image-list'>ImageList: { renderedImages }</div>;
}

export default ImageList;
