const axios = require("axios");

const Tenant = "hopenn";
const urlBase = `https://use-api.cloudlink.uptake.com/v1/${Tenant}`;
const api_key = "J71mOkJkzClIE71aE0fL6809vMR9X43K";

const credentials = new URLSearchParams();
credentials.append("username", "aynitech");
credentials.append("password", "qcz#C&LA");

async function access_token() {
    try {
        const res = await axios.post(`${urlBase}/auth`, credentials, {
            headers: {
                "x-api-key": api_key,
                "Content-Type": "application/x-www-form-urlencoded",
                Tenant: Tenant,
                accept: "application/json",
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
    urlBase
};