import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useMediaQuery, useTheme } from "@mui/material";
import DepartmentComponent from "./DepartmentComponent";

const Department2: React.FC = () => {
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
            Kaufmännische Schule
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
          Herzlich Willkommen in der Kaufmännischen Berufsschule
        </Typography>
        <Typography
          variant="h5"
          mt={2}
          mb={2}
          color={theme.palette.primary.main}
        >
          Entschuldigung oder Freistellung notwendig?
        </Typography>
        <Typography variant="subtitle1">
          Nutzen Sie bitte folgende E-Mail-Adresse: kbs@bsb-bretten.de <br />
          Bitte geben Sie den Namen und die Klasse des „Azubis“ an.
        </Typography>
        <Typography
          variant="h5"
          mt={2}
          mb={2}
          color={theme.palette.primary.main}
        >
          Wann findet der Unterricht im Schuljahr 2024/2025 statt?
        </Typography>
        <Typography variant="subtitle1">
          Der Unterricht in der kaufmännischen Berufsschule beginnt – mit
          Ausnahme des Blocks – in der zweiten Schulwoche.
        </Typography>
        <Typography
          variant="h5"
          mt={2}
          mb={2}
          color={theme.palette.primary.main}
        >
          Kaufmännische Ausbildungsgänge
        </Typography>
        <Typography>
          <b>Einzelhändler/-in / Verkäufer/-in:</b>
          <br />
          <ul>
            <li>1. Ausbildungsjahr (W1KE) Dienstag und Freitag </li>
            <li>2. Ausbildungsjahr (W2KE) Montag und Donnerstag </li>
            <li>3. Ausbildungsjahr (W3KE) Mittwoch und Freitag</li>
          </ul>
          <b>Industriekaufmann/-frau:</b>
          <ul>
            <li>Erstes Ausbildungsjahr: Montag + Freitag </li>
            <li>
              Zweites und drittes Ausbildungsjahr: Blockunterricht nach dem
              Blockplan KBS Bretten 2024-25
            </li>
          </ul>
          <b>
            Kaufleute für IT-Systemmanagement & Kaufleute für
            Digitalisierungsmanagement:
          </b>
          <ul>
            <li>
              Erstes Ausbildungsjahr (W1SY/DM): Mittwoch und Dienstag (A-Woche)
            </li>
            <li>
              Zweites Ausbildungsjahr (W2SY/DM): Donnerstag und Freitag
              (A-Woche)
            </li>
            <li>
              Drittes Ausbildungsjahr (W3SY/DM, W3DM): Montag und Dienstag
              (B-Woche)
            </li>
          </ul>
        </Typography>
        <Typography
          variant="h5"
          mt={2}
          mb={2}
          color={theme.palette.primary.main}
        >
          Gewerbliche Ausbildungsgänge in der kaufm. Abteilung
        </Typography>
        <Typography variant="subtitle1">
          <b>Fachinformatiker/-in Anwendungsentwicklung</b>
          <ul>
            <li>1. Ausbildungsjahr (E1FA) Mittwoch + Dienstag (B-Woche) </li>
            <li>2. Ausbildungsjahr (E2FA) Donnerstag + Freitag (A-Woche)</li>
            <li>3. Ausbildungsjahr (E3FA) Montag + Dienstag (A-Woche)</li>
          </ul>
          <b>Fachinfomatiker Systemintegration:</b>
          <ul>
            <li>1. Ausbildungsjahr (E1FS) Mittwoch + Dienstag (A-Woche)</li>
            <li>2. Ausbildungsjahr (E2FS) Donnerstag + Freitag (B-Woche)</li>
            <li>3. Ausbildungsjahr (E3FS) Montag + Dienstag (A-Woche)</li>
          </ul>
          Die Ausbildungsgänge Fachinformatiker/in Digitale Vernetzung, sowie
          Daten und Prozessanalyse sind in Planung.
        </Typography>
      </Box>
    </>
  );
};

export default Department2;
