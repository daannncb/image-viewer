import ThumbnailContainer from "./ThumbnailContainer";
import useAPIFetch from "../lib/useAPIFetch";
import LargeImageContainer from "./LargeImageContainer";
import { useState } from "react";

export default function Gallery() {
  const { imageData } = useAPIFetch();
  const [selectedImg, setSelectedImg] = useState([null]);

  return (
    <>
      <section>
        <div>
          <ThumbnailContainer imageData={imageData} onClick={setSelectedImg} />
        </div>
      </section>
      <div>
        <LargeImageContainer selectedImg={selectedImg} />
      </div>
    </>
  );
}
