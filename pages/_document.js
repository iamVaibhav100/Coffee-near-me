import Document, { Html, Main, NextScript, Head } from "next/document";
class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="preload"
            href="/fonts/Prompt-Bold.ttf"
            as="font"
            crossOrigin="anonymous"
          ></link>
          <link
            rel="preload"
            href="/fonts/Prompt-SemiBold.ttf"
            as="font"
            crossOrigin="anonymous"
          ></link>
          <link
            rel="preload"
            href="/fonts/Prompt-Regular.ttf"
            as="font"
            crossOrigin="anonymous"
          ></link>
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
