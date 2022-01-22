import { ApiEndpoints } from "./constants/apiEndPoints";
import { HttpMethod } from "./helpers/http/httpMethods";

const ROUTE_PATH = "/";
const API_VERSION = { jsonrpc: "2.0" };
export const getRankedPost = (params) => {
  return HttpMethod.post(ROUTE_PATH, {
    ...API_VERSION,
    method: ApiEndpoints.GET_RANKED_POST,
    ...params,
  });
};
export const getAccountPost = (params) => {
  return HttpMethod.post(ROUTE_PATH, {
    ...API_VERSION,
    method: ApiEndpoints.GET_ACCOUNT_POST,
    ...params,
  });
};
export const getFollower = (params) => {
  return HttpMethod.post(ROUTE_PATH, {
    ...API_VERSION,
    method: ApiEndpoints.GET_FOLLOWERS,
    ...params,
  });
};
export const getFollowing = (params) => {
  return HttpMethod.post(ROUTE_PATH, {
    ...API_VERSION,
    method: ApiEndpoints.GET_FOLLOWING,
    ...params,
  });
};
export const getAccountInfo = (params) => {
  return HttpMethod.post(ROUTE_PATH, {
    ...API_VERSION,
    method: ApiEndpoints.GET_ACCOUNT_INFO,
    ...params,
  });
};
export const getGlobalProerties = (params) => {
  return HttpMethod.post(ROUTE_PATH, {
    ...API_VERSION,
    method: ApiEndpoints.GET_GLOBAL_PROPERTIES,
    ...params,
  });
};
