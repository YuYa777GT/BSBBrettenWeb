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
      sx={{
        "@media (max-width:600px)": {
          height: "auto",
          paddingBottom: 4
        }
      }}
    >
      <Box
        component="img"
        src="/assets/banner.jpg"
        alt="Banner Background"
        sx={{
          height: "110%",
          width: "100%",
          objectFit: "cover",
          position: "absolute",
          zIndex: -2
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
          zIndex: -1
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
          padding: { xs: "0 20px", sm: "0" }
        }}
      >
        <Typography
          sx={{
            color: "white",
            fontWeight: "bold",
            fontSize: { xs: "40px", sm: "90px" },
            mt: 5
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
              padding: { xs: "12px 24px", sm: "16px 32px" },
              fontSize: { xs: "16px", sm: "20px" },
              borderColor: "white",
              color: "white",
              borderWidth: "3px",
              transition:
                "transform 0.3s ease, background-color 0.3s ease, color 0.3s ease",
              "&:hover": {
                transform: "scale(1.1)",
                backgroundColor: "white",
                color: (theme) => theme.palette.primary.main,
                borderColor: "white"
              },
              "&:active": {
                transform: "scale(1.2)",
                transition: "transform 0.2s ease-in-out"
              }
            }}
          >
            AUFBAUKURS GRUPPENLEITUNG
          </Button>
          <Button
            startIcon={<ConfirmationNumberIcon />}
            variant="outlined"
            sx={{
              justifyContent: "center",
              padding: { xs: "12px 24px", sm: "16px 32px" },
              fontSize: { xs: "16px", sm: "20px" },
              borderColor: "white",
              color: "white",
              borderWidth: "3px",
              transition:
                "transform 0.3s ease, background-color 0.3s ease, color 0.3s ease",
              "&:hover": {
                transform: "scale(1.1)",
                backgroundColor: "white",
                color: (theme) => theme.palette.primary.main,
                borderColor: "white"
              },
              "&:active": {
                transform: "scale(1.2)",
                transition: "transform 0.2s ease-in-out"
              }
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
