export const ApiEndpointsNamedConstants = {  };

export const ApiEndpoints = {
    GET_RANKED_POST: 'bridge.get_ranked_posts',
    GET_ACCOUNT_POST: "bridge.get_account_posts",
    SEARCH_POST: '/api/v1/search'
}
export const getApiEndPointWithParams = (apiEndPoint, parameters) => {
    const result = [];
    for (const key in parameters) {
        result.push(`${key}=${parameters[key]}`);
    }
    return `${apiEndPoint}${result.length !== 0 ? "?" : ""}${result.join("&")}`;
};
