import { Typography, Box, Grid, Paper } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import { motion } from "framer-motion";

export default function Cursos() {
  const items = [
    {
      title: "Bootcamp Desarrollo Web Full Stack",
      body: "Universidad del Desarrollo, enero 2025 a julio 2025. Refuerza React, Node.js, Next.js, Tailwind, PHP, Laravel, MySQL y MongoDB.",
      link: "/diplomaBootCampUDD_FullStack.pdf",
    },
    {
      title: "Administracion Linux CentOS / RedHat",
      body: "Certificacion enfocada en servidores, continuidad operativa y entornos productivos.",
    },
    {
      title: "Base academica",
      body: "Universidad de Santiago, Ingenieria Informatica.",
    },
  ];

  return (
    <Box my={6}>
      <Typography variant="overline" color="primary.main" sx={{ letterSpacing: 2 }}>
        Formacion
      </Typography>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Grid container spacing={2}>
          {items.map((item) => (
            <Grid item xs={12} md={4} key={item.title}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  height: "100%",
                  bgcolor: "background.paper",
                  border: "1px solid",
                  borderColor: "divider",
                  backdropFilter: "blur(14px)",
                }}
              >
                <SchoolIcon sx={{ mb: 1, color: "secondary.main" }} />
                <Typography variant="h6" sx={{ mb: 1 }}>
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                  {item.body}
                </Typography>
                {item.link && (
                  <Box sx={{ mt: 2 }}>
                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                      Ver diploma
                    </a>
                  </Box>
                )}
              </Paper>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Box>
  );
}
