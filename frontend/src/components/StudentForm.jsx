import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  TextField,
} from "@mui/material";

import React, { useState, useEffect } from "react";

import { addStudent, updateStudent } from "../services/StudentService";

const StudentForm = ({ open, onClose, student }) => {
  const [form, setForm] = useState({
    name: "",
    department: "",
    email: "",
  });

  // Load data when editing
  useEffect(() => {
    if (student) {
      setForm(student);
    } else {
      setForm({
        name: "",
        department: "",
        email: "",
      });
    }
  }, [student]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (student) {
      updateStudent(student.id, form).then(() => onClose());
    } else {
      addStudent(form).then(() => onClose());
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>
        {student ? "Update Student" : "Add Student"}
      </DialogTitle>

      <DialogContent>
        <TextField
          margin="dense"
          label="Name"
          name="name"
          fullWidth
          value={form.name}
          onChange={handleChange}
        />

        <TextField
          margin="dense"
          label="Department"
          name="department"
          fullWidth
          value={form.department}
          onChange={handleChange}
        />

        <TextField
          margin="dense"
          label="Email"
          name="email"
          fullWidth
          value={form.email}
          onChange={handleChange}
        />
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>

        <Button variant="contained" color="primary" onClick={handleSubmit}>
          {student ? "Update" : "Add"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default StudentForm;
