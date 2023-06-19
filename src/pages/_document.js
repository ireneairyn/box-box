import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=League+Spartan&display=swap"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" />

          <meta property="og:image" content="/OGimage.png" />
          <meta property="og:title" content="Box Box" />
          <meta property="og:description" content="Boxing Challenge Narrator" />
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
