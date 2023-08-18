import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/Components/Header";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "OrbitV",
  description: "Orbit Verse",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
