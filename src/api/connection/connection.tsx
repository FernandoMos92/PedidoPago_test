import axios from "axios";

async function allEmployer() {
  try {
    const URL_API = `https://pp-api-desafio.herokuapp.com/agents`;
    const response = await axios.get(URL_API);
    return response;
  } catch (error) {
    return error;
  }
}

async function positionList() {
  try {
    const URL_API = `https://pp-api-desafio.herokuapp.com/roles`;
    const response = await axios.get(URL_API);
    return response;
  } catch (error) {
    return error;
  }
}

async function employerDatails() {
  try {
    const URL_API = `https://pp-api-desafio.herokuapp.com/agent/1`;
    const response = await axios.get(URL_API);
    return response;
  } catch (error) {
    return error;
  }
}

async function positionPermission() {
  try {
    const URL_API = `https://pp-api-desafio.herokuapp.com/role/1`;
    const response = await axios.get(URL_API);
    return response;
  } catch (error) {
    return error;
  }
}

const RESPONSE = {
  positionList,
  allEmployer,
  employerDatails,
  positionPermission,
};

export default RESPONSE;
