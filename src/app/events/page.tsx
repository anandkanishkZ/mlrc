'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import Events from '@/components/Events';

export default function EventsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 bg-secondary-500 text-white">
          <div className="container-custom text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Events & Workshops</h1>
            <p className="text-xl text-secondary-100 max-w-3xl mx-auto">
              Join us for exciting educational events, workshops, seminars, and cultural programs designed to foster learning and community engagement.
            </p>
          </div>
        </section>

        {/* Events Component */}
        <Events />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}