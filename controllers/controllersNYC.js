const fs = require("fs");

const restaurants = JSON.parse(
  fs.readFileSync(`${__dirname}/../data/restaurantsNYC.json`)
);

exports.getAllRestaurants = (req, res) => {
  console.log(req.requestTime);
  res.status(200).json(restaurants);
};

// const hotels = JSON.parse(
//   fs.readFileSync(`${__dirname}/../data/hotelsTO.json`)
// );

// console.log(hotels);

// exports.getAllHotels = (req, res) => {
//   console.log(req.requestTime);
//   res.status(200).json(hotels);
// };
