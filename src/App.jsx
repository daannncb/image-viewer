import "./App.css";
import APIFetch from "./components/APIFetch";
import ThumbnailImages from "./components/ThumbnailImages";
import ThumbnailContainer from "./components/ThumbnailContainer";

export default function App() {
  return (
    <>
      <h1>Gallery</h1>
      <>
        {/* <APIFetch /> */}
        <ThumbnailContainer />
      </>
    </>
  );
}

//render some images to be selected and blown up

//:::::::::::::::::::::::::::: Manny Code Notes

//TODO :::::::::::::: BUILD A WIREFRAME :::::::::::::::::

//TODOstate to store the image data
//TODOstate to store the index value; each image has an index number, assign the number to the state to tell it which to render fullscreen

//TODOeffects:
//TODOfetch()
//TODOupdate imageData state to store fetched data

//TODO function to control which index we are clicking on

//TODOstate const indexState = [index, setIndex] = indexState(*number*)
//TODO function handleSwitchImage(index){
//TODO     setIndex(index)
//TODO }
