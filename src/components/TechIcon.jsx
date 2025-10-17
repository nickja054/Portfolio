import React, { memo } from 'react';
import { FaReact, FaNodeJs } from "react-icons/fa";
import SketchUpIcon from "../assets/icons/sketchup.png";
import ArduinoIcon from "../assets/icons/arduino.png";
import TplinkIcon from "../assets/icons/tp-link.png";
import HikvisionIcon from "../assets/icons/hikvision.png";
import AndroidIcon  from "../assets/icons/android.png";

// สไตล์พื้นฐานสำหรับ wrapper วงกลม
const iconWrapperStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 30,       // ขนาดของรูปทรง
    borderRadius: '50%', // ทำให้เป็นวงกลม
    backgroundColor: '#ffffff18', // สีพื้นหลังของรูปทรง (เพื่อให้ตัดกับ Chip สีดำ)
    // ใช้ transform เพื่อย่อขนาดไอคอนเล็กน้อยให้ดูพอดีกับกรอบ Chip
    transform: 'scale(0.8)', 
};

// ฟังก์ชัน Wrapper เพื่อสร้างองค์ประกอบวงกลมล้อมไอคอน
const createWrappedIcon = (iconElement) => (
    <div style={iconWrapperStyle}>
        {iconElement}
    </div>
);

const techIconsMap = {
    // ไอคอนจาก react-icons
    "React": createWrappedIcon(<FaReact color="#61dafb" size={25} />),
    "Node.js": createWrappedIcon(<FaNodeJs color="#339933" size={25} />),
    // ไอคอนจากไฟล์ภาพ (ต้องปรับขนาดใน img style ให้เล็กลงด้วย)
    "Sketchup": createWrappedIcon(
        <img src={SketchUpIcon} alt="SketchUp" style={{ width: 25, height: 25 }} />
    ),
    "Arduino": createWrappedIcon(
        <img src={ArduinoIcon} alt="Arduino" style={{ width: 25, height: 25 }} />
    ),
    "TPLink": createWrappedIcon(
        <img src={TplinkIcon} alt="TP-Link" style={{ width: 25, height: 25 }} />
    ),
    "Hikvision": createWrappedIcon(
        <img src={HikvisionIcon} alt="Hikvision" style={{ width: 25, height: 25 }} />
    ),
    "Android": createWrappedIcon(
        <img src={AndroidIcon} alt="Android" style={{ width: 20, height: 25 }} />
    ),
};

const TechIcon = memo(({ tech }) => {
    return techIconsMap[tech] || null;
});

export default TechIcon;