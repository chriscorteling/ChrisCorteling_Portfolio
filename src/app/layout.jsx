import "./globals.css";

export const metadata = {
  title: "Chris Corteling | Portfolio",
  description: "Computer Science Undergraduate | AI | Fullstack Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}

