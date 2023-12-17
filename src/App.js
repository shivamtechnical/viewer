import React, { useState } from "react";
import { data } from "./Data";
import "./index.css";

/**
 *  React project for displaying a collection of images with the ability to select and view an individual image.
 *  The application features an image slider that allows users to click on thumbnails to view the selected image.
 *  State management is handled using React hooks, specifically the useState hook.
 * @returns
 *  The selected image is displayed in a container with class "image".
 *  The image slides are displayed in a container with class "slides", each image having an onClick event.
 */
function App() {
  const [selectImage, setSelectImage] = useState(null);

  const handleImageClick = (imageUrl) => {
    setSelectImage(imageUrl);
  };
  return (
    <>
      <div className="iii">
        <div className="image">
          <img src={selectImage} alt="Selected" />
        </div>

        <div className="slides">
          {data.map((item) => (
            <img
              className="img"
              key={item.id}
              src={item.img}
              alt="/"
              onClick={() => handleImageClick(item.img)}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
