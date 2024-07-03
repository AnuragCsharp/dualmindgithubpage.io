
import "@/styles/index.scss";
import AOSProvider from "@/utils/aos";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <head>
        <link rel="icon" href="/assets/icon/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;600;700;900&family=Kanit:wght@400;500;600;700&display=swap"
        />
        <title>DualMind - Bridging Skills, Building Careers</title>
      </head>

      <body>
      <AOSProvider>
        {children}
      </AOSProvider>
        </body>
    </html>
  );
}
