"use client";

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-16 px-8 bg-gray-800 text-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">🚀 ผลงานของฉัน</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* โปรเจกต์ 1 */}
          <div className="bg-gray-700 p-4 rounded-lg shadow-md">
            <img
              src="/images/safe-eater.png"
              alt="Safe Eater App"
              className="rounded-md"
            />
            <h3 className="text-lg font-semibold mt-3">Safe Eater App</h3>
            <p className="text-sm text-gray-300">
              แอปช่วยคำนวณแคลอรี่ วิเคราะห์โภชนาการ
            </p>
          </div>

          {/* โปรเจกต์ 2 */}
          <div className="bg-gray-700 p-4 rounded-lg shadow-md">
            <img
              src="/images/green-market.png"
              alt="Green Market"
              className="rounded-md"
            />
            <h3 className="text-lg font-semibold mt-3">Green Market</h3>
            <p className="text-sm text-gray-300">
              เว็บขายผักออนไลน์ พัฒนาโดย React / Node.js
            </p>
          </div>

          {/* โปรเจกต์ 3 */}
          <div className="bg-gray-700 p-4 rounded-lg shadow-md">
            <img
              src="/images/admin-dashboard.png"
              alt="Admin Dashboard"
              className="rounded-md"
            />
            <h3 className="text-lg font-semibold mt-3">Admin Dashboard</h3>
            <p className="text-sm text-gray-300">
              ระบบจัดการข้อมูล พัฒนาโดย PHP / MySQL
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
