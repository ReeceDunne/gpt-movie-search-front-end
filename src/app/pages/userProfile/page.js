import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#ffffff", // White background
  border: "1px solid #eaeaea", // Light border similar to Auth0 styling
  boxShadow: 24,
  p: 4,
  borderRadius: "8px", // Rounded corners
};

export default function userProfile({ user }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="absolute top-4 right-4 bg-gray-800 p-3 rounded-lg shadow-lg flex flex-col items-center w-44">
      {/* Profile Image */}
      <img
        src={user.picture}
        alt="User Profile"
        className="w-12 h-12 rounded-full border-2 border-blue-500 shadow-sm"
      />

      {/* User Info */}
      <div className="mt-2 text-center">
        <h2 className="text-white font-semibold text-sm">{user.name}</h2>
        <p className="text-gray-400 text-xs truncate w-36">{user.email}</p>
      </div>

      {/* Logout Button */}
      <a
        onClick={handleOpen}
        className="mt-3 w-full text-center px-4 py-2 bg-blue-500 text-white font-semibold text-sm rounded-lg shadow-md hover:bg-blue-700 transition-colors"
      >
        Logout
      </a>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{
              color: "#1E212A",
              fontSize: "24px",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Goodbye
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{
              mt: 2,
              color: "#1E212A",
              fontSize: "14px",
              textAlign: "center",
            }}
          >
            Thank you for using the Movie Search App
          </Typography>
          <Button
            sx={{
              mt: 3,
              border: "1px solid #8e8e8e",
              color: "#1E212A", // Default color
              width: "100%", // Make the button take full width
              textAlign: "center", // Ensure the text inside the button is centered
              textTransform: "none", // Disable auto capitalization
              fontSize: "16px",
              "&:hover": {
                backgroundColor: "#f0f0f0", // Darker gray on hover
                borderColor: "#8e8e8e", // Lighter border on hover
              },
              padding: "10px", // Adjust padding for better button size
            }}
            href="/api/auth/logout?federated=true"
          >
            Confirm Logout
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
