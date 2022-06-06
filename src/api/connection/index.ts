import axios from "axios";

const axiosHelper = axios.create({
  baseURL: "https://pp-api-desafio.herokuapp.com",
});

export const allEmployer = async () => axiosHelper.get("/agents");

export const positionList = async () => axiosHelper.get("/roles");

export const employerDatails = async () => axiosHelper.get("/agent/1");

export const positionPermission = async () => axiosHelper.get("/role/1");