import React from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Avatar,
  Box,
  Divider,
} from "@mui/material";
// Removed unused import
import { motion } from "framer-motion";

const internships = [
  {
    image: "/images/Intern/Advice.png",
    title: "บริษัท เเอดไวซ๋ จำกัด (สาขา งาว)",
    period: "พฤษภาคม 2563 - กรกฎาคม 2563",
    position: "IT Support",
    detail:
      "งานซ่อม Computer , Printer ดูเเลอุปกรณ์ HardwareเเละSoftware",
  },
  {
    image: "/images/Intern/EGAT.jpg",
    title: "การไฟฟ้าฝ่ายผลิตแห่งประเทศไทย (กฟผ.) เเม่เมาะ",
    period: "2563-2564",
    position: "ดูแลซ่อมคอมพิวเตอร์เเละระบบเครือข่าย",
    detail:
      "ดูแลซ่อมบำรุงรักษาอุปกรณ์คอมพิวเตอร์และระบบเครือข่ายภายในองค์กร รวมถึงติดตั้งโปรแกรมและซอฟต์แวร์ต่างๆ ที่เกี่ยวข้องกับงาน",
  },
  {
    image: "/images/Intern/Ozone.png",
    title: "บริษัท โอโซนเน็ตเวิร์ค อินทิเกรชั่น จำกัด",
    period: "23 มิถุนายน 2568 - 10 ตุลาคม 2568",
    position: "Network Engineer & Technical Robot PUDU ",
    detail:
      "งานติดตั้งและดูแลระบบเครือข่ายคอมพิวเตอร์, ระบบกล้องวงจรปิด, ระบบเซิร์ฟเวอร์ และบำรุงรักษาอุปกรณ์ IT ภายในองค์กร รวมถึงการดูแลและซัพพอร์ตหุ่นยนต์ PUDU ในเครืออุตสาหกรรม",
  },
];

const InternshipPage = () => {
  return (
    <Box
      sx={{
        backgroundImage:
          'url("https://www.transparenttextures.com/patterns/stardust.png")',
        backgroundColor: "rgba(0, 0, 0, 0.76)",
        backgroundRepeat: "repeat",
        py: { xs: 6, md: 10 },
      }}
    >
      <Container maxWidth="lg">
        {/* หัวข้อหลัก */}
        <Box textAlign="center" mb={4}>
          <Typography
            variant="h2"
            color="white"
            textAlign="center"
            gutterBottom
            sx={{
              fontSize: { xs: "28px", md: "36px" },
              fontWeight: "bold",
              letterSpacing: 2,
              mb: 2,
            }}
          >
            ประสบการณ์ฝึกงาน
          </Typography>
          <Divider sx={{ bgcolor: "#00ff40ff", height: 4, borderRadius: 2, width: 400, mx: "auto", mb: 2 }} />
                    <br/>
        </Box>
        {/* การ์ดฝึกงาน */}
        <Grid container spacing={4} justifyContent="center">
          {internships.map((work, index) => (
            <Grid
              item
              key={index}
              xs={12}
              sm={6}
              md={4}
              display="flex"
              justifyContent="center"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -6 }}
                transition={{ type: "spring", stiffness: 300 }}
                style={{ width: "100%", maxWidth: 360 }}
              >
                <Card
                  sx={{
                    height: "100%",
                    borderRadius: "16px",
                    background: "rgba(34, 34, 34, 0.6)",
                    backdropFilter: "blur(8px)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    boxShadow: "0 8px 20px rgba(0,0,0,0.6)",
                    color: "white",
                    textAlign: "center",
                    p: 2,
                    transition: "0.3s",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    "&:hover": {
                      transform: "translateY(-6px)",
                      boxShadow: "0 12px 36px rgba(0,150,255,0.12)",
                    },
                  }}
                >
                  <CardContent>
                    <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      mb: 2,
                    }}
                  >
                    <Avatar
                      src={work.image}
                      alt={work.title}
                      sx={{
                        width: 120,
                        height: 120,
                        background: "#fff",
                        border: "3px solid #ffffffff",
                        boxShadow: "0 0 20px rgba(0, 114, 255, 0.3)",
                        objectFit: "cover", // ✅ ปรับรูปให้พอดีเต็มวง
                      }}
                      imgProps={{
                        style: { objectFit: "cover", width: "100%", height: "100%" }, // ✅ บังคับรูปเต็ม Avatar
                      }}
                    />
                  </Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: "bold",
                        color: "#ffd600",
                        mb: 1,
                      }}
                    >
                      {work.title}
                    </Typography>

                    <Typography
                      variant="subtitle1"
                      sx={{ color: "#00e676", fontWeight: 500 }}
                    >
                      {work.position}
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{
                        color: "#bbb",
                        mt: 0.5,
                        mb: 1,
                        fontStyle: "italic",
                      }}
                    >
                      {work.period}
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{
                        color: "#ddd",
                        px: 1,
                        lineHeight: 1.5,
                      }}
                    >
                      {work.detail}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default InternshipPage;
