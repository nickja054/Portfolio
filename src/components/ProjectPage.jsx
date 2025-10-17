import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Dialog,
  DialogContent,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { PageSection, SectionTitle } from "./shared/PageComponents";
import ErrorBoundary from "./ErrorBoundary.js";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import Projects from "../data/projects";
import ImageSlider from "../components/ImageSlider";
import TechIcon from "./TechIcon";

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
  
  // Removed techIcons object - now using TechIcon component

  return (
    <PageSection>
      <SectionTitle>ผลงานของฉัน</SectionTitle>
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

      <Grid container spacing={{ xs: 3, sm: 4, md: 4 }} justifyContent="center" alignItems="stretch" sx={{ px: { xs: 2, sm: 4, md: 6 } }}>
        <ErrorBoundary>
          {filteredProjects.map((project) => (
          <Grid item xs={12} sm={6} md={4} key={project.id} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'stretch', mb: { xs: 2, sm: 3, md: 4 } }}>
            <Card sx={{ 
              overflow: "hidden", 
              display: 'flex', 
              flexDirection: 'column', 
              width: '100%', 
              minHeight: { xs: 480, sm: 520, md: 560 }, 
              maxWidth: { xs: 350, sm: 380, md: 400 },
              mx: 'auto',
              height: '100%' 
            }}>
              {/* Image area: responsive height for different screens */}
              <Box sx={{ height: { xs: 180, sm: 200, md: 220 }, width: '100%', position: 'relative', overflow: 'hidden' }}>
                <ImageSlider
                  images={project.images}
                  onImageClick={(src) => handleImageClick(src, project.images)}
                />
              </Box>
              <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: 1, p: { xs: 1.5, sm: 2, md: 2.5 } }}>
                <Box sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" sx={{ 
                    fontWeight: "bold", 
                    mb: 1,
                    fontSize: { xs: "14px", sm: "16px", md: "18px" },
                    lineHeight: 1.2
                  }}>
                    {project.title}
                  </Typography>
                  {project.previewDescription && (
                    <Typography
                      variant="body2"
                      sx={{ 
                        fontStyle: "italic", 
                        color: "gray", 
                        mb: 0.5, 
                        overflow: 'hidden', 
                        textOverflow: 'ellipsis', 
                        whiteSpace: 'nowrap',
                        fontSize: { xs: "11px", sm: "12px", md: "13px" }
                      }}
                    >
                      {project.previewDescription}
                    </Typography>
                  )}
                  <Typography
                    variant="body2"
                    sx={{ 
                      mt: 1, 
                      whiteSpace: "pre-line", 
                      color: '#242323ff', 
                      overflow: 'hidden', 
                      display: '-webkit-box', 
                      WebkitLineClamp: { xs: 3, sm: 4, md: 4 }, 
                      WebkitBoxOrient: 'vertical',
                      fontSize: { xs: "12px", sm: "13px", md: "14px" },
                      lineHeight: 1.4
                    }}
                  >
                    {project.description}
                  </Typography>
                </Box>

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
                          fontSize: { xs: "10px", sm: "11px", md: "12px" },
                          height: { xs: 24, sm: 28, md: 32 }
                        }}
                      />
                    ))
                  : (
                      <Chip
                        label={project.category}
                        sx={{
                          bgcolor: project.category === "Hardware" ? "#e8980dff" : project.category === "Software" ? "#38f9d7" : "#ccc",
                          color: "#000000ff",
                          fontSize: { xs: "10px", sm: "11px", md: "12px" },
                          height: { xs: 24, sm: 28, md: 32 }
                        }}
                      />
                    )}
              </Box>
              <Box sx={{ mt: 1, display: "flex", gap: 1, flexWrap: "wrap" }}>
                {project.technologies.map((tech, idx) => (
                  <Chip
                    key={idx}
                    icon={<TechIcon tech={tech} />}
                    label={tech}
                    sx={{ 
                      bgcolor: "#222", 
                      color: "#fff", 
                      fontWeight: "bold", 
                      height: { xs: 26, sm: 28, md: 30 }, 
                      px: 1,
                      fontSize: { xs: "9px", sm: "10px", md: "11px" },
                      "& .MuiChip-icon": {
                        fontSize: { xs: "14px", sm: "16px", md: "18px" }
                      }
                    }}
                  />
                ))}
              </Box>
              <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", alignItems: 'center', mt: 'auto' }}>
              {project.demo_url && (
                <Button
                  size="small"
                  variant="contained"
                  href={project.demo_url}
                  target="_blank"
                  startIcon={<LaunchIcon sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }} />}
                  sx={{
                    fontSize: { xs: "10px", sm: "11px", md: "12px" },
                    padding: { xs: "4px 8px", sm: "6px 12px", md: "8px 16px" },
                    backgroundColor: "rgba(0, 118, 252, 1)",
                    color: "#ffffff",
                    "&:hover": {
                      backgroundColor: "rgba(3, 127, 228, 0.8)"
                    }
                  }}
                >
                  Demo
                </Button>
              )}
              {project.github_url && (
                <Button
                  size="small"
                  variant="contained"
                  href={project.github_url}
                  target="_blank"
                  startIcon={<GitHubIcon sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }} />}
                  sx={{
                    fontSize: { xs: "10px", sm: "11px", md: "12px" },
                    padding: { xs: "4px 8px", sm: "6px 12px", md: "8px 16px" },
                    backgroundColor: "rgba(0, 0, 0, 1)",
                    color: "#ffffff",
                    "&:hover": {
                      backgroundColor: "rgba(0, 0, 0, 0.8)"
                    }
                  }}
                >
                  GitHub
                </Button>
              )}
            </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
        </ErrorBoundary>
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
              src={encodeURI(selectedProjectImages[selectedIndex])}
              alt="Selected"
              style={{
                width: "100%",
                height: "100%",
                maxHeight: "90vh",
                objectFit: "contain",
              }}
              onError={(e) => {
                console.error('Failed to load modal image', e.target.src);
                e.target.src = 'https://via.placeholder.com/1200x800?text=Image+Not+Found';
              }}
            />
          )}
        </DialogContent>
      </Dialog>
    </PageSection>
  );
};

export default ProjectPage;
