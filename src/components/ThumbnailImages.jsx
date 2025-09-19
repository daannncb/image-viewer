import "./styling/ThumbnailImages.css";

export default function ThumbnailImages({ url, alt, onClick }) {
  return (
    <>
      <img
        src={url}
        alt={alt}
        className="thumbnail-images"
        onClick={onClick}
        style={{ cursor: "pointer" }}
      />
    </>
  );
}
