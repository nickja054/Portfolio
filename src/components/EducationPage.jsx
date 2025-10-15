import React from "react";
import { Container, Grid, Card, CardContent, Typography, Avatar, Box, Divider } from "@mui/material";
import SchoolTwoToneIcon from "@mui/icons-material/SchoolTwoTone";

    const educations = [  
      {
        image: "/images/Logo/Lampang Technical.png",
        title: "ระดับประกาศนียบัตรวิชาชีพ (ปวช.)",
        school: "วิทยาลัยเทคนิคลำปาง (2559-2562)",
        text: "แผนกเทคโนโลยีสารสนเทศ",
        detail: "สาขาเทคโนโลยีสารสนเทศ GPA 2.87", 
      },
      {
        image: "/images/Logo/Lampang Technical.png",
        title: "ระดับอนุปริญญา (ปวส.)",
        school: "วิทยาลัยเทคนิคลำปาง (2562-2564)",
        text: "แผนกเทคโนโลยีสารสนเทศ",
        detail: "สาขานักพัฒนาซอฟต์แวร์ GPA 3.33",
      },
      {
        image: "/images/Logo/RMUTL.jpg",
        title: "ระดับปริญญาตรี",
        school: "มหาวิทยาลัยเทคโนโลยีราชมงคลล้านนา เชียงใหม่ (2565-2568)",
        text: "คณะวิศวกรรมศาสตร์",
        detail: "สาขาวิศวกรรมคอมพิวเตอร์ GPA 2.85",
      },
      
    ];

    const bgGradient = "linear-gradient(135deg, #232526 0%, #414345 100%)";

    const EducationPage = () => {
      return (
        <Box sx={{
          background: `${bgGradient}, url("https://www.transparenttextures.com/patterns/inspiration-geometry.png")`,
          backgroundBlendMode: "overlay",
          backgroundRepeat: "repeat",
          py: { xs: 12, md: 10 },
          px: 0,
          size: "auto",
        }}>
        <Container >
          <Typography variant="h4" align="center" gutterBottom color="white" sx={{ fontWeight: 'bold', mb: 2 }}>
            ประวัติการศึกษา <SchoolTwoToneIcon sx={{ fontSize: { xs: "40px", md: "60px" }, color: "#ffd600", ml: 2, verticalAlign: "middle" }} />
          </Typography>
          <Divider sx={{ bgcolor: "#00ff40ff", height: 4, borderRadius: 2, width: 400, mx: "auto", mb: 2 }} />
          <br/>
              <Grid container spacing={4} justifyContent="center">
      {educations.map((edu, index) => (
        <Grid item key={index}>
          <Card
            sx={{
              width: 350,   // กำหนดความกว้างการ์ดเท่ากันทุกใบ
              height: 400,  // ความสูงเท่ากัน
              boxShadow: "0 8px 32px 0 rgba(31,38,135,0.18)",
              transition: "transform 0.2s, box-shadow 0.2s",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "28px",
                    background: "rgba(30, 30, 36, 0.96)",
                    borderTop: "6px solid #ffd600",
                    borderLeft: "6px solid #0073E6",
                    // hover styles below
                    "&:hover": {
                      transform: "translateY(-6px) scale(1.03)",
                      boxShadow: "0 16px 40px 0 rgba(31,38,135,0.25)",
                      borderLeft: "6px solid #ffd600",
                      borderTop: "6px solid #0073E6",
                    },
            }}
          >
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                width: "100%"
              }}
            >
              <Avatar
                src={encodeURI(edu.image)}
                sx={{ width: 180, height: 180, mb: 2, background: "#fff", }}
                onError={(e) => {
                  console.error('Failed to load education avatar', e.target.src);
                  e.target.src = 'https://via.placeholder.com/180x180?text=No+Image';
                }}
              />
              <Typography variant="h6" color="rgb(255, 179, 0)" sx={{ fontWeight: 700, mb: 1, letterSpacing: 1 }}>
                              {edu.title}
                            </Typography>
                            <Typography variant="subtitle1" color="#00e676" sx={{ fontWeight: 500, mb: 0.5 }}>
                              {edu.school}
                            </Typography>
                            <Typography color="white" sx={{ opacity: 0.9, fontSize: 16 }}>
                              {edu.text}
                            </Typography>
                            <Typography color="white" sx={{ opacity: 0.9, fontSize: 16 }}>
                              {edu.detail}
                            </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
        </Container>
        </Box>
      );
    };

export default EducationPage;
