import axios from "axios";

async function allEmployer() {
  const URL_API = `https://pp-api-desafio.herokuapp.com/agents`;
  const response = await axios.get(URL_API);
  return response;
}

async function positionList() {
  const URL_API = `https://pp-api-desafio.herokuapp.com/roles`;
  const response = await axios.get(URL_API);
  return response;
}

async function employerDatails() {
  const URL_API = `https://pp-api-desafio.herokuapp.com/agent/1`;
  const response = await axios.get(URL_API);
  return response;
}

async function positionPermission() {
  const URL_API = `https://pp-api-desafio.herokuapp.com/role/1`;
  const response = await axios.get(URL_API);
  return response;
}

const RESPONSE = {
  positionList,
  allEmployer,
  employerDatails,
  positionPermission,
};

export default RESPONSE;
