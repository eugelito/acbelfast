const accessToken = process.env.INSTAGRAM_ACCESS_KEY;
var userFeed = new Instafeed({
  get: "user",
  target: "instafeed-container",
  resolution: "low_resolution",
  accessToken:
    "IGQVJXdG90U0V5U0l0RnliLXJ0UkhoT09jV3RXMkRXdXpvTFdlbWN1T0dTOUJSQ1g4TjlDQ2t0UDE3bWZAOSGJZAWlAtZAzlBd3Ewd21mRHFKT19ieldyLWNJdmN1d3hnN0lRZAkQ3TDJZANGl5ZAGlkOEFXWAZDZD",
  sortBy: "most-recent",
  limit: 6,
});
userFeed.run();
