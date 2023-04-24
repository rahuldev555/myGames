import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "194c84e2bc104514bf94d289e0655bf6",
  },
});
class APIClient {
  endpoint;

  constructor(endpoint) {
    this.endpoint = endpoint;
  }

  getAll = (config) => {
    return axiosInstance.get(this.endpoint, config).then((res) => res.data);
  };

  // get = (id) => {
  //   return axiosInstance.get(this.endpoint + "/" + id).then((res) => res.data);
  // };
}

export default APIClient;
