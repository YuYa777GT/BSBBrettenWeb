import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useMediaQuery, useTheme, Grid2, Container } from "@mui/material";
import DepartmentComponent from "./DepartmentComponent";

const Department3: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery("(max-width: 600px)");
  return (
    <>
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
            Übergang Schule und Beruf
          </Typography>
        </Box>
      </Box>
      <Box sx={{ bgcolor: theme.palette.background.paper, pb: 1 }}>
        <DepartmentComponent />
      </Box>
      <Box
        sx={{
          pb: 6,
          pl: isMobile ? 5 : 10,
          pr: isMobile ? 5 : 10,
          position: "relative",
          zIndex: 2,
          bgcolor: theme.palette.background.paper
        }}
      >
        <Typography
          variant={isMobile ? "h5" : "h4"}
          color={theme.palette.primary.main}
          sx={{ fontWeight: "bold", mb: 3 }}
        >
          Übergang Schule und Beruf
        </Typography>
        <Typography>
          Auf dieser Seite finden Sie alle Informationen zu den Schularten
          <br />
          <br />
          <a
            href="https://bsb-bretten.de/2022/03/25/avdual/"
            style={{ textDecoration: "none" }}
          >
            AVdual – Ausbildungsvorbereitung dual
          </a>
          <br />
          <br />
          <a
            href="https://bsb-bretten.de/2022/03/25/vabo/"
            style={{ textDecoration: "none" }}
          >
            Schule International – Informationen für zugewanderte Schülerinnen
            und Schüler (VABO)
          </a>
          <br />
          <br />
          <a
            href="https://formulare.virtuelles-rathaus.de/administrationCenter/Form-Solutions/08215000-01/consent?redirectId=b5a1cd7c-b737-4edb-b8a3-9c4b1423ed7e&releaseCacheId=5312b274-0044-47d6-82b2-43e7016b4e32"
            style={{ textDecoration: "none" }}
          >
            Anmeldeportal
          </a>
          für zugewanderte Schülerinnen und Schüler (VABO) des Landkreises
          Karlsruhe
        </Typography>
        <Container sx={{ display: "flex", justifyContent: "center" }}>
          <a href="https://bsb-bretten.de/wp-content/uploads/2023/01/Flyer_AVdual_BSB_2301.pdf">
            <Grid2
              component={"img"}
              height={isMobile ? 150 : 600}
              width={isMobile ? 300 : 1200}
              src="assets/AVDual.jpg"
              sx={{ objectFit: "cover", borderRadius: 2 }}
            />
          </a>
        </Container>
      </Box>
    </>
  );
};

export default Department3;
