import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/feature/common/footer";
import Headers from "@/components/feature/common/headers";
import { ThemeProvider } from "@/components/feature/common/theme-provider";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://novelpanda.farm"),
  title: {
    default: "노벨판다 | 웹소설 번역은 노벨판다",
    template: "%s | 노벨판다",
  },
  description:
    "해외 웹소설가의 꿈을 꾸는 당신에게 해외 진출 기회를 잡을 수 있도록 도와드립니다.",
  openGraph: {
    title: "노벨판다 | 웹소설 번역은 노벨판다",
    description:
      "해외 웹소설가의 꿈을 꾸는 당신에게 해외 진출 기회를 잡을 수 있도록 도와드립니다.",
    url: "https://novelpanda.farm",
    siteName: "노벨판다",
    images: ["/images/og.png"],
    locale: "ko-KR",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "노벨판다 | 웹소설 번역은 노벨판다",
    description:
      "해외 웹소설가의 꿈을 꾸는 당신에게 해외 진출 기회를 잡을 수 있도록 도와드립니다.",
    images: ["/images/og.png"],
    creator: "노벨판다",
    site: "https://novelpanda.farm",
  },
  icons: {
    icon: "/images/icons/apple-icon.png",
    apple: "/images/icons/apple-icon.png",
    other: {
      rel: "apple-icon-precomposed.png",
      url: "/images/icons/apple-icon-precomposed.png",
    },
  },
  alternates: {
    canonical: "https://novelpanda.farm",
    types: {
      "application/rss+xml": "https://novelpanda.farm/rss",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Headers />
          {children}
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
