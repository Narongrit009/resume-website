import { Kanit } from "next/font/google";

const kanit = Kanit({
  subsets: ["latin", "thai"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="th">
      <head>
        <title>Portfolio | Narongrit Suaysom</title>
        <meta name="description" content="เว็บไซต์ Portfolio ของ Narongrit Suaysom - นักพัฒนาเว็บไซต์และแอปพลิเคชัน" />
        <link rel="icon" href="/image/icon-ns.png" type="image/x-icon" />
        <link rel="shortcut icon" href="/image/icon-ns.png" type="image/x-icon" />
      </head>
      <body className={kanit.className}>{children}</body>
    </html>
  );
}
