import ThumbnailContainer from "./ThumbnailContainer";
import useAPIFetch from "../lib/useAPIFetch";
import LargeImageContainer from "./LargeImageContainer";
import { useState } from "react";
import "./styling/Gallery.css";

export default function Gallery() {
  const { imageData } = useAPIFetch();
  const [selectedImg, setSelectedImg] = useState([null]);

  const handleKeyDown = (press, selectedImg) => {
    if (press.key === "Enter" || press.key === " ") {
      {
        setSelectedImg(selectedImg);
      }
    }
  };

  return (
    <main id="gallery">
      <ThumbnailContainer
        imageData={imageData}
        onClick={setSelectedImg}
        onKeyDown={handleKeyDown}
      />
      {/* onKeyDown requires extra handling because if keys are not specified, any key press whilst focusing the thumbnails will update the selectedImg state. Passing "press" to ThumbnailContainer tells the key press to listen for enter or space*/}
      <LargeImageContainer selectedImg={selectedImg} />
    </main>
  );
}
