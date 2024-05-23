import originalAxios from "axios";

const axios = originalAxios.create({
  baseURL: "http://localhost:8080",
});

export default axios;
