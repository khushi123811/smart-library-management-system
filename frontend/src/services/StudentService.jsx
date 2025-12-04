import axios from "axios";

const BASE_URL = "http://localhost:8080/student";

// READ ALL
export const getAllStudents = () => {
  return axios.get(`${BASE_URL}/allStudents`);
};

// READ BY ID
export const getStudentById = (id) => {
  return axios.get(`${BASE_URL}/getStudent/${id}`);
};

// CREATE
export const addStudent = (student) => {
  return axios.post(`${BASE_URL}/addStudent`, student);
};

// UPDATE
export const updateStudent = (id, student) => {
  return axios.put(`${BASE_URL}/updateStudent/${id}`, student);
};

// DELETE
export const deleteStudent = (id) => {
  return axios.delete(`${BASE_URL}/deleteStudent/${id}`);
};
