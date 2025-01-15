import {
  Box,
  List,
  ListItem,
  Typography,
  Stack,
  Grid2,
  Link,
  useTheme,
  useMediaQuery,
} from "@mui/material";

export default function Footer() {
  const theme = useTheme();

  return (
    <>
      <Grid2
        container
        justifyContent="center"
        alignItems="center"
        height="100%"
        width="100%"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2615.709942134858!2d8.700804976854206!3d49.035123488252516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47977580f9fbad67%3A0x50be0ea39fcbef52!2sBerufliche%20Schulen%20Bretten!5e0!3m2!1sen!2sde!4v1730633750464!5m2!1sen!2sde"
          width="100%"
          height="380"
          loading="lazy"
        />
      </Grid2>
      <Box
        height={400}
        sx={{
          backgroundColor: theme.palette.primary?.main,
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          padding: 2,
        }}
      >
        <Typography
          variant="h4"
          component="div"
          sx={{
            fontWeight: "bold",
            color: "white",
            textAlign: "center",
            marginBottom: 5,
          }}
        >
          Impressum & Kontakt
        </Typography>
        <Stack direction="row" spacing={15} justifyContent="center">
          <Stack spacing={1}>
            <Typography
              variant="h6"
              sx={{ color: "white", fontWeight: "bold", pb: 2 }}
            >
              Kontakt
            </Typography>
            <Typography variant="body1" sx={{ color: "white" }}>
              Wilhelmstr.22
            </Typography>
            <Typography variant="body1" sx={{ color: "white" }}>
              75015 Bretten
            </Typography>
            <Typography variant="body1" sx={{ color: "white" }}>
              Telefon: 0721 936-61600
            </Typography>
            <Typography variant="body1" sx={{ color: "white" }}>
              Fax: 0721 936-61789
            </Typography>
            <Typography variant="body1" sx={{ color: "white" }}>
              E-Mail:{" "}
              <Link
                href="mailto:sekretariat@bsb-bretten.de"
                underline="hover"
                color="inherit"
              >
                sekretariat@bsb-bretten.de
              </Link>
            </Typography>
          </Stack>
          <Stack spacing={1}>
            <Typography
              variant="h6"
              sx={{ color: "white", fontWeight: "bold", pb: 2 }}
            >
              Abteilungen
            </Typography>
            <Typography variant="body1" sx={{ color: "white" }}>
              Gewerbliche Schule
            </Typography>
            <Typography variant="body1" sx={{ color: "white" }}>
              Kaufmännische Berufsschule
            </Typography>
            <Typography variant="body1" sx={{ color: "white" }}>
              Übergang Schule & Beruf
            </Typography>
            <Typography variant="body1" sx={{ color: "white" }}>
              Hauswirtschaftlich-sozialwissenschaftliche Schule
            </Typography>
            <Typography variant="body1" sx={{ color: "white" }}>
              Berufskollegs
            </Typography>
            <Typography variant="body1" sx={{ color: "white" }}>
              Berufliche Gymnasien
            </Typography>
          </Stack>
          <Stack spacing={1}>
            <Typography
              variant="h6"
              sx={{ color: "white", fontWeight: "bold", pb: 2 }}
            >
              Info
            </Typography>
            <Typography variant="body1">
              <Link href="#" underline="hover" color="white">
                AGB
              </Link>
            </Typography>
            <Typography variant="body1">
              <Link href="#" underline="hover" color="white">
                Impressum
              </Link>
            </Typography>
            <Typography variant="body1">
              <Link href="#" underline="hover" color="white">
                Datenschutzerklärung
              </Link>
            </Typography>
          </Stack>
        </Stack>
      </Box>

      <Box
        sx={{
          backgroundColor: theme.palette.common?.white,
          textAlign: "center",
          py: 2,
        }}
      >
        <Typography variant="h6" color={theme.palette.primary?.main}>
          Copyright © 2024 BSB Bretten |{" "}
          <Link
            href="https://www.pd-sign.de/webdesign-baden-baden-karlsruhe/"
            underline="none"
            color={theme.palette.primary?.main}
          >
            WEBDESIGN Baden-Baden | Karlsruhe web-DESIGN pd-SIGN
          </Link>
        </Typography>
      </Box>
    </>
  );
}
