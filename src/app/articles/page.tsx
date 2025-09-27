'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import Articles from '@/components/Articles';

export default function ArticlesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 bg-primary-500 text-white">
          <div className="container-custom text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Research Articles</h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Discover cutting-edge research publications, scholarly articles, and academic papers from our esteemed contributors.
            </p>
          </div>
        </section>

        {/* Articles Component */}
        <Articles />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}