import { Comfortaa } from "next/font/google";
import { ConfigProvider } from "antd";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Script from "next/script";

const comfortaa = Comfortaa({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-WQTSYE4K0T"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-WQTSYE4K0T');
        `}
      </Script>
      <ConfigProvider
        theme={{
          token: {
            fontFamily: comfortaa.style.fontFamily
          }
        }}
      >
        <html lang="en">
          <body className={comfortaa.className}>
            <Toaster />
            {children}
          </body>
        </html>
      </ConfigProvider>
    </>
  );
}
