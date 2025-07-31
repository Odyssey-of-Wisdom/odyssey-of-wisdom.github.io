import React, { useEffect } from 'react'
import { Grid, Card, CardContent, CardHeader, Avatar, Typography, Box } from '@mui/material'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote'

const Feedback = () => {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://static.elfsight.com/platform/platform.js'
    script.async = true
    document.body.appendChild(script)
    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <Box id="feedback" sx={{ py: 10, px: 4 }}>
      <Typography variant="h3" textAlign="center" mb={4} color="#17313E">
        What Youth Say
      </Typography>

      <Box sx={{ mb: 8, textAlign: 'center' }}>
        <div
          className="elfsight-app-15aa0c2c-1a53-49bd-8244-7babd5f0e2be"
          data-elfsight-app-lazy
        ></div>
      </Box>
    </Box>
  )
}

export default Feedback
