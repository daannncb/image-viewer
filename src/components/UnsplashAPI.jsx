import { useState, useEffect } from "react";

export default function APIFetch(query) {
  const [imageData, setImageData] = useState([]);
  const accessKey = import.meta.env.VITE_UNSPLASH_API_ACCESS_KEY;

  useEffect(() => {
    async function getImages() {
      const res = await fetch(
        `https://api.unsplash.com/search/photos?query=${query}&client_id=${accessKey}`
      );
      const imageData = await res.json();
      setImageData(imageData);
    }
    getImages();
  }, [accessKey, query]);
  console.log(imageData);
}

// $ curl https://api.unsplash.com/search/photos?query=minimal █

//TODO::::::::::::::::::::: the below is for when query is sorted; just going to test with some random image(s)

// export default function APIFetch(query) {
//   const [imageData, setImageData] = useState([]);
//   const accessKey = import.meta.env.VITE_UNSPLASH_API_ACCESS_KEY;

//   useEffect(() => {
//     async function getImages() {
//       const res = await fetch(
//         `https://api.unsplash.com/search/photos?query=${query}&client_id=${accessKey}`
//       );
//       const imageData = await res.json();
//       setImageData(imageData);
//     }
//     getImages();
//   }, [accessKey, query]);
//   console.log(imageData);
// }
