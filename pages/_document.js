import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
          <script src="https://aces.ce.pdn.ac.lk/publications/js/jquery-3.3.1.min.js"></script>
          <script src="https://aces.ce.pdn.ac.lk/publications/js/jquery-migrate-3.0.1.min.js"></script>
          <script src="https://aces.ce.pdn.ac.lk/publications/js/jquery-ui.js"></script>
          <script src="https://aces.ce.pdn.ac.lk/publications/js/popper.min.js"></script>
          <script src="https://aces.ce.pdn.ac.lk/publications/js/bootstrap.min.js"></script>
          <script src="https://aces.ce.pdn.ac.lk/publications/js/owl.carousel.min.js"></script>
          <script src="https://aces.ce.pdn.ac.lk/publications/js/jquery.stellar.min.js"></script>
          <script src="https://aces.ce.pdn.ac.lk/publications/js/jquery.countdown.min.js"></script>
          <script src="https://aces.ce.pdn.ac.lk/publications/js/bootstrap-datepicker.min.js"></script>
          <script src="https://aces.ce.pdn.ac.lk/publications/js/jquery.easing.1.3.js"></script>
          <script src="https://aces.ce.pdn.ac.lk/publications/js/aos.js"></script>
          <script src="https://aces.ce.pdn.ac.lk/publications/js/jquery.fancybox.min.js"></script>
          <script src="https://aces.ce.pdn.ac.lk/publications/js/jquery.sticky.js"></script>
          <script src="https://aces.ce.pdn.ac.lk/publications/js/jquery.mb.YTPlayer.min.js"></script>
          <script src="https://aces.ce.pdn.ac.lk/publications/js/main.js"></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
