import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import { useEffect, useState } from "react";
import {
  Drawer,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  useTheme
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { pages } from "./Resources";

const Navbar: React.FC = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("lg"));
  const isMobile = useMediaQuery("(max-width: 600px)");
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
          bgcolor: theme.palette.background.paper
        }}
      >
        <Container
          sx={{
            display: "flex",
            minWidth: "100%",
            alignItems: "center",
            justifyContent: "space-between"
          }}
        >
          <Toolbar disableGutters sx={{ width: "100%", mt: 1, mb: 1 }}>
            <IconButton
              component="a"
              href="/"
              disableRipple
              sx={{
                transition: "transform 0.3s ease-in-out",
                outline: "none",
                "&:hover": {
                  transform: "scale(1.1)"
                },
                "&:active": {
                  transform: "scale(1.2)"
                }
              }}
              onClick={() => (window.location.href = "/")}
            >
              <img
                src="\assets\logo.png"
                alt="Logo"
                width={isMobile ? 40 : 80}
                height={isMobile ? 40 : 80}
                style={{
                  cursor: "pointer"
                }}
              />
            </IconButton>

            {!isSmallScreen ? (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%"
                }}
              >
                <Box
                  sx={{
                    flexGrow: 1,
                    display: "flex",
                    position: "relative",
                    justifyContent: "flex-end",
                    marginRight: 3
                  }}
                >
                  {pages.map((page, index) => (
                    <Box
                      key={index}
                      sx={{
                        position: "relative",
                        "&:hover .dropdown": { display: "block" }
                      }}
                    >
                      <Box
                        sx={{
                          color: theme.palette.text.primary,
                          display: "flex",
                          alignItems: "center",
                          padding: 1,
                          userSelect: "none",
                          "&:hover": {
                            color: theme.palette.primary.main,
                            "& .dropdownIcon": {
                              color: theme.palette.primary.main
                            }
                          },
                          ...(openDropdown === index && {
                            color: theme.palette.primary.main
                          })
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
                                  color: theme.palette.primary.main
                                }
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
                            minWidth: 150
                          }}
                        >
                          {page.dropdownItems.map((subitem, subIndex) => (
                            <ListItem key={subIndex}>
                              <ListItemButton
                                sx={{
                                  "&:hover": {
                                    bgcolor: theme.palette.primary.light
                                  }
                                }}
                              >
                                <a
                                  href={subitem.link}
                                  style={{
                                    textDecoration: "none",
                                    color: "inherit"
                                  }}
                                >
                                  <ListItemText
                                    primary={subitem.page}
                                    primaryTypographyProps={{
                                      style: {
                                        color: theme.palette.primary.main
                                      }
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
                  width: "100%"
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
                      pt: 2
                    }
                  }}
                >
                  {pages.map((page, index) => (
                    <Box key={index}>
                      <ListItem disablePadding>
                        <ListItemButton
                          onClick={() => handleDropdownToggle(index)}
                          sx={{
                            "&:hover": {
                              bgcolor: theme.palette.primary.light
                            },
                            ...(openDropdown === index && {
                              bgcolor: theme.palette.primary.main,
                              color: theme.palette.common.white
                            })
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
                                transition: "transform 0.2s ease"
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
                                  bgcolor: theme.palette.primary.light
                                }
                              }}
                            >
                              <a
                                href={subItem.link}
                                style={{
                                  textDecoration: "none",
                                  color: "inherit"
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
              alignItems: "center"
            }}
          >
            <IconButton
              component="a"
              href="https://www.facebook.com/bsbbretten"
              target="_blank"
              sx={{
                transition: "transform 0.3s ease-in-out",
                "&:hover": {
                  transform: "scale(1.1)"
                },
                "&:active": {
                  transform: "scale(1.2)"
                }
              }}
            >
              <img
                src="\assets\facebookIc.png"
                alt="Facebook"
                style={{
                  width: isMobile ? 30 : 40,
                  height: isMobile ? 30 : 40,
                  objectFit: "contain"
                }}
              />
            </IconButton>
            <IconButton
              component="a"
              href="https://www.instagram.com/bsb_bretten/"
              target="_blank"
              sx={{
                transition: "transform 0.3s ease-in-out",
                "&:hover": {
                  transform: "scale(1.1)"
                },
                "&:active": {
                  transform: "scale(1.2)"
                }
              }}
            >
              <img
                src="\assets\instagramIc.png"
                alt="Instagram"
                style={{
                  width: isMobile ? 30 : 40,
                  height: isMobile ? 30 : 40,
                  objectFit: "contain"
                }}
              />
            </IconButton>
            <IconButton
              component="a"
              href="https://stage.bio/berufliche-schulen-bretten"
              target="_blank"
              sx={{
                transition: "transform 0.3s ease-in-out",
                "&:hover": {
                  transform: "scale(1.1)"
                },
                "&:active": {
                  transform: "scale(1.2)"
                }
              }}
            >
              <img
                src="\assets\stageIc.png"
                alt="WebUnite"
                style={{
                  width: isMobile ? 25 : 35,
                  height: isMobile ? 25 : 35,
                  objectFit: "contain"
                }}
              />
            </IconButton>
            <IconButton
              component="a"
              href="https://bw.schule/login"
              target="_blank"
              sx={{
                transition: "transform 0.3s ease-in-out",
                "&:hover": {
                  transform: "scale(1.1)"
                },
                "&:active": {
                  transform: "scale(1.2)"
                }
              }}
            >
              <img
                src="\assets\moodleIc.png"
                alt="Moodle"
                style={{
                  width: isMobile ? 30 : 40,
                  height: isMobile ? 30 : 40,
                  objectFit: "contain"
                }}
              />
            </IconButton>
            <IconButton
              component="a"
              href="https://webuntis.com/#/basic/login"
              target="_blank"
              sx={{
                transition: "transform 0.3s ease-in-out",
                "&:hover": {
                  transform: "scale(1.1)"
                },
                "&:active": {
                  transform: "scale(1.2)"
                }
              }}
            >
              <img
                src="\assets\webUntisIc.png"
                alt="WebUnite"
                style={{
                  width: isMobile ? 30 : 40,
                  height: isMobile ? 30 : 40,
                  objectFit: "contain"
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
