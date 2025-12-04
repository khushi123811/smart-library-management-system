import React, { useEffect, useState } from "react";
import {
  getAllStudents,
  deleteStudent,
} from "../services/StudentService";

import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import ConfirmDialog from "./ConfirmDialog";

const StudentTable = ({ onEdit, refresh }) => {
  const [studentList, setStudentList] = useState([]);

  const [confirmOpen, setConfirmOpen] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  useEffect(() => {
    loadStudents();
  }, [refresh]);

  const loadStudents = () => {
    getAllStudents()
      .then((res) => setStudentList(res.data))
      .catch((err) => console.log(err));
  };

  const handleDeleteClick = (id) => {
    setDeleteId(id);
    setConfirmOpen(true);
  };

  const confirmDelete = () => {
    deleteStudent(deleteId)
      .then(() => {
        setStudentList((prev) => prev.filter((s) => s.id !== deleteId));
        setConfirmOpen(false);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="table-wrapper">
      <table className="student-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Department</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {studentList.length === 0 ? (
            <tr>
              <td colSpan="5" style={{ textAlign: "center", padding: "20px" }}>
                No Students Found
              </td>
            </tr>
          ) : (
            studentList.map((stu) => (
              <tr key={stu.id}>
                <td>{stu.id}</td>
                <td>{stu.name}</td>
                <td>{stu.department}</td>
                <td>{stu.email}</td>

                <td>
                  <IconButton color="primary" onClick={() => onEdit(stu)}>
                    <EditIcon />
                  </IconButton>

                  <IconButton
                    color="error"
                    onClick={() => handleDeleteClick(stu.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {/* DELETE CONFIRMATION */}
      <ConfirmDialog
        open={confirmOpen}
        onClose={() => setConfirmOpen(false)}
        onConfirm={confirmDelete}
        entity="student"
      />
    </div>
  );
};

export default StudentTable;
