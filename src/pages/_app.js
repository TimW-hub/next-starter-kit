import Layout from '@/components/global/layout';
import '../styles/globals/main.global.scss';

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
