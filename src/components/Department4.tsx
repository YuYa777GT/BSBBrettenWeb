import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useMediaQuery, useTheme, Grid2, Container } from "@mui/material";
import DepartmentComponent from "./DepartmentComponent";

const Department4: React.FC = () => {
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
              fontSize: { xs: "25px", sm: "90px" },
              mt: 5
            }}
          >
            Hauswirtschaftlich- sozialwissenschaftliche Schule
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
          Hauswirtschaftlich – sozialwissenschaftliche Schule
        </Typography>
        <Typography variant="subtitle1" color={theme.palette.grey[600]}>
          Die Hauswirtschaftlich – sozialwissenschaftlichen Schulen an den
          Beruflichen Schulen Bretten stehen für Vielfalt, Weiterbildung und ein
          Vorankommen im persönlichen Lebenslauf. In allen Schulbereichen steht
          eine enge Verknüpfung von Theorie und Praxis der jeweiligen
          beruflichen Profile im Vordergrund.
        </Typography>
        <Container sx={{ display: "flex", justifyContent: "center" }}>
          <a href="https://bsb-bretten.de/wp-content/uploads/2024/11/2-jaehriger-Flyer_Altenpflegehilfe_Nichtmuttersprachler-11_24.pdf">
            <Grid2
              height={isMobile ? 150 : 600}
              width={isMobile ? 300 : 1200}
              component={"img"}
              src="assets/Abt4Bild.jpg"
            />
          </a>
        </Container>
        <Typography variant="h4" color={theme.palette.primary.main} mb={2}>
          Wir legen Wert auf Lernen mit Kopf, Herz und Hand!
        </Typography>
        <Typography variant="subtitle1" color={theme.palette.grey[600]}>
          Die Zweijährigen Berufsfachschulen mit ihren Profilen Hauswirtschaft
          und Ernährung, Gesundheit und Pflege, Wirtschaft, Elektrotechnik und
          Metalltechnik bieten die Möglichkeit eines mittleren
          Bildungsabschlusses mit beruflicher Grundbildung und vertiefter
          Allgemeinbildung!
          <br />
          <br />
          Die Zweijährigen Berufsfachschulen zur beruflichen Aus- und
          Weiterbildung gliedern sich in drei Schularten:
          <br />
          <br />
          Die Zweijährige Berufsfachschule sozialpädagogische Assistenz (ehem.
          „Kinderpflege“) mit anschließendem Anerkennungsjahr führt zur
          staatlichen Anerkennung und befähigt als Zweitkraft in Einrichtungen
          öffentlicher und freier Trägerschaft bei der Erziehung, Bildung,
          Pflege und Betreuung von Kindern eingesetzt zu werden. Dies gilt
          ebenso für die dreijährige praxisintegrierte Ausbildung zur staatlich
          anerkannten sozialpädagogischen Assistenz (PIA). Für weitere
          Informationen klicken Sie hier.
          <br />
          <br />
          Die Zweijährige Berufsfachschule für Altenpflegehilfe für
          Migrant*innen führt zu einer staatlichen Anerkennung in der Pflege und
          Betreuung von unterstützungsbedürftigen Menschen unter Anleitung einer
          Fachkraft.
          <br />
          <br />
          Die Berufsfachschule zum Erwerb von Zusatzqualifikationen, Schwerpunkt
          Vorbereitung Erzieher*innenabschluss führt zum Einsatz als Erstkraft
          in sozialpädagogischen Einrichtungen öffentlicher und freier
          Trägerschaft.
        </Typography>
      </Box>
    </>
  );
};

export default Department4;
