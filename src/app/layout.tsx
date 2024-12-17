import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Code Insight",
  description: "코드리뷰를 도와주는 코드 인사이트",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={``}
      >
        {children}
      </body>
    </html>
  );
}
