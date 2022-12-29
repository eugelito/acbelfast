// instafeed
import { INSTAGRAM_ACCESS_KEY } from "../src/config";
const accessToken = INSTAGRAM_ACCESS_KEY;
var userFeed = new Instafeed({
  get: "user",
  target: "instafeed-container",
  resolution: "low_resolution",
  accessToken: accessToken,
  sortBy: "most-recent",
  limit: 6,
});
userFeed.run();