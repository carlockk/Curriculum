import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Button,
  Drawer,
  TextField,
  Divider,
  Chip,
} from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

export default function TopBar({ mode, toggleMode }) {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: mode === "light" ? "rgba(248, 244, 237, 0.62)" : "rgba(32, 32, 32, 0.76)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          color: mode === "light" ? "#13232f" : "#ececec",
          borderBottom: "1px solid",
          borderColor: "divider",
          height: 56,
          justifyContent: "center",
          px: { xs: 1.5, md: 3 },
        }}
      >
        <Toolbar
          disableGutters
          sx={{
            minHeight: "56px !important",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.2 }}>
            <Box sx={{ display: "flex", gap: 0.75 }}>
              {["#ff5f57", "#febc2e", "#28c840"].map((color) => (
                <Box
                  key={color}
                  sx={{
                    width: 11,
                    height: 11,
                    borderRadius: "50%",
                    bgcolor: color,
                    boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.1)",
                  }}
                />
              ))}
            </Box>
            <Typography variant="body2" sx={{ fontWeight: 600 }}>
              carlos.castillo / portfolio
            </Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Chip
              label="Demo visual"
              size="small"
              sx={{
                display: { xs: "none", sm: "inline-flex" },
                bgcolor: "transparent",
                border: 0,
                ".MuiChip-label": {
                  px: 0,
                },
              }}
            />
            <Button
              variant="outlined"
              size="small"
              onClick={() => setOpen(true)}
              sx={{
                fontSize: "0.75rem",
                borderRadius: 0.5,
                borderColor: "divider",
                color: "inherit",
                px: 1.8,
              }}
            >
              Login preview
            </Button>

            <IconButton size="small" onClick={toggleMode} color="inherit">
              {mode === "light" ? <DarkModeIcon fontSize="small" /> : <LightModeIcon fontSize="small" />}
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        transitionDuration={400}
        ModalProps={{
          keepMounted: true,
          BackdropProps: {
            sx: {
              backgroundColor: "rgba(5, 9, 14, 0.34)",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
            },
          },
        }}
        PaperProps={{
          sx: {
            width: { xs: "100%", sm: 380 },
            height: "100vh",
            px: 3,
            py: 4,
            willChange: "transform",
            background:
              mode === "light"
                ? "linear-gradient(180deg, #f8f4ed 0%, #efe4d2 100%)"
                : "linear-gradient(180deg, #262626 0%, #212121 100%)",
            color: mode === "light" ? "#13232f" : "#ececec",
          },
        }}
      >
        <Box component="form" onSubmit={(event) => event.preventDefault()}>
          <Typography variant="overline" sx={{ letterSpacing: 1.8 }}>
            Layer preview
          </Typography>
          <Typography variant="h5" sx={{ mb: 1, fontWeight: 700 }}>
            Login escenico
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
            Este panel se mantiene solo como recurso visual. No autentica ni redirige.
          </Typography>
          <TextField
            fullWidth
            label="Correo"
            name="email"
            type="email"
            margin="normal"
            value={form.email}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            label="Contrasena"
            name="password"
            type="password"
            margin="normal"
            value={form.password}
            onChange={handleChange}
          />
          <Button fullWidth type="button" variant="contained" sx={{ mt: 2, borderRadius: 1, py: 1.2 }}>
            Entrar al entorno
          </Button>
          <Divider sx={{ my: 3 }} />
        </Box>
      </Drawer>
    </>
  );
}
