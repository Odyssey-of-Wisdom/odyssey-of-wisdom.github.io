import { Box, Typography, Link, IconButton } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram'
import MailOutlineIcon from '@mui/icons-material/MailOutline'

const Footer = () => (
  <Box sx={{ backgroundColor: '#17313E', color: '#F3E2D4', py: 4, textAlign: 'center' }}>
    <Typography variant="body2">
      © {new Date().getFullYear()} Odyssey of Wisdom. All rights reserved.
    </Typography>
    <Box direction="row" justifyContent="center" spacing={2} mt={2}>
      <IconButton
        href="https://www.instagram.com/oddysey_of_wisdom/"
        target="_blank"
        rel="noopener noreferrer"
        sx={{ color: '#C5B0CD', transition: 'color 0.3s', '&:hover': { color: '#F3E2D4' } }}
      >
        <InstagramIcon fontSize="medium" />
      </IconButton>

      <IconButton
        href="mailto:odysseyofwisdom.greece@gmail.com"
        sx={{ color: '#C5B0CD', transition: 'color 0.3s', '&:hover': { color: '#F3E2D4' } }}
      >
        <MailOutlineIcon fontSize="medium" />
      </IconButton>
    </Box>
  </Box>
)

export default Footer
