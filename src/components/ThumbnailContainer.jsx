import ThumbnailImages from "./ThumbnailImages";
import "./styling/ThumbnailContainer.css";

export default function ThumbnailContainer({ imageData, onClick }) {
  return (
    <>
      <section className="thumbnail-container">
        {imageData.map((item) => {
          return (
            <ThumbnailImages
              key={item.id}
              url={item.url}
              alt={item.alt}
              onClick={() => onClick(item)}
            />
          );
        })}
      </section>
    </>
  );
}
