import '../styles/globals.css';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
      </Head>
      <DefaultSeo
        title="AUSG"
        description="압도적 쓱케일, 아우쓱 - AWSKRUG University Student Group"
        openGraph={{
          url: 'https://ausg.me',
          title: 'AUSG',
          description:
            '압도적 쓱케일, 아우쓱 - AWSKRUG University Student Group',
          images: [
            {
              url: '/images/og.png',
              width: 1200,
              height: 600,
              alt: 'Og Image Alt',
              type: 'image/jpeg',
            },
          ],
          site_name: 'AUSG Homepage',
        }}
      />
      <Component {...pageProps} />
    </>
  );
}

export default App;
