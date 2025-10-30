import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, Button, Box } from "@mui/material";
import Logo from "../assets/logo3.png";
import { useNavigate, useLocation } from "react-router-dom";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "../contexts/LanguageContext";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t, lang } = useLanguage();

  const scrollTo = (id) => {
    if (location.pathname === "/") {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(`/#${id}`);
    }
  };

  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 150) {
        setActiveSection("");
        return;
      }

      const sections = ["about", "projects", "feedback"];
      for (let id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "about", label: t("About Us") },
    { id: "projects", label: t("Projects") },
    { id: "feedback", label: t("Feedback") },
  ];

  const navButtonSx = (id) => ({
    position: "relative",
    color: activeSection === id ? "#C5B0CD" : "#F3E2D4",
    textTransform: "none",
    fontWeight: 300,
    whiteSpace: "nowrap",
    fontSize: { xs: "0.95rem", md: "1.25rem" },
    px: 0,
    minWidth: 0,
    "&:after": {
      content: '""',
      position: "absolute",
      left: 0,
      bottom: { xs: 0, md: -1 },
      width: activeSection === id ? "100%" : "0%",
      height: "1.5px",
      backgroundColor: "#C5B0CD",
      transition: "width 0.3s ease",
    },
    "&:hover": {
      color: "#C5B0CD",
      "&:after": { width: "100%" },
    },
  });

  const isGreek = lang === "el";

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backgroundColor: "rgba(23,49,62,0.7)",
        backdropFilter: "blur(10px)",
        px: { xs: 1, md: 4 },
        py: isGreek ? { xs: 0.8, md: 1.2 } : { xs: 0.3, md: 0.5 },
      }}
    >
      <Toolbar
        disableGutters
        sx={{
          display: "flex",
          alignItems: "center",
          height: isGreek ? { xs: 64, md: 60 } : { xs: 52, md: 60 },
          position: "relative",
        }}
      >
        <Box
          onClick={() => {
            if (location.pathname === "/") {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            } else {
              navigate("/", { state: { scrollToTop: true } });
            }
          }}
          sx={{
            cursor: "pointer",
            ml: { xs: 0.5, md: 1.5 },
            transition: "transform 0.3s ease",
            "&:hover": { transform: "scale(1.15) rotate(-3deg)" },
          }}
        >
          <Box
            component="img"
            src={Logo}
            alt="Odyssey Logo"
            sx={{
              height: { xs: 42, md: 64 },
              filter: "drop-shadow(0 0 3px rgba(255,255,255,0.15))",
              borderRadius: 1,
            }}
          />
        </Box>

        <Box
          sx={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: isGreek ? { xs: "column", md: "row" } : "row",
            alignItems: "center",
            gap: { xs: 2, md: 4 },
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          {isGreek ? (
            <>
              <Box
                sx={{
                  display: "flex",
                  gap: { xs: 1.5, md: 3 },
                  alignItems: "center",
                  pt: { xs: 0.2, md: 0.4 },
                }}
              >
                {navItems.slice(0, 2).map(({ id, label }) => (
                  <Button
                    key={id}
                    onClick={() => scrollTo(id)}
                    sx={navButtonSx(id)}
                  >
                    {label}
                  </Button>
                ))}
              </Box>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  mt: { xs: -2.5, md: 0 },
                }}
              >
                <Button
                  onClick={() => scrollTo("feedback")}
                  sx={{
                    ...navButtonSx("feedback"),
                    fontSize: { xs: "0.9rem", md: "1.25rem" },
                  }}
                >
                  {navItems[2].label}
                </Button>
              </Box>
            </>
          ) : (
            navItems.map(({ id, label }) => (
              <Button
                key={id}
                onClick={() => scrollTo(id)}
                sx={navButtonSx(id)}
              >
                {label}
              </Button>
            ))
          )}
        </Box>

        <Box
          sx={{
            marginLeft: "auto",
            mr: { xs: 0.5, md: 1.5 },
            display: "flex",
            alignItems: "center",
          }}
        >
          <LanguageSwitcher />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
