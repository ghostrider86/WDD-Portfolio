const baseURL = 'http://157.201.228.93:2992/';
const postURL = 'http://157.201.228.93:2992/checkout/';
const loginURL = 'http://157.201.228.93:2992/login';
const orderURL = 'http://157.201.228.93:2992/orders';

async function convertToJson(res) {
  let jsonResponse = await res.json();
  if (res.ok) {
    return jsonResponse;
  } else {
    throw { name: 'servicesError', message: jsonResponse };
  }
}
  // constructor() 
export default class ExternalServices {

  getData(category) {
    return fetch(baseURL + `products/search/${category}`)
      .then(convertToJson)
      .then((info) => info.Result);
  }

  async findProductById(id) {
    return await fetch(baseURL + `product/${id}`)
      .then(convertToJson)
      .then((data) => data.Result);
  }

  async checkout(payload) {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    };
    return await fetch(postURL, options).then(convertToJson);
  }

  async loginRequest(creds) {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(creds),
    };
    const response = await fetch(loginURL, options).then(convertToJson);
    return response.accessToken;
  }

  async orderRequest(token) {
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const orderGet = await fetch(orderURL, options).then(convertToJson);
    return orderGet;
  }
}
