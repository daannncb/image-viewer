import "./ThumbnailImages.css";

export default function ThumbnailImages({ url, alt, thumbClick }) {
  return (
    <>
      <img
        src={url}
        alt={alt}
        className="thumbnail-images"
        onClick={thumbClick}
      />
    </>
  );
}
