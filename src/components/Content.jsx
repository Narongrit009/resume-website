"use client";
import { useEffect, useState } from "react";
import {
  FaUser,
  FaTools,
  FaBriefcase,
  FaGraduationCap,
  FaEnvelope,
} from "react-icons/fa";

export default function Content() {
  return (
    <div
      id="content-container"
      className="h-full w-full overflow-y-auto bg-white bg-opacity-90 backdrop-blur-xl text-gray-900 p-12 rounded-r-xl shadow-2xl border border-gray-300 transition-all duration-500 ease-in-out scrollbar-thin"
    >
      {/* About Me */}
      <section id="about" className="mb-12 fade-in">
        <div className="bg-white bg-opacity-80 p-6 rounded-lg shadow-lg border-l-4 border-red-400">
          <h2 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
            <FaUser className="text-red-500" /> About Me
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            นักพัฒนาเว็บ & แอปพลิเคชัน สนใจเทคโนโลยีใหม่ๆ และ UX/UI
          </p>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="mb-12 fade-in">
        <div className="bg-white bg-opacity-80 p-6 rounded-lg shadow-lg border-l-4 border-red-400">
          <h2 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
            <FaTools className="text-red-500" /> Skills
          </h2>
          <div className="mt-4 space-y-4">
            <div>
              <p className="text-gray-700 font-semibold">HTML & CSS</p>
              <div className="w-full bg-gray-300 h-2 rounded-full shadow-inner">
                <div className="bg-red-500 h-2 rounded-full w-4/5 transition-all"></div>
              </div>
            </div>
            <div>
              <p className="text-gray-700 font-semibold">JavaScript & React</p>
              <div className="w-full bg-gray-300 h-2 rounded-full shadow-inner">
                <div className="bg-red-500 h-2 rounded-full w-3/4 transition-all"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="mb-12 fade-in">
        <div className="bg-white bg-opacity-80 p-6 rounded-lg shadow-lg border-l-4 border-red-400">
          <h2 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
            <FaBriefcase className="text-red-500" /> Experience
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Flow Inc. - Senior Developer (2016 - Present)
          </p>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="mb-12 fade-in">
        <div className="bg-white bg-opacity-80 p-6 rounded-lg shadow-lg border-l-4 border-red-400">
          <h2 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
            <FaGraduationCap className="text-red-500" /> Education
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            มหาวิทยาลัยราชภัฏเชียงราย - วิทยาการคอมพิวเตอร์
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mb-12 fade-in">
        <div className="bg-white bg-opacity-80 p-6 rounded-lg shadow-lg border-l-4 border-red-400">
          <h2 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
            <FaEnvelope className="text-red-500" /> Contact
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            narongritsuaysom@gmail.com
          </p>
        </div>
      </section>
    </div>
  );
}
