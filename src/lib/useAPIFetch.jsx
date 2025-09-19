import { useState, useEffect } from "react";

export default function useAPIFetch() {
  const [imageData, setImageData] = useState([]);
  useEffect(() => {
    async function getImages() {
      const res = await fetch(import.meta.env.VITE_FROGJSON_API);
      const imageData = await res.json();
      setImageData(imageData);
      console.log({ imageData });
    }
    getImages();
  }, []);
  return { imageData };
}

//This is a custom hook. I must use it in a component.
//this hook gets imageData from the frog section:
//import without curly brackets to test
//eventually, I'll add, into the component that has thumbnail images in,
// something like onClick{()=> setImageData[0]}, except with a loop (map?)

//the key thing with the "return { imageData }"" part is that if
//i want to destructure this (which I do, because i need parts of the array of objects that it is), then I need to name it.
//if i put imageData without curlies, then I'm not naming it,
//and subsequently cannot then say "item.url" when i go to
//the map function (imageData.map((item)))

//add a prop named event listener to the accepted props in the section?
//define that function in the render step
//
