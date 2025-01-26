import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html>
        <Head>
          <title>Nandish Tippashetty</title>
          <meta
            name="description"
            content="An enthusiastic full stack software engineer with 1 year of experience in the field."
          />
          <meta
            name="viewport"
            content="width=device-width,minimum-scale=1,initial-scale=1"
          />
          <meta property="og:type" content="website" />
          <meta name="og:title" property="og:title" content="Nandish Tippashetty" />
          <meta
            name="og:description"
            property="og:description"
            content="An enthusiastic full stack software engineer with 1 year of experience in the field."
          />
          <meta
            property="og:site_name"
            content="Nandish Tippashetty Personal Portfolio"
          />

          <meta name="twitter:card" content="It is my personal portfolio" />
          <meta name="twitter:title" content="Nandish Tippashetty" />
          <meta
            name="twitter:description"
            content="An enthusiastic full stack software engineer with 1 year of experience in the field."
          />
          <meta name="twitter:site" content="@propernoun" />
          <meta name="twitter:creator" content="@propernounco" />

          {/* <meta
            property="og:image"
            content="https://portfolio-templte.pages.dev/ogImage.png"
          /> */}
          {/* <meta
            name="twitter:image"
            content="https://portfolio-templte.pages.dev/ogImage.png"
          /> */}

          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          {/* <meta
            property="og:url"
            content="https://portfolio-templte.pages.dev/"
          /> */}
          <meta property="og:title" content="Nandish Tippashetty" />
          <meta
            property="og:description"
            content="An enthusiastic full stack software engineer with 1 year of experience in the field."
          />
          {/* <meta
            property="og:image"
            content="https://portfolio-templte.pages.dev/ogImage.png"
          /> */}
          <meta property="og:site_name" content="Nandish Tippashetty" />
          {/* Twitter */}
          <meta property="twitter:card" content="summary_large_image" />
          {/* <meta
            property="twitter:url"
            content="https://portfolio-templte.pages.dev/"
          /> */}
          <meta property="twitter:title" content="Nandish Tippashetty" />
          {/* <meta
            property="twitter:description"
            content="An enthusiastic front-end software engineer with more than 4 years of experience in the field."
          /> */}
          {/* <meta
            property="twitter:image"
            content="https://portfolio-templte.pages.dev/ogImage.png"
          /> */}
          <meta name="robots" content="Index" />
          <link rel="manifest" href="/manifest.json" />

          <meta charSet="utf-8" />
        </Head>
        <body className=" bg-white dark:bg-gradient-to-r dark:from-[#1F2937]  dark:to-[#111827] min-h-screen w-full relative text-gray-600 dark:text-white ">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
