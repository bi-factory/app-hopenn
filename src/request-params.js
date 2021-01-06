const axios = require("axios");

const Tenant = "hopenn";
const urlBase = `https://use-api.cloudlink.uptake.com/v1/${Tenant}`;
const api_key =
  "J_HmWd53FmFLG-YCNe-ZC88g7BLldbpURs71fbEhJ-hSq9tlmaBP7p5wBAX5396s";

async function access_token() {
  try {
    const res = await axios.post(`${urlBase}/auth`, null, {
      headers: {
        "x-api-key": api_key,
        Tenant: Tenant,
      },
    });
    return `Bearer ${res.data.access_token}`;
  } catch (error) {
    console.error(`Error access_token ${error}`);
  }
}

const getHeaders = async () => ({
  "x-api-key": api_key,
  Authorization: await access_token(),
  Tenant: Tenant,
  accept: "application/json",
});

module.exports = {
  getHeaders,
  urlBase,
};
