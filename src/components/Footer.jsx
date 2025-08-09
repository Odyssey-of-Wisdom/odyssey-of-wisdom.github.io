import { Box, Typography, IconButton, Stack } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import FacebookIcon from "@mui/icons-material/Facebook";

const Footer = () => (
  <Box
    sx={{
      backgroundColor: "#17313E",
      color: "#F3E2D4",
      py: 4,
      textAlign: "center",
    }}
  >
    <Typography variant="body2">
      © {new Date().getFullYear()} Odyssey of Wisdom. All rights reserved.
    </Typography>

    <Stack direction="row" justifyContent="center" spacing={4} mt={2}>
      <Box textAlign="center">
        <IconButton
          href="https://www.instagram.com/oddysey_of_wisdom/"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: "#C5B0CD",
            transition: "color 0.3s",
            "&:hover": { color: "#F3E2D4" },
          }}
        >
          <InstagramIcon fontSize="large" />
        </IconButton>
        <Typography variant="caption" display="block">
          Instagram
        </Typography>
      </Box>

      <Box textAlign="center">
        <IconButton
          href="https://www.facebook.com/profile.php?id=61570902790007"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: "#C5B0CD",
            transition: "color 0.3s",
            "&:hover": { color: "#F3E2D4" },
          }}
        >
          <FacebookIcon fontSize="large" />
        </IconButton>
        <Typography variant="caption" display="block">
          Facebook
        </Typography>
      </Box>

      <Box textAlign="center">
        <IconButton
          href="mailto:odysseyofwisdom.greece@gmail.com"
          sx={{
            color: "#C5B0CD",
            transition: "color 0.3s",
            "&:hover": { color: "#F3E2D4" },
          }}
        >
          <MailOutlineIcon fontSize="large" />
        </IconButton>
        <Typography variant="caption" display="block">
          Email
        </Typography>
      </Box>
    </Stack>
  </Box>
);

export default Footer;
