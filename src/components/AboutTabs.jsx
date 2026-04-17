import { useState } from "react";
import LaunchRoundedIcon from "@mui/icons-material/LaunchRounded";
import { Box, Button, Dialog, Grid, Link, Paper, Stack, Typography, useTheme } from "@mui/material";
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
    thumbnail: "/mactorn.png",
  },
];

const moreProjects = [
  {
    title: "Sistema de asistencia de empleados",
    description: "Registro y control de asistencia para equipos de trabajo.",
    link: "https://asistencia-sooty.vercel.app/",
    thumbnail: "https://image.thum.io/get/width/720/crop/768/https://asistencia-sooty.vercel.app/",
  },
  {
    title: "Sitio web autoadministrable estilo WordPress",
    description: "CMS construido con React y Next.js para administrar contenido sin depender de WordPress.",
    link: "https://virtualdesk.vercel.app/",
    thumbnail: "https://image.thum.io/get/width/720/crop/768/https://virtualdesk.vercel.app/",
  },
  {
    title: "Experimentacion medieval interactiva",
    description: "Exploracion visual con ambientacion medieval y eventos activados por click.",
    link: "https://medievo.netlify.app/",
    thumbnail: "https://image.thum.io/get/width/720/crop/768/https://medievo.netlify.app/",
  },
  {
    title: "App Android de nutricion",
    description: "Aplicacion en desarrollo para calcular nutrientes a partir de la ingesta de alimentos.",
    link: "https://github.com/carlockk/nutcal",
    thumbnail: "https://opengraph.githubassets.com/1/carlockk/nutcal",
  },
  {
    title: "Sistema de punto de venta POS",
    description: "Plataforma POS para gestion comercial y operacion de ventas.",
    link: "https://frontpos.vercel.app/",
    thumbnail: "https://image.thum.io/get/width/720/crop/768/https://frontpos.vercel.app/",
  },
  {
    title: "Catalogo web conectado al POS",
    description: "Frontend de productos y categorias administrados desde el POS con venta en linea.",
    link: "https://frontend-cliente-sigma.vercel.app/",
    thumbnail: "https://image.thum.io/get/width/720/crop/768/https://frontend-cliente-sigma.vercel.app/",
  },
  {
    title: "Modulo repartidor",
    description: "Interfaz para recibir y gestionar pedidos desde el rol de repartidor.",
    link: "https://repartidor-sand.vercel.app/",
    thumbnail: "https://image.thum.io/get/width/720/crop/768/https://repartidor-sand.vercel.app/",
  },
  {
    title: "Receptor de comandas para cocina",
    description: "Modulo en PHP conectado a WordPress para recibir e imprimir comandas de cocina.",
    link: "https://github.com/carlockk/ped5",
    thumbnail: "https://opengraph.githubassets.com/1/carlockk/ped5",
  },
];

