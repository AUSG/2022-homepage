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
        description="AUSG는 대학생 개발자를 위한 클라우드 커뮤니티입니다."
        openGraph={{
          url: 'https://ausg.me',
          title: 'AUSG',
          description: 'AUSG는 대학생 개발자를 위한 클라우드 커뮤니티입니다.',
          images: [
            {
              url: '/images/og.png',
              width: 1200,
              height: 600,
              alt: 'AUSG',
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
