import instance from "./httpInstance";

const validateStatus = (status) => {
  return Number(status) >= 200 && status < Number(300);
};

const get = (url, config) => {
  return instance.get(url, { ...config, validateStatus });
};

const post = (url, data, config) => {
  return instance.post(url, data, { ...config, validateStatus });
};

const put = (url, data, config) => {
  return instance.put(url, data, { ...config, validateStatus });
};

const patch = (url, data, config) => {
  return instance.patch(url, data, { ...config, validateStatus });
};

const _delete = (url, config) => {
  return instance.delete(url, { ...config, validateStatus });
};

export const HttpMethod = {
  get,
  post,
  put,
  patch,
  delete: _delete,
};
