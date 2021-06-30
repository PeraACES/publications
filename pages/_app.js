import "../styles/globals.css";
import Layout from "../components/Layout/Layout";
//import { Provider } from "react-redux";
//import { store } from "../store";

function MyApp({ Component, pageProps }) {
  return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
  );
}

export default MyApp;
