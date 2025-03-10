import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Content from "@/components/Content";
import ProfileDivider from "@/components/ProfileDivider";

export default function Home() {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-200">
      {/* Container หลัก (พื้นหลังสีขาว + Shadow) */}
      <div className="w-4/6 h-5/6 bg-white rounded-2xl shadow-2xl flex overflow-hidden">
        
        {/* Container ซ้าย - Sidebar */}
        <div className="w-1/12 flex items-center justify-center bg-black">
          <Sidebar />
        </div>

        <div className="w-3/12 flex items-center justify-center">
        <ProfileDivider />
        </div>

        {/* Container ขวา - Content (Scrollable) */}
        <div className="w-8/12 overflow-y-auto">
          <Content />
        </div>

      </div>
    </div>
  );
}
