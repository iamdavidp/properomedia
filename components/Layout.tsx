import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children, title }: { children: React.ReactNode; title: string }) {
  return (
    <>
      <Head>
        <title>{title} | Propero Media</title>
        <meta name="description" content="Propero Media helps brands grow through strategic storytelling and digital strategy." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="container mx-auto px-4">{children}</main>
      <Footer />
    </>
  );
}
