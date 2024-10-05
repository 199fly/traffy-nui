import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* All the styles and font tags from the index.html */}
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&display=swap" rel="stylesheet" />

        <link rel="stylesheet" href="assets/vendor/normalize/normalize.min.css" />
        <link rel="stylesheet" href="assets/vendor/fontawesome/css/fontawesome-all.min.css" />
        <link rel="stylesheet" href="assets/vendor/swiper/css/swiper-bundle.min.css" />
        <link rel="stylesheet" href="assets/vendor/lightgallery/css/lightgallery.min.css" />

        <link rel="stylesheet" href="assets/css/helper.css" />
        <link id="tt-themecss" rel="stylesheet" href="assets/css/theme.css" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
