// src/components/LanguageSwitcher.jsx
import React, { useState } from "react";
import {
  Button,
  Menu,
  MenuItem,
  Box,
  Typography,
  ListItemIcon,
} from "@mui/material";
import { useLanguage } from "../contexts/LanguageContext";

const Flag = ({ code, sx = {} }) => (
  <Box component="span" sx={{ fontSize: 18, lineHeight: 1, ...sx }} aria-hidden>
    {code}
  </Box>
);

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleOpen = (e) => setAnchorEl(e.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const select = (l) => {
    setLang(l);
    handleClose();
  };

  return (
    <>
      <Button
        onClick={handleOpen}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        sx={{
          textTransform: "none",
          minWidth: 0,
          px: 1,
          py: 0.4,
          fontWeight: 600,
          color: "#F3E2D4",
          borderRadius: 2,
          background: "transparent",
          "&:hover": { background: "rgba(255,255,255,0.04)" },
          display: "flex",
          gap: 1,
          alignItems: "center",
        }}
        aria-label="Choose language"
      >
        <Flag code={lang === "en" ? "🇬🇧" : "🇬🇷"} />
        <Typography sx={{ fontSize: 14 }}>
          {lang === "en" ? "EN" : "ΕΛ"}
        </Typography>
      </Button>

      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem selected={lang === "en"} onClick={() => select("en")}>
          <ListItemIcon sx={{ minWidth: 36 }}>
            <Flag code="🇬🇧" />
          </ListItemIcon>
          English
        </MenuItem>
        <MenuItem selected={lang === "el"} onClick={() => select("el")}>
          <ListItemIcon sx={{ minWidth: 36 }}>
            <Flag code="🇬🇷" />
          </ListItemIcon>
          Ελληνικά
        </MenuItem>
      </Menu>
    </>
  );
}
