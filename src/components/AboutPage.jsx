import React, { useState, useEffect } from "react";
import { Box, Container, Grid, Avatar, Typography } from "@mui/material";
import { FaLaptopCode, FaServer, FaNetworkWired } from "react-icons/fa";

      const AboutPage = () => {
        const fullText =
          "ผมพร้อมที่จะเรียนรู้ เพื่อหาประสบการณ์เเละพัฒนาตัวเองในสายงานวิศวกรรมคอมพิวเตอร์"
        const [displayText, setDisplayText] = useState("");
        const [isDeleting, setIsDeleting] = useState(false);
        const [index, setIndex] = useState(0);

        useEffect(() => {
          let typingSpeed = isDeleting ? 30 : 90; // ความเร็วลบ/พิมพ์
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
            timeout = setTimeout(() => setIsDeleting(true), 3000); // พักก่อนลบ
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
              py: { xs: 6, md: 10 },
            }}
            
          >
          <br />
          <br />
          <br />
          <br />
          <br />
            <Container maxWidth="xl" sx={{ px: 4, py: 6 }}>
              <Grid container spacing={2} alignItems="center">
                <Grid item xs={12} md={4} sx={{ textAlign: "center" }}>
                  <Grid item xs={12} md={4} sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", }}>
        <Box sx={{ position: "relative", display: "flex", alignItems: "center" }}>

          {/* Avatar ตรงกลาง */}
          <Avatar
            src={encodeURI("/images/Profile/Patipan.jpg")}
            sx={{
              width: { xs: 200, sm: 300, md: 350 },
              height: { xs: 200, sm: 300, md: 350 },
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

          {/* Icon ด้านขวา */}
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
      </Grid>
      </Grid>
          <Grid item xs={12} md={8}>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "32px", sm: "48px", md: "64px" },
                color: "white",
              }}
            >
              สวัสดีครับ,
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "24px", sm: "36px", md: "48px" },
                color: "rgb(255, 179, 0)",
              }}
            >
              ผม ปฏิภาณ บุญชู.
            </Typography>
            <Typography variant="h5" sx={{ mt: 2, color: "rgb(0, 255, 128)", fontSize: { xs: "18px", md: "24px" } }}>
            Frontend Developer / IT Support / Network Engineer
            </Typography>
            <Typography
              variant="h6"
              sx={{
                mt: 2,
                color: "white",
                fontSize: { xs: "16px", md: "20px" },
                display: "inline-block",
                whiteSpace: "normal",  // ให้ตัดบรรทัดได้
                wordBreak: "break-word", // ตัดคำถ้าจำเป็น
                textAlign: "", // จัดกลาง (เลือกได้)
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

          </Grid>
        </Grid>
      </Container>
      <br />
      <br />
      <br />
      <br />
      <br />
    </Box>
  );
};

export default AboutPage;
