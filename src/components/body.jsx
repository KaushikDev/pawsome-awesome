import React, { Fragment, useState } from "react";
import Menu from "../components/menu";
import "../styles/body.css";
import { breedInfoApi, breedImageApi } from "../config/api";
import axios from "axios";

const Body = () => {
  const [fetchedBreedInfo, setFetchedBreedInfo] = useState({
    name: "Kasper",
    height: 50,
    behaviour: "friendly",
    weight: 20,
    group: "sporting",
    bredFor: "retrieval",
  });
  const [breedImage, setBreedImage] = useState("/")
  const fetchBreedInfo = (name) => {
    axios
      .get(`${breedInfoApi}${name}`)
      .then((res) =>
        setFetchedBreedInfo({
          name: res.data[0].name,
          height: res.data[0].height.metric,
          weight: res.data[0].weight.metric,
          group: res.data[0].breed_group,
          behaviour: res.data[0].temperament,
          bredFor: res.data[0].bred_for,
         })
      )
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex flex-col lg:flex-row border h-screen">
      <Menu fetchBreedInfo={fetchBreedInfo} setBreedImage={setBreedImage}/>
      <div style={{backgroundImage: `url(${breedImage})`}} className="flex flex-col items-center bg-no-repeat bg-cover bg-center h-full h-max-screen w-full w-max-screen rounded-lg m-8" >
        <h1>{fetchedBreedInfo.name}</h1>
        <p>{fetchedBreedInfo.height}</p>
        <p>{fetchedBreedInfo.weight}</p>
        <p>{fetchedBreedInfo.group}</p>
        <p>{fetchedBreedInfo.behaviour}</p>
        <p>{fetchedBreedInfo.bredFor}</p>
      </div>
    </div>
  );
};

export default Body;
