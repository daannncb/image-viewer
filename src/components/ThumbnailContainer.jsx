import useAPIFetch from "../lib/useAPIFetch";
import ThumbnailImages from "./ThumbnailImages";
import "./ThumbnailContainer.css";
import LargeImageContainer from "./LargeImageContainer";

//thumbnail viewer: i want a section of images; in here, I map the images from the api
export default function ThumbnailContainer() {
  const { imageData } = useAPIFetch();
  // const { imageIndex } = imageIndex();

  // const thumbClick = () => {
  //   setImageIndex(item.id);
  // };
  return (
    <>
      <section className="thumbnail-container">
        {imageData.map((item) => {
          return (
            <ThumbnailImages
              key={item.id}
              url={item.url}
              alt={item.alt}
              thumbClick=""
            />
          );
        })}
      </section>
    </>
  );
}
