import type { Metadata } from "next";
import "@/sass/main.scss";

export const metadata: Metadata = {
  metadataBase: new URL("https://bezglutenowakarola.pl"),
  title: "Przepisy bezglutenowe i celiakia | Bezglutenowa Karola",
  description:
    "Bezglutenowa Karola: Odkryj proste i pyszne przepisy bez glutenu, cukru i nabiału. Idealne dla osób z celiakią i na diecie eliminacyjnej. Gotuj zdrowo z Karoliną!",
  keywords: [
    "przepisy bezglutenowe",
    "dieta bezglutenowa",
    "celiakia",
    "bez cukru",
    "bez nabiału",
    "Karolina Wontorska",
    "bezglutenowe",
    "gluten free",
    "przepisy bez glutenu",
    "zdrowe jedzenie",
  ],
  authors: [{ name: "Bezglutenowa Karola" }],
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: "https://bezglutenowakarola.pl",
    title: "Przepisy bezglutenowe i celiakia | Bezglutenowa Karola",
    description:
      "Znajdź przepisy na dania bez glutenu, bez cukru, bez nabiału, idealne dla osób z celiakią. Zdrowe i smaczne jedzenie dla osób na diecie bezglutenowej.",
    images: [
      {
        url: "https://bezglutenowakarola.pl/_next/static/media/bezglutenowakarola-logo.3e6eebf5.svg",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Przepisy bezglutenowe i celiakia | Bezglutenowa Karola",
    description:
      "Przepisy bez glutenu, bez cukru, bez nabiału, stworzone z myślą o osobach z celiakią i na diecie bezglutenowej. Sprawdź zdrowe inspiracje kulinarne.",
    images: [
      "https://bezglutenowakarola.pl/_next/static/media/bezglutenowakarola-logo.3e6eebf5.svg",
    ],
  },
  verification: {
    google: "Wwdgti5L7WUD354p16SJSkp1xWEkAU95jfBNILTVeFc",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body>{children}</body>
    </html>
  );
}
