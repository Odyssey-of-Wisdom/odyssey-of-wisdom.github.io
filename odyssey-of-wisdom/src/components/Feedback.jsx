import { feedback } from '../data/feedback'
import { Grid, Card, CardContent, CardHeader, Avatar, Typography, Box } from '@mui/material'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote'

const Feedback = () => (
  <Box id="feedback" sx={{ py: 10, px: 4 }}>
    <Typography variant="h4" textAlign="center" mb={4} color="#17313E">
      What Youth Say
    </Typography>
    <Grid container spacing={4}>
      {feedback.map((f) => (
        <Grid item xs={12} sm={6} md={4} key={f.name}>
          <Card sx={{ borderRadius: 4, backgroundColor: '#fff' }}>
            <CardHeader
              avatar={<Avatar src={f.image} />}
              title={<Typography fontWeight="bold">{f.name}</Typography>}
              subheader={f.project}
            />
            <CardContent>
              <Typography variant="body2" sx={{ fontStyle: 'italic', color: '#415E72' }}>
                <FormatQuoteIcon fontSize="small" sx={{ verticalAlign: 'middle', mr: 1 }} />
                {f.quote}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Box>
)

export default Feedback
