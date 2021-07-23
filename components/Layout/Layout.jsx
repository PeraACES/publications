import Head from 'next/head';
import React from 'react';
import Footer from './Footer';
import Header from './Header';

export default function Layout({ children, title, seo, seoMetas = [] }) {
  // console.log(seo, seoMetas);
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        {!!title ? (
          <title>{title}</title>
        ) : (
          <title>ACES ESCaPe Publications | University of Peradeniya</title>
        )}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {!!seo && !!seo.content ? (
          <meta name="description" content={seo.content} />
        ) : (
          <meta
            name="description"
            content="ACES ESCaPe Publications : Symposium Precedings and Projects by Undergraduates of Dept. of Computer Engineering, Faculty of Engineering, University of Peradeniya"
          />
        )}
        {!!seoMetas &&
          Array.isArray(seoMetas) &&
          seoMetas.map((item) => (
            <meta property={item.property} content={item.content} key={item._id} />
          ))}
        <link
          href="https://fonts.googleapis.com/css?family=B612+Mono|Cabin:400,700&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="https://aces.ce.pdn.ac.lk/publications/fonts/icomoon/style.css" />
        <link rel="stylesheet" href="https://aces.ce.pdn.ac.lk/publications/fonts/flaticon/font/flaticon.css" />
        <link rel="stylesheet" href="https://aces.ce.pdn.ac.lk/publications/css/bootstrap.min.css" />
        <link rel="stylesheet" href="https://aces.ce.pdn.ac.lk/publications/css/jquery-ui.css" />
        <link rel="stylesheet" href="https://aces.ce.pdn.ac.lk/publications/css/owl.carousel.min.css" />
        <link rel="stylesheet" href="https://aces.ce.pdn.ac.lk/publications/css/owl.theme.default.min.css" />
        <link rel="stylesheet" href="https://aces.ce.pdn.ac.lk/publications/css/owl.theme.default.min.css" />
        <link rel="stylesheet" href="https://aces.ce.pdn.ac.lk/publications/css/jquery.fancybox.min.css" />
        <link rel="stylesheet" href="https://aces.ce.pdn.ac.lk/publications/css/bootstrap-datepicker.css" />
        <link rel="stylesheet" href="https://aces.ce.pdn.ac.lk/publications/css/aos.css" />
        <link
          href="https://aces.ce.pdn.ac.lk/publications/css/jquery.mb.YTPlayer.min.css"
          media="all"
          rel="stylesheet"
          type="text/css"
        />
        <link rel="stylesheet" href="https://aces.ce.pdn.ac.lk/publications/css/style.css" />
      </Head>
      <Header />
      {children}
      <Footer />
      {/* <div id="loader" className="show fullscreen">
        <svg className="circular" width="48px" height="48px">
          <circle
            className="path-bg"
            cx="24"
            cy="24"
            r="22"
            fill="none"
            strokeWidth="4"
            stroke="#eeeeee"
          />
          <circle
            className="path"
            cx="24"
            cy="24"
            r="22"
            fill="none"
            strokeWidth="4"
            strokeMiterlimit="10"
            stroke="#ff5e15"
          />
        </svg>
      </div> */}
    </>
  );
}
