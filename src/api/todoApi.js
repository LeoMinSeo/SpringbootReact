import axios from "axios";

export const API_SERVER_HOST = "http://localhost:8080";
const prefix = `${API_SERVER_HOST}/todo`;
export const getOne = async (tno) => {
  const res = await axios.get(`${prefix}/read/${tno}`);
  return res.data;
};

export const getList = async (pageParam) => {
  const { page, size } = pageParam;
  const res = await axios.get(`${prefix}/list`, { params: { page, size } });
  return res.data;
};

export const postData = async (todo) => {
  const res = await axios.post(`${prefix}/add`, todo);
  return res.data;
};

export const deleteOne = async (tno) => {
  const res = await axios.delete(`${prefix}/delete/${tno}`);
  return res.data;
};

export const putOne = async (todo) => {
  console.log(todo.tno);
  const res = await axios.put(`${prefix}/${todo.tno}`, todo);

  return res.data;
};
