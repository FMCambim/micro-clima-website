import "@/styles/globals.css";
import Navbar from "@/components/Navbar/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className="font-aeonik bg-slate-100">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
