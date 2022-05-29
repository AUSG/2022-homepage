import '../styles/globals.css';
import type { AppProps } from 'next/app';
import FontScript from '@/components/FontScript';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <FontScript />
      <Component {...pageProps} />
    </>
  );
}

export default App;
