import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import { Box, Typography, Grid, Container, Link, Stack, useTheme } from "@mui/material";

export default function Footer() {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <Box
      sx={{
        bgcolor: isDark ? "rgba(8,17,24,0.78)" : "rgba(255,255,255,0.55)",
        mt: 8,
        py: 4,
        color: theme.palette.text.primary,
        borderTop: "1px solid",
        borderColor: "divider",
        backdropFilter: "blur(14px)",
      }}
    >
      <Container maxWidth="md">
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} sm={4}>
            <Stack direction="row" spacing={0.75} justifyContent="center" alignItems="center" sx={{ mb: 0.5 }}>
              <EmailOutlinedIcon sx={{ fontSize: 16, opacity: 0.82 }} />
              <Typography variant="subtitle2" gutterBottom={false} align="center">
                Email
              </Typography>
            </Stack>
            <Typography variant="body2" align="center">
              carlos.virtualdesk@gmail.com
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Stack direction="row" spacing={0.75} justifyContent="center" alignItems="center" sx={{ mb: 0.5 }}>
              <LocalPhoneOutlinedIcon sx={{ fontSize: 16, opacity: 0.82 }} />
              <Typography variant="subtitle2" gutterBottom={false} align="center">
                Telefono
              </Typography>
            </Stack>
            <Typography variant="body2" align="center">
              +56985885018
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Stack direction="row" spacing={0.75} justifyContent="center" alignItems="center" sx={{ mb: 0.5 }}>
              <GitHubIcon sx={{ fontSize: 16, opacity: 0.82 }} />
              <Typography variant="subtitle2" gutterBottom={false} align="center">
                GitHub
              </Typography>
            </Stack>
            <Typography variant="body2" align="center">
              <Link href="https://github.com/carlockk" target="_blank" rel="noopener noreferrer" underline="hover" color="inherit">
                github.com/carlockk
              </Link>
            </Typography>
          </Grid>
        </Grid>

        <Typography variant="caption" color="text.secondary" align="center" display="block" sx={{ mt: 4 }}>
          © 2026 Carlos Enrique Castillo Garcia. Portfolio / curriculum online.
        </Typography>
      </Container>
    </Box>
  );
}
