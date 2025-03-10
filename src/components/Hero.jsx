"use client";

export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white px-6">
      <div className="bg-gray-800 p-10 rounded-2xl shadow-lg max-w-3xl text-center border border-gray-700">
        {/* รูปโปรไฟล์ */}
        <div className="relative w-40 h-40 mx-auto">
          <img
            src="/image/person.png"
            alt="Profile"
            className="w-full h-full object-cover rounded-full border-4 border-white shadow-md"
          />
        </div>

        {/* ชื่อและตำแหน่ง */}
        <h1 className="text-5xl font-extrabold mt-6">นายณรงค์ฤทธิ์ สวยสม</h1>
        <h2 className="text-xl font-semibold text-gray-300 mt-2">
          NARONGRIT SUAYSOM
        </h2>
        <p className="text-lg text-gray-300 mt-2">
          นักศึกษาคณะเทคโนโลยีดิจิทัล | มหาวิทยาลัยราชภัฏเชียงราย
        </p>
        <p className="text-md text-gray-400">
          หลักสูตรวิทยาศาสตร์บัณฑิต สาขาวิทยาการคอมพิวเตอร์
        </p>

        {/* ข้อมูลส่วนตัว */}
        <div className="mt-6 text-left bg-gray-700 p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-bold text-gray-200">📌 โปรไฟล์ส่วนตัว</h3>
          <div className="grid grid-cols-2 gap-4 mt-2 text-gray-300">
            <p>
              <span className="font-semibold">ชื่อเล่น:</span> เซฟ
            </p>
            <p>
              <span className="font-semibold">อายุ:</span> 21 ปี
            </p>
            <p>
              <span className="font-semibold">วันเกิด:</span> 19 กุมภาพันธ์ 2546
            </p>
            <p>
              <span className="font-semibold">สัญชาติ:</span> ไทย
            </p>
            <p>
              <span className="font-semibold">เชื้อชาติ:</span> ไทย
            </p>
            <p>
              <span className="font-semibold">ศาสนา:</span> พุทธ
            </p>
          </div>
        </div>

        {/* ปุ่มแอคชัน */}
        <div className="mt-6 flex justify-center space-x-4">
          <a
            href="#contact"
            className="bg-blue-600 hover:bg-blue-500 px-6 py-3 rounded-md transition-all duration-300 text-lg font-medium"
          >
            ติดต่อ
          </a>
          <a
            href="#portfolio"
            className="bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded-md transition-all duration-300 text-lg font-medium"
          >
            ดูผลงาน
          </a>
        </div>
      </div>
    </section>
  );
}
