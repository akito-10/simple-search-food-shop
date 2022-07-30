/* eslint-disable @typescript-eslint/naming-convention */
import axios from "axios";

const axiosInstance = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "http://webservice.recruit.co.jp/hotpepper/"
      : "http://localhost:8000/",
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
  },
});

export { axiosInstance as axios };
