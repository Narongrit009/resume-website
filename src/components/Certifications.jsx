"use client";

export default function Certifications() {
  return (
    <section id="certifications" className="py-16 px-8 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          🏆 เกียรติบัตรและใบรับรอง
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* ใบประกาศ 1 */}
          <div className="bg-gray-800 p-4 rounded-lg shadow-md">
            <img
              src="/images/cert-1.png"
              alt="Certificate 1"
              className="rounded-md"
            />
            <h3 className="text-lg font-semibold mt-3">
              Web Development Certification
            </h3>
            <p className="text-sm text-gray-300">
              อบรมการพัฒนาเว็บ Frontend และ Backend
            </p>
          </div>

          {/* ใบประกาศ 2 */}
          <div className="bg-gray-800 p-4 rounded-lg shadow-md">
            <img
              src="/images/cert-2.png"
              alt="Certificate 2"
              className="rounded-md"
            />
            <h3 className="text-lg font-semibold mt-3">
              Database & SQL Certification
            </h3>
            <p className="text-sm text-gray-300">
              การออกแบบฐานข้อมูล และการจัดการข้อมูลใน SQL
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
