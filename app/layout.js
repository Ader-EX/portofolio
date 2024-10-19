import { Inter } from "next/font/google";
import { Shrikhand } from "next/font/google";
import "./globals.css";
import Header from "./header/Header";
import { Poppins } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});
export const metadata = {
  title: "Portofolio || Muhammad Fadhil Musyaffa",
  description: "Muhammad Fadhil Musyaffa's portofolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`  ${poppins.className} flex flex-col min-h-screen`}>
        <div className="flex-shrink-0  relative w-[100%] ">
          {" "}
          <div className="absolute top-0 w-[100%] z-10">
            <Header />
          </div>
        </div>
        <div className=" flex-grow pt-10 w-[100%] h-[100%] absolute z-0 ">
          {children}
        </div>
      </body>
    </html>
  );
}
