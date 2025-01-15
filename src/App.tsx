import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import Fab from "@mui/material/Fab";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Department1 from "./components/Department1";
import Department2 from "./components/Department2";
import Department3 from "./components/Department3";
import Department4 from "./components/Department4";
import Department5 from "./components/Department5";
import Department6 from "./components/Department6";

function App() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/GewerblicheBerufsschule" element={<Department1 />} />
          <Route path="/KaufmaennischeBerufsschule" element={<Department2 />} />
          <Route path="/UebergangSchule&Beruf" element={<Department3 />} />
          <Route
            path="/Hauswirtschaftlich-sozialwissenschaftlicheSchule"
            element={<Department4 />}
          />
          <Route path="/Berufskollegs" element={<Department5 />} />
          <Route path="/BeruflicheGymnasien" element={<Department6 />} />
        </Routes>
        {show && (
          <Fab
            variant="circular"
            onClick={scrollToTop}
            sx={{
              position: "fixed",
              bottom: 30,
              right: 30,
              zIndex: 1000
            }}
          >
            <ArrowUpwardIcon />
          </Fab>
        )}
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
