import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://cashnopix-front-v2.vercel.app"),
  title: "CashNoPix — Avalie Produtos e Ganhe Cashback no PIX",
  description:
    "O CashNoPix é o aplicativo de cash no pix que conecta consumidores a marcas parceiras. Avalie produtos, acumule saldo e saque direto via PIX.",
  openGraph: {
    title: "CashNoPix — Avalie Produtos e Ganhe Cashback no PIX",
    description: "Avalie produtos, acumule saldo e saque direto via PIX.",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "CashNoPix — Avalie Produtos e Ganhe Cashback no PIX",
    description: "Avalie produtos, acumule saldo e saque direto via PIX.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
