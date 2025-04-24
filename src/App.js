import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Box,
  Avatar,
  Grid,
  Paper,
  Button,
  GlobalStyles,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import Slide from "@mui/material/Slide";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import ContactsIcon from "@mui/icons-material/Contacts";
import SchoolTwoToneIcon from "@mui/icons-material/SchoolTwoTone";
import MenuIcon from "@mui/icons-material/Menu";

const theme = createTheme({
  palette: {
    primary: {
      main: "rgb(0, 0, 0)",
    },
    background: {
      main: "rgb(0, 0, 0)",
    },
  },
  typography: {
    fontFamily: "'Kanit', sans-serif",
    color: "blue",
  },
});

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Portfolio = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawerItems = [
    { label: "หน้าเเรก", href: "#about" },
    { label: "ประวัติการศึกษา", href: "#education" },
    { label: "ติดต่อ", href: "#contact" },
  ];

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles styles={{ html: { scrollBehavior: "smooth" } }} />

      <HideOnScroll>
        <AppBar position="sticky" color="primary" sx={{ top: 0, zIndex: 1100 }}>
        <Toolbar>
        {/* Hamburger Menu (Mobile Only) - ซ้ายมือ */}
        <IconButton
          color="inherit"
          onClick={handleDrawerToggle}
          sx={{ display: { xs: "block", md: "none" }, mr: 2 }}
        >
          <MenuIcon />
        </IconButton>

        {/* Logo / Title */}
        <Typography
          variant="h6"
          component="div"
          color="white"
          sx={{ flexGrow: 1, fontSize: '22px', fontWeight: 'bold' }}
        >
          NickJrz .Dev
        </Typography>

        {/* Desktop Menu */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
          {drawerItems.map((item, index) => (
            <Button
              key={index}
              color="inherit"
              href={item.href}
              sx={{ fontSize: "16px", color: "white" }}
            >
              {item.label}
            </Button>
          ))}
        </Box>

        </Toolbar>

        </AppBar>
      </HideOnScroll>

      {/* Drawer (Mobile Menu) */}
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 240,
            backgroundColor: "#000",
            color: "#fff",
          },
        }}
      >
        <List>
          {drawerItems.map((item, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton
                component="a"
                href={item.href}
                onClick={handleDrawerToggle}
                sx={{
                  width: "100%",
                  textAlign: "left",
                  "&:hover": {
                  },
                }}
              >
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{ fontSize: 16 }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* Section about */}
      <Box
        id="about"
        sx={{
          backgroundImage: 'url("https://www.transparenttextures.com/patterns/cartographer.png")',
          backgroundColor: "rgb(28, 28, 29)",
          backgroundRepeat: "repeat",
          minHeight: "100vh",
        }}
      >
        <Container maxWidth="xl" sx={{ px: 4, py: 6 }}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} md={4} sx={{ textAlign: "center" }}>
              <Avatar
                src="/images/images.jpg"
                sx={{
                  width: { xs: 200, sm: 300, md: 400, lg: 550 },
                  height: { xs: 200, sm: 300, md: 400, lg: 550 },
                  margin: "auto",
                }}
              />
            </Grid>
            <Grid item xs={12} md={8}>
              <Typography variant="h1" sx={{ fontSize: { xs: "32px", sm: "48px", md: "64px" }, color: "white" }}>
                สวัสดี,
              </Typography>
              <Typography variant="h2" sx={{ fontSize: { xs: "24px", sm: "36px", md: "48px" }, color: "rgb(255, 179, 0)" }}>
                ผม ปฏิภาณ บุญชู.
              </Typography>
              <Typography variant="h5" sx={{ mt: 2, color: "rgb(0, 255, 128)", fontSize: { xs: "18px", md: "24px" } }}>
                Frontend Developer / IT Support / Network Engineer
              </Typography>
              <Typography variant="h6" sx={{ mt: 2, color: "white", fontSize: { xs: "16px", md: "20px" } }}>
                ผมพร้อมที่จะพัฒนาตัวเอง ในสายงานวิศวกรรมคอมพิวเตอร์ทั้งด้าน Software เเละ Hardware
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Education and Contact */}
      <Box
        sx={{
          backgroundImage: 'url("https://www.transparenttextures.com/patterns/inspiration-geometry.png")',
          backgroundColor: "rgb(28, 28, 29)",
          backgroundRepeat: "repeat",
          minHeight: "100vh",
        }}
      >
        <Container maxWidth="xl" id="education" sx={{ px: 4, py: 6 }}>
          <Box>
            <Typography
              variant="h2"
              color="white"
              gutterBottom
              textAlign="center"
              sx={{ fontSize: { xs: "32px", md: "40px" } }}
            >
              ประวัติการศึกษา
              <SchoolTwoToneIcon sx={{ fontSize: { xs: "40px", md: "80px" }, color: "white", ml: 1 }} />
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {[{
              title: "ระดับปริญญาตรี",
              school: "มหาวิทยาลัยเทคโนโลยีราชมงคลล้านนา เชียงใหม่ (2565-2567)",
              detail: "ปริญญาตรี คณะวิศวกรรมศาสตร์ วิศวกรรมคอมพิวเตอร์ GPA 2.82"
            }, {
              title: "ระดับอนุปริญญา",
              school: "วิทยาลัยเทคนิคลำปาง (2562-2564)",
              detail: "ปวส. สาขานักพัฒนาซอฟต์แวร์ GPA 3.33"
            }, {
              title: "ระดับเทียบเท่ามัธยม",
              school: "วิทยาลัยเทคนิคลำปาง (2559-2562)",
              detail: "ปวช. สาขาเทคโนโลยีสารสนเทศ GPA 2.87"
            }].map((edu, index) => (
              <Grid item xs={12} md={8} key={index}>
                <Paper
                  sx={{
                    p: { xs: 2, sm: 3 },
                    borderRadius: "32px",
                    mb: 3,
                    backgroundColor: "rgba(0, 0, 0, 0.8)",
                  }}
                  elevation={3}
                >
                  <Typography variant="h5" color="white">{edu.title}</Typography>
                  <Typography variant="h6" color="white">{edu.school}</Typography>
                  <Typography color="white">{edu.detail}</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>

        {/* Contact Section */}
        <Container maxWidth="xl" sx={{ px: 4, py: 6 }}>
          <Grid container spacing={3} justifyContent="center">
            <Grid item xs={12} md={6} lg={4}>
              <Paper
                id="contact"
                sx={{
                  p: { xs: 2, sm: 3 },
                  borderRadius: "32px",
                  backgroundColor: "#0073E6",
                }}
                elevation={3}
              >
                <Typography
                  variant="h6"
                  color="white"
                  gutterBottom
                  sx={{ fontSize: { xs: "24px", md: "30px" }, display: "flex", alignItems: "center" }}
                >
                  <ContactsIcon sx={{ mr: 1 }} /> My Contact
                </Typography>

                <Box mt={3}>
                  {[
                    { icon: <FacebookIcon />, label: "Patipan Boonchu", link: "https://www.facebook.com/NickJrzs" },
                    { icon: <InstagramIcon />, label: "nxck_pxtp", link: "https://www.instagram.com/nxck_pxtp/" },
                    { icon: <GitHubIcon />, label: "Patipan Boonchu", link: "https://github.com/nickja054" },
                    { icon: <MailOutlineIcon />, label: "nickja054@gmail.com" },
                  ].map((item, index) => (
                    <Box key={index} display="flex" alignItems="center" mb={2} flexWrap="wrap">
                      {item.link ? (
                        <a href={item.link} target="_blank" rel="noopener noreferrer">
                          {React.cloneElement(item.icon, {
                            sx: { fontSize: { xs: 24, md: 30 }, color: "white", mr: 1 },
                          })}
                        </a>
                      ) : (
                        React.cloneElement(item.icon, {
                          sx: { fontSize: { xs: 24, md: 30 }, color: "white", mr: 1 },
                        })
                      )}
                      <Typography sx={{ fontSize: { xs: "14px", sm: "16px", md: "18px" }, color: "white" }}>
                        {item.label}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default Portfolio;
