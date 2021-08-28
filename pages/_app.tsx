import type { AppProps } from "next/app";

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/style.css'
function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Component {...pageProps} />

  );
}
export default MyApp;
