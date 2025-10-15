// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { GlobalStyles, Box, Typography } from "@mui/material";

import Layout from "./AppLayout";

// Sections
import AboutPage from "./components/AboutPage";
import EducationPage from "./components/EducationPage";
import SkillsPage from "./components/SkillsPage";
import ProjectsPage from "./components/ProjectPage";
import ContactPage from "./components/ContactPage";
import InternshipPage from "./components/InternshipPage";

// Pages


// Theme
const theme = createTheme({
  palette: { primary: { main: "#000" } },
  typography: { fontFamily: "'Kanit', sans-serif" },
});

function App() {
  const [token, setToken] = React.useState(localStorage.getItem("token") || null);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles styles={{ html: { scrollBehavior: "smooth" } }} />
      <Router>
        <Layout token={token} setToken={setToken}>
          <Routes>
            {/* Home Page Sections */}
            <Route
              path="/"
              element={
                <Box>
                  <Box id="about"><AboutPage /></Box>
                  <Box id="education"><EducationPage /></Box>
                  <Box id="internship"><InternshipPage /></Box>
                  <Box id="skills"><SkillsPage /></Box>
                  <Box id="projects"><ProjectsPage /></Box>
                  <Box id="contact"><ContactPage /></Box>
                </Box>
              }
            />

            {/* Admin Login Page */}
            <Route
              path="/404"
              element={
                <Box
                  sx={{
                    minHeight: "100vh",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#f5f5f5",
                    textAlign: "center",
                    px: 2,
                  }}
                >
                  <Typography variant="h1" sx={{ mt: 2, fontWeight: "bold", color: "#1976d2" }}>
                    404
                  </Typography>
                  <Typography variant="h4" sx={{ mt: 2, color: "#555" }}>
                    Page Not Found
                  </Typography>
                  <Typography variant="h5" sx={{ mt: 1, color: "#777" }}>
                    ขออภัย! หน้าเว็บนี้ไม่มีอยู่จริง
                  </Typography>
                </Box>
              }
            />

            {/* Fallback: ทุก URL ไม่ตรง redirect ไป 404 */}
            <Route path="*" element={<Navigate to="/404" />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
