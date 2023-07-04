import Instafeed from "instafeed.js";

export const feed = new Instafeed({
  get: "user",
  target: "instafeed-container",
  resolution: "low_resolution",
  accessToken: process.env.REACT_APP_INSTAGRAM,
  sortBy: "most-recent",
  limit: 6,
});
