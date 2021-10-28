import axios from "axios";

export const fscty = axios.create({
  baseURL: "https://api.github.com/search/",
});
