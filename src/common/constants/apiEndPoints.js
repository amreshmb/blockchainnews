export const ApiEndpointsNamedConstants = {  };

export const ApiEndpoints = {}
export const getApiEndPointWithParams = (apiEndPoint, parameters) => {
    const result = [];
    for (const key in parameters) {
        result.push(`${key}=${parameters[key]}`);
    }
    return `${apiEndPoint}${result.length !== 0 ? "?" : ""}${result.join("&")}`;
};
