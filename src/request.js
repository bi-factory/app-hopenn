const axios = require("axios");
const { urlBase, getHeaders } = require("./request-params");

const headers = getHeaders();

async function getCount(endpoint) {
  try {
    let url = `${urlBase}/${endpoint}/count`;
    const res = await axios.get(url, { headers: await headers });
    return res.data.content;
  } catch (error) {
    console.error(`Error ${endpoint} ${error}`);
  }
}

async function getData(endpoint, count) {
  try {
    const totalElements = await count;
    const totalPages = Math.ceil(totalElements.count / 1000);

    let data = [];

    for (let i = 0; i < totalPages; i++) {
      let url = `${urlBase}/${endpoint}?size=1000&page=${i}`;
      let res = await axios.get(url, { headers: await headers });

      data = data.concat(res.data.content);
    }
    return data;
  } catch (error) {
    console.error(`Error ${endpoint} ${error}`);
  }
}

module.exports = {
  getData,
  getCount,
};
