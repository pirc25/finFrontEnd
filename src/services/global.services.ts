import API_URL from "../../config.ts";
import axios from "axios";

export async function getData(url: string, token: string) {
   try {
    const response = await axios.get(API_URL + url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error(error);
  }
}

// export async function postData(url: string, data, token: string) {
//   return fetch(API_URL + url)
//     .then((response) => response.json())
//     .catch((error) => console.log(error));
// }

// export async function putData(url: string, data, token: string) {
//   return fetch(API_URL + url)
//     .then((response) => response.json())
//     .catch((error) => console.log(error));
// }

// export async function deleteData(url: string, data, token: string) {
//   return fetch(API_URL + url)
//     .then((response) => response.json())
//     .catch((error) => console.log(error));
// }
