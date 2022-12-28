// instafeed
// import config from "../src/config";
// const accessToken = config.INSTAGRAM_ACCESS_KEY;
var userFeed = new Instafeed({
  get: "user",
  target: "instafeed-container",
  resolution: "low_resolution",
  accessToken:
    IGQVJYMldwaFdMekRVR29KVGZA0ZAk5XWUpqNHAzNUE2d3ctOGhKWXBoODh2Wks3aXEtbng4UFBQcE9TVUliSEE2X3otMkRnQ1RPQlV5cmFzem13eDVJOVR1bHRQWHZA6cnFZAS1ZAJLUJVVkZAqMWl5V3BKQQZDZD,
  sortBy: "most-recent",
  limit: 6,
});
userFeed.run();
