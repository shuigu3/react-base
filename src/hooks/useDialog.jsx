import React, { useState, useCallback } from "react";
import MuiDialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const useDialog = () => {
  const [args, setArgs] = useState({
    open: false,
    message: "",
  });

  const showDialog = useCallback(
    (message) => {
      setArgs({ ...args, open: true, message: message });
    },
    [args]
  );
  const handleClose = (event) => {
    setArgs({ ...args, open: false, message: "" });
  };

  const Dialog = () => (
    <MuiDialog fullWidth onClose={handleClose} open={args.open}>
      <DialogContent>
        <Typography>{args.message}</Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} autoFocus>
          閉じる
        </Button>
      </DialogActions>
    </MuiDialog>
  );
  return [Dialog, showDialog];
};

export default useDialog;
