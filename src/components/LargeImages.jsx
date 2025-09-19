import "./styling/LargeImages.css";

export default function LargeImages({ selectedImg }) {
  return (
    <img src={selectedImg.url} alt={selectedImg.alt} className="large-image" />
  );
}
