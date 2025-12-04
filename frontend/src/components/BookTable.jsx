import React, { useEffect, useState } from "react";
import { getAllBooks, deleteBook } from "../services/BookService";

import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import ConfirmDialog from "./ConfirmDialog";

const BookTable = ({ onEdit, refresh }) => {
  const [bookList, setBookList] = useState([]);

  const [confirmOpen, setConfirmOpen] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  useEffect(() => {
    loadBooks();
  }, [refresh]);

  const loadBooks = () => {
    getAllBooks()
      .then((res) => setBookList(res.data))
      .catch((err) => console.log(err));
  };

  const handleDeleteClick = (id) => {
    setDeleteId(id);
    setConfirmOpen(true);
  };

  const confirmDelete = () => {
    deleteBook(deleteId)
      .then(() => {
        setBookList((prev) => prev.filter((b) => b.id !== deleteId));
        setConfirmOpen(false);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="table-wrapper">
      <table className="book-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Author ID</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {bookList.length === 0 ? (
            <tr>
              <td colSpan="5" style={{ textAlign: "center", padding: "20px" }}>
                No Books Found
              </td>
            </tr>
          ) : (
            bookList.map((book) => (
              <tr key={book.id}>
                <td>{book.id}</td>
                <td>{book.title}</td>
                <td>{book.authorId}</td>
                <td>{book.quantity}</td>

                <td>
                  <IconButton color="primary" onClick={() => onEdit(book)}>
                    <EditIcon />
                  </IconButton>

                  <IconButton
                    color="error"
                    onClick={() => handleDeleteClick(book.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      <ConfirmDialog
        open={confirmOpen}
        onClose={() => setConfirmOpen(false)}
        onConfirm={confirmDelete}
        entity="book"
      />
    </div>
  );
};

export default BookTable;
