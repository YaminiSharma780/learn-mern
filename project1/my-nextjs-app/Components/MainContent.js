import axios from "axios";
import { useEffect, useState } from "react";
const MainContent = (props) => {
  const loremUrl = "https://picsum.photos/v2/list";
  const [images, setImages] = useState([]);
  useEffect(() => {
    gettyImages();
  }, []);

  const gettyImages = async () => {
    try {
      const apiRes = await axios.get(loremUrl);
      const apiData = apiRes.data;
      console.log("Url Response = ", apiData);
      setImages(apiData);
      console.log("Images = ", images);
    } catch (error) {
      console.error("Error from lorem api = ", error);
    }
  };
  return (
    <div>
      <p>{props.name}</p>
      <div>
        <button
          on
          onClick={gettyImages}
          className="bg-blue-950 px-5 py-2 rounded mt-5 text-white font-extrabold"
        >
          Get Images
        </button>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {images.map((i, elem) => {
            console.log(`Images inside Map Fun = ${elem}`);
            return (
              <img
                key={i}
                src={elem.download_url}
                width={250}
                height={150}
                className="m-10 rounded inline-block"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default MainContent;
