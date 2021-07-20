import Head from 'next/head';
import '../styles/globals.css';
import Layout from '../components/Layout/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>ESCaPe 2021 | Online Project Symposium UOP</title>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
