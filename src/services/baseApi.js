function ApiActions(axiosInstance) {
  const axios = axiosInstance;

  async function get(url) {
    return axios.get(url);
  }

  async function post(url, payload) {
    return axios.post(url, payload);
  }

  return {
    get,
    post,
  };
}

export default ApiActions;
