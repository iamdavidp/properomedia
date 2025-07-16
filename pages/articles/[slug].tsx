import Layout from '../../components/Layout';
import { useRouter } from 'next/router';

export default function Article() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <Layout title={slug?.toString() || 'Article'}>
      <section className="py-12">
        <h1 className="text-3xl font-bold mb-4">Article: {slug}</h1>
        <p className="text-gray-700">Content for article "{slug}" coming soon.</p>
      </section>
    </Layout>
  );
}
