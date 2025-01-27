import axios from "axios";
import API_URL from "../../../config.ts";

export const loginServices = async (username: string, password: string) => {
  const datos = { username: username, password: password };
  const response = axios
    .post(`${API_URL}auth/login`, datos)
    .then((results) => results.data.access_token)
    .catch((error) => {
      console.log(error);
      return error;
    });
  return response;
};
