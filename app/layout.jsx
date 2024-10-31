import localFont from "next/font/local";
import { JetBrains_Mono} from "next/font/google"
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const jetbrainsMono = JetBrains_Mono({
  subsets:["latin"],
  variable: "--font-jetbrainsMono",
  weight: ["100", "200","300","400","500","600","700","800"]
});


export const metadata = {
  title: "NicolasGurak",
  description: "NicolasGurak",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={jetbrainsMono.variable}>
        <Header/>
        <StairTransition />
        <PageTransition>
          {children}
        </PageTransition>
      </body>
    </html>
  );
}
