import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  Divider,
  CardContent,
} from "@mui/material";

const skillGroups = [
  {
    title: "Frontend",
    skills: [
      {
        name: "React.js",
        color: "#61dafb",
        level: 4,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "JavaScript",
        color: "#f7df1e",
        level: 4,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        name: "HTML5",
        color: "#e44d26",
        level: 3,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      },
      {
        name: "CSS3",
        color: "#1572b6",
        level: 3,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      },
      {
        name: "Material UI",
        color: "#007fff",
        level: 4,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
      },
    ],
  },
  {
    title: "Backend & Tools",
    skills: [
      {
        name: "Node.js",
        color: "#3c873a",
        level: 3,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "Express.js",
        color: "#000",
        level: 3,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      },
      {
        name: "MySQL",
        color: "#00758f",
        level: 3,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      },
      {
        name: "Git",
        color: "#f34f29",
        level: 3,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      },
    ],
  },
  {
    title: "Other",
    skills: [
      {
        name: "IT Support",
        color: "#00e676",
        level: 4,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg",
      },
      {
        name: "Network",
        color: "#00bcd4",
        level: 3,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/networkx/networkx-original.svg",
      },
      {
        name: "Photoshop",
        color: "#31a8ff",
        level: 3,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg",
      },
      {
        name: "Premiere Pro",
        color: "#a259ff",
        level: 2,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/premierepro/premierepro-original.svg",
      },
    ],
  },
];

const SkillsPage = () => (
  <Box
      sx={{
        backgroundImage:
          'url("https://www.transparenttextures.com/patterns/shattered-dark.png")',
        backgroundColor: "rgba(0, 0, 0, 0.91)",
        backgroundRepeat: "repeat",
        py: { xs: 6, md: 10 },
      }}
    >
    <Container maxWidth="lg">
      <Typography
        variant="h2"
        color="white"
        textAlign="center"
        gutterBottom
        sx={{
          fontSize: { xs: "28px", md: "40px" },
          fontWeight: "bold",
          letterSpacing: 2,
          mb: 6,
        }}
      >
        ทักษะของฉัน
      </Typography>
      <Divider sx={{ bgcolor: "#00ff40ff", height: 4, borderRadius: 2, width: 400, mx: "auto", mb: 2 }} />
          <br/>
      {skillGroups.map((group, idx) => (
        <Box key={idx} sx={{ mb: 6, textAlign: "center" }}>
          <Typography
            variant="h4"
            color="white"
            sx={{
              fontWeight: "bold",
              mb: 4,
              borderBottom: "3px solid #00e5ff",
              display: "inline-block",
              pb: 1,
            }}
          >
            {group.title}
          </Typography>

          {/* จัด Card ให้อยู่ตรงกลาง */}
          <Grid
            container
            spacing={3}
            justifyContent="center"
            alignItems="center"
          >
            {group.skills.map((skill, i) => (
              <Grid item xs={12} sm={6} md={3} key={i}>
                <Card
                  sx={{
                    background:
                      "linear-gradient(145deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))",
                    borderRadius: "20px",
                    backdropFilter: "blur(12px)",
                    p: 2,
                    transition: "0.3s",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: "0 8px 20px rgba(0,0,0,0.4)",
                    },
                  }}
                >
                  <CardContent sx={{ textAlign: "center" }}>
                    <Box
                      component="img"
                      src={skill.icon}
                      alt={skill.name}
                      sx={{
                        width: 50,
                        height: 50,
                        mb: 1.5,
                        filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.4))",
                      }}
                    />
                    <Typography
                      variant="h6"
                      sx={{
                        color: skill.color,
                        fontWeight: "bold",
                        mb: 1,
                      }}
                    >
                      {skill.name}
                    </Typography>
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                      {[1, 2, 3, 4, 5].map((level) => (
                        <Box
                          key={level}
                          sx={{
                            width: 12,
                            height: 12,
                            borderRadius: "50%",
                            backgroundColor:
                              level <= skill.level ? "#ffd600" : "#555",
                            mx: "2px",
                          }}
                        />
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      ))}
    </Container>
  </Box>
);

export default SkillsPage;
