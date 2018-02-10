import axios from "axios";

export default {
  // Gets all bands
  getConcerts: () => {
    return axios.get("/api/concerts");
  },
  // Deletes the concert with the given id
  deleteConcert: (id) => {
    return axios.delete("/api/concert/" + id);
  },
  // Gets all restaurants
  getRestaurants: () => {
    return axios.get("/api/restaurants");
  },
  // Deletes the restaurant with the given id
  deleteRestaurant: (id) => {
    return axios.get("/api/restaurant/" + id);
  }
};
