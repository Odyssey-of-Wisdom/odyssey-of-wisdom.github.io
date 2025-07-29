import { Box, Typography, Link, IconButton } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram'
import MailOutlineIcon from '@mui/icons-material/MailOutline'

const Footer = () => (
  <Box sx={{ backgroundColor: '#17313E', color: '#F3E2D4', py: 4, textAlign: 'center' }}>
    <Typography variant="body2">
      © {new Date().getFullYear()} Odyssey of Wisdom. All rights reserved.
    </Typography>
    <Box mt={2}>
      <IconButton href="https://www.instagram.com/oddysey_of_wisdom/" target="_blank">
        <InstagramIcon sx={{ color: '#C5B0CD' }} />
      </IconButton>
      <IconButton href="mailto:contact@odysseyofwisdom.org">
        <MailOutlineIcon sx={{ color: '#C5B0CD' }} />
      </IconButton>
    </Box>
  </Box>
)

export default Footer
