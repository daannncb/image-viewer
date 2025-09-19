import LargeImages from "./LargeImages";

export default function LargeImage({ selectedImg }) {
  return (
    <div className="large-image-container">
      {selectedImg ? (
        <LargeImages selectedImg={selectedImg} />
      ) : (
        <div>Select an Image {selectedImg}</div>
      )}
    </div>
  );
}
