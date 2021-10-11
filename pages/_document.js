import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png?v=3" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=3" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=3" />
          <link rel="manifest" href="/site.webmanifest?v=3" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg?v=3" color="#246dff" />
          <link rel="shortcut icon" href="/favicon.ico?v=3" />
          <meta name="msapplication-TileColor" content="#246dff" />
          <meta name="theme-color" content="#ffffff" />
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
