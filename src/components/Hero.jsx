import React, { useEffect, useState, useRef } from "react";
import { Box, Typography, Button } from "@mui/material";
import Logo from "../assets/logo3.png";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import flag_photo from "../assets/flag_photo.jpeg";
import romania2 from "../assets/romania1_2.png";
import romania3 from "../assets/romania3.jpg";
import romania2_3 from "../assets/romania2_2.jpg";

const images = [flag_photo, romania2, romania3, romania2_3];

const Hero = () => {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  useEffect(() => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, 4000);
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <Box
      id="home"
      sx={{
        position: "relative",
        height: { xs: "calc(100vh - 52px)", md: "calc(100vh - 60px)" },
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        px: { xs: 4, md: 8 },
        zIndex: 2,
        background: "linear-gradient(120deg, #C5B0CD 30%, #415E72 100%)",
      }}
    >
      <Box
        aria-hidden="true"
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
        }}
      >
        {images.map((src, i) => {
          const isActive = i === index;
          return (
            <Box
              key={src}
              component="img"
              src={src}
              alt={`background-${i}`}
              sx={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                opacity: isActive ? 1 : 0,
                transition: "opacity 1s ease-in-out, transform 8s ease-in-out",
                transform: isActive ? "scale(1.04)" : "scale(1)",
                filter: "brightness(0.95) contrast(1.05)",
              }}
            />
          );
        })}

        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(65,94,114,0.25) 0%, rgba(65,94,114,0.45) 70%, rgba(25,34,42,0.55) 100%)",
            zIndex: 1,
            pointerEvents: "none",
          }}
        />
      </Box>

      <Box
        sx={{
          position: "absolute",
          top: "-20%",
          right: "-10%",
          width: { xs: 200, md: 300 },
          height: { xs: 200, md: 300 },
          bgcolor: "rgba(243,226,212,0.25)",
          borderRadius: "50%",
          zIndex: 3,
          filter: "blur(8px)",
        }}
      />

      <Box
        component="img"
        src={Logo}
        alt="Odyssey Logo"
        sx={{
          width: { xs: 200, md: 280 },
          mb: 2,
          filter: "drop-shadow(0 6px 16px rgba(0,0,0,0.4))",
          position: "relative",
          zIndex: 4,
        }}
      />

      <Typography
        variant="h1"
        sx={{
          fontSize: { xs: "2.25rem", md: "3.5rem" },
          color: "#F3E2D4",
          letterSpacing: "0.04em",
          mb: 2,
          textShadow: "2px 2px 10px rgba(0,0,0,0.4)",
          zIndex: 4,
        }}
      >
        Odyssey of Wisdom
      </Typography>

      <Typography
        variant="h6"
        maxWidth={600}
        sx={{
          fontFamily: "Inter, sans-serif",
          fontSize: { xs: "1rem", md: "1.25rem" },
          color: "#F3E2D4",
          letterSpacing: "0.02em",
          lineHeight: 1.6,
          mb: 4,
          textShadow: "1px 1px 6px rgba(0,0,0,0.25)",
          zIndex: 4,
        }}
      >
        Connecting Greek youth with Erasmus+ opportunities for travel, learning,
        and cultural exchange across Europe.
      </Typography>

      <Button
        endIcon={<ExpandMoreIcon />}
        variant="contained"
        size="large"
        sx={{
          backgroundColor: "#F3E2D4",
          color: "#415E72",
          px: 5,
          py: 1.75,
          borderRadius: "30px",
          fontFamily: "Inter, sans-serif",
          fontWeight: 600,
          textTransform: "none",
          boxShadow: "0 6px 14px rgba(0,0,0,0.2)",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          "&:hover": {
            transform: "translateY(-2px)",
            boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
            backgroundColor: "#e5d7ce",
          },
          zIndex: 4,
        }}
        onClick={() =>
          document
            .getElementById("about")
            ?.scrollIntoView({ behavior: "smooth" })
        }
      >
        Learn more
      </Button>

      <Box
        component="svg"
        viewBox="0 0 1440 100"
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "auto",
          zIndex: 4,
        }}
      >
        <path
          fill="#F3E2D4"
          d="M0,40 C360,140 1080,-60 1440,40 L1440,100 L0,100 Z"
        />
      </Box>
    </Box>
  );
};

export default Hero;
