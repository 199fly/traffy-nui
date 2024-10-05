import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";


export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* All the styles and font tags from the index.html */}
        <meta charSet="utf-8" />
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

        {/* Core JS */}
        <Script src="assets/vendor/jquery/jquery.min.js" strategy="beforeInteractive" /> {/* jQuery */}

        {/* GSAP Core and Plugins */}
        <Script src="assets/vendor/gsap/gsap.min.js" strategy="beforeInteractive" /> {/* GSAP */}
        <Script src="assets/vendor/gsap/ScrollToPlugin.min.js" strategy="beforeInteractive" /> {/* GSAP ScrollToPlugin */}
        <Script src="assets/vendor/gsap/ScrollTrigger.min.js" strategy="beforeInteractive" /> {/* GSAP ScrollTrigger */}

        {/* Libs and Plugins JS */}
        <Script src="assets/vendor/smooth-scrollbar.js" strategy="lazyOnload" /> {/* Smooth Scrollbar */}
        <Script src="assets/vendor/swiper/js/swiper-bundle.min.js" strategy="lazyOnload" /> {/* Swiper */}
        <Script src="assets/vendor/isotope/imagesloaded.pkgd.min.js" strategy="lazyOnload" /> {/* ImagesLoaded for Isotope */}
        <Script src="assets/vendor/isotope/isotope.pkgd.min.js" strategy="lazyOnload" /> {/* Isotope */}
        <Script src="assets/vendor/isotope/packery-mode.pkgd.min.js" strategy="lazyOnload" /> {/* Isotope Packery Mode */}
        <Script src="assets/vendor/lightgallery/js/lightgallery-all.min.js" strategy="lazyOnload" /> {/* lightGallery */}
        <Script src="assets/vendor/jquery.mousewheel.min.js" strategy="lazyOnload" /> {/* jQuery Mousewheel Plugin */}


      </Head>
      <body className="antialiased">
        <main id="body-inner">

          {/* Begin page transition (do not remove!!!) */}
          <div id="page-transition">
            <div class="ptr-overlay"></div>
            <div class="ptr-preloader">
              <div class="ptr-prel-content">
                {/* Hint: You may need to change the img height and opacity to match your logo type. You can do this from the "theme.css" file (find: ".ptr-prel-image"). */}
                <img src="assets/img/logo-light.png" class="ptr-prel-image tt-logo-light" alt="Logo" />
              </div>
            </div>
          </div>
          {/* End page transition */}


          {/* Begin magic cursor 
======================== */}
          <div id="magic-cursor">
            <div id="ball"></div>
          </div>
          {/* End magic cursor */}
          <Main />
          <NextScript />
        </main>
      </body>
    </Html>
  );
}
