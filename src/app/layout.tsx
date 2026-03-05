import type { Metadata } from "next";
import "@/sass/main.scss";

export const metadata: Metadata = {
  title:
    "Bezglutenowa Karola - Przepisy Gluten Free | Celiakia - Karolina Wontorska",
  description:
    "Bezglutenowa Karola - przepisy na dania bez glutenu, bez cukru, bez nabiału, idealne dla osób z celiakią.",
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
