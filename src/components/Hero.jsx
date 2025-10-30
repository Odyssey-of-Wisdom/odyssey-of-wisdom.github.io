import React, { useState, useEffect, useRef } from "react";
import { Box, Typography, Button } from "@mui/material";
import Logo from "../assets/logo3.png";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useLanguage } from "../contexts/LanguageContext";

import flag_photo from "../assets/flag_photo.png";
import romania1 from "../assets/romania1.png";
import romania2 from "../assets/romania1_2.png";
import romania3 from "../assets/romania3.jpg";
import romania2_2 from "../assets/romania2_2.jpg";
import romania3_2 from "../assets/romania3_2.jpg";
import romania1_3 from "../assets/romania1_3.png";
import romania2_3 from "../assets/romania2_3.jpg";


const images = [
  flag_photo,
  romania1,
  romania2,
  romania3,
  romania2_2,
  romania3_2,
  romania1_3,
  romania2_3,
];

const Hero = () => {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);
  const hoverRef = useRef(false);
  const { t } = useLanguage();

  useEffect(() => {
    images.forEach((src) => (new Image().src = src));
  }, []);

  useEffect(() => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      if (!hoverRef.current) setIndex((i) => (i + 1) % images.length);
    }, 4000);
    return () => clearInterval(intervalRef.current);
  }, []);

  const handleMouseEnter = () => {
    hoverRef.current = true;
  };
  const handleMouseLeave = () => {
    hoverRef.current = false;
  };

  const mid = Math.ceil(images.length / 2);
  const leftImages = images.slice(0, mid);
  const rightImages = images.slice(mid);

  const renderPostcards = (imgArray, side) =>
    imgArray.map((src, i) => {
      const isActive = images[index] === src;
      const size = isActive
        ? { width: { xs: 120, md: 200 }, height: { xs: 85, md: 140 } }
        : { width: { xs: 100, md: 160 }, height: { xs: 70, md: 110 } };
      const rotation = isActive
        ? 0
        : side === "left"
        ? i % 2 === 0
          ? -6
          : 6
        : i % 2 === 0
        ? 6
        : -6;

      return (
        <Box
          key={`${side}-${src}`}
          sx={{
            width: size.width,
            height: size.height,
            borderRadius: 2,
            overflow: "hidden",
            boxShadow: isActive
              ? "0 16px 36px rgba(0,0,0,0.35)"
              : "0 6px 18px rgba(0,0,0,0.2)",
            transform: `rotate(${rotation}deg) scale(${isActive ? 1.05 : 1})`,
            transition: "all 0.45s cubic-bezier(.2,.9,.2,1)",
            border: isActive
              ? "2px solid rgba(255,255,255,0.15)"
              : "1px solid rgba(255,255,255,0.08)",
            backgroundColor: "rgba(255,255,255,0.03)",
            position: "relative",
          }}
        >
          <Box
            component="img"
            src={src}
            alt={`hero-thumb-${side}-${i}`}
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: isActive
                ? "saturate(1) contrast(1.05)"
                : "grayscale(0.4) contrast(0.95) opacity(0.75)",
              transition:
                "filter 0.45s ease, transform 0.45s ease, opacity 0.45s ease",
            }}
          />
        </Box>
      );
    });

  return (
    <Box
      id="home"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      sx={{
        position: "relative",
        height: { xs: "calc(100vh - 52px)", md: "calc(100vh - 60px)" },
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        px: { xs: 3, md: 8 },
        zIndex: 2,
        background: "linear-gradient(120deg, #C5B0CD 30%, #415E72 100%)",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: { xs: "50%", md: "10%" },
          left: { xs: 8, md: 16 },
          transform: { xs: "translateY(-50%)", md: "none" },
          display: "flex",
          flexDirection: { xs: "column", md: "column" },
          gap: { xs: 1.5, md: 2 },
          pointerEvents: "none",
        }}
      >
        {renderPostcards(leftImages, "left")}
      </Box>

      <Box
        sx={{
          position: "absolute",
          top: { xs: "50%", md: "10%" },
          right: { xs: 8, md: 16 },
          transform: { xs: "translateY(-50%)", md: "none" },
          display: "flex",
          flexDirection: { xs: "column", md: "column" },
          gap: { xs: 1.5, md: 2 },
          pointerEvents: "none",
        }}
      >
        {renderPostcards(rightImages, "right")}
      </Box>

      <Box
        sx={{
          position: "absolute",
          left: { xs: -30, md: -60 },
          top: { xs: "-5%", md: "-14%" },
          width: { xs: 120, md: 260 },
          height: { xs: 120, md: 260 },
          bgcolor: "rgba(243,226,212,0.18)",
          borderRadius: "50%",
          zIndex: 0,
          filter: "blur(20px)",
          pointerEvents: "none",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          top: "-20%",
          right: "-10%",
          width: { xs: 200, md: 300 },
          height: { xs: 200, md: 300 },
          bgcolor: "rgba(243,226,212,0.3)",
          borderRadius: "50%",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      <Box sx={{ position: "relative", zIndex: 3 }}>
        <Box
          component="img"
          src={Logo}
          alt="Odyssey Logo"
          sx={{
            width: { xs: 160, md: 260 },
            mb: 2,
            filter: "drop-shadow(0 8px 22px rgba(0,0,0,0.36))",
            display: "block",
            marginX: "auto",
          }}
        />

        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "1.9rem", md: "3.2rem" },
            color: "#F3E2D4",
            letterSpacing: "0.02em",
            mb: 1.5,
            textShadow: "2px 2px 12px rgba(0,0,0,0.4)",
            fontWeight: 700,
          }}
        >
          {t("Odyssey of Wisdom")}
        </Typography>

        <Typography
          variant="h6"
          maxWidth={640}
          sx={{
            fontFamily: "Inter, sans-serif",
            fontSize: { xs: "0.96rem", md: "1.12rem" },
            color: "rgba(243,226,212,0.95)",
            letterSpacing: "0.01em",
            lineHeight: 1.6,
            mb: 4,
            textShadow: "1px 1px 8px rgba(0,0,0,0.24)",
          }}
        >
          {t(
            "Connecting Greek youth with Erasmus+ opportunities for travel, learning, and cultural exchange across Europe."
          )}
        </Typography>

        <Button
          endIcon={<ExpandMoreIcon />}
          variant="contained"
          size="large"
          sx={{
            backgroundColor: "#F3E2D4",
            color: "#415E72",
            px: { xs: 4, md: 5 },
            py: 1.6,
            borderRadius: "30px",
            fontFamily: "Inter, sans-serif",
            fontWeight: 600,
            textTransform: "none",
            boxShadow: "0 8px 26px rgba(6,24,44,0.22)",
            transition: "transform 0.28s ease, box-shadow 0.28s ease",
            "&:hover": {
              transform: "translateY(-3px)",
              boxShadow: "0 12px 40px rgba(6,24,44,0.28)",
              backgroundColor: "#e9dbd1",
            },
          }}
          onClick={() =>
            document
              .getElementById("about")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          {t("Learn more")}
        </Button>
      </Box>

      <Box
        component="svg"
        viewBox="0 0 1440 100"
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "auto",
          zIndex: 3,
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
