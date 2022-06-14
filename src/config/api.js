import axios from "axios";
const baseUrl = "https://api.thedogapi.com/v1";
// const apiKey = "d2bfcbac-a197-4bd2-b56f-3e81e29af01e";
const apiKey = "befb480e-e7ac-4a63-bb80-c3dedb2f4624";

export const dogBreedsApi = `${baseUrl}/breeds?${apiKey}`;
export const breedInfoApi = `${baseUrl}/breeds/search?q=`;
export const breedImageApi = `${baseUrl}/images/`;


