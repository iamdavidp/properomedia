import Layout from '../components/Layout';

export default function Contact() {
  return (
    <Layout title="Contact">
      <section className="py-12">
        <h1 className="text-3xl font-bold mb-4">Contact</h1>
        <p className="mb-4">Book a free discovery call below:</p>
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            src="https://calendly.com/your-calendly-link"
            style={{ width: '100%', height: '600px' }}
            frameBorder="0"
          ></iframe>
        </div>
      </section>
    </Layout>
  );
}
