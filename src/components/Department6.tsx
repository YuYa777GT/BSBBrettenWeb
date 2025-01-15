import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useMediaQuery, useTheme, Grid2, Container } from "@mui/material";
import DepartmentComponent from "./DepartmentComponent";

const Department6: React.FC = () => {
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
            Berufliches Gymnasium
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
          Berufliches Gymnasium
        </Typography>
        <Typography variant={"subtitle1"} color={theme.palette.grey[600]}>
          Das berufliche Gymnasium der dreijährigen Aufbauform wird an den
          Beruflichen Schulen Bretten als Technisches Gymnasium mit den
          Fachrichtungen Informationstechnik, Technik und Management,
          Gestaltungs- und Medientechnik und als Sozial- und
          gesundheitswissenschaftliches Gymnasium mit der Fachrichtung
          Gesundheit und Biologie angeboten. Das Berufliche Gymnasium bereitet
          naturwissenschaftlich-technisch, informationstechnisch und sozial- und
          gesundheitswissenschaftlich interessierte junge Menschen sowohl auf
          das Studium an einer Hochschule als auch in besonderer Weise auf die
          Berufswelt vor.
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <a href="https://bsb-bretten.de/wp-content/uploads/2023/01/Informationsbroschure_BG_2301.pdf">
            <Grid2
              component={"img"}
              src="assets/BGBild.jpg"
              height={isMobile ? 150 : 600}
              width={isMobile ? 300 : 1200}
            />
          </a>
        </Box>
      </Box>
      <Box sx={{ bgcolor: theme.palette.background.paper }}>
        <Container sx={{ display: "flex", justifyContent: "center" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center"
            }}
          >
            <a href="https://bsb-bretten.de/wp-content/uploads/2023/02/BSB_Berufliches_Gymnasium.mov">
              <Grid2
                component={"img"}
                src="assets/thumbnail.jpg"
                height={isMobile ? 150 : 600}
                width={isMobile ? 300 : 1200}
              />
            </a>

            <Typography
              variant="subtitle1"
              fontWeight={"bold"}
              sx={{ textAlign: "center" }}
            >
              Erklärvideo zu den Beruflichen Gymnasien
            </Typography>
          </Box>
        </Container>

        <Container sx={{ pb: 6 }}>
          <Typography
            variant="h6"
            fontWeight={"bold"}
            color={theme.palette.primary.main}
            sx={{ mt: 4 }}
          >
            Information für unsere Schülerinnen und Schüler
          </Typography>
          <Typography>
            <a href="https://km.baden-wuerttemberg.de/de/service/publikation/did/leitfaden-fuer-die-gymnasiale-oberstufe-abitur-2025">
              Leitfaden für das Abitur 2025
            </a>
            – externer Link
            <br />
            <br />
            <a href="https://km.baden-wuerttemberg.de/fileadmin/redaktion/m-km/intern/PDF/Publikationen/Gymnasium/2023_Leitfaden_fuer_die_gymnasiale_Oberstufe_Abitur_2026.pdf">
              Leitfaden für das Abitur 2026
            </a>
            – externer Link
            <br />
            <br />
            <a href="https://www.landesrecht-bw.de/bsbw/searchhttps://www.landesrecht-bw.de/jportal/?quelle=jlink&query=BerGymAbiPrV+BW&psml=bsbawueprod.psml&max=true&aiz=true">
              Abiturverordnung Berufliche Gymnasien gültig ab Abitur 2024 (BGVO
              – gültig ab 01.08.2021)
            </a>
            – externer Link
            <br />
            <br />
            <a href="http://www.landesrecht-bw.de/jportal/?quelle=jlink&query=FHSchulGymOStV+BW&psml=bsbawueprod.psml&max=true">
              Verordnung des Kultusministeriums über den Erwerb der
              Fachhochschulreife in der gymnasialen Oberstufe
            </a>
            – externer Link
          </Typography>
        </Container>
      </Box>
    </>
  );
};

export default Department6;
