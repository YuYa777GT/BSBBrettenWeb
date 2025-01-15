import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useMediaQuery, useTheme } from "@mui/material";
import DepartmentComponent from "./DepartmentComponent";

const Department1: React.FC = () => {
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
            Gewerbliche Berufsschule
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
          Gewerbliche Berufsschule
        </Typography>
        <Typography
          color={theme.palette.text.primary}
          sx={{ fontSize: "20px" }}
        >
          Sie wollen…
          <br />
          <ul>
            <li>
              im dualen Ausbildungssystem eine fundierte Ausbildung erhalten,
              wobei sich die Lernorte „Betrieb“ und „Berufsschule“ in ihren
              theoretischen und praktischen Lernorten ideal ergänzen?
            </li>
            <li>
              als Hauptschüler nach der abgeschlossenen Berufsausbildung durch
              die Zusatzqualifikation „9+3“ einen mittleren Bildungsabschluss
            </li>
            erhalten?
          </ul>
          Oder
          <ul>
            <li>
              als Realschüler nach der abgeschlossenen Berufsausbildung und
              Zusatzunterricht die Fachhochschulreife erlangen?
            </li>
            <li>
              einen Neustart an einer bestens ausgestatteten Schule mit
              kompetenten Lehrerteams, interessanten Arbeitsgemeinschaften und
              Beratungsangeboten?
            </li>
          </ul>
          Dann lernen Sie je nach Dauer Ihres Ausbildungsverhältnisses im
          Teilzeitunterricht bis zur schriftlichen und mündlichen
          Abschlussprüfung …
          <br />
          <ul>
            <li>
              Aufbauendes in bekannten Fächern wie Deutsch und
              Gemeinschaftskunde.
            </li>
            <li>
              Neues im berufsspezifischen Bereich in Fächern der
              Lernfeldkonzeption Hier geht es um Berufsfachliche Kompetenz,
              Projektkompetenz und Wirtschaftskompetenz.
            </li>
          </ul>
          Zusätzlich bieten wir…
          <ul>
            <li>
              als Industriemechaniker die IHK-Zusatzqualifikation zur
              Elektrofachkraft.
            </li>
            <li>
              als Konstruktionsmechaniker die TÜV-Zusatzqualifikation zur
              Elektrofachkraft.
            </li>
            <li>mit der Zusatzqualifikation Fachhochschulreife.</li>
          </ul>
        </Typography>
      </Box>
    </>
  );
};

export default Department1;
