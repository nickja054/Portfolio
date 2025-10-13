import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Button,
  Chip,
  Dialog,
  DialogContent,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Projects from "../data/projects";
import { FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { SiMqtt } from "react-icons/si";
import ImageSlider from "../components/ImageSlider";
import SketchUpIcon from "../assets/icons/sketchup.png";

const ProjectPage = () => {
  const [filters, setFilters] = useState(["All"]);
  const [openImage, setOpenImage] = useState(false);
  const [selectedProjectImages, setSelectedProjectImages] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  // toggle filter
  const handleToggleFilter = (cat) => {
  setFilters([cat]); // กดปุ่มไหนก็เซ็ตเป็น filter อันเดียว
};

  // filter projects
  const filteredProjects = filters.includes("All")
    ? Projects
    : Projects.filter((p) =>
        Array.isArray(p.category)
          ? p.category.some((c) => filters.includes(c))
          : filters.includes(p.category)
      );

  const handleImageClick = (src, images) => {
    const index = images.indexOf(src);
    setSelectedProjectImages(images);
    setSelectedIndex(index);
    setOpenImage(true);
  };

  const handleCloseImage = () => {
    setOpenImage(false);
    setSelectedProjectImages([]);
    setSelectedIndex(0);
  };

  const handlePrev = () => {
    setSelectedIndex((prev) =>
      prev === 0 ? selectedProjectImages.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setSelectedIndex((prev) =>
      prev === selectedProjectImages.length - 1 ? 0 : prev + 1
    );
  };
  
  const techIcons = {
  React: <FaReact color="#61dafb" size={20} />,
  "Node.js": <FaNodeJs color="#339933" size={20} />,
  MQTT: <SiMqtt color="#FF6A00" size={20} />,
  Sketchup: <img src={SketchUpIcon} alt="SketchUp" style={{ width: 20, height: 20 }} />,
  };

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
      <Typography
        variant="h2"
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
        ผลงานของฉัน
      </Typography>

      {/* Filter Buttons */}
      <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mb: 6 }}>
        {["All", "Hardware", "Software"].map((cat) => (
          <Button
            key={cat}
            variant="contained"
            sx={{
              color: filters.includes(cat) ? "#e8980dff" : "#fff",
              bgcolor: filters.includes(cat) ? "#fff" : "primary.main",
              fontWeight: filters.includes(cat) ? "bold" : "normal",
            }}
            onClick={() => handleToggleFilter(cat)}
          >
            {cat}
          </Button>
        ))}
      </Box>

      <Grid container spacing={4} justifyContent="center">
        {filteredProjects.map((project) => (
          <Grid item xs={12} sm={6} md={4} key={project.id}>
            <Card sx={{ overflow: "hidden" }}>
              <ImageSlider
                images={project.images}
                onImageClick={(src) => handleImageClick(src, project.images)}
              />
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                  {project.title}
                </Typography>
                {project.previewDescription && (
                  <Typography
                    variant="body2"
                    sx={{ fontStyle: "italic", color: "gray" }}
                  >
                    {project.previewDescription}
                  </Typography>
                )}
                <Typography
                  variant="body2"
                  sx={{ mt: 1, whiteSpace: "pre-line" }}
                >
                  {project.description}
                </Typography>

                {/* Category Chips */}
                <Box sx={{ mt: 2, display: "flex", gap: 1, flexWrap: "wrap" }}>
                {Array.isArray(project.category)
                  ? project.category.map((cat, idx) => (
                      <Chip
                        key={idx}
                        label={cat}
                        sx={{
                          bgcolor: cat === "Hardware" ? "#e8980dff" : cat === "Software" ? "#38f9d7" : "#ccc",
                          color: "#000000ff",
                        }}
                      />
                    ))
                  : (
                      <Chip
                        label={project.category}
                        sx={{
                          bgcolor: project.category === "Hardware" ? "#e8980dff" : project.category === "Software" ? "#38f9d7" : "#ccc",
                          color: "#000000ff",
                        }}
                      />
                    )}
              </Box>
              <Box sx={{ mt: 1, display: "flex", gap: 1, flexWrap: "wrap" }}>
                {project.technologies.map((tech, idx) => (
                  <Chip
                    key={idx}
                    icon={techIcons[tech]}
                    label={tech}
                    sx={{ bgcolor: "#222", color: "#fff", fontWeight: "bold" }}
                  />
                ))}
              </Box>
              <Box sx={{ mt: 2, display: "flex", gap: 2, flexWrap: "wrap" }}>
              {project.demo_url && (
                <Button
                  size="small"
                  variant="outlined"
                  color="primary"
                  href={project.demo_url}
                  target="_blank"
                >
                  Demo
                </Button>
              )}
              {project.github_url && (
                <Button
                  size="small"
                  variant="outlined"
                  color="secondary"
                  href={project.github_url}
                  target="_blank"
                >
                  GitHub
                </Button>
              )}
            </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Modal แสดงรูปใหญ่ + เลื่อนซ้ายขวา */}
      <Dialog open={openImage} onClose={handleCloseImage} maxWidth="lg">
        <DialogContent sx={{ p: 0, bgcolor: "#000", position: "relative" }}>
          <IconButton
            onClick={handleCloseImage}
            sx={{
              position: "absolute",
              top: 10,
              right: 10,
              color: "#fff",
              zIndex: 10,
            }}
          >
            <CloseIcon />
          </IconButton>

          <IconButton
            onClick={handlePrev}
            sx={{
              position: "absolute",
              top: "50%",
              left: 10,
              color: "#fff",
              zIndex: 10,
            }}
          >
            <ArrowBackIosIcon />
          </IconButton>

          <IconButton
            onClick={handleNext}
            sx={{
              position: "absolute",
              top: "50%",
              right: 10,
              color: "#fff",
              zIndex: 10,
            }}
          >
            <ArrowForwardIosIcon />
          </IconButton>

          {selectedProjectImages.length > 0 && (
            <img
              src={selectedProjectImages[selectedIndex]}
              alt="Selected"
              style={{
                width: "100%",
                height: "100%",
                maxHeight: "90vh",
                objectFit: "contain",
              }}
            />
          )}
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default ProjectPage;
