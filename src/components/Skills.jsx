"use client";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPhp,
  FaPython,
  FaDatabase,
} from "react-icons/fa";

export default function Skills() {
  return (
    <section id="skills" className="py-16 px-8 bg-gray-800 text-white">
      <h2 className="text-3xl font-bold text-center mb-8">💻 ทักษะทางเทคนิค</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-lg mx-auto">
        <div className="bg-gray-700 p-4 rounded-lg text-center shadow-md">
          <FaHtml5 className="text-4xl text-orange-500 mx-auto" />
          <p className="mt-2">HTML</p>
        </div>
        <div className="bg-gray-700 p-4 rounded-lg text-center shadow-md">
          <FaCss3Alt className="text-4xl text-blue-500 mx-auto" />
          <p className="mt-2">CSS</p>
        </div>
        <div className="bg-gray-700 p-4 rounded-lg text-center shadow-md">
          <FaJs className="text-4xl text-yellow-300 mx-auto" />
          <p className="mt-2">JavaScript</p>
        </div>
        <div className="bg-gray-700 p-4 rounded-lg text-center shadow-md">
          <FaReact className="text-4xl text-blue-400 mx-auto" />
          <p className="mt-2">React.js</p>
        </div>
        <div className="bg-gray-700 p-4 rounded-lg text-center shadow-md">
          <FaNodeJs className="text-4xl text-green-400 mx-auto" />
          <p className="mt-2">Node.js</p>
        </div>
        <div className="bg-gray-700 p-4 rounded-lg text-center shadow-md">
          <FaPhp className="text-4xl text-indigo-400 mx-auto" />
          <p className="mt-2">PHP</p>
        </div>
        <div className="bg-gray-700 p-4 rounded-lg text-center shadow-md">
          <FaPython className="text-4xl text-yellow-400 mx-auto" />
          <p className="mt-2">Python</p>
        </div>
        <div className="bg-gray-700 p-4 rounded-lg text-center shadow-md">
          <FaDatabase className="text-4xl text-gray-300 mx-auto" />
          <p className="mt-2">SQL</p>
        </div>
      </div>
    </section>
  );
}
