import axios from "axios";

export default {
  // Gets all books
  getBands: () => {
    return axios.get("/api/bands");
  },
  // Deletes the book with the given id
  deleteBand: (id) => {
    return axios.delete("/api/band/" + id);
  },
  getRestaurant: () => {
    return axios.get("/api/restaurants");
  },
  deleteRestaurant: (id) => {
    return axios.get("/api/restaurant/" + id);
  }
};
