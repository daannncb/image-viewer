import "./styling/ThumbnailImages.css";

export default function ThumbnailImages({ url, alt, onClick, onKeyDown }) {
  return (
    <>
      <img
        src={url}
        alt={alt}
        className="thumbnail-images"
        onClick={onClick}
        style={{ cursor: "pointer" }}
        tabIndex="0"
        onKeyDown={onKeyDown}
        role="button"
      />
    </>
  );
}
