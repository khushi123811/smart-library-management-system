import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

import StudentTable from "./components/StudentTable";
import StudentForm from "./components/StudentForm";

import AuthorTable from "./components/AuthorTable";
import AuthorForm from "./components/AuthorForm";

import BookTable from "./components/BookTable";
import BookForm from "./components/BookForm";

import "./styles/layout.css";
import { Button } from "@mui/material";

function App() {
  const [page, setPage] = useState("dashboard");

  const [openForm, setOpenForm] = useState(false);
  const [editData, setEditData] = useState(null);
  const [refresh, setRefresh] = useState(false);

  const handleAdd = () => {
    setEditData(null);
    setOpenForm(true);
  };

  const handleEdit = (item) => {
    setEditData(item);
    setOpenForm(true);
  };

  const handleCloseForm = () => {
    setOpenForm(false);
    setRefresh(!refresh);
  };

  const titles = {
    student: "ADD STUDENT",
    author: "ADD AUTHOR",
    book: "ADD BOOK",
  };

  return (
    <div className="layout">
      <Sidebar setPage={setPage} />

      <div className="content">
        <Navbar page={page} />

        <div className="page-container">

          {/* ADD BUTTON */}
          {["student", "author", "book"].includes(page) && (
            <div className="add-btn">
              <Button
                variant="contained"
                sx={{ padding: "10px 25px", fontSize: "16px" }}
                onClick={handleAdd}
              >
                {titles[page]}
              </Button>
            </div>
          )}

          {/* TABLES */}
          {page === "student" && (
            <StudentTable onEdit={handleEdit} refresh={refresh} />
          )}

          {page === "author" && (
            <AuthorTable onEdit={handleEdit} refresh={refresh} />
          )}

          {page === "book" && (
            <BookTable onEdit={handleEdit} refresh={refresh} />
          )}

          {/* DASHBOARD */}
          {page === "dashboard" && (
            <div
              style={{
                padding: "20px",
                fontSize: "20px",
                color: "#555",
              }}
            >
              Welcome to Smart Library Management System Dashboard
            </div>
          )}
        </div>
      </div>

      {/* FORMS */}
      {openForm && page === "student" && (
        <StudentForm open={openForm} onClose={handleCloseForm} student={editData} />
      )}

      {openForm && page === "author" && (
        <AuthorForm open={openForm} onClose={handleCloseForm} author={editData} />
      )}

      {openForm && page === "book" && (
        <BookForm open={openForm} onClose={handleCloseForm} book={editData} />
      )}
    </div>
  );
}

export default App;
