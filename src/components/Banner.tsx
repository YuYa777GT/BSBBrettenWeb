import React from "react";
import { Box, Typography, Button } from "@mui/material";
import GroupWorkIcon from "@mui/icons-material/GroupWork";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";

const Banner: React.FC = () => {
  return (
    <Box
      position="relative"
      height="700px"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        component="img"
        src="/assets/banner.jpg"
        alt="Banner Background"
        sx={{
          height: "100%",
          width: "100%",
          objectFit: "cover",
          position: "absolute",
          zIndex: -2,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.3)",
          zIndex: -1,
        }}
      />

      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        sx={{
          zIndex: 1,
          textAlign: "center",
        }}
      >
        <Typography
          sx={{
            color: "white",
            fontWeight: "bold",
            fontSize: "90px",
          }}
        >
          Willkommen an den <br /> Beruflichen Schulen Bretten
        </Typography>

        <Box mt={2} display="flex" flexDirection="column" alignItems="center">
          <Button
            startIcon={<GroupWorkIcon />}
            variant="outlined"
            sx={{
              mt: 3,
              mb: 3,
              justifyContent: "center",
              padding: 2,
              fontSize: "20px",
              borderColor: "white",
              color: "white",
              borderWidth: "3px",
              "&:hover": {
                backgroundColor: "white",
                color: (theme) => theme.palette.primary.main,
                borderColor: "white",
              },
            }}
          >
            AUFBAUKURS GRUPPENLEITUNG
          </Button>
          <Button
            startIcon={<ConfirmationNumberIcon />}
            variant="outlined"
            sx={{
              justifyContent: "center",
              padding: 2,
              fontSize: "20px",
              borderColor: "white",
              color: "white",
              borderWidth: "3px",
              "&:hover": {
                backgroundColor: "white",
                color: (theme) => theme.palette.primary.main,
                borderColor: "white",
              },
            }}
          >
            KVV-TICKET
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Banner;
