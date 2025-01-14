import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import style from "../style";
import { useEffect, useState } from "react";
import {
  Drawer,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const pages = [
  {
    title: "AKTUELLES",
    link: "/",
  },
  {
    title: "SCHULGEMEINDE",
    dropdownItems: [
      { page: "Speiseplan", link: "/" },
      { page: "Schulleitung", link: "/" },
      { page: "Sekreteriat", link: "/" },
      { page: "Kollegium", link: "/" },
    ],
  },
  {
    title: "BSB-INTERN",
    dropdownItems: [
      {
        page: "Webuntis",
        link: "https://borys.webuntis.com/WebUntis/index.do;jsessionid=E4047A9BB7C2553AD07859B48C4A8D22#/basic/login",
      },
      {
        page: "PaedML",
        link: "https://intranet.bsb-bretten.de/nextcloud/login",
      },
      { page: "Schülermoodle", link: "https://bw.schule/login" },
    ],
  },
  {
    title: "ANMELDUNG",
    dropdownItems: [
      {
        page: "Berufsschulen",
        link: "https://bsb-bretten.de/wp-content/uploads/2024/11/Aufnahmeantrag_Berufsschule_2025-26.pdf",
      },
      {
        page: "Einjährige Berufsschule - Metall",
        link: "https://bsb-bretten.de/wp-content/uploads/2024/11/Aufnahmeantrag_AVDual_1BFMF_2025-26.pdf",
      },
      {
        page: "Fachschule für Technik",
        link: "https://bsb-bretten.de/wp-content/uploads/2024/11/Aufnahmeantrag_FTM_2025-26.pdf",
      },
      {
        page: "AVDual",
        link: "https://bsb-bretten.de/wp-content/uploads/2024/11/Aufnahmeantrag_AVDual_1BFMF_2025-26.pdf",
      },
      {
        page: "VABO",
        link: "https://bsb-bretten.de/wp-content/uploads/2024/11/Aufnahmeantrag_VABO_2025-26.pdf",
      },
      {
        page: "Berufsfachschulen zur Aus- und Weiterbildung",
        link: "https://bsb-bretten.de/wp-content/uploads/2024/11/Aufnahmeantrag_BFS_berufliche_Weiterb._2025-26.pdf",
      },
      {
        page: "Aufbaukurs Gruppenleitung",
        link: "https://bsb-bretten.de/wp-content/uploads/2024/02/Anmeldeformular_Aufbaukurs_Gruppenleitung_2024.pdf",
      },
      {
        page: "BKFH",
        link: "https://bsb-bretten.de/wp-content/uploads/2024/11/Aufnahmeantrag_BKFH_2025-26.pdf",
      },
    ],
  },
  {
    title: "KONTAKT",
    dropdownItems: [
      { page: "Impressum", link: "/" },
      { page: "Datenschutzerklärung", link: "/" },
    ],
  },
];

const Navbar: React.FC = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("lg"));
  const [openMenu, setOpenMenu] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(openMenu);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  useEffect(() => {
    if (openMenu) {
      setTimeout(() => {
        setDrawerOpen(true);
      }, 200);
    } else {
      setDrawerOpen(false);
    }
  }, [openMenu]);

  const handleDropdownToggle = (index: number) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <>
      <AppBar
        sx={{
          zIndex: 1550,
          display: "flex",
          position: "sticky",
          bgcolor: style.palette.background.paper,
        }}
      >
        <Container
          sx={{
            display: "flex",
            minWidth: "100%",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Toolbar disableGutters sx={{ width: "100%", mt: 1, mb: 1 }}>
            <img
              src="\assets\logo.png"
              alt="Logo"
              width={100}
              height={100}
              style={{
                cursor: "pointer",
                marginLeft: 30,
                padding: 20,
              }}
            />

            {!isSmallScreen ? (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <Box
                  sx={{
                    flexGrow: 1,
                    display: "flex",
                    position: "relative",
                    justifyContent: "flex-end",
                    marginRight: 3,
                  }}
                >
                  {pages.map((page, index) => (
                    <Box
                      key={index}
                      sx={{
                        position: "relative",
                        "&:hover .dropdown": { display: "block" },
                      }}
                    >
                      <Box
                        sx={{
                          color: theme.palette.text.primary,
                          display: "flex",
                          alignItems: "center",
                          padding: 1,
                          userSelect: "none", // Prevent text selection
                          "&:hover": {
                            color: theme.palette.primary.main,
                            "& .dropdownIcon": {
                              color: theme.palette.primary.main, // Change icon color when hovering over Box
                            },
                          },
                          ...(openDropdown === index && {
                            color: theme.palette.primary.main,
                          }),
                        }}
                      >
                        <Typography fontSize={17}>
                          <strong>{page.title}</strong>
                        </Typography>
                        {page.dropdownItems &&
                          page.dropdownItems.length > 0 && (
                            <KeyboardArrowDownIcon
                              className="dropdownIcon"
                              sx={{
                                color:
                                  openDropdown === index
                                    ? theme.palette.primary.main
                                    : "#373b3f",
                                "&:hover": {
                                  color: theme.palette.primary.main, // Change icon color on hover
                                },
                              }}
                            />
                          )}
                      </Box>
                      {page.dropdownItems && page.dropdownItems.length > 0 && (
                        <Box
                          className="dropdown"
                          sx={{
                            display: "none",
                            position: "absolute",
                            bgcolor: "background.paper",
                            boxShadow: 3,
                            zIndex: 1000,
                            minWidth: 150,
                          }}
                        >
                          {page.dropdownItems.map((subitem, subIndex) => (
                            <ListItem key={subIndex}>
                              <ListItemButton
                                sx={{
                                  "&:hover": {
                                    bgcolor: theme.palette.primary.light,
                                  },
                                }}
                              >
                                <a
                                  href={subitem.link}
                                  style={{
                                    textDecoration: "none",
                                    color: "inherit",
                                  }}
                                >
                                  <ListItemText
                                    primary={subitem.page}
                                    primaryTypographyProps={{
                                      style: {
                                        color: theme.palette.primary.main,
                                      },
                                    }}
                                  />
                                </a>
                              </ListItemButton>
                            </ListItem>
                          ))}
                        </Box>
                      )}
                    </Box>
                  ))}
                </Box>
              </Box>
            ) : (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "end",
                  width: "100%",
                }}
              >
                <IconButton onClick={() => setOpenMenu(!openMenu)}>
                  <MenuIcon />
                </IconButton>
                <Drawer
                  anchor="right"
                  open={drawerOpen}
                  onClose={() => setOpenMenu(false)}
                  sx={{
                    zIndex: 1551,
                    "& .MuiDrawer-paper": {
                      pt: 2,
                    },
                  }}
                >
                  {pages.map((page, index) => (
                    <Box key={index}>
                      <ListItem disablePadding>
                        <ListItemButton
                          onClick={() => handleDropdownToggle(index)}
                          sx={{
                            "&:hover": {
                              bgcolor: theme.palette.primary.light,
                            },
                            ...(openDropdown === index && {
                              bgcolor: theme.palette.primary.main,
                              color: theme.palette.common.white,
                            }),
                          }}
                        >
                          <ListItemText primary={page.title} />
                          {page.dropdownItems && (
                            <KeyboardArrowDownIcon
                              sx={{
                                transform:
                                  openDropdown === index
                                    ? "rotate(180deg)"
                                    : "rotate(0deg)",
                                transition: "transform 0.2s ease",
                              }}
                            />
                          )}
                        </ListItemButton>
                      </ListItem>
                      {openDropdown === index &&
                        page.dropdownItems &&
                        page.dropdownItems.map((subItem, subIndex) => (
                          <ListItem key={subIndex} disablePadding>
                            <ListItemButton
                              sx={{
                                pl: 4,
                                "&:hover": {
                                  bgcolor: theme.palette.primary.light,
                                },
                              }}
                            >
                              <a
                                href={subItem.link}
                                style={{
                                  textDecoration: "none",
                                  color: "inherit",
                                }}
                              >
                                <ListItemText primary={subItem.page} />
                              </a>
                            </ListItemButton>
                          </ListItem>
                        ))}
                    </Box>
                  ))}
                </Drawer>
              </Box>
            )}
          </Toolbar>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <IconButton
              component="a"
              href="https://www.facebook.com/bsbbretten"
              target="_blank"
            >
              <img
                src="\assets\facebookIc.png"
                alt="Facebook"
                style={{
                  width: 40,
                  height: 40,
                  objectFit: "contain",
                }}
              />
            </IconButton>
            <IconButton
              component="a"
              href="https://www.instagram.com/bsb_bretten/"
              target="_blank"
            >
              <img
                src="\assets\instagramIc.png"
                alt="Instagram"
                style={{
                  width: 40,
                  height: 40,
                  objectFit: "contain",
                }}
              />
            </IconButton>
            <IconButton
              component="a"
              href="https://bw.schule/login"
              target="_blank"
            >
              <img
                src="\assets\moodleIc.png"
                alt="Moodle"
                style={{
                  width: 40,
                  height: 40,
                  objectFit: "contain",
                }}
              />
            </IconButton>
            <IconButton
              component="a"
              href="https://webuntis.com/#/basic/login"
              target="_blank"
            >
              <img
                src="\assets\webUntisIc.png"
                alt="WebUnite"
                style={{
                  width: 40,
                  height: 40,
                  objectFit: "contain",
                }}
              />
            </IconButton>
          </Box>
        </Container>
      </AppBar>
    </>
  );
};

export default Navbar;
