import ThumbnailImages from "./ThumbnailImages";
import "./styling/ThumbnailContainer.css";

export default function ThumbnailContainer({ imageData, onClick, onKeyDown }) {
  return (
    <>
      <section className="thumbnail-container">
        {imageData.map((image) => {
          return (
            <ThumbnailImages
              key={image.id}
              url={image.url}
              alt={image.alt}
              onClick={() => onClick(image)}
              onKeyDown={(press) => onKeyDown(press, image)}
            />
          );
        })}
      </section>
    </>
  );
}
