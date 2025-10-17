import React, { useState, useEffect } from "react";
import { Box, Container, Grid, Avatar, Typography } from "@mui/material";
import { FaLaptopCode, FaServer, FaNetworkWired } from "react-icons/fa";

      const AboutPage = () => {
        const fullText =
          "ผมพร้อมที่จะเรียนรู้สิ่งใหม่ ๆ เพื่อหาประสบการณ์ในการทำงานและพัฒนาตนเอง\nให้เติบโตอย่างต่อเนื่อง ด้านสายงาน \" วิศวกรรมคอมพิวเตอร์ \" ";
        const [displayText, setDisplayText] = useState("");
        const [isDeleting, setIsDeleting] = useState(false);
        const [index, setIndex] = useState(0);

        useEffect(() => {
          let typingSpeed = isDeleting ? 30 : 90;
          let timeout;

          if (!isDeleting && index <= fullText.length) {
            timeout = setTimeout(() => {
              setDisplayText(fullText.slice(0, index));
              setIndex(index + 1);
            }, typingSpeed);
          } else if (isDeleting && index >= 0) {
            timeout = setTimeout(() => {
              setDisplayText(fullText.slice(0, index));
              setIndex(index - 1);
            }, typingSpeed);
          } else if (index > fullText.length) {
            timeout = setTimeout(() => setIsDeleting(true), 5000);
          } else if (index < 0) {
            setIsDeleting(false);
            setIndex(0);
          }

          return () => clearTimeout(timeout);
        }, [index, isDeleting, fullText]);

        return (
          <Box
            sx={{
              backgroundImage: 'url("https://www.transparenttextures.com/patterns/cartographer.png")',
              backgroundColor: "rgb(28, 28, 29)",
              backgroundRepeat: "repeat",
              py: { xs: 12, md: 20 },
              minHeight: "60vh",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Container maxWidth="xl" sx={{ px: 4, py: { xs: 8, md: 12 } }}>
              <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} sm={5} md={4}>
            <Box
              sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
              }}
            >
              <Box sx={{ position: "relative", width: { xs: 160, sm: 260, md: 350 }, height: { xs: 160, sm: 260, md: 350 }, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Avatar
            src={encodeURI("/images/Profile/Patipan1.jpg")}
            sx={{
              width: "100%",
              height: "100%",
              position: "absolute",
              top: 0,
              left: 0,
              "& .MuiAvatar-img": {
          objectFit: "cover",
          objectPosition: "center top",
              },
            }}
            onError={(e) => {
              console.error('Failed to load profile avatar', e.target.src);
              e.target.src = 'https://via.placeholder.com/350x350?text=No+Image';
            }}
          />
          <Box
            sx={{
              position: "absolute",
              top: "2%",
              right: "-30px",
              animation: "float 3s ease-in-out infinite",
              animationDelay: "0.5s",
              ml: 2,
              display: { xs: "block", sm: "block" },
            }}
          >
            <FaServer size={50} color="#ffb300" />
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "90%",
              right: "-10px",
              animation: "float 3s ease-in-out infinite",
              animationDelay: "0.5s",
              ml: 2,
              display: { xs: "block", sm: "block" },
            }}
          >
            <FaNetworkWired size={50} color="#29b6f6" />
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "1%",
              left: "-15px",
              animation: "float 3s ease-in-out infinite",
              "@keyframes float": {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
          "100%": { transform: "translateY(0)" },
              },
              mr: 2,
              display: { xs: "block", sm: "block" },
            }}
          >
            <FaLaptopCode size={50} color="#00e676" />
          </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={8} sx={{ px: { xs: 1, sm: 4 }, mt: { xs: 4, sm: 0 } }}>
            <Typography
              variant="h1"
              sx={{
          fontSize: { xs: "28px", sm: "42px", md: "64px" },
          color: "white",
          mb: { xs: 1, sm: 2 },
          lineHeight: { xs: 1.2, sm: 1.3 }
              }}
            >
              สวัสดีครับ,
            </Typography>
            <Typography
              variant="h2"
              sx={{
          fontSize: { xs: "22px", sm: "32px", md: "48px" },
          color: "rgb(255, 179, 0)",
          mb: { xs: 2, sm: 3 },
          lineHeight: { xs: 1.2, sm: 1.3 }
              }}
            >
              ผม ปฏิภาณ บุญชู.
            </Typography>
            <Typography variant="h5" sx={{ 
              color: "rgb(0, 255, 128)", 
              fontSize: { xs: "14px", sm: "20px", md: "24px" }, 
              mb: { xs: 2, sm: 3 },
              lineHeight: { xs: 1.4, sm: 1.5 },
              wordBreak: "break-word"
            }}>
              Frontend Developer / IT Support / Network Engineer
            </Typography>
            <Box
              sx={{
          position: "relative",
          minHeight: { xs: "60px", sm: "48px", md: "56px" },
          display: "flex",
          alignItems: "center",
              }}
            >
              <Typography
          variant="h6"
          sx={{
            color: "white",
            fontSize: { xs: "14px", sm: "18px", md: "20px" },
            display: "block",
            whiteSpace: { xs: "normal", sm: "pre-line" },
            wordBreak: "break-word",
            textAlign: { xs: "left", sm: "left" },
            maxWidth: "100%",
            width: "100%",
            lineHeight: { xs: 1.5, sm: 1.8 },
            overflowWrap: "break-word",
          }}
              >
          {displayText}
          <Box
            component="span"
            sx={{
              borderLeft: "2px solid white",
              ml: 0.5,
              animation: "blink 0.8s infinite",
              "@keyframes blink": {
          "0%": { opacity: 1 },
          "50%": { opacity: 0 },
          "100%": { opacity: 1 },
              },
            }}
          ></Box>
              </Typography>
            </Box>
          </Grid>
              </Grid>
            </Container>
          </Box>
        );
      };

export default AboutPage;
