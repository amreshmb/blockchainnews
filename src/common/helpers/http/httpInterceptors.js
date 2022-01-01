export async function handlePreRequest(config) {
  const accessToken = '';
  if (accessToken) {
    config.headers["Authorization"] = `Bearer ${accessToken || ''}`;
  }
  config.headers["Content-Type"] = "application/json";
  config.headers["Accept"] = "application/json";

  return config;
}

export function handleRequestError(error) {
  return Promise.reject(error);
}

export function handleResponseSuccess(response) {
  return response.data;
}

export async function handleResponseError(error) {
  return Promise.reject(error);
}
