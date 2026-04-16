import { Box, Typography, Grid, Container, Link, useTheme } from "@mui/material";

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
            <Typography variant="subtitle2" gutterBottom align="center">
              Email
            </Typography>
            <Typography variant="body2" align="center">
              carlos.virtualdesk@gmail.com
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="subtitle2" gutterBottom align="center">
              Telefono
            </Typography>
            <Typography variant="body2" align="center">
              +56985885018
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="subtitle2" gutterBottom align="center">
              GitHub
            </Typography>
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
