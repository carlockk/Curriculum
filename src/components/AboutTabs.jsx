import { Box, Grid, Paper, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import TiltCard from "./TiltCard";

const pillars = [
  "Mas de 15 años construyendo y manteniendo sistemas web en produccion.",
  "Experiencia real en PHP, ASP.NET, Node.js, React, Next.js y MySQL.",
  "Criterio de producto: arquitectura, UX, despliegue y mejoras continuas.",
  "Actualizacion reciente con bootcamp Full Stack UDD en 2025.",
];

const projects = [
  {
    title: "RFP Candelaria Mining",
    description: "Control de flotas, trazabilidad operacional y monitoreo con QR.",
    link: "https://rfp-five.vercel.app/",
    thumbnail: "https://image.thum.io/get/width/720/crop/768/https://rfp-five.vercel.app/",
  },
  {
    title: "Tesoreria",
    description: "Interfaz corporativa con lenguaje visual mas ejecutivo y estructura clara.",
    link: "https://tesoreria-one.vercel.app/",
    thumbnail: "https://image.thum.io/get/width/720/crop/768/https://tesoreria-one.vercel.app/",
  },
  {
    title: "Closet Sale",
    description: "Exploracion ecommerce con foco mas editorial y comercial.",
    link: "https://closetsale.vercel.app/",
    thumbnail: "https://image.thum.io/get/width/720/crop/768/https://closetsale.vercel.app/",
  },
  {
    title: "Mactorno",
    description: "Emulacion inspirada en macOS, util para mostrar criterio UI y detalle interactivo.",
    link: "https://github.com/carlockk/mactorno",
    thumbnail: "https://opengraph.githubassets.com/1/carlockk/mactorno",
  },
];

export default function AboutTabs() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={7}>
        <Paper
          elevation={0}
          sx={{
            p: { xs: 3, md: 4 },
            bgcolor: "background.paper",
            border: "1px solid",
            borderColor: "divider",
            backdropFilter: "blur(16px)",
          }}
        >
          <Typography variant="overline" color="primary.main" sx={{ letterSpacing: 2 }}>
            Resumen profesional
          </Typography>
          <Typography variant="h4" sx={{ mt: 1, mb: 2 }}>
            Desarrollo full stack con foco en sistemas utiles y bien aterrizados.
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.9 }}>
            Soy desarrollador full stack y durante años he trabajado creando, manteniendo y mejorando
            sistemas que responden a necesidades reales. Me interesa que cada proyecto funcione bien en
            lo tecnico, pero tambien que tenga sentido para el negocio, para la operacion diaria y para
            las personas que finalmente lo usan.
          </Typography>
          <Stack spacing={1.5} sx={{ mt: 3 }}>
            {pillars.map((item) => (
              <Box
                key={item}
                sx={{
                  p: 1.6,
                  borderRadius: 1,
                  bgcolor: "rgba(23,107,135,0.08)",
                  border: "0.5px solid rgba(128,128,128,0.22)",
                }}
              >
                <Typography variant="body2">{item}</Typography>
              </Box>
            ))}
          </Stack>
        </Paper>
      </Grid>

      <Grid item xs={12} md={5}>
        <Paper
          elevation={0}
          sx={{
            p: { xs: 3, md: 4 },
            height: "100%",
            bgcolor: "background.paper",
            border: "1px solid",
            borderColor: "divider",
            backdropFilter: "blur(16px)",
          }}
        >
          <Typography variant="overline" color="secondary.main" sx={{ letterSpacing: 2 }}>
            Proyectos para destacar
          </Typography>
          <Stack spacing={1.4} sx={{ mt: 2 }}>
            {projects.map((project, index) => (
              <Box
                component={motion.div}
                key={project.title}
                initial={{ opacity: 0, y: 26, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
              >
                <TiltCard maxTilt={5} hoverScale={1.008}>
                  <Box
                    component="a"
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1.4,
                      p: 2,
                      borderRadius: 1,
                      border: "0.5px solid",
                      borderColor: "rgba(128,128,128,0.22)",
                      transition: "border-color 180ms ease",
                      "&:hover": {
                        borderColor: "primary.main",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        flex: "0 0 118px",
                        width: 118,
                        height: 84,
                        p: 0.6,
                        borderRadius: 0.8,
                        border: "0.5px solid",
                        borderColor: "rgba(128,128,128,0.18)",
                        bgcolor: "rgba(255,255,255,0.4)",
                        overflow: "hidden",
                      }}
                    >
                      <Box
                        component="img"
                        src={project.thumbnail}
                        alt={project.title}
                        loading="lazy"
                        sx={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          display: "block",
                          borderRadius: 0.5,
                        }}
                      />
                    </Box>

                    <Box sx={{ minWidth: 0 }}>
                      <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                        {project.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mt: 0.6 }}>
                        {project.description}
                      </Typography>
                    </Box>
                  </Box>
                </TiltCard>
              </Box>
            ))}
          </Stack>
        </Paper>
      </Grid>
    </Grid>
  );
}
