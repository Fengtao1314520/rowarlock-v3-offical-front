import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:7788/api",
  // 超时毫秒
  timeout: 60000,
  withCredentials: false,
  headers: {
    "Content-Type": "application/json",
  },
  //表示用于解码响应的编码
  responseEncoding: "utf8",
  responseType: "json",
});
