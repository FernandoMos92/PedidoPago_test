import type { AppProps } from 'next/app'
import '../style/global.scss';

import COMPONENTS from '../components';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <COMPONENTS.Header />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
