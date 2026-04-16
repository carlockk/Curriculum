import { Chip, Box, Typography, Stack, Paper } from "@mui/material";

const skillGroups = {
  Frontend: ["React", "Next.js", "JavaScript", "HTML", "CSS", "Tailwind CSS", "MUI"],
  Backend: ["Node.js", "Express", "PHP", "Laravel", "ASP", "ASP.NET"],
  Data: ["MySQL", "MongoDB", "REST APIs", "Swagger", "Postman"],
  Infra: ["Linux", "Windows Server", "Deploy productivo", "Mantenimiento web"],
};

export default function Skills() {
  return (
    <Box my={4}>
      <Typography variant="overline" color="secondary.main" sx={{ letterSpacing: 2, mb: 3, display: "block" }}>
        Tecnologias
      </Typography>

      <Stack spacing={2.2}>
        {Object.entries(skillGroups).map(([group, items]) => (
          <Paper
            key={group}
            elevation={0}
            sx={{
              p: 2.5,
              bgcolor: "background.paper",
              border: "1px solid",
              borderColor: "divider",
              backdropFilter: "blur(14px)",
            }}
          >
            <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1.5 }}>
              {group}
            </Typography>
            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
              {items.map((skill) => (
                <Chip key={skill} label={skill} color="primary" variant="outlined" />
              ))}
            </Stack>
          </Paper>
        ))}
      </Stack>
    </Box>
  );
}
