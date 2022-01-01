import axios from "axios";
import {
  handlePreRequest,
  handleRequestError,
  handleResponseSuccess,
  handleResponseError,
} from "./httpInterceptors";


const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_API_URL,
});

instance.interceptors.request.use(handlePreRequest, handleRequestError);
instance.interceptors.response.use(handleResponseSuccess, handleResponseError);

export default instance;
