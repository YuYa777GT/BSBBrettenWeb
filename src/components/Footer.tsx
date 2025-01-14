import {
  Box,
  List,
  ListItem,
  Typography,
  Stack,
  Grid2,
  ListItemIcon,
  ListItemText,
  Link,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

export default function Footer() {
  const theme = useTheme();
  return (
    <>
      <Box
        height={useMediaQuery(theme.breakpoints.down("md")) ? 700 : 400}
        sx={{
          backgroundColor: theme.palette.primary?.light,
          justifyContent: "center",
        }}
      >
        <Stack
          direction={
            useMediaQuery(theme.breakpoints.down("md")) ? "column" : "row"
          }
          height={"100%"}
          justifyContent="center"
          alignItems="center"
        >
          {/* Google Map */}
          <Grid2
            container
            justifyContent="center"
            alignItems="center"
            height="100%"
            sx={{ ml: 2, mr: 2 }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2615.709942134858!2d8.700804976854206!3d49.035123488252516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47977580f9fbad67%3A0x50be0ea39fcbef52!2sBerufliche%20Schulen%20Bretten!5e0!3m2!1sen!2sde!4v1730633750464!5m2!1sen!2sde"
              width="550"
              height="300"
              loading="lazy"
            ></iframe>
          </Grid2>
          <Stack direction={"column"} width={600} sx={{ ml: 2 }}>
            <Typography variant="h5" sx={{ color: "white", mt: -7, mb: 1 }}>
              <b>Impressum & Kontakt</b>
            </Typography>
            <Grid2 height={3} width={500} bgcolor={"gray"}>
              <Grid2
                height={7}
                width={150}
                bgcolor={theme.palette.primary?.main}
              ></Grid2>
            </Grid2>
            <List>
              <ListItem sx={{ mt: 0 }}>
                <ListItemIcon>
                  <KeyboardArrowRightIcon
                    sx={{
                      color: theme.palette.primary?.main,
                      fontSize: 22,
                    }}
                  />
                </ListItemIcon>
                <ListItemText sx={{ color: "white" }}>
                  <Typography
                    sx={{ fontSize: 16 }}
                    color={theme.palette.grey[300]}
                  >
                    <Link underline="none" color={theme.palette.grey[300]}>
                      Kontakt
                    </Link>
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem sx={{ mt: -2 }}>
                <ListItemIcon>
                  <KeyboardArrowRightIcon
                    sx={{
                      color: theme.palette.primary?.main,
                      fontSize: 22,
                    }}
                  />
                </ListItemIcon>
                <ListItemText sx={{ color: "white" }}>
                  <Typography
                    sx={{ fontSize: 16 }}
                    color={theme.palette.grey[300]}
                  >
                    <Link underline="none" color={theme.palette.grey[300]}>
                      Abteilungen
                    </Link>
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem sx={{ mt: -2 }}>
                <ListItemIcon>
                  <KeyboardArrowRightIcon
                    sx={{
                      color: theme.palette.primary?.main,
                      fontSize: 22,
                    }}
                  />
                </ListItemIcon>
                <ListItemText sx={{ color: "white" }}>
                  <Typography
                    sx={{ fontSize: 16 }}
                    color={theme.palette.grey[300]}
                  >
                    <Link underline="none" color={theme.palette.grey[300]}>
                      AGB
                    </Link>
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem sx={{ mt: -2 }}>
                <ListItemIcon>
                  <KeyboardArrowRightIcon
                    sx={{
                      color: theme.palette.primary?.main,
                      fontSize: 22,
                    }}
                  />
                </ListItemIcon>
                <ListItemText sx={{ color: "white" }}>
                  <Typography
                    sx={{ fontSize: 16 }}
                    color={theme.palette.grey[300]}
                  >
                    <Link underline="none" color={theme.palette.grey[300]}>
                      Impressum
                    </Link>
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem sx={{ mt: -2 }}>
                <ListItemIcon>
                  <KeyboardArrowRightIcon
                    sx={{
                      color: theme.palette.primary?.main,
                      fontSize: 22,
                    }}
                  />
                </ListItemIcon>
                <ListItemText>
                  <Typography
                    sx={{ fontSize: 16 }}
                    color={theme.palette.grey[300]}
                  >
                    <Link underline="none" color={theme.palette.grey[300]}>
                      Datenschutzerklärung
                    </Link>
                  </Typography>
                </ListItemText>
              </ListItem>
            </List>
          </Stack>
        </Stack>
      </Box>
      <Box
        sx={{
          backgroundColor: theme.palette.success?.main,
          textAlign: "center",
        }}
      >
        <Typography variant="h6" color={theme.palette.primary?.main}>
          Copyright © 2024 BSB Bretten |{"\t"}
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
