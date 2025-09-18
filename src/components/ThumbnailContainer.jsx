import { fetch } from "../lib/fetch";
import ThumbnailImages from "./ThumbnailImages";

//thumbnail viewer: i want a section of images; in here, I map the images from the api
export default function ThumbnailContainer() {
  return (
    <>
      {fetch.map((item) => {
        return <ThumbnailImages key={item.id} url={item.url} alt={item.alt} />;
      })}
    </>
  );
}
