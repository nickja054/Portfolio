import React, { useState, useEffect } from "react";
import { Box, IconButton, Fade } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

const ImageSlider = ({ images = [], onImageClick }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide ทุก 5 วิ
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleImageClick = (img) => {
    // เรียก callback ถ้ามี
    if (onImageClick) onImageClick(img);
    // แล้วเลื่อนไปภาพถัดไป
    handleNext();
  };

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: 250,
        overflow: "hidden",
        bgcolor: "#000",
      }}
    >
      {images.map((img, i) => (
        <Fade key={i} in={i === currentIndex} timeout={600} unmountOnExit>
          <Box
            component="img"
            src={img}
            alt={`slide-${i}`}
            onClick={() => handleImageClick(img)}
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              cursor: "pointer",
              position: "absolute",
              top: 0,
              left: 0,
            }}
          />
        </Fade>
      ))}

      {/* ปุ่มย้อนกลับ */}
      <IconButton
        onClick={handlePrev}
        sx={{
          position: "absolute",
          top: "50%",
          left: 10,
          transform: "translateY(-50%)",
          bgcolor: "rgba(0,0,0,0.5)",
          color: "#fff",
          "&:hover": { bgcolor: "rgba(0,0,0,0.7)" },
        }}
      >
        <ArrowBackIos fontSize="small" />
      </IconButton>

      {/* ปุ่มถัดไป */}
      <IconButton
        onClick={handleNext}
        sx={{
          position: "absolute",
          top: "50%",
          right: 10,
          transform: "translateY(-50%)",
          bgcolor: "rgba(0,0,0,0.5)",
          color: "#fff",
          "&:hover": { bgcolor: "rgba(0,0,0,0.7)" },
        }}
      >
        <ArrowForwardIos fontSize="small" />
      </IconButton>
    </Box>
  );
};

export default ImageSlider;
