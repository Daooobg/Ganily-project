import { requestFactory } from './requester';

const baseUrl = 'http://127.0.0.1:5000/api/v1/products/cakes';

const request = requestFactory();

export const getAllCakes = async () => {
  const data = await request.get(baseUrl);
  return data.data;
};

export const getAllCakesByType = async (types) => {
  console.log(types);
  if (types === 'all') {
    const data = await request.get(baseUrl);
    return data.data;
  }else {
    const data = await request.get(baseUrl + `?types=${types}`);
    return data.data;
  }
};
