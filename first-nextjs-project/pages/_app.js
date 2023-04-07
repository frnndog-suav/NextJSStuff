import React from "react";
import GlobalStyle from "../src/theme/GlobalStyle";

export default function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Component {...pageProps} />
    </React.Fragment>
  )
}
