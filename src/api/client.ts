import axios from "axios";

const apiBaseUrl = "https://api.opensea.io/api/v1/";

const client = axios.create({
  baseURL: apiBaseUrl,
});

export default client;
