import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "194c84e2bc104514bf94d289e0655bf6",
  },
});
