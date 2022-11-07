import axios from "axios";
import { getCookie } from "../Components/Cookies";

const baseURL = "https://milkyfie.in";
//const baseURL="https://api.torentx.org:3005/";
const getStoredAuthToken = () => {
  let c = getCookie(".milkyfie_user");
  return JSON.parse(c).token;
  //return localStorage.token;
};

function getHeaders() {
  return {
    accept: "application/json",
    authorization: `Bearer ${getStoredAuthToken()}`,
  };
}

function postHeaders() {
  return {
    "content-type": "application/json",
    authorization: `Bearer ${getStoredAuthToken()}`,
  };
}

export const getRequest = (endpoint, data = null) =>
  axios
    .get(`${baseURL}${endpoint}?${new URLSearchParams(data).toString()}`, {
      headers: getHeaders(),
    })
    .then((res) => res.data)
    .catch((err) => {
      console.log(`Error in get request to entpoint ${endpoint}`, err);
      throw err;
    });

export const postRequest = (endpoint, data = null) => {
  axios
    .post(baseURL + endpoint, data, { headers: postHeaders() })
    .then((res) => res.data)
    .catch((err) => {
      console.log(`Error in post request to entpoint ${endpoint}`, err);
      throw err;
    });
};

export const postRequestt = async (url, data) => {
  try {
    const res = await axios({
      method: "post",
      url: url,
      data: data,
      withCredentials: true,
      headers: {},
    });
    return res?.data;
  } catch (error) {
    return error;
  }
};
