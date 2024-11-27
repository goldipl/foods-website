import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="pl">
        <Head>
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <link rel="icon" type="image/x-icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" href="/favicon.ico" />

          {/* SEO Meta Tags */}
          <title>
            Bezglutenowa Karola - Przepisy Gluten Free | Celiakia - Karolina
            Wontorska
          </title>
          <meta
            name="description"
            content="Bezglutenowa Karola - przepisy na dania bez glutenu, bez cukru, bez nabiału, idealne dla osób z celiakią. Odkryj zdrowe przepisy i porady dla osób na diecie bezglutenowej."
          />
          <meta
            name="keywords"
            content="bezglutenowe, bez cukru, bez nabiału, celiakia, dieta bezglutenowa, przepisy bez glutenu, zdrowe jedzenie, gluten free, przepisy bez cukru, bezglutenowa karola"
          />
          <meta name="author" content="Bezglutenowa Karola" />

          {/* Open Graph Meta Tags */}
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content="Bezglutenowa Karola - Przepisy Gluten Free"
          />
          <meta
            property="og:description"
            content="Znajdź przepisy na dania bez glutenu, bez cukru, bez nabiału, idealne dla osób z celiakią. Zdrowe i smaczne jedzenie dla osób na diecie bezglutenowej."
          />
          <meta property="og:url" content="https://bezglutenowakarola.pl" />
          <meta
            property="og:image"
            content="https://bezglutenowakarola.pl/_next/static/media/bezglutenowakarola-logo.3e6eebf5.svg"
          />
          <meta property="og:locale" content="pl_PL" />

          {/* Twitter Meta Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="Bezglutenowa Karola - Przepisy Gluten Free"
          />
          <meta
            name="twitter:description"
            content="Przepisy bez glutenu, bez cukru, bez nabiału, stworzone z myślą o osobach z celiakią i na diecie bezglutenowej. Sprawdź zdrowe inspiracje kulinarne."
          />
          <meta
            name="twitter:image"
            content="https://bezglutenowakarola.pl/_next/static/media/bezglutenowakarola-logo.3e6eebf5.svg"
          />

          {/* Structured Data (JSON-LD for Recipe Page) */}
          <script type="application/ld+json">
            {`{
              "@context": "https://schema.org",
              "@type": "Recipe",
              "name": "Bezglutenowa Karola - Przepisy Gluten Free",
              "description": "Przepisy na dania bez glutenu, bez cukru, bez nabiału dla osób z celiakią i na diecie bezglutenowej.",
              "image": "https://bezglutenowakarola.pl/_next/static/media/bezglutenowakarola-logo.3e6eebf5.svg",
              "author": {
                "@type": "Person",
                "name": "Bezglutenowa Karola"
              },
              "keywords": ["bezglutenowe", "bez cukru", "bez nabiału", "celiakia", "dieta bezglutenowa", "przepisy bez glutenu"],
              "url": "https://bezglutenowakarola.pl"
            }`}
          </script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
