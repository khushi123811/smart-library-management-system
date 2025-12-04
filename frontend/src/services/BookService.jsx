import axios from "axios";

const BASE_URL = "http://localhost:8080/book";

// READ ALL
export const getAllBooks = () => {
  return axios.get(`${BASE_URL}/allBooks`);
};

// READ BY ID
export const getBookById = (id) => {
  return axios.get(`${BASE_URL}/getBook/${id}`);
};

// CREATE
export const addBook = (book) => {
  return axios.post(`${BASE_URL}/addBook`, book);
};

// UPDATE
export const updateBook = (id, book) => {
  return axios.put(`${BASE_URL}/updateBook/${id}`, book);
};

// DELETE
export const deleteBook = (id) => {
  return axios.delete(`${BASE_URL}/deleteBook/${id}`);
};
