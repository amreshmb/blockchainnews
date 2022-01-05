import { ApiEndpoints } from "./constants/apiEndPoints"
import { HttpMethod } from "./helpers/http/httpMethods"

const ROUTE_PATH='/'
const API_VERSION = {"jsonrpc":"2.0"}
export const getRankedPost = (params)=>{
    return HttpMethod.post(ROUTE_PATH,{...API_VERSION, method:ApiEndpoints.GET_RANKED_POST, ...params } )
}