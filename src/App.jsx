import { useState, useMemo, useEffect } from "react";
import { CssBaseline, Container, Typography, Box, Button, Stack, Avatar, Chip } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { motion } from "framer-motion";
import getTheme from "./theme";
import AboutTabs from "./components/AboutTabs";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Cursos from "./components/Cursos";
import TopBar from "./components/TopBar";
import HeroCanvas from "./components/HeroCanvas";

export default function App() {
  const [mode, setMode] = useState(() =>
    localStorage.getItem("preferredTheme") === "dark" ? "dark" : "light"
  );

  useEffect(() => {
    const savedMode = localStorage.getItem("preferredTheme");
    if (savedMode === "dark" || savedMode === "light") {
      setMode(savedMode);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("preferredTheme", mode);
  }, [mode]);

  const theme = useMemo(() => getTheme(mode), [mode]);
  const metrics = [
    { label: "Experiencia", value: "15+ años" },
    { label: "Stack activo", value: "PHP a Next.js" },
    { label: "Foco", value: "Producto + operacion" },
  ];

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HeroCanvas />

      <TopBar mode={mode} toggleMode={() => setMode((current) => (current === "light" ? "dark" : "light"))} />

      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 1,
          mt: { xs: 10, md: 12 },
          mb: 8,
          color: theme.palette.text.primary,
        }}
      >
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <Box
            sx={{
              position: "relative",
              overflow: "hidden",
              borderRadius: 1.2,
              px: { xs: 2.5, md: 5 },
              py: { xs: 4, md: 6 },
              border: "0.5px solid",
              borderColor: "rgba(128,128,128,0.22)",
              bgcolor: mode === "light" ? "rgba(255,255,255,0.46)" : "rgba(42,42,42,0.42)",
              backdropFilter: "blur(22px)",
              WebkitBackdropFilter: "blur(22px)",
            }}
          >
            <Box
              sx={{
                position: "relative",
                zIndex: 1,
                display: "grid",
                gridTemplateColumns: "1fr",
                alignItems: "center",
                minHeight: { xs: 440, md: 520 },
              }}
            >
              <Box
                sx={{
                  maxWidth: 820,
                  mx: "auto",
                  width: "100%",
                  textAlign: "center",
                }}
              >
                <Stack direction="row" spacing={1.2} alignItems="center" justifyContent="center" sx={{ mb: 2 }}>
                  <Avatar
                    src="https://coffeewaffles.cl/yo.jpg"
                    alt="Carlos Enrique Castillo Garcia"
                    sx={{ width: 64, height: 64, border: "2px solid rgba(255,255,255,0.7)" }}
                  />
                  <Chip label="Full Stack / Chile" color="secondary" variant="outlined" />
                </Stack>

                <Typography
                  variant="h2"
                  sx={{
                    fontSize: { xs: "2.45rem", md: "4.15rem" },
                    maxWidth: 780,
                    mx: "auto",
                    fontWeight: 500,
                    lineHeight: { xs: 1.02, md: 0.98 },
                    letterSpacing: { xs: "0.06em", md: "0.12em" },
                    fontFamily: '"Cormorant Garamond", serif',
                    textTransform: "uppercase",
                    textWrap: "balance",
                  }}
                >
                  Carlos Enrique Castillo Garcia
                </Typography>

                <Box
                  sx={{
                    width: { xs: 220, md: 340 },
                    height: 1,
                    mx: "auto",
                    mt: 1.75,
                    borderRadius: 999,
                    background:
                      mode === "light"
                        ? "linear-gradient(90deg, rgba(19,35,47,0) 0%, rgba(19,35,47,0.2) 18%, rgba(180,83,9,0.38) 50%, rgba(19,35,47,0.2) 82%, rgba(19,35,47,0) 100%)"
                        : "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.14) 18%, rgba(212,212,212,0.34) 50%, rgba(255,255,255,0.14) 82%, rgba(255,255,255,0) 100%)",
                  }}
                />

                <Typography
                  variant="h6"
                  color="text.secondary"
                  sx={{
                    mt: 2.5,
                    maxWidth: 720,
                    mx: "auto",
                    lineHeight: 1.7,
                    fontWeight: 400,
                  }}
                >
                  Desarrollador Full Stack con experiencia en sistemas institucionales, plataformas productivas y soluciones a medida para operacion real. La meta no es solo que se vea moderno: tiene que comunicar criterio, confianza y trayectoria.
                </Typography>

                <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5} justifyContent="center" sx={{ mt: 3 }}>
                  <Button
                    variant="contained"
                    href="https://github.com/carlockk"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ borderRadius: 1, px: 2.5, py: 1.2 }}
                  >
                    Ver GitHub
                  </Button>
                  <Button variant="outlined" href="#experiencia" sx={{ borderRadius: 1, px: 2.5, py: 1.2 }}>
                    Ver experiencia
                  </Button>
                </Stack>

                <Stack direction={{ xs: "column", md: "row" }} spacing={1.4} justifyContent="center" sx={{ mt: 4 }}>
                  {metrics.map((metric) => (
                    <Box
                      key={metric.label}
                      sx={{
                        minWidth: 170,
                        p: 2,
                        borderRadius: 1,
                        bgcolor: mode === "light" ? "rgba(255,255,255,0.54)" : "rgba(8,17,24,0.42)",
                        border: "0.5px solid",
                        borderColor: "rgba(128,128,128,0.22)",
                      }}
                    >
                      <Typography variant="caption" color="text.secondary" sx={{ display: "block" }}>
                        {metric.label}
                      </Typography>
                      <Typography variant="h6">{metric.value}</Typography>
                    </Box>
                  ))}
                </Stack>
              </Box>
            </Box>
          </Box>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{ marginTop: 32 }}
        >
          <AboutTabs />
        </motion.div>

        <Box sx={{ mt: 3 }}>
          <Box id="experiencia">
            <Experience />
          </Box>
        </Box>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: true }}
          style={{ marginTop: 24 }}
        >
          <Skills />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          style={{ marginTop: 24 }}
        >
          <Cursos />
        </motion.div>
      </Container>

      <Footer />
    </ThemeProvider>
  );
}
