import axios from "axios";

// create api
export const api = axios.create({
  baseURL: `https://jsonplaceholder.typicode.com`,
});

// get the data from the created api endpoint.
export const getData = async (pageNum = 1) => {
  const res = await api.get(`/comments?postId=${pageNum}`);
  return res.data;
};
