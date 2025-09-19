import useAPIFetch from "../lib/useAPIFetch";
import LargeImages from "./LargeImages";

export default function LargeImage() {
  const { imageData } = useAPIFetch();
  return (
    <>
      <section className="thumbnail-container">
        {imageData.map((item) => {
          return <LargeImages key={item.id} url={item.url} alt={item.alt} />;
        })}
      </section>
    </>
  );
}

//this function needs to "listen" to a state which gets a value from the thumbnail images, which provides the index of that image, and renders it as a background image
