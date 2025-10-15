import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Slide,
  useScrollTrigger,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate, useLocation } from "react-router-dom";

const drawerItems = [
  { label: "หน้าเเรก", path: "/#about" },
  { label: "ประวัติการศึกษา", path: "/#education" },
  { label: "ประสบการณ์ฝึกงาน", path: "/#internship" },
  { label: "ทักษะ", path: "/#skills" },
  { label: "ผลงาน", path: "/#projects" },
  { label: "ติดต่อ", path: "/#contact" },
];

function HideOnScroll({ children }) {
  const trigger = useScrollTrigger();
  return <Slide appear={false} direction="down" in={!trigger}>{children}</Slide>;
}

const Navbar = ({ token, setToken }) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // ซ่อน Navbar บนหน้า /admin และ /404
  const hideNavbar = location.pathname === "/admin" || location.pathname === "/404";

  // Sync token กับ localStorage ทุกครั้งที่เปลี่ยนหน้า
  React.useEffect(() => {
    const savedToken = localStorage.getItem("token");
    setToken(savedToken);
  }, [location.pathname, setToken]);

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const handleMenuClick = (path) => {
    setMobileOpen(false);
    if (!path) return;

    const [pathname, hash] = path.split("#");
    if (pathname) navigate(pathname);

    if (hash) {
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  return (
    <HideOnScroll>
      <AppBar
        position="sticky"
        color="primary"
        sx={{ top: 0, zIndex: 1100, display: hideNavbar ? "none" : "flex" }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            onClick={handleDrawerToggle}
            sx={{ display: { xs: "block", md: "none" }, mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

          <Typography
            variant="h6"
            sx={{ flexGrow: 1, fontWeight: "bold", fontFamily: "'Kanit', sans-serif" }}
          >
            NickJrz .Dev
          </Typography>
            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
              {drawerItems.map((item, index) => (
                <Button
                  key={index}
                  color="inherit"
                  onClick={() => handleMenuClick(item.path)}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
        </Toolbar>

        {/* Drawer สำหรับมือถือ */}
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
                <ListItemButton onClick={() => handleMenuClick(item.path)}>
                  <ListItemText
                    primary={item.label}
                    primaryTypographyProps={{
                      fontSize: 16,
                      sx: { color: "#fff", fontWeight: 500, fontFamily: "'Kanit', sans-serif" },
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
      </AppBar>
    </HideOnScroll>
  );
};

export default Navbar;
