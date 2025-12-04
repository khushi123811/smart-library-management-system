import { Dialog, DialogActions, DialogContent, DialogTitle, Button } from "@mui/material";
import React from "react";

const ConfirmDialog = ({
  open,
  onClose,
  onConfirm,
  entity = "item", // book, author, student
}) => {

  const entityMessages = {
    book: "Are you sure you want to delete this book?",
    author: "Are you sure you want to delete this author?",
    student: "Are you sure you want to delete this student?",
  };

  const finalMessage =
    entityMessages[entity] || "Are you sure you want to delete this item?";

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Confirm Delete</DialogTitle>

      <DialogContent>
        {finalMessage}
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>

        <Button
          color="error"
          variant="contained"
          onClick={onConfirm}
        >
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmDialog;
