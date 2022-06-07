import '../styles/globals.css';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { pageview } from '@/lib/gtag';
import GoogleAnalytics from '@/components/GoogleAnalytics';

function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      /* invoke analytics function only for production */
      if (process.env.NODE_ENV !== 'production') {
        return;
      }
      pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    router.events.on('hashChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
      router.events.off('hashChangeComplete', handleRouteChange);
    };
  }, [router.events]);

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
      <GoogleAnalytics />
      <Component {...pageProps} />
    </>
  );
}

export default App;
