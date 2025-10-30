import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Divider,
} from "@mui/material";
import { cofounders } from "../data/co-founders";
import { useLanguage } from "../contexts/LanguageContext";

const AboutUs = () => {
  const { t, lang } = useLanguage();

  return (
    <Box
      id="about"
      sx={{
        position: "relative",
        py: 10,
        px: { xs: 3, md: 10 },
        pt: 10,
        pb: { xs: 12, md: 16 },
        background: "linear-gradient(120deg, #F3E2D4 0%, #EADAE3 100%)",
        color: "#17313E",
      }}
    >
      <Box
        component="svg"
        viewBox="0 0 1440 80"
        sx={{ position: "absolute", top: 0, left: 0, width: "100%" }}
      >
        <path
          fill="#F3E2D4"
          d="M0,0 C360,100 1080,-100 1440,0 L1440,80 L0,80 Z"
        />
      </Box>

      <Box sx={{ position: "relative", zIndex: 1 }}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 400,
            textAlign: "center",
            mb: 2,
            color: "#415E72",
          }}
        >
          {t("Who We Are")}
        </Typography>
        <Typography
          variant="h6"
          maxWidth={900}
          mx="auto"
          sx={{
            fontWeight: 300,
            textAlign: "center",
            color: "#17313E",
            mb: 6,
            lineHeight: 1.6,
          }}
        >
          {t(
            "Odyssey of Wisdom is a youth association based in Ancient Olympia, Greece. We help young people from underserved communities discover the world through Erasmus+ opportunities. We open doors to experiences that broaden perspectives, spark curiosity, and give young people the confidence to grow and connect with new cultures."
          )}
        </Typography>

        <Typography
          variant="h6"
          maxWidth={1000}
          mx="auto"
          sx={{
            fontWeight: 300,
            textAlign: "center",
            color: "#17313E",
            mb: 6,
            lineHeight: 1.6,
          }}
        >
          {t(
            "Our founders grew up in small towns in rural Greece, so we know firsthand the challenges of accessing these opportunities. After traveling across Europe for Erasmus+ projects, from Armenia to the Canary Islands, we realized how much these experiences open your mind and guide the choices you make. That is why we started Odyssey of Wisdom: to give other young people the same chance we were once given."
          )}
        </Typography>

        <Divider sx={{ borderColor: "#C5B0CD", mb: 6 }} />

        <Typography
          variant="h4"
          sx={{
            fontWeight: 400,
            textAlign: "center",
            mb: 3,
            color: "#415E72",
          }}
        >
          {t("About Erasmus+")}
        </Typography>
        <Typography
          variant="body1"
          maxWidth={1000}
          mx="auto"
          sx={{
            fontWeight: 300,
            textAlign: "center",
            color: "#17313E",
            mb: 4,
            lineHeight: 1.6,
          }}
        >
          {t(
            "Erasmus+ is Europe’s program for youth mobility, education, and cultural exchange. It gives youth the chance to travel abroad, experience new cultures, and learn practical skills that help them grow personally and socially. The program is open to anyone aged 18 to 35, including participants from small towns or rural areas, and all program-related expenses (travel, accommodation, and activities) are fully covered by the European Union. Participants can join multiple projects in different EU countries. Our main activities focus on youth exchanges, where participants work together, develop teamwork and leadership skills, and make international friends in a vibrant setting."
          )}
        </Typography>

        <Typography
          variant="h4"
          sx={{
            fontWeight: 400,
            textAlign: "center",
            mb: 4,
            color: "#415E72",
          }}
        >
          {t("Our Vision")}
        </Typography>
        <Typography
          variant="body1"
          maxWidth={900}
          mx="auto"
          sx={{
            fontWeight: 300,
            textAlign: "center",
            color: "#17313E",
            mb: 6,
            lineHeight: 1.6,
          }}
        >
          {t(
            "From the historic heart of Ancient Olympia, a place that reflects peace and unity, we are building a future where every young person can explore, learn, and contribute to Europe. We believe in a Europe connected through dialogue, shared experiences, and the energy of its youth."
          )}
        </Typography>

        <Typography
          variant="h4"
          sx={{
            fontWeight: 400,
            textAlign: "center",
            mb: 4,
            color: "#415E72",
          }}
        >
          {t("Our Team")}
        </Typography>
        <Typography
          variant="body1"
          maxWidth={1000}
          mx="auto"
          sx={{
            fontWeight: 300,
            textAlign: "center",
            color: "#17313E",
            mb: 8,
            lineHeight: 1.6,
          }}
        >
          {t(
            "We are a passionate group of students and young professionals from fields such as reporting, finance, technology, and education. Together, we work to create opportunities, empower youth, and help the next generation discover their potential."
          )}
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {cofounders.map((person) => (
            <Grid item xs={12} sm={6} md={4} key={person.name}>
              <Card
                elevation={3}
                sx={(theme) => ({
                  maxWidth: { xs: "100%", sm: 320 },
                  margin: "0 auto",
                  backgroundColor: "#FFFFFF",
                  borderRadius: 3,
                  display: "flex",
                  flexDirection: {
                    xs: "row",
                    sm: "column",
                  },
                  alignItems: {
                    xs: "center",
                    sm: "stretch",
                  },
                  p: { xs: 1, sm: 0 },
                })}
              >
                <CardMedia
                  component="img"
                  image={person.image}
                  alt={person.name}
                  sx={(theme) => ({
                    width: { xs: 110, sm: "100%" },
                    height: { xs: 110, sm: 330 },
                    objectFit: "cover",
                    borderRadius: {
                      xs: 2,
                      sm: "12px 12px 0 0",
                    },
                    mr: { xs: 2, sm: 0 },
                  })}
                />
                <CardContent
                  sx={{
                    flex: 1,
                    padding: { xs: "0.5rem", sm: "1rem" },
                  }}
                >
                  <Typography variant="h6" fontWeight={400} gutterBottom>
                    {person.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      overflowWrap: "break-word",
                      minHeight: "auto",
                      whiteSpace: "normal",
                    }}
                  >
                    {lang === "el" ? person.bio_el || person.bio : person.bio}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box
        component="svg"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: 80,
        }}
      >
        <path
          d="M0,20 C360,80 1080,-40 1440,20 L1440,80 L0,80 Z"
          fill="#EFE6F0"
        />
      </Box>
    </Box>
  );
};

export default AboutUs;
