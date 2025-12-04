import React, { useEffect, useState } from "react";
import { getAllAuthors, deleteAuthor } from "../services/AuthorService";

import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import ConfirmDialog from "./ConfirmDialog";

const AuthorTable = ({ onEdit, refresh }) => {
  const [authorList, setAuthorList] = useState([]);

  const [confirmOpen, setConfirmOpen] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  useEffect(() => {
    loadAuthors();
  }, [refresh]);

  const loadAuthors = () => {
    getAllAuthors()
      .then((res) => setAuthorList(res.data))
      .catch((err) => console.log(err));
  };

  const handleDeleteClick = (id) => {
    setDeleteId(id);
    setConfirmOpen(true);
  };

  const confirmDelete = () => {
    deleteAuthor(deleteId)
      .then(() => {
        setAuthorList((prev) => prev.filter((a) => a.id !== deleteId));
        setConfirmOpen(false);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="table-wrapper">
      <table className="author-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Country</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {authorList.length === 0 ? (
            <tr>
              <td colSpan="4" style={{ textAlign: "center", padding: "20px" }}>
                No Authors Found
              </td>
            </tr>
          ) : (
            authorList.map((author) => (
              <tr key={author.id}>
                <td>{author.id}</td>
                <td>{author.name}</td>
                <td>{author.country}</td>

                <td>
                  <IconButton color="primary" onClick={() => onEdit(author)}>
                    <EditIcon />
                  </IconButton>

                  <IconButton
                    color="error"
                    onClick={() => handleDeleteClick(author.id)}
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
        entity="author"
      />
    </div>
  );
};

export default AuthorTable;
