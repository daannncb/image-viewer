import { useState, useEffect } from "react";
import ThumbnailImages from "./ThumbnailImages";

export default function APIFetch() {
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

  //TODO: Put all of this into map()  return (
  //   <img src={imageData.url} alt={imageData.alt} />
  // );
}

// const wrangledData = imageData.url
// remember in the recipes in dummyjson, the whole thing opens with { recipes } and some other collapsible things. If you specify "wrangledData" as imageData.whatever,
// the whatever part of that is the name of the data you want to get (or more specifically it's children).
// not wrangling data from the recipes would pull recipes, and the nonsense at hte bottom of the json.
