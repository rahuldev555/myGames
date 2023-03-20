import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "3dadaa84f89547f0bf9830e7516e40bb",
  },
});
