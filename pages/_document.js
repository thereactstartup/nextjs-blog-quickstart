import Document, { Html, Head, Main, NextScript } from "next/document";
import { Fragment } from "react";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Fragment></Fragment>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&display=swap"
            rel="stylesheet"
          />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
