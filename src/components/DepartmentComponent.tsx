import { Grid2, Stack, Typography, useMediaQuery } from "@mui/material";
import { expertieses } from "./Resources";
import ApartmentIcon from "@mui/icons-material/Apartment";
import CalculateIcon from "@mui/icons-material/Calculate";
import SchoolIcon from "@mui/icons-material/School";
import RiceBowlIcon from "@mui/icons-material/RiceBowl";
import EngineeringIcon from "@mui/icons-material/Engineering";
import BookIcon from "@mui/icons-material/Book";
import style from "../style";

const DepartmentComponent = () => {
  const backgroundColors = [
    "#c8e5fa",
    "#fad4e1",
    "#c8f7cc",
    "#ffe7c2",
    "#dbc8f7",
    "#eec1f5",
  ];

  const textColors = [
    "#271d80",
    "#671d82",
    "#7d1b1b",
    "#8a4a20",
    "#42781c",
    "#218d8f",
  ];

  return (
    <>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        sx={{
          pt: 10,
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
          Abteilung Bereich
        </Typography>
      </Stack>
      <Grid2
        container
        mt={5}
        mb={10}
        spacing={{ xs: 2, md: 3 }}
        columns={2}
        sx={{
          flexWrap: useMediaQuery(style.breakpoints.up("xl")) ? "noWrap" : "",
          width: "100%",
          justifyContent: "center",
          zIndex: 99999,
        }}
      >
        {expertieses.map((item, index) => (
          <Grid2
            key={index}
            size={{ xs: 4, sm: 4, md: 4, xl: 1 }}
            sx={{
              maxWidth: useMediaQuery(style.breakpoints.up("xl"))
                ? "15%"
                : "25.33%",
            }}
          >
            <Grid2
              height={300}
              width={"100%"}
              component={"button"}
              borderRadius={5}
              sx={{
                justifySelf: "center",
                alignSelf: "center",
                backgroundColor: backgroundColors[index],
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                padding: "16px",
                textAlign: "start",
                border: 0,
                transition: "transform 0.3s ease, background-color 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                },
                "&:active": {
                  transform: "scale(1.2)",
                },
              }}
            >
              <Stack
                direction="column"
                alignItems="center"
                justifyContent="flex-start"
                spacing={1}
                sx={{
                  height: "100%",
                  width: "100%",
                }}
              >
                <Grid2
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "flex-start",
                  }}
                >
                  {index === 0 && (
                    <ApartmentIcon
                      sx={{
                        mt: 6,
                        fontSize: 70,
                        color: "#271d80",
                        mb: 3,
                      }}
                    />
                  )}
                  {index === 1 && (
                    <CalculateIcon
                      sx={{
                        mt: 6,
                        fontSize: 70,
                        color: "#671d82",
                        mb: 3,
                      }}
                    />
                  )}
                  {index === 2 && (
                    <SchoolIcon
                      sx={{
                        mt: 6,
                        fontSize: 70,
                        color: "#7d1b1b",
                        mb: 3,
                      }}
                    />
                  )}
                  {index === 3 && (
                    <RiceBowlIcon
                      sx={{
                        mt: 6,
                        fontSize: 70,
                        color: "#8a4a20",
                        mb: 3,
                      }}
                    />
                  )}
                  {index === 4 && (
                    <EngineeringIcon
                      sx={{
                        mt: 6,
                        fontSize: 70,
                        color: "#42781c",
                        mb: 3,
                      }}
                    />
                  )}
                  {index === 5 && (
                    <BookIcon
                      sx={{
                        mt: 6,
                        fontSize: 70,
                        color: "#218d8f",
                        mb: 3,
                      }}
                    />
                  )}
                </Grid2>

                <Typography
                  sx={{
                    color: textColors[index],
                    fontWeight: "bold",
                    textAlign: "center",
                    marginTop: "8px",
                    fontSize: "25px",
                  }}
                >
                  {item.name}
                </Typography>
              </Stack>
            </Grid2>
          </Grid2>
        ))}
      </Grid2>
    </>
  );
};

export default DepartmentComponent;