function ProjectRow({ project, compact = false, showThumbnail = true }) {
  return (
    <TiltCard maxTilt={compact ? 4 : 5} hoverScale={1.008}>
      <Box
        component="a"
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1.4,
          p: compact ? 1.6 : 2,
          height: "100%",
          borderRadius: 1,
          border: "0.5px solid",
          borderColor: "rgba(128,128,128,0.22)",
          transition: "border-color 180ms ease, transform 180ms ease",
          "&:hover": {
            borderColor: "primary.main",
          },
        }}
      >
        {showThumbnail ? (
          <Box
            sx={{
              flex: compact ? "0 0 108px" : "0 0 118px",
              width: compact ? 108 : 118,
              height: compact ? 78 : 84,
              p: 0.6,
              borderRadius: 0.9,
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
        ) : null}

        <Box sx={{ minWidth: 0, flex: 1 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            {project.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 0.6 }}>
            {project.description}
          </Typography>
        </Box>
      </Box>
    </TiltCard>
  );
}

export default function AboutTabs() {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <>
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
                  <ProjectRow project={project} />
                </Box>
              ))}
            </Stack>

            <Box sx={{ mt: 2.2, display: "flex", justifyContent: "center" }}>
              <Button
                variant="outlined"
                onClick={() => setOpen(true)}
                sx={{
                  borderRadius: 999,
                  px: 2.2,
                  py: 0.9,
                  bgcolor: "rgba(244, 230, 214, 0.82)",
                  borderColor: "rgba(212, 185, 147, 0.72)",
                  color: "#8a6a44",
                  backdropFilter: "blur(8px)",
                  "&:hover": {
                    bgcolor: "rgba(240, 223, 201, 0.94)",
                    borderColor: "rgba(200, 169, 126, 0.88)",
                  },
                }}
              >
                Ver mas
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: {
            overflow: "hidden",
            borderRadius: "18px",
            border: "1px solid",
            borderColor: isDark ? "rgba(255,255,255,0.08)" : "rgba(145, 122, 94, 0.16)",
            bgcolor: isDark ? "rgba(28,28,28,0.98)" : "#ffffff",
            backdropFilter: "blur(26px)",
            boxShadow: isDark ? "0 32px 90px rgba(0,0,0,0.42)" : "0 32px 90px rgba(56, 41, 23, 0.18)",
          },
        }}
        slotProps={{
          backdrop: {
            sx: {
              backgroundColor: isDark ? "rgba(6,10,14,0.38)" : "rgba(32, 23, 14, 0.18)",
              backdropFilter: "blur(8px)",
            },
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            px: 2,
            py: 1.4,
            borderBottom: "1px solid",
            borderColor: isDark ? "rgba(255,255,255,0.07)" : "rgba(145, 122, 94, 0.14)",
            background: isDark
              ? "linear-gradient(180deg, rgba(54,54,54,0.98) 0%, rgba(38,38,38,0.94) 100%)"
              : "linear-gradient(180deg, rgba(252,249,244,0.98) 0%, rgba(241,233,222,0.94) 100%)",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.85 }}>
            <Box
              component="button"
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Cerrar ventana"
              sx={{
                width: 12,
                height: 12,
                p: 0,
                border: 0,
                borderRadius: "50%",
                bgcolor: "#ff5f57",
                color: "rgba(71, 23, 18, 0.9)",
                fontSize: "0.58rem",
                lineHeight: 1,
                display: "grid",
                placeItems: "center",
                cursor: "pointer",
                boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.12)",
              }}
            >
              ×
            </Box>
            <Box sx={{ width: 12, height: 12, borderRadius: "50%", bgcolor: "#febc2e" }} />
            <Box sx={{ width: 12, height: 12, borderRadius: "50%", bgcolor: "#28c840" }} />
          </Box>

          <Typography
            variant="body2"
            sx={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              fontWeight: 600,
              letterSpacing: "0.04em",
              color: "text.secondary",
              pointerEvents: "none",
            }}
          >
            Mas proyectos
          </Typography>

          <Box sx={{ width: 52 }} />
        </Box>

        <Box
          className="mac-scrollbar"
          sx={{
            maxHeight: "72vh",
            overflowY: "auto",
            px: { xs: 2, md: 2.4 },
            py: 2.2,
            bgcolor: isDark ? "rgba(26,26,26,0.96)" : "#ffffff",
          }}
        >
          <Grid container spacing={1.6}>
            {moreProjects.map((project) => (
              <Grid item xs={12} sm={6} key={project.title} sx={{ display: "flex" }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                  }}
                >
                  <Box sx={{ flex: 1 }}>
                    <ProjectRow project={project} compact showThumbnail={false} />
                  </Box>
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    underline="none"
                    sx={{
                      mt: 0.9,
                      ml: 0.3,
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 0.6,
                      color: "secondary.main",
                      fontSize: "0.9rem",
                      fontWeight: 600,
                    }}
                  >
                    Ver proyecto
                    <LaunchRoundedIcon sx={{ fontSize: 15 }} />
                  </Link>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Dialog>
    </>
  );
}
