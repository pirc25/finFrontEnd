import API_URL from "../../../config.ts";

export default async function getProducts() {
  return fetch(API_URL + "products")
    .then((response) => response.json())
    .catch((error) => console.log(error));
}
