import { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  Box,
} from "@mui/material";
import experiencias from "../data/experiences";
import TiltCard from "./TiltCard";

const pastelButtonPalettes = [
  {
    bg: "rgba(248, 214, 223, 0.52)",
    border: "rgba(214, 141, 164, 0.55)",
    text: "#91556b",
    hoverBg: "rgba(244, 198, 211, 0.72)",
  },
  {
    bg: "rgba(218, 240, 229, 0.58)",
    border: "rgba(131, 184, 157, 0.52)",
    text: "#446f5c",
    hoverBg: "rgba(201, 233, 217, 0.8)",
  },
  {
    bg: "rgba(214, 234, 244, 0.62)",
    border: "rgba(130, 173, 195, 0.55)",
    text: "#476b80",
    hoverBg: "rgba(197, 225, 239, 0.82)",
  },
  {
    bg: "rgba(246, 236, 214, 0.66)",
    border: "rgba(211, 186, 136, 0.58)",
    text: "#8b6d3b",
    hoverBg: "rgba(243, 229, 198, 0.86)",
  },
];

export default function Experience() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null);

  const handleOpen = (item) => {
    setActive(item);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setActive(null);
  };

  return (
    <Box sx={{ width: "100%", py: 6 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="overline" color="primary.main" sx={{ letterSpacing: 2 }}>
          Trayectoria
        </Typography>
      </Box>

      <Box className="trajectory-stack">
        {experiencias.map((item, index) => (
          <Box
            key={item.id}
            className="trajectory-stack-item"
            sx={{
              "--trajectory-delay": `${index * 90}ms`,
            }}
          >
            <Box className="trajectory-stack-motion">
              <TiltCard maxTilt={0} hoverScale={1.018}>
                {(() => {
                  const buttonPalette = pastelButtonPalettes[index % pastelButtonPalettes.length];
                  return (
                <Card
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    width: "100%",
                    height: 280,
                    bgcolor: "background.paper",
                    border: "1px solid",
                    borderColor: "divider",
                    backdropFilter: "blur(14px)",
                    boxShadow: "0 14px 28px rgba(15, 23, 42, 0.08)",
                    transition: "box-shadow 220ms ease, border-color 220ms ease",
                    "&:hover": {
                      boxShadow: "0 28px 42px rgba(15, 23, 42, 0.18)",
                      borderColor: "rgba(255,255,255,0.18)",
                    },
                  }}
                >
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="overline" color="text.secondary">
                      {[item.empresa, item.periodo].filter(Boolean).join(" / ")}
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                      {item.titulo}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        display: "-webkit-box",
                        WebkitLineClamp: 4,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        minHeight: "6em",
                      }}
                    >
                      {item.resumen}
                    </Typography>
                  </CardContent>
                  <Box sx={{ px: 2, pb: 2 }}>
                    <Button
                      fullWidth
                      variant="outlined"
                      onClick={() => handleOpen(item)}
                      sx={{
                        borderRadius: 999,
                        bgcolor: buttonPalette.bg,
                        borderColor: buttonPalette.border,
                        color: buttonPalette.text,
                        backdropFilter: "blur(8px)",
                        "&:hover": {
                          bgcolor: buttonPalette.hoverBg,
                          borderColor: buttonPalette.border,
                        },
                      }}
                    >
                      Ver mas
                    </Button>
                  </Box>
                </Card>
                  );
                })()}
              </TiltCard>
            </Box>
          </Box>
        ))}
      </Box>

      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        {active && (
          <>
            <DialogTitle>{active.titulo}</DialogTitle>
            <DialogContent>
              <Typography color="text.secondary" sx={{ mb: 2 }}>
                {[active.empresa, active.periodo].filter(Boolean).join(" / ")}
              </Typography>
              <Typography>{active.descripcionCompleta}</Typography>

              {active.link && (
                <Box sx={{ mt: 3 }}>
                  <Button
                    variant="contained"
                    color="primary"
                    href={active.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    fullWidth
                    sx={{ borderRadius: 1 }}
                  >
                    {active.cta || "Ver proyecto"}
                  </Button>
                </Box>
              )}
            </DialogContent>
          </>
        )}
      </Dialog>
    </Box>
  );
}
