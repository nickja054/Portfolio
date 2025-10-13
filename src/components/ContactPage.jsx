import React from "react";
import { Container, Grid, Paper, Typography, Box, Link } from "@mui/material";
import { motion } from "framer-motion";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

const contacts = [
  { icon: <FacebookIcon />, label: "Patipan Boonchu", link: "https://www.facebook.com/NickJrzs" },
  { icon: <InstagramIcon />, label: "nxck_pxtp", link: "https://www.instagram.com/nxck_pxtp/" },
  { icon: <GitHubIcon />, label: "Patipan Boonchu", link: "https://github.com/nickja054" },
  { icon: <MailOutlineIcon />, label: "nickja054@gmail.com" },
];

const ContactPage = () => (
  <Box
    sx={{
      backgroundImage:
        'url("https://www.transparenttextures.com/patterns/skewed-print.png")',
      backgroundColor: "rgb(28, 28, 29)",
      backgroundRepeat: "repeat",
      py: { xs: 6, md: 10 },
    }}
  >
    <Container maxWidth="lg">
      <Typography
        variant="h4"
        color="white"
        textAlign="center"
        gutterBottom
        sx={{
          fontSize: { xs: "28px", md: "36px" },
          fontWeight: "bold",
          letterSpacing: 2,
          mb: 4,
        }}
      >
        ติดต่อ
      </Typography>

      <Grid container spacing={6} justifyContent="center">
        {contacts.map((item, index) => (
          <Grid key={index} item xs={12} sm={6} md={3} display="flex" justifyContent="center">
            <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}>
              <Paper
                elevation={10}
                sx={{
                  width: { xs: 180, sm: 200, md: 200 },   // ✅ กำหนดความกว้าง
                  height: { xs: 180, sm: 200, md: 200 },  // ✅ กำหนดความสูงเท่ากับความกว้าง
                  borderRadius: "20px",
                  textAlign: "center",
                  backgroundColor: "#52514eff",
                  cursor: "pointer",
                  transition: "0.3s",
                  "&:hover": {
                    boxShadow: "0 20px 40px rgba(231, 151, 30, 0.77)",
                  },
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  p: 3,
                }}
              >
                <motion.div
                  whileHover={{ rotate: 15 }}
                  whileTap={{ scale: 0.9 }}
                  style={{ marginBottom: 16 }}
                >
                  {item.link ? (
                    <Link
                      href={item.link}
                      target="_blank"
                      rel="noopener"
                      sx={{ color: "#ffb300" }}
                    >
                      {React.cloneElement(item.icon, { sx: { fontSize: 50 } })}
                    </Link>
                  ) : (
                    React.cloneElement(item.icon, {
                      sx: { fontSize: 50, color: "#ffb300" },
                    })
                  )}
                </motion.div>

                <Typography
                  sx={{
                    fontSize: { xs: 16, sm: 18, md: 20 },
                    fontWeight: 600,
                    color: "#ffb300",
                  }}
                >
                  {item.label}
                </Typography>
              </Paper>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  </Box>
);

export default ContactPage;
