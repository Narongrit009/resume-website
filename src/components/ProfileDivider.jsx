"use client";
import Image from "next/image";
import { FaFacebook, FaDribbble, FaLinkedin, FaBehance } from "react-icons/fa";

export default function ProfileDivider() {
  return (
    <div className="w-full h-full flex flex-col bg-black text-white shadow-lg relative">
      {/* รูปภาพโปรไฟล์เต็มพื้นที่ */}
      <div className="flex-grow relative">
        <Image
          src="/image/person.png"
          alt="Profile Picture"
          layout="fill"
          objectFit="cover"
          className="w-full h-full object-cover"
        />
      </div>

      {/* คอนเทนต์ด้านล่าง (มีเอฟเฟกต์ไล่สีดำออกมา) */}
      <div className="absolute bottom-0 w-full bg-gradient-to-t from-black via-black/80 to-transparent  text-center py-10">
        <h1 className="text-2xl font-bold">Narongrit Suaysom</h1>
        <p className="text-red-500 text-sm mt-1">Developer</p>

        {/* Social Icons */}
        <div className="flex justify-center space-x-4 mt-4">
          <FaFacebook className="text-lg cursor-pointer hover:text-red-500" />
          <FaDribbble className="text-lg cursor-pointer hover:text-red-500" />
          <FaLinkedin className="text-lg cursor-pointer hover:text-red-500" />
          <FaBehance className="text-lg cursor-pointer hover:text-red-500" />
        </div>
      </div>
    </div>
  );
}
