import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  TextField,
} from "@mui/material";

import React, { useState, useEffect } from "react";

import { addBook, updateBook } from "../services/BookService";

const BookForm = ({ open, onClose, book }) => {
  const [form, setForm] = useState({
    title: "",
    authorId: "",
    quantity: "",
  });

  useEffect(() => {
    if (book) {
      setForm(book);
    } else {
      setForm({
        title: "",
        authorId: "",
        quantity: "",
      });
    }
  }, [book]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (book) {
      updateBook(book.id, form).then(() => onClose());
    } else {
      addBook(form).then(() => onClose());
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{book ? "Update Book" : "Add Book"}</DialogTitle>

      <DialogContent>
        <TextField
          margin="dense"
          label="Book Title"
          name="title"
          fullWidth
          value={form.title}
          onChange={handleChange}
        />

        <TextField
          margin="dense"
          label="Author ID"
          name="authorId"
          fullWidth
          value={form.authorId}
          onChange={handleChange}
        />

        <TextField
          margin="dense"
          label="Quantity"
          name="quantity"
          type="number"
          fullWidth
          value={form.quantity}
          onChange={handleChange}
        />
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>

        <Button variant="contained" color="primary" onClick={handleSubmit}>
          {book ? "Update" : "Add"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default BookForm;
