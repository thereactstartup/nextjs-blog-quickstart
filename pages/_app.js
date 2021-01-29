import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/index.css";

import { Fragment, useEffect } from "react";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
