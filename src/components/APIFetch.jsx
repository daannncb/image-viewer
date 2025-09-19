import { useState, useEffect } from "react";

export default function APIFetch() {
  const [imageData, setImageData] = useState([]);

  useEffect(() => {
    async function getImages() {
      const res = await fetch(import.meta.env.VITE_FROGJSON_API);
      const imageData = await res.json();
      setImageData(imageData);
    }
    getImages();
  }, []);
  console.log(imageData);
}
