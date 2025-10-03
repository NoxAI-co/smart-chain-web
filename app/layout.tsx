import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/ThemProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// const instrument = Instrument_Sans({
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Smart Chain Solutions",
  description: "Transformación digital empática y logística consciente para tu organización",
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="overflow-x-hidden">
      <body className={`${geistSans.className} antialiased overflow-x-hidden`}>
        {/* Blobs animados de fondo */}
        <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
          {/* Blob 1 con animación de opacidad y escala */}
          <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-gradient-to-br from-purple-600 via-blue-500 to-transparent opacity-40 rounded-full blur-3xl animate-blob1 animate-blob-fade animate-blob-scale" />
          {/* Blob 2 con animación de opacidad y escala */}
          <div className="absolute bottom-[-10%] right-[-10%] w-[700px] h-[700px] bg-gradient-to-tr from-blue-500 via-purple-400 to-transparent opacity-30 rounded-full blur-3xl animate-blob2 animate-blob-fade animate-blob-scale" />
        </div>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
          enableSystem={false}
          storageKey="theme"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
