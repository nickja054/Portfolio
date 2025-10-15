import React from 'react';
import { Box, Typography, Divider } from '@mui/material';
import { THEME } from './theme';

export const PageSection = ({ children, ...props }) => (
  <Box
    sx={{
      backgroundImage: 'url("https://www.transparenttextures.com/patterns/stardust.png")',
      backgroundColor: THEME.colors.background,
      backgroundRepeat: "repeat",
      py: THEME.spacing.section,
      ...props.sx
    }}
  >
    {children}
  </Box>
);

export const SectionTitle = ({ children, ...props }) => (
  <>
    <Typography
      variant="h2"
      color={THEME.colors.text.primary}
      textAlign="center"
      gutterBottom
      sx={{
        fontSize: { xs: "28px", md: "36px" },
        fontWeight: "bold",
        letterSpacing: 2,
        mb: 4,
        ...props.sx
      }}
    >
      {children}
    </Typography>
    <Divider 
      sx={{ 
        bgcolor: THEME.colors.primary,
        height: 4,
        borderRadius: 2,
        width: 400,
        mx: "auto",
        mb: 2,
        ...props.dividerSx
      }} 
    />
  </>
);

export const CardContainer = ({ children, ...props }) => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      height: "100%",
      borderRadius: THEME.borderRadius.card,
      background: "rgba(34, 34, 34, 0.6)",
      backdropFilter: "blur(8px)",
      border: "1px solid rgba(255,255,255,0.08)",
      boxShadow: THEME.shadows.card,
      color: THEME.colors.text.primary,
      p: 2,
      transition: THEME.transitions.hover,
      "&:hover": {
        transform: "translateY(-6px)",
        boxShadow: THEME.shadows.cardHover,
      },
      ...props.sx
    }}
  >
    {children}
  </Box>
);