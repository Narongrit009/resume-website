"use client";
import { useState } from "react";
import Image from "next/image";
import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaLine,
  FaYoutube,
  FaTimes,
} from "react-icons/fa";

const socialLinks = {
  facebook: {
    url: "https://www.facebook.com/share/169z6TGazB/",
    qr: "/qr/facebook.png",
    color: "bg-blue-600 hover:bg-blue-500",
    icon: <FaFacebook />,
  },
  instagram: {
    url: "https://www.instagram.com/save_nrr?igsh=MTFuZ2gxMGoybzFseg==",
    qr: "/qr/instagram.png",
    color: "bg-pink-500 hover:bg-pink-400",
    icon: <FaInstagram />,
  },
  tiktok: {
    url: "https://www.tiktok.com/@saveeeees?_t=ZS-8uaGkP0yerQ&_r=1",
    qr: "/qr/tiktok.png",
    color: "bg-gray-900 hover:bg-gray-700",
    icon: <FaTiktok />,
  },
  line: {
    url: "https://line.me/ti/p/M3N3XpjBWC",
    qr: "/qr/line.png",
    color: "bg-green-500 hover:bg-green-400",
    icon: <FaLine />,
  },
  youtube: {
    url: "https://youtube.com/@narongrit_01-save?si=dBH2KbAjsrQQQAdZ",
    qr: "/qr/youtube.png",
    color: "bg-red-600 hover:bg-red-500",
    icon: <FaYoutube />,
  },
};

export default function ProfileDivider() {
  const [selectedSocial, setSelectedSocial] = useState(null);

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

      {/* คอนเทนต์ด้านล่าง */}
      <div className="absolute bottom-0 w-full bg-gradient-to-t from-black via-black/80 to-transparent text-center py-10">
        <h1 className="text-2xl font-semibold">Narongrit Suaysom</h1>
        <p className="text-red-500 text-sm mt-1">Developer</p>

        <div className="flex justify-center space-x-4 mt-4">
          {Object.entries(socialLinks).map(([key, { icon }]) => (
            <button
              key={key}
              onClick={() => setSelectedSocial(key)}
              className="group text-white text-lg cursor-pointer transition-all duration-500 transform hover:scale-150 hover:drop-shadow-lg animate-glow"
            >
              {icon}
            </button>
          ))}
        </div>
      </div>

      {/* Pop-up QR Code */}
      {selectedSocial && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md z-50"
          onClick={() => setSelectedSocial(null)} // ปิดเมื่อกดนอกป๊อปอัพ
        >
          <div
            className="bg-white text-black p-6 rounded-2xl shadow-2xl flex flex-col items-center w-[200px] animate-fade-in"
            onClick={(e) => e.stopPropagation()} // ป้องกันการปิดเมื่อกดภายใน
          >
            {/* ไอคอน Social + หัวข้อ */}
            <div className="flex items-center gap-2 text-2xl font-semibold text-gray-800">
              {socialLinks[selectedSocial].icon}
              <span className="capitalize">
                สแกน QR เพื่อไปที่ {selectedSocial}
              </span>
            </div>

            {/* QR Code */}
            <Image
              src={socialLinks[selectedSocial].qr}
              alt={`${selectedSocial} QR Code`}
              width={200}
              height={200}
              className="rounded-lg shadow-md mt-4"
            />

            {/* ปุ่มไปที่ลิงก์ */}
            <a
              href={socialLinks[selectedSocial].url}
              target="_blank"
              rel="noopener noreferrer"
              className={`mt-4 px-6 py-2 text-white rounded-xl shadow-xl transition-all duration-500 transform hover:scale-105 ${socialLinks[selectedSocial].color}`}
            >
              ไปที่ {selectedSocial}
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
