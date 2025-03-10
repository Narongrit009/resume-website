"use client";
import { FaPhone, FaEnvelope, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-16 px-8 bg-gray-900 text-white">
      <h2 className="text-3xl font-bold text-center mb-8">
        📞 ช่องทางการติดต่อ
      </h2>
      <div className="max-w-md mx-auto space-y-6">
        <div className="flex items-center space-x-4 bg-gray-800 p-4 rounded-lg shadow-md">
          <FaPhone className="text-2xl text-blue-400" />
          <span>062-165-3986</span>
        </div>

        <div className="flex items-center space-x-4 bg-gray-800 p-4 rounded-lg shadow-md">
          <FaEnvelope className="text-2xl text-yellow-400" />
          <span>narongritsuaysom@gmail.com</span>
        </div>

        <div className="flex items-center space-x-4 bg-gray-800 p-4 rounded-lg shadow-md">
          <FaGithub className="text-2xl text-gray-300" />
          <a
            href="https://github.com/Narongrit009"
            target="_blank"
            className="hover:underline"
          >
            Github.com/Narongrit089
          </a>
        </div>
      </div>
    </section>
  );
}
