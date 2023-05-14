import React, { useState, useCallback } from "react";
import MuiSnackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const useSnackbar = () => {
  const [args, setArgs] = useState({
    open: false,
    severity: "success",
    message: "",
  });

  const showSuccessSnackbar = useCallback(
    (message) => {
      setArgs({ ...args, open: true, severity: "success", message: message });
    },
    [args]
  );
  const showErrorSnackbar = useCallback(
    (message) => {
      setArgs({ ...args, open: true, severity: "error", message: message });
    },
    [args]
  );

  const showWarningSnackbar = useCallback(
    (message) => {
      setArgs({ ...args, open: true, severity: "warning", message: message });
    },
    [args]
  );

  const showInfoSnackbar = useCallback(
    (message) => {
      setArgs({ ...args, open: true, severity: "info", message: message });
    },
    [args]
  );

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setArgs({ ...args, open: false, message: "" });
  };

  const Snackbar = () => (
    <MuiSnackbar
      open={args.open}
      autoHideDuration={5000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <Alert
        onClose={handleClose}
        severity={args.severity}
        sx={{ width: "100%" }}
      >
        {args.message}
      </Alert>
    </MuiSnackbar>
  );

  return [
    Snackbar,
    showSuccessSnackbar,
    showErrorSnackbar,
    showWarningSnackbar,
    showInfoSnackbar,
  ];
};

export default useSnackbar;
