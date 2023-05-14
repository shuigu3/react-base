import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import useSnackbar from "hooks/useSnackbar";
import useDialog from "hooks/useDialog";

const Verification = () => {
  const [Dialog, showDialog] = useDialog();
  const [
    Snackbar,
    showSuccessSnackbar,
    showErrorSnackbar,
    showWarningSnackbar,
    showInfoSnackbar,
  ] = useSnackbar();

  const MyButton = ({ onClick, children }) => (
    <Button variant="outlined" onClick={onClick} sx={{ textTransform: "none" }}>
      {children}
    </Button>
  );

  return (
    <Container sx={{ pt: 2 }}>
      <Typography variant="h6" color="default">
        Verification
      </Typography>
      <Stack direction="column" spacing={2}>
        <Typography variant="h6" color="default">
          Dialog
        </Typography>
        <Stack direction="row" spacing={2}>
          <MyButton onClick={() => showDialog("show Dialog")}>Dialog</MyButton>
        </Stack>
        <Typography variant="h6" color="default">
          Snackbar
        </Typography>

        <Stack direction="row" spacing={2}>
          <MyButton onClick={() => showSuccessSnackbar("Success Snackbar")}>
            Success Snackbar
          </MyButton>
          <MyButton onClick={() => showErrorSnackbar("Error Snackbar")}>
            Error Snackbar
          </MyButton>
          <MyButton onClick={() => showWarningSnackbar("Warning Snackbar")}>
            Warning Snackbar
          </MyButton>
          <MyButton onClick={() => showInfoSnackbar("Info Snackbar")}>
            Info Snackbar
          </MyButton>
        </Stack>
      </Stack>
      <Dialog />
      <Snackbar />
    </Container>
  );
};

export default Verification;
