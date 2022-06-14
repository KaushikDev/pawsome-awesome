import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { dogBreedsApi } from "../config/api";
import "../styles/menu.css";

const Menu = (props) => {
  const [dogBreedsData, setDogBreedsData] = useState([]);
  const [dogInfoToDisplay, setDogInfoToDisplay] = useState("Go back son @@");

  const {fetchBreedInfo, setBreedImage} = props;

  useEffect(() => {
    axios
      .get(dogBreedsApi)
      .then((res) => setDogBreedsData(res.data))
      .catch((err) =>
        console.log("There was an error fetching the response from api!!")
      );
  }, []);

  console.log("The Dog Breeds Data is : ", dogBreedsData);

 

  const displayDogBreeds = () => {
    const data =
      dogBreedsData &&
      dogBreedsData.map((breed, index) => (
        <div key={index} className="breed-wrapper" onClick={()=> {fetchBreedInfo(breed.name); setBreedImage(breed.image.url)}}>
          <img src={`${breed.image.url}`} alt="" className="breed-image" />
          <p className="breed-name">{breed.name}</p>
        </div>
      ));
    return data || "There is no data!";
  };

  return <div className="flex flex-row lg:flex-col h-24 lg:h-auto overflow-auto">{displayDogBreeds()}</div>;
};

export default Menu;
