"use client";
import {
  FaUser,
  FaChartBar,
  FaBriefcase,
  FaGraduationCap,
  FaEnvelope,
} from "react-icons/fa";

export default function Sidebar() {
  return (
    <div className="h-full flex flex-col items-center justify-center space-y-12 text-white">
      <a href="#about" className="hover:text-red-500 transition-all text-2xl">
        <FaUser />
      </a>
      <a href="#skills" className="hover:text-red-500 transition-all text-2xl">
        <FaChartBar />
      </a>
      <a
        href="#experience"
        className="hover:text-red-500 transition-all text-2xl"
      >
        <FaBriefcase />
      </a>
      <a
        href="#education"
        className="hover:text-red-500 transition-all text-2xl"
      >
        <FaGraduationCap />
      </a>
      <a href="#contact" className="hover:text-red-500 transition-all text-2xl">
        <FaEnvelope />
      </a>
    </div>
  );
}
