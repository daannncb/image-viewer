import { useState, useEffect } from "react";

export default function useAPIFetch() {
  const [imageData, setImageData] = useState([]); //maybe this goes in another component? like this one gets the json, another puts it into the thumbs/larger ones?
  // this function gets the data from the API and renders it onto the page
  // for the stretch goal, it may be an idea to have the API call in a separate component, but I'm not sure what the reason for that would be

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
