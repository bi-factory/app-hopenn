const axios = require('axios');
const { urlBase, getHeaders } = require('./request-params');

const headers = getHeaders();

async function getCount(endpoint, object = {}) {
  try {
    let url = `${urlBase}/${endpoint}/count`;
    const res = await axios.get(url, { headers: await headers });
    object = res.data.content;
  } catch (error) {
    console.error(`Error ${endpoint} ${error}`);
    object = getCount(endpoint, { headers: await headers });
  }
  return object;
}

async function getData(endpoint, quantity, data = [], page = 0) {
  try {
    const totalElements = quantity.count;
    const totalPages = Math.ceil(totalElements / 1000);

    while (page < totalPages) {
      let url = `${urlBase}/${endpoint}?size=1000&page=${page}`;
      let res = await axios.get(url, { headers: await headers });

      data = data.concat(res.data.content);
      page++;
    }
  } catch (error) {
    console.error(`Error ${endpoint} ${error}`);
    data = getData(endpoint, quantity, data, page);
  }
  return data;
}

module.exports = {
  getData,
  getCount,
};
