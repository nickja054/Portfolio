import React, { memo } from 'react';
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiMqtt } from "react-icons/si";
import SketchUpIcon from "../assets/icons/sketchup.png";

const techIconsMap = {
  React: <FaReact color="#61dafb" size={20} />,
  "Node.js": <FaNodeJs color="#339933" size={20} />,
  MQTT: <SiMqtt color="#FF6A00" size={20} />,
  Sketchup: <img src={SketchUpIcon} alt="SketchUp" style={{ width: 20, height: 20 }} />,
};

const TechIcon = memo(({ tech }) => {
  return techIconsMap[tech] || null;
});

export default TechIcon;