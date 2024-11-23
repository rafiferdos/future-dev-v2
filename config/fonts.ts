import {
  Fira_Code as FontMono,
  Inter as FontSans,
  Roboto as FontRoboto,
  Playpen_Sans as FontPlaypen,
  Hind_Siliguri as FontHindSiliguri,
} from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const fontRoboto = FontRoboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const fontPlaypen = FontPlaypen({
  subsets: ["latin"],
  variable: "--font-playpen",
});

export const fontHindSiliguri = FontHindSiliguri({
  subsets: ["latin"],
  variable: "--font-hind-siliguri",
  weight: ["300", "400", "500", "600", "700"],
});
