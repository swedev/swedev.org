import '../styles/base.scss';
import '../styles/app.scss';

import type { AppProps } from 'next/app';

function Swedev ({ Component, pageProps }: AppProps) {
  return (
    <Component {...pageProps} />
  );
}

export default Swedev;
