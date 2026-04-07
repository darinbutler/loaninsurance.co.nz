import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "LoanInsurance.co.nz | Loan Protection Insurance NZ",
  description:
    "Protect your loan repayments with affordable loan protection insurance in New Zealand. Personal loans, car finance, mortgages, and more. Free quotes within 24 hours.",
  keywords: [
    "loan insurance",
    "loan protection insurance",
    "payment protection insurance",
    "personal loan insurance",
    "car finance insurance",
    "mortgage insurance",
    "GAP insurance",
    "redundancy cover",
    "New Zealand insurance",
  ],
  authors: [{ name: "LoanInsurance.co.nz" }],
  openGraph: {
    type: "website",
    locale: "en_NZ",
    url: "https://loaninsurance.co.nz",
    title: "LoanInsurance.co.nz | Loan Protection Insurance NZ",
    description:
      "Protect your loan repayments with affordable loan protection insurance in New Zealand.",
    siteName: "LoanInsurance.co.nz",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0284c7" />
        <meta
          name="description"
          content="Protect your loan repayments with affordable loan protection insurance in New Zealand. Personal loans, car finance, mortgages, and more. Free quotes within 24 hours."
        />
      </head>
      <body className="min-h-full flex flex-col bg-white font-sans antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
