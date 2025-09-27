'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import Contact from '@/components/Contact';

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 bg-secondary-500 text-white">
          <div className="container-custom text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-secondary-100 max-w-3xl mx-auto">
              Get in touch with our team for inquiries, assistance, or to learn more about our services and resources.
            </p>
          </div>
        </section>

        {/* Contact Component */}
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}