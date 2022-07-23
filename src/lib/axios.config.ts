/* eslint-disable @typescript-eslint/naming-convention */
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://webservice.recruit.co.jp/hotpepper/",
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
  },
});

export { axiosInstance as axios };
