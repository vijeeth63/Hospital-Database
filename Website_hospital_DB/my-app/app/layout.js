// Project team member details:
// 1. Name: Vijeeth J poojary
//    Roll Number: 231EE263
//    Mobile number: 9113842187
//    Email ID: vijeethjpoojary.231ee263@nitk.edu.in

// 2. Name: Suhas Gowda M
//    Roll Number: 231MT053
//    Mobile number : 7483457670
//    Email ID: suhasgowdam.231mt053@nitk.edu.in
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}