import axios from "axios";

const apiBaseUrl = process.env.REACT_APP_API_BASE;

const client = axios.create({
  baseURL: apiBaseUrl,
});

export default client;
