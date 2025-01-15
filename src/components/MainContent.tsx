import DepartmentComponent from "./DepartmentComponent";
import {
  Avatar,
  Box,
  Container,
  Grid2,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import { members } from "./Resources";
import Banner from "./Banner";
import style from "../style";

const news = [
  {
    url: "https://bsb-bretten.de/2024/10/11/https-bsb-bretten-de-wp-content-uploads-2024-10-jungerukrainerfsj-jpeg/",
    image:
      "https://bsb-bretten.de/wp-content/uploads/2024/10/JungerUkrainerFSJ-300x225.jpeg",
    subTitle: "Junger Ukrainer möchte Fachinformatiker werden",
    title: "Erstmals FSJ digital an den Beruflichen Schulen Bretten",
  },
  {
    url: "https://bsb-bretten.de/2024/07/28/verabschiedung-von-markus-bader-an-den-bsb/",
    image:
      "https://bsb-bretten.de/wp-content/uploads/2024/07/240726_Verabschiedung-Bader-300x195.jpeg",
    subTitle: "Verabschiedung von Markus Bader an den BSB",
    title: "Ein sehr aufmerksamer und sehr vertrauensvoller Pädagoge",
  },
  {
    url: "https://bsb-bretten.de/2024/07/16/7904/",
    image:
      "https://bsb-bretten.de/wp-content/uploads/2024/07/240716_Abschlussfeier_02-300x170.jpeg",
    subTitle: "Entlassungsfeier der BSB erstmals im Hallenzentrum „Grüner“",
    title:
      "Nicht weghören, sondern zuhören muss das Motto für die Zukunft sein",
  },
  {
    url: "https://bsb-bretten.de/2024/07/15/chemiekurs-setzt-theoriet-in-praxis-um/",
    image:
      "https://bsb-bretten.de/wp-content/uploads/2024/07/240715_ChemieBach_01-300x169.jpg",
    subTitle: "Chemiekurs setzt Theorie in Praxis um",
    title: "Spannende Entdeckungen am Gölshäuser Dorfbach",
  },
  {
    url: "https://bsb-bretten.de/2024/07/12/melanchthon-schuelerpreis-mit-750-euro-fuer-laura-katz-sgg/",
    image:
      "https://bsb-bretten.de/wp-content/uploads/2024/07/240711_Melanchthonpreis-225x300.jpg",
    subTitle: "Melanchthon-Schülerpreis mit 750 Euro für Laura Katz (SGG)",
    title: "In Sachen Ehrenamt ein Vorbild für die gesamte Schülerschaft",
  },
];

const MainContent = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <>
      <Banner />
      <Box
        sx={{
          bgcolor: style.palette.background.paper,
        }}
      >
        <DepartmentComponent />
        <Grid2
          size={{
            xs: 12,
            md: 8,
          }}
        >
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            sx={{ mt: 10, mr: 15, ml: 15 }}
          >
            <Typography
              sx={{
                color: "darkblue",
                textAlign: "center",
                fontSize: "50px",
              }}
            >
              <i>
                <b>Liebe Schülerinnen und Schüler</b>
              </i>
            </Typography>
            <Typography
              variant="subtitle1"
              fontSize="large"
              sx={{ textAlign: "center" }}
            >
              <br />
              Die ersten sieben Wochen des Schuljahres liegen hinter uns und die
              Zeit ist – wie immer – wie im Fluge vergangen. Erste Tests und
              Klausuren sind geschrieben worden und nach den Herbstferien fällt
              mit den ersten Abschlussprüfungen der Gewerblichen und
              Kaufmännischen Abteilungen der Startschuss für unseren
              alljährlichen Prüfungsmarathon.
              <br />
              <br /> Das gesamte Schulleitungsteam und alle Lehrerinnen und
              Lehrer wünschen euch schöne Herbstferien bei hoffentlich gutem
              Wetter. Genießt die freien Tage und erholt euch gut.
              <br />
              <br /> Wir freuen uns, wenn wir uns nach den Herbstferien wieder
              sehen.
              <br />
              <br /> Nicole Roeder, Schulleiterin
              <br />
              <br />
              <br /> Die Westerwaldschule Driedorf ist eine integrierte
              Gesamtschule mit Grundstufe und hat für alle Kinder und
              Jugendliche der Großgemeinde Driedorf und ihren Einzugsbereich
              folgendes zu bieten: <br /> <br />
              <List>
                <ListItem>
                  <ListItemIcon>
                    <CircleIcon sx={{ color: "black", fontSize: 12 }} />
                  </ListItemIcon>
                  <ListItemText>
                    <Typography>
                      alle Bildungsgänge im gegliederten Schulsystem vom 1. bis
                      zum 10. Schuljahr (Grundschule, Haupt-, Realschule und
                      Gymnasium)
                    </Typography>
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CircleIcon sx={{ color: "black", fontSize: 12 }} />
                  </ListItemIcon>
                  <ListItemText>
                    <Typography>
                      Schwerpunktklassen (iPad-, Kreativ-, Natur-Klasse) ab dem
                      5.Schuljahr
                    </Typography>
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CircleIcon sx={{ color: "black", fontSize: 12 }} />
                  </ListItemIcon>
                  <ListItemText>
                    <Typography>
                      eine leistungsbezogene Differenzierung in A-, B-, C-Kurse
                      in den Fächern Mathematik und Englisch ab dem 6. Schuljahr
                    </Typography>
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CircleIcon sx={{ color: "black", fontSize: 12 }} />
                  </ListItemIcon>
                  <ListItemText>
                    <Typography>
                      eine leistungsbezogene Differenzierung in A-, B-, C-Kurse
                      im Fach Deutsch ab dem 7. Schuljahr
                    </Typography>
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CircleIcon sx={{ color: "black", fontSize: 12 }} />
                  </ListItemIcon>
                  <ListItemText>
                    <Typography>
                      die Fremdsprachen Englisch, Französisch und Latein
                    </Typography>
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CircleIcon sx={{ color: "black", fontSize: 12 }} />
                  </ListItemIcon>
                  <ListItemText>
                    <Typography>
                      ein vielfältiges Angebot an Wahlpflichtkursen und
                      Arbeitsgemscheinschaften
                    </Typography>
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CircleIcon sx={{ color: "black", fontSize: 12 }} />
                  </ListItemIcon>
                  <ListItemText>
                    <Typography>
                      abschlussbezogene Klassen, die das Ziel eines
                      Hauptschulabschlusses, Realschulabschlusses oder der
                      gymnasialen Eignung haben
                    </Typography>
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CircleIcon sx={{ color: "black", fontSize: 12 }} />
                  </ListItemIcon>
                  <ListItemText>
                    <Typography>
                      Pakt für den Nachmittag in der Grundschule
                    </Typography>
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CircleIcon sx={{ color: "black", fontSize: 12 }} />
                  </ListItemIcon>
                  <ListItemText>
                    <Typography>
                      individuelle Förderung durch innere und äußere
                      Differenzierung
                    </Typography>
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CircleIcon sx={{ color: "black", fontSize: 12 }} />
                  </ListItemIcon>
                  <ListItemText>
                    <Typography>einen wohnortnahen Schulstandort</Typography>
                  </ListItemText>
                </ListItem>
              </List>
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: 6,
              mb: 10,
              gap: 20,
            }}
          >
            <Box
              sx={{
                width: "450px",
                height: "650px",
                position: "relative",
                overflow: "hidden",
                borderRadius: 4,
                boxShadow: 8,
                "&:hover img": {
                  transform: "scale(1.05)",
                  transition: "transform 0.3s ease",
                },
              }}
            >
              <Link
                href="https://www.unserebroschuere.de/BSB/WebView/"
                underline="none"
              >
                <Grid2
                  component="img"
                  src="assets/Infobroschuere_bretten.jpg"
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    display: "block",
                  }}
                />
              </Link>
            </Box>

            <Box
              sx={{
                width: "450px",
                height: "650px",
                position: "relative",
                overflow: "hidden",
                borderRadius: 4,
                boxShadow: 8,
                "&:hover img": {
                  transform: "scale(1.05)",
                  transition: "transform 0.3s ease",
                },
              }}
            >
              <Link
                href="https://bsb-bretten.de/wp-content/uploads/2024/11/Infotag_2025.png"
                underline="none"
              >
                <Grid2
                  component="img"
                  src="assets/Infotag.png"
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    display: "block",
                  }}
                />
              </Link>
            </Box>
          </Box>

          <Box sx={{ bgcolor: theme.palette.primary.main, pb: 10 }}>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="center"
              sx={{
                pt: 10,
                pb: 3,
                marginBottom: 3,
                textAlign: "start",
              }}
            >
              <img
                src="/assets/category.png"
                alt="Category"
                style={{
                  width: 40,
                  height: 40,
                  marginRight: 12,
                }}
              />
              <Typography
                variant="h4"
                sx={{
                  fontWeight: "bold",
                  color: theme.palette.common.white,
                }}
              >
                Unser Team die BSB
              </Typography>
            </Stack>
            <Container sx={{ padding: 1 }}>
              <Stack
                useFlexGap
                spacing={{ xs: 2, sm: 6 }}
                direction="row"
                justifyContent="center"
                alignItems="center"
                sx={{
                  flexWrap: "wrap",
                }}
              >
                <Grid2
                  container
                  spacing={2}
                  sx={{ flexWrap: "wrap", justifyContent: "center" }}
                >
                  {members.slice(0, 2).map((member, index) => (
                    <Grid2
                      key={index}
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        textAlign: "center",
                        width: "100%",
                        "@media (min-width:600px)": {
                          width: "48%",
                        },
                        "@media (min-width:900px)": {
                          width: "48%",
                        },
                        "@media (min-width:1200px)": {
                          width: "48%",
                        },
                      }}
                    >
                      <Stack direction="column" spacing={1.5}>
                        <Link underline="none">
                          <Avatar
                            src={member.image}
                            sx={{
                              mb: 1,
                              width: 200,
                              height: 200,
                              borderRadius: "10px",
                              transition:
                                "transform 0.3s ease, background-color 0.3s ease",
                              "&:hover": {
                                transform: "scale(1.05)",
                              },
                              "&:active": {
                                transform: "scale(1.2)",
                              },
                            }}
                          />
                        </Link>
                        <Typography
                          color={theme.palette.common.white}
                          sx={{
                            fontWeight: "bold",
                            textAlign: "left",
                            fontSize: "27px",
                            lineHeight: 1.3,
                          }}
                        >
                          {member.name.split(" ").map((part, index) => (
                            <span key={index}>
                              {part}
                              {index === 0 && <br />}{" "}
                            </span>
                          ))}
                        </Typography>
                        <Typography
                          variant="subtitle1"
                          whiteSpace="nowrap"
                          color={theme.palette.common.white}
                          sx={{
                            textAlign: "left",
                          }}
                        >
                          {member.title}
                        </Typography>
                      </Stack>
                    </Grid2>
                  ))}
                </Grid2>

                <Grid2
                  container
                  spacing={2}
                  sx={{ flexWrap: "wrap", justifyContent: "center" }}
                >
                  {members.slice(2).map((member, index) => (
                    <Grid2
                      key={index}
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "flex-start",
                        textAlign: "center",
                        width: "100%",
                        height: "auto",
                        "@media (min-width:600px)": {
                          width: "29.7%",
                        },
                        "@media (min-width:900px)": {
                          width: "25.7%",
                        },
                        "@media (min-width:1200px)": {
                          width: "18.7%",
                        },
                      }}
                    >
                      <Stack direction="column" spacing={1.5}>
                        <Link underline="none">
                          <Avatar
                            src={member.image}
                            sx={{
                              mb: 1,
                              width: 200,
                              height: 200,
                              borderRadius: "10px",
                              transition:
                                "transform 0.3s ease, background-color 0.3s ease",
                              "&:hover": {
                                transform: "scale(1.05)",
                              },
                              "&:active": {
                                transform: "scale(1.2)",
                              },
                            }}
                          />
                        </Link>
                        <Typography
                          color={theme.palette.common.white}
                          sx={{
                            fontWeight: "bold",
                            textAlign: "left",
                            fontSize: "27px",
                            lineHeight: 1.3,
                            minHeight: 54,
                          }}
                        >
                          {member.name.split(" ").map((part, index) => (
                            <span key={index}>
                              {part}
                              {index === 0 && <br />}
                            </span>
                          ))}
                        </Typography>
                        <Typography
                          variant="subtitle1"
                          whiteSpace="nowrap"
                          sx={{
                            textAlign: "left",
                            minHeight: 50,
                            lineHeight: 1.4,
                          }}
                          color={theme.palette.common.white}
                        >
                          {member.title.split("\n").map((part, index) => (
                            <span key={index}>
                              {part}
                              {index < 2 && <br />}
                            </span>
                          ))}
                        </Typography>
                      </Stack>
                    </Grid2>
                  ))}
                </Grid2>
              </Stack>
            </Container>
          </Box>

          <Box>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="center"
              sx={{
                pt: 10,
                pb: 3,
                marginBottom: 3,
                textAlign: "start",
              }}
            >
              <img
                src="/assets/category.png"
                alt="Category"
                style={{
                  width: 40,
                  height: 40,
                  marginRight: 12,
                }}
              />
              <Typography
                variant="h4"
                sx={{
                  fontWeight: "bold",
                  color: style.palette.primary.main,
                }}
              >
                Videos
              </Typography>
            </Stack>
            <Stack
              useFlexGap
              direction={isLargeScreen ? "row" : "column"}
              padding={1}
              spacing={{ sm: 2, md: 6 }}
              sx={{
                display: "flex",
                alignItems: isLargeScreen ? "flex-end" : "center",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <Grid2 justifyItems="center" sx={{ textAlign: "center" }}>
                <video
                  height={isLargeScreen ? 300 : 200} // Adjust height on smaller screens
                  width={isLargeScreen ? 500 : "100%"} // Make the video responsive on smaller screens
                  controls
                >
                  <source
                    src="https://bsb-bretten.de/wp-content/uploads/2021/10/210122_Imagefilm_BSB.mp4"
                    type="video/mp4"
                  />
                </video>
                <Typography variant="subtitle1">Imagefilm</Typography>
              </Grid2>
              <Grid2 justifyItems="center" sx={{ textAlign: "center" }}>
                <Link href="https://www.unserebroschuere.de/video/20AA30190">
                  <img
                    src="https://bsb-bretten.de/wp-content/uploads/2023/02/thumbnail.jpg"
                    height={isLargeScreen ? 290 : 200} // Adjust height on smaller screens
                    width={isLargeScreen ? 500 : "100%"} // Make the image responsive on smaller screens
                    alt="Thumbnail"
                  />
                </Link>
                <Typography variant="subtitle1">Wir bilden Zukunft</Typography>
              </Grid2>
              <Grid2 justifyItems="center" sx={{ textAlign: "center" }}>
                <video
                  height={isLargeScreen ? 300 : 200} // Adjust height on smaller screens
                  width={isLargeScreen ? 500 : "100%"} // Make the video responsive on smaller screens
                  controls
                >
                  <source
                    src="https://bsb-bretten.de/wp-content/uploads/2021/10/210202_BSB_Schulhausrundgang.mp4"
                    type="video/mp4"
                  />
                </video>
                <Typography variant="subtitle1">
                  Tour durchs Schulhaus
                </Typography>
              </Grid2>
            </Stack>
          </Box>
        </Grid2>
        <Grid2
          size={{ xs: 12, md: 4 }}
          sx={{
            justifyItems: "center",
            pt: 10,
            mt: 10,
            bgcolor: theme.palette.primary.main,
          }}
        >
          <Box width={"90%"}>
            <Grid2
              height={"100%"}
              sx={{
                mb: 4,
                justifyItems: "center",
              }}
            >
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="center"
                sx={{
                  pb: 3,
                  marginBottom: 3,
                  textAlign: "start",
                }}
              >
                <img
                  src="/assets/category.png"
                  alt="Category"
                  style={{
                    width: 40,
                    height: 40,
                    marginRight: 12,
                  }}
                />
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: "bold",
                    color: theme.palette.common.white,
                  }}
                >
                  Was gibt es Neues?
                </Typography>
              </Stack>
            </Grid2>
          </Box>
          <Box
            width={"90%"}
            sx={{
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: 2,
              pb: 5,
            }}
          >
            {news.map((item, index) => (
              <Link
                key={index}
                href={item.url}
                underline="none"
                sx={{
                  width: "100%",
                  alignItems: "center",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    gap: 3,
                    width: "80%",
                    marginBottom: 4,
                    boxShadow: 2,
                    borderRadius: 2,
                    transition: "all 0.3s ease-in-out",
                    "&:hover": {
                      boxShadow: 8,
                      transform: "scale(1.1)",
                    },
                    "&:active": {
                      transform: "scale(1.2)",
                    },
                    bgcolor: theme.palette.common.white,
                  }}
                >
                  <Box
                    sx={{
                      width: 370,
                      height: 200,
                      overflow: "hidden",
                      borderRadius: 2,
                      position: "relative",
                    }}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      flex: 1,
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "0.9rem",
                        fontWeight: "bold",
                        color: theme.palette.primary.main,
                        textAlign: "left",
                        marginTop: 1,
                      }}
                    >
                      {item.subTitle}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "1.7rem",
                        fontWeight: "bold",
                        color: theme.palette.primary.main,
                        textAlign: "left",
                        marginTop: 1,
                      }}
                    >
                      {item.title}
                    </Typography>
                  </Box>
                </Box>
              </Link>
            ))}
          </Box>
        </Grid2>
      </Box>
    </>
  );
};

export default MainContent;
