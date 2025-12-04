import axios from "axios";

const BASE_URL = "http://localhost:8080/author";

// READ ALL
export const getAllAuthors = () => {
  return axios.get(`${BASE_URL}/allAuthors`);
};

// READ BY ID
export const getAuthorById = (id) => {
  return axios.get(`${BASE_URL}/getAuthor/${id}`);
};

// CREATE
export const addAuthor = (author) => {
  return axios.post(`${BASE_URL}/addAuthor`, author);
};

// UPDATE
export const updateAuthor = (id, author) => {
  return axios.put(`${BASE_URL}/updateAuthor/${id}`, author);
};

// DELETE
export const deleteAuthor = (id) => {
  return axios.delete(`${BASE_URL}/deleteAuthor/${id}`);
};
