export const ApiEndpointsNamedConstants = {  };

export const ApiEndpoints = {
    GET_RANKED_POST: 'bridge.get_ranked_posts'
}
export const getApiEndPointWithParams = (apiEndPoint, parameters) => {
    const result = [];
    for (const key in parameters) {
        result.push(`${key}=${parameters[key]}`);
    }
    return `${apiEndPoint}${result.length !== 0 ? "?" : ""}${result.join("&")}`;
};
