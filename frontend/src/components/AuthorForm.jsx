import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  TextField,
} from "@mui/material";

import React, { useState, useEffect } from "react";

import { addAuthor, updateAuthor } from "../services/AuthorService";

const AuthorForm = ({ open, onClose, author }) => {
  const [form, setForm] = useState({
    name: "",
    country: "",
  });

  useEffect(() => {
    if (author) {
      setForm(author);
    } else {
      setForm({
        name: "",
        country: "",
      });
    }
  }, [author]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (author) {
      updateAuthor(author.id, form).then(() => onClose());
    } else {
      addAuthor(form).then(() => onClose());
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{author ? "Update Author" : "Add Author"}</DialogTitle>

      <DialogContent>
        <TextField
          margin="dense"
          label="Author Name"
          name="name"
          fullWidth
          value={form.name}
          onChange={handleChange}
        />

        <TextField
          margin="dense"
          label="Country"
          name="country"
          fullWidth
          value={form.country}
          onChange={handleChange}
        />
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>

        <Button variant="contained" color="primary" onClick={handleSubmit}>
          {author ? "Update" : "Add"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AuthorForm;
