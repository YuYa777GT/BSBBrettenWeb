import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useMediaQuery, useTheme, Grid2, Container } from "@mui/material";
import DepartmentComponent from "./DepartmentComponent";

const Department5: React.FC = () => {
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
            Berufskollegs
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
          Berufskollegs
        </Typography>
        <Typography
          variant="subtitle1"
          color={theme.palette.grey[600]}
          fontWeight={"bold"}
        >
          Eine komplexere Arbeitswelt und der gesellschaftliche Wandel führen zu
          neuen Ansprüchen und Herausforderungen. Diese nimmt das Berufskolleg
          in einer Verknüpfung von Theorie und Praxis an. Das Profil(-fach)
          spielt dabei eine wesentliche Rolle für eine entsprechende berufliche
          Qualifikation. Gleichzeitig wird eine erweiterte allgemeine Bildung
          vermittelt.
        </Typography>
        <Typography variant="subtitle1" color={theme.palette.grey[600]}>
          Neben der Fachhochschulreife kann in jedem Profil ein Assistent
          (beispielsweise „Staatlich geprüfter Assistent“ bzw. „Staatlich
          geprüfte Assistentin“) erworben werden.
        </Typography>
        <Container sx={{ display: "flex", justifyContent: "center" }}>
          <Grid2
            height={isMobile ? 150 : 600}
            width={isMobile ? 300 : 1200}
            component={"img"}
            src="assets/BKBild.jpg"
          />
        </Container>
        <Typography
          variant={isMobile ? "h5" : "h4"}
          fontWeight={"bold"}
          color={theme.palette.primary.main}
          sx={{ pb: 8 }}
        >
          Wählen Sie Ihren Weg zur Fachhochschulreife
        </Typography>
        <Container sx={{ display: "flex", justifyContent: "center" }}>
          <Grid2
            height={isMobile ? 150 : 450}
            width={isMobile ? 300 : 1400}
            component={"img"}
            src="assets/BKWeg.jpg"
          />
        </Container>
      </Box>
    </>
  );
};

export default Department5;
