import "./globals.css";

export const metadata = {
  title: "Shobhit Chaudhary | Full Stack Developer",
  description:
    "Full Stack Developer with 3+ years of experience in React.js, Next.js, Node.js, MongoDB, SaaS, CRM, and Automation Platforms.",
  keywords: [
    "Shobhit Chaudhary",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "MongoDB",
    "Portfolio",
  ],
  authors: [{ name: "Shobhit Chaudhary" }],
  creator: "Shobhit Chaudhary",
  openGraph: {
    title: "Shobhit Chaudhary | Full Stack Developer",
    description:
      "Building scalable SaaS, CRM, Automation and Multi-Tenant Applications.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#050816] text-white antialiased">
        {children}
      </body>
    </html>
  );
}