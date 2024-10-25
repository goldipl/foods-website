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
          {/* Github nofollow/noindex */}
          <meta name="robots" content="noindex, nofollow" />
          <link rel="icon" type="image/x-icon" href="./favicon.ico" />
          <link rel="apple-touch-icon" href="./favicon.ico" />
          <title>#BezglutenowaKarola - Przepisy Gluten Free</title>
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
