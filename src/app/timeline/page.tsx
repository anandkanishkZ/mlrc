'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import { motion } from 'framer-motion';
import { HiClock, HiCalendar, HiViewList, HiViewGrid } from 'react-icons/hi';
import { useState } from 'react';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  category: 'ancient' | 'medieval' | 'colonial' | 'modern' | 'contemporary';
  isApproximate?: boolean;
}

const timelineData: TimelineEvent[] = [
  {
    year: "Vedic/Mythical Period",
    title: "Ikshyaku Dynasty Begins",
    description: "Ikshyaku or Okkāka becomes the first significant king of Madhyadesh (Madhesh)",
    category: "ancient",
    isApproximate: true
  },
  {
    year: "Vedic/Mythical Period",
    title: "King Janak's Rule",
    description: "King Janak rules, capital at Janakpur; Sita, the heroine of Ramayan, born (after 34 generation of Ikshyaku)",
    category: "ancient",
    isApproximate: true
  },
  {
    year: "c. 1500 BC",
    title: "Manusmiriti Defines Madhyadesh",
    description: "Manusmiriti (2/21) defines the boundary of Madhyadesh (Madhesh)",
    category: "ancient",
    isApproximate: true
  },
  {
    year: "563 BC",
    title: "Buddha's Birth",
    description: "Siddhartha Gautam (Buddha) born in Kapilvatthu, Majjhimadesh (Madhesh)",
    category: "ancient"
  },
  {
    year: "268-31 BC",
    title: "Emperor Ashoka's Rule",
    description: "Emperor Ashoka rules",
    category: "ancient"
  },
  {
    year: "249 BC",
    title: "Ashoka Visits Lumbini",
    description: "Emperor Ashoka visits Lumbini, tax reduced and entitled to the eight part only",
    category: "ancient"
  },
  {
    year: "353-73 AD",
    title: "Samudragupta's Empire",
    description: "Emperor Samudragupta rules",
    category: "ancient",
    isApproximate: true
  },
  {
    year: "500-600 AD",
    title: "King Salhesh's Kingdom",
    description: "King Salhesh rules, capital at Mahisautha, Siraha",
    category: "medieval",
    isApproximate: true
  },
  {
    year: "c. 1300 AD",
    title: "Harisinghadev's Capital",
    description: "Harisinghadev rules, capital at Simraunagadh (currently Simra)",
    category: "medieval",
    isApproximate: true
  },
  {
    year: "1325 AD",
    title: "Tuglak's Attack",
    description: "Sultan Gayasudhin Tuglak attacks Simraunagadh",
    category: "medieval"
  },
  {
    year: "1513-1774 AD",
    title: "Sen Kingdoms Era",
    description: "Sen Kingdoms in Palpa, Makawanpur, Chaudandi, Bijaypur, Morang",
    category: "medieval"
  },
  {
    year: "1526 AD",
    title: "Mughal Empire",
    description: "Mughal Empire established",
    category: "medieval"
  },
  {
    year: "c. 1764 AD",
    title: "British East India Company",
    description: "British East India Company gains control over many parts of Madhesh",
    category: "colonial",
    isApproximate: true
  },
  {
    year: "1768 AD",
    title: "Gurkha Attack on Kathmandu",
    description: "Gurkha ruler Prithvi Narayan Shah attacks Kathmandu; Dismisses 12000 Tirhutia (Madheshi) armies of Jay Prakash Malla",
    category: "colonial"
  },
  {
    year: "1774 AD",
    title: "Attack on Makwanpur",
    description: "Prithvi Narayan Shah attacks Makwanpur",
    category: "colonial"
  },
  {
    year: "1814-16 AD",
    title: "Anglo-Gurkha War",
    description: "Anglo-Gurkha War; Madheshis fight on the British side",
    category: "colonial"
  },
  {
    year: "1816 AD",
    title: "British-Nepal Treaty",
    description: "British-Nepal Treaty on 8th December; British hands over Terai region between west of Koshi and east to Rapti river to Nepal",
    category: "colonial"
  },
  {
    year: "1846 AD",
    title: "Kot Massacre",
    description: "Kot Massacre takes place; Jang Bahadur becomes prime minister",
    category: "colonial"
  },
  {
    year: "1860 AD",
    title: "Terai Gifted to Nepal",
    description: "British-Nepal Treaty; British gifts Terai region between Rapti and Mahakali rivers to Nepal for their support to the East India Company for suppressing Sepoy Mutiny of 1857 to 1859 in India",
    category: "colonial"
  },
  {
    year: "1911 AD",
    title: "King George V's Hunt",
    description: "King George V of Britain visits Terai and hunts 21 tigers, 8 rhinos, and a bear",
    category: "colonial"
  },
  {
    year: "1923 AD",
    title: "Nepal's Independence",
    description: "Nepal changed from British protectorate to independent nation (Dec 21)",
    category: "modern"
  },
  {
    year: "1934 AD",
    title: "Great Earthquake",
    description: "Jan 15, An 8.4 Richter scale earthquake kills thousands of people in Nepal/India",
    category: "modern"
  },
  {
    year: "1950-51 AD",
    title: "End of Rana Rule",
    description: "Ranas fall; King Tribhuvan regains control; interim constitution promulgated",
    category: "modern"
  },
  {
    year: "1951 AD",
    title: "Terai Congress Formation",
    description: "Terai Congress formed led by Vedanand Jha",
    category: "modern"
  },
  {
    year: "1952 AD",
    title: "King Mahendra's Ascension",
    description: "King Mahendra ascends throne",
    category: "modern"
  },
  {
    year: "1952 AD",
    title: "Nepal Citizenship Act",
    description: "Nepal Citizenship Act promulgated",
    category: "modern"
  },
  {
    year: "1955 AD",
    title: "UN Membership",
    description: "Nepal admitted to the United Nations",
    category: "modern"
  },
  {
    year: "1956 AD",
    title: "Malaria Eradication & Liberation Movement",
    description: "Nepalese government starts malaria eradication; Raghunath Thakur established the Madhesh Liberation Movement",
    category: "modern"
  },
  {
    year: "1957 AD",
    title: "Language Protests",
    description: "Imposition of Nepali as sole language for education sparks protests",
    category: "modern"
  },
  {
    year: "1958 AD",
    title: "End of Visa Provision",
    description: "End of visa provision for Madheshis to enter Kathmandu",
    category: "modern"
  },
  {
    year: "1960s AD",
    title: "Terai Liberation Front",
    description: "Terai Liberation Front established",
    category: "modern"
  },
  {
    year: "1962 AD",
    title: "Unfavorable Constitution",
    description: "King Mahendra issues constitution unfavourable to Madheshis",
    category: "modern"
  },
  {
    year: "1963 AD",
    title: "Ramji Mishra Killed",
    description: "Nepalese Police kills Ramji Mishra, the leader of Terai Liberation Front",
    category: "modern"
  },
  {
    year: "1964 AD",
    title: "Restrictive Citizenship & Land Reform",
    description: "New Citizenship Act makes it harder for Madhesis to acquire citizenship; 'Land Reformation Act' promulgated; massive land seized from Madheshis",
    category: "modern"
  },
  {
    year: "1967 AD",
    title: "Raghunath Raya Yadav Killed",
    description: "Royal Nepalese Army kills Raghunath Raya Yadav, the leader of Terai Liberation Front",
    category: "contemporary"
  },
  {
    year: "1969 AD",
    title: "Satyadev Mani Tripathi Killed",
    description: "Chairman of Terai Liberation Front Satyadev Mani Tripathi killed",
    category: "contemporary"
  },
  {
    year: "1972 AD",
    title: "King Birendra's Rule",
    description: "King Birendra ascends throne",
    category: "contemporary"
  },
  {
    year: "1981 AD",
    title: "Raghunath Thakur's Death",
    description: "Raghunath Thakur dies (June 21)",
    category: "contemporary"
  },
  {
    year: "1983 AD",
    title: "Nepal Sadbhavana Council",
    description: "Nepal Sadbhavana Council formed under Gajendra Narayan Singh to raise Madheshi issues",
    category: "contemporary"
  },
  {
    year: "1989 AD",
    title: "India's Border Sanctions",
    description: "Nepal's failure to renegotiate trade and transit treaties with India, India imposes sanction across 'open border'",
    category: "contemporary"
  },
  {
    year: "1990 AD",
    title: "New Constitution",
    description: "New constitution promulgated following the agitations",
    category: "contemporary"
  },
  {
    year: "1994 AD",
    title: "Citizenship Crisis Exposed",
    description: "Dhanapati Upadhyay Commission finds 4 million people without citizenships",
    category: "contemporary"
  },
  {
    year: "1996 AD",
    title: "Maoist Insurgency Begins",
    description: "Maoists launch insurgency",
    category: "contemporary"
  },
  {
    year: "1997 AD",
    title: "Citizenship Certificates Voided",
    description: "Supreme Court voids 30 thousands citizenship certificates of Madheshis",
    category: "contemporary"
  },
  {
    year: "March 18, 1998 AD",
    title: "Language Ban",
    description: "Supreme Court bans the use of Maithili (local) language in Rajbiraj and Janakpur Municipalities",
    category: "contemporary"
  },
  {
    year: "2000 AD",
    title: "MRMM Formation & Racial Riots",
    description: "Maoists set up Madhesi Rashtriya Mukti Morcha (MRMM) under Jai Krishna Goit in Siliguri; Dec 26, racial riot against Madheshis began all over the country, following a rumour about Hrithnik Roshan. At least 4 people killed",
    category: "contemporary"
  },
  {
    year: "2002 AD",
    title: "Work Permit Mandate",
    description: "Supreme Court mandates people to get work permit in the lack of citizenship certificates. Many Madheshis out of work",
    category: "contemporary"
  },
  {
    year: "2004 AD",
    title: "JTMM Formation",
    description: "Jay Krishna Goit forms the Janatantrik Tarai Mukti Morcha (JTMM)",
    category: "contemporary"
  },
  {
    year: "2006 April",
    title: "Parliament Reinstatement",
    description: "Following nineteen-day mass movement, king announces reinstatement of parliament",
    category: "contemporary"
  },
  {
    year: "2006 December",
    title: "Nepalgunj Riot",
    description: "26-Dec, Pahadi attacks on a Madheshi gathering and the racial riot begins; Madheshis houses and shops burned, and Madheshis attacked; police and administration found supporting the attack. 30 December, Ian Martin, special representative of the UN Secretary-General, voices his concern",
    category: "contemporary"
  },
  {
    year: "2007 Jan-Feb",
    title: "Madhesh Movement",
    description: "19-Jan, Maoists clash with Madheshi activists in Lahan, killing student Ramesh Kumar Mahato. 20-Jan, Curfew imposed; 21 January-7 February, Movement picks up against the government, with huge public support and mass defiance of curfews, clashes between police and protestors; Almost 40 killed",
    category: "contemporary"
  },
  {
    year: "2008 January",
    title: "Madhesh Movement Continues",
    description: "Massive protests against the government. A series of bomb blasts kill and injure dozens",
    category: "contemporary"
  },
  {
    year: "2008 May",
    title: "Nepal Becomes Republic",
    description: "Nepal becomes a republic",
    category: "contemporary"
  },
  {
    year: "2011 January",
    title: "UN Mission Ends",
    description: "UN peace monitoring mission ends",
    category: "contemporary"
  },
  {
    year: "2011 March 31",
    title: "Historic Madheshi Meeting",
    description: "Historic meeting of Madheshis took place in Kathmandu after 22 years; Dr. C. K. Raut appeals for a stronger coalition to take the Madhesh Movement to the global level",
    category: "contemporary"
  },
  {
    year: "2011 May 21",
    title: "Alliance for Independent Madhesh",
    description: "Alliance for Independent Madhesh (AIM) announces manifesto and plans",
    category: "contemporary"
  },
  {
    year: "2012 May",
    title: "Parliament Dissolved",
    description: "Prime Minister Bhattari dissolves the parliament",
    category: "contemporary"
  }
];

const categoryColors = {
  ancient: { bg: 'bg-amber-50', border: 'border-amber-200', text: 'text-amber-800', accent: 'bg-amber-500' },
  medieval: { bg: 'bg-purple-50', border: 'border-purple-200', text: 'text-purple-800', accent: 'bg-purple-500' },
  colonial: { bg: 'bg-red-50', border: 'border-red-200', text: 'text-red-800', accent: 'bg-red-500' },
  modern: { bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-800', accent: 'bg-blue-500' },
  contemporary: { bg: 'bg-green-50', border: 'border-green-200', text: 'text-green-800', accent: 'bg-green-500' }
};

const categoryLabels = {
  ancient: 'Ancient Period',
  medieval: 'Medieval Period', 
  colonial: 'Colonial Period',
  modern: 'Modern Era',
  contemporary: 'Contemporary Era'
};

export default function TimelinePage() {
  const [filter, setFilter] = useState<string>('all');
  const [visibleItems, setVisibleItems] = useState<number>(10);
  const [layoutMode, setLayoutMode] = useState<'vertical' | 'horizontal'>('vertical');
  
  const filteredEvents = filter === 'all' 
    ? timelineData 
    : timelineData.filter(event => event.category === filter);

  const displayedEvents = filteredEvents.slice(0, visibleItems);

  const loadMore = () => {
    setVisibleItems(prev => Math.min(prev + 10, filteredEvents.length));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-primary-50">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-r from-primary-600 via-primary-700 to-secondary-600 text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container-custom text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center justify-center mb-6">
                <HiClock className="w-12 h-12 mr-4 text-secondary-200" />
                <h1 className="text-6xl md:text-7xl font-bold">Timeline</h1>
              </div>
              <p className="text-xl text-primary-100 max-w-4xl mx-auto leading-relaxed">
                Journey through the rich history of Madhesh - from ancient kingdoms to contemporary movements, 
                discover the pivotal moments that shaped our land and people.
              </p>
            </motion.div>
          </div>
          
          {/* Floating Elements */}
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-16 h-16 bg-secondary-300/20 rounded-full animate-bounce"></div>
          <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-white/15 rounded-full animate-ping"></div>
        </section>

        {/* Filter Section */}
        <section className="py-12 bg-white shadow-sm">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-8"
            >
              <h2 className="text-3xl font-bold text-neutral-800 mb-4">Explore by Era</h2>
              <p className="text-neutral-600 mb-6">Filter events by historical periods and choose your preferred layout</p>
              
              {/* Layout Description */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mb-6"
              >
                <p className="text-sm text-neutral-500 bg-neutral-50 px-4 py-2 rounded-full inline-block">
                  <span className="font-medium text-primary-600">
                    {layoutMode === 'vertical' ? '📋 Vertical View:' : '📊 Horizontal View:'}
                  </span>
                  {layoutMode === 'vertical' 
                    ? ' Classic timeline with alternating cards' 
                    : ' Scrollable timeline for quick browsing'
                  }
                </p>
              </motion.div>
              
              {/* Layout Toggle */}
              <div className="flex justify-center mb-8">
                <div className="relative bg-gradient-to-r from-white to-neutral-50 rounded-2xl p-2 shadow-xl border border-neutral-200/50 backdrop-blur-sm">
                  <div className="relative flex">
                    {/* Background slider */}
                    <motion.div
                      className="absolute top-1 bottom-1 bg-gradient-to-r from-primary-500 via-primary-600 to-secondary-500 rounded-xl shadow-2xl"
                      initial={false}
                      animate={{
                        left: layoutMode === 'vertical' ? '4px' : '50%',
                        width: '48%'
                      }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      style={{
                        boxShadow: '0 8px 32px rgba(17, 88, 166, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                      }}
                    />
                    
                    <motion.button
                      whileHover={{ y: -1 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setLayoutMode('vertical')}
                      className={`relative z-10 flex items-center justify-center px-8 py-3 rounded-xl font-semibold transition-all duration-300 min-w-[140px] ${
                        layoutMode === 'vertical'
                          ? 'text-white'
                          : 'text-neutral-700 hover:text-neutral-900'
                      }`}
                    >
                      <motion.div
                        animate={{ 
                          rotate: layoutMode === 'vertical' ? 0 : 180,
                          scale: layoutMode === 'vertical' ? 1.1 : 1
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <HiViewList className="w-5 h-5 mr-3" />
                      </motion.div>
                      <span>Vertical</span>
                    </motion.button>
                    
                    <motion.button
                      whileHover={{ y: -1 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setLayoutMode('horizontal')}
                      className={`relative z-10 flex items-center justify-center px-8 py-3 rounded-xl font-semibold transition-all duration-300 min-w-[140px] ${
                        layoutMode === 'horizontal'
                          ? 'text-white'
                          : 'text-neutral-700 hover:text-neutral-900'
                      }`}
                    >
                      <motion.div
                        animate={{ 
                          rotate: layoutMode === 'horizontal' ? 0 : 180,
                          scale: layoutMode === 'horizontal' ? 1.1 : 1
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <HiViewGrid className="w-5 h-5 mr-3" />
                      </motion.div>
                      <span>Horizontal</span>
                    </motion.button>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute -top-1 -left-1 w-3 h-3 bg-primary-400 rounded-full opacity-60 animate-pulse"></div>
                  <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-secondary-400 rounded-full opacity-70 animate-bounce"></div>
                </div>
              </div>
              
              <div className="flex flex-wrap justify-center gap-3">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => { setFilter('all'); setVisibleItems(10); }}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    filter === 'all' 
                      ? 'bg-primary-600 text-white shadow-lg' 
                      : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                  }`}
                >
                  All Periods
                </motion.button>
                {Object.entries(categoryLabels).map(([key, label]) => (
                  <motion.button
                    key={key}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => { setFilter(key); setVisibleItems(10); }}
                    className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                      filter === key 
                        ? `${categoryColors[key as keyof typeof categoryColors].accent} text-white shadow-lg` 
                        : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                    }`}
                  >
                    {label}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-16">
          <div className="container-custom">
            <motion.div
              key={layoutMode}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              {layoutMode === 'vertical' ? (
                // Vertical Timeline
                <>
                  {/* Timeline Line */}
                  <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-200 via-secondary-300 to-primary-400 rounded-full"></div>
                  
                  <div className="space-y-12">
                    {displayedEvents.map((event, index) => {
                      const colors = categoryColors[event.category];
                      const isEven = index % 2 === 0;
                      
                      return (
                        <motion.div
                          key={`vertical-${event.year}-${index}`}
                          initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true, margin: "-100px" }}
                          transition={{ delay: 0.1, duration: 0.8, ease: "easeOut" }}
                          className={`relative flex flex-col md:flex-row items-start ${
                            isEven ? 'md:flex-row-reverse' : ''
                          }`}
                        >
                          {/* Timeline Dot */}
                          <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 z-10">
                            <motion.div
                              whileHover={{ scale: 1.2 }}
                              className={`w-6 h-6 ${colors.accent} rounded-full shadow-lg flex items-center justify-center`}
                            >
                              <div className="w-2 h-2 bg-white rounded-full"></div>
                            </motion.div>
                          </div>

                          {/* Content Card */}
                          <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                            isEven ? 'md:mr-8' : 'md:ml-8'
                          }`}>
                            <motion.div
                              whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
                              className={`${colors.bg} ${colors.border} border-2 rounded-2xl p-6 shadow-lg backdrop-blur-sm relative overflow-hidden`}
                            >
                              {/* Background Pattern */}
                              <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                                <HiCalendar className="w-full h-full" />
                              </div>
                              
                              {/* Category Badge */}
                              <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 ${colors.accent} text-white`}>
                                {categoryLabels[event.category]}
                              </div>
                              
                              {/* Year */}
                              <div className={`text-2xl font-bold mb-2 ${colors.text}`}>
                                {event.isApproximate && <span className="text-sm">~</span>}
                                {event.year}
                              </div>
                              
                              {/* Title */}
                              <h3 className="text-xl font-semibold text-neutral-800 mb-3 leading-tight">
                                {event.title}
                              </h3>
                              
                              {/* Description */}
                              <p className="text-neutral-600 leading-relaxed text-sm">
                                {event.description}
                              </p>
                              
                              {/* Decorative Corner */}
                              <div className={`absolute bottom-0 right-0 w-16 h-16 ${colors.accent} opacity-10 rounded-tl-full`}></div>
                            </motion.div>
                          </div>
                          
                          {/* Spacer for desktop layout */}
                          <div className="hidden md:block w-5/12"></div>
                        </motion.div>
                      );
                    })}
                  </div>
                </>
              ) : (
                // Horizontal Timeline
                <div className="relative">
                  {/* Horizontal Timeline Line for Desktop */}
                  <div className="hidden md:block absolute top-8 left-0 right-0 h-1 bg-gradient-to-r from-primary-200 via-secondary-300 to-primary-400 rounded-full"></div>
                  
                  {/* Mobile: Stack cards vertically */}
                  <div className="md:hidden space-y-8">
                    {displayedEvents.map((event, index) => {
                      const colors = categoryColors[event.category];
                      
                      return (
                        <motion.div
                          key={`mobile-${event.year}-${index}`}
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1, duration: 0.6 }}
                        >
                          <motion.div
                            whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
                            className={`${colors.bg} ${colors.border} border-2 rounded-2xl p-4 shadow-lg`}
                          >
                            <div className={`inline-block px-2 py-1 rounded-full text-xs font-semibold mb-2 ${colors.accent} text-white`}>
                              {categoryLabels[event.category]}
                            </div>
                            <div className={`text-lg font-bold mb-2 ${colors.text}`}>
                              {event.isApproximate && <span className="text-sm">~</span>}
                              {event.year}
                            </div>
                            <h3 className="text-base font-semibold text-neutral-800 mb-2">
                              {event.title}
                            </h3>
                            <p className="text-neutral-600 text-sm">
                              {event.description.length > 120 ? `${event.description.substring(0, 120)}...` : event.description}
                            </p>
                          </motion.div>
                        </motion.div>
                      );
                    })}
                  </div>

                  {/* Desktop: Horizontal scrolling */}
                  <div className="hidden md:block overflow-x-auto pb-8">
                    <div className="flex space-x-6 min-w-max px-4 pt-16">
                      {displayedEvents.map((event, index) => {
                        const colors = categoryColors[event.category];
                        
                        return (
                          <motion.div
                            key={`horizontal-${event.year}-${index}`}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05, duration: 0.6 }}
                            className="relative flex flex-col items-center flex-shrink-0"
                          >
                            {/* Timeline Dot */}
                            <motion.div
                              whileHover={{ scale: 1.2 }}
                              className={`w-6 h-6 ${colors.accent} rounded-full shadow-lg flex items-center justify-center mb-4 relative z-10`}
                            >
                              <div className="w-2 h-2 bg-white rounded-full"></div>
                            </motion.div>

                            {/* Content Card */}
                            <motion.div
                              whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
                              className={`w-80 ${colors.bg} ${colors.border} border-2 rounded-2xl p-5 shadow-lg backdrop-blur-sm relative overflow-hidden`}
                            >
                              {/* Background Pattern */}
                              <div className="absolute top-0 right-0 w-24 h-24 opacity-5">
                                <HiCalendar className="w-full h-full" />
                              </div>
                              
                              {/* Category Badge */}
                              <div className={`inline-block px-2 py-1 rounded-full text-xs font-semibold mb-3 ${colors.accent} text-white`}>
                                {categoryLabels[event.category]}
                              </div>
                              
                              {/* Year */}
                              <div className={`text-xl font-bold mb-2 ${colors.text}`}>
                                {event.isApproximate && <span className="text-sm">~</span>}
                                {event.year}
                              </div>
                              
                              {/* Title */}
                              <h3 className="text-lg font-semibold text-neutral-800 mb-3 leading-tight">
                                {event.title}
                              </h3>
                              
                              {/* Description */}
                              <p className="text-neutral-600 leading-relaxed text-sm">
                                {event.description.length > 120 ? `${event.description.substring(0, 120)}...` : event.description}
                              </p>
                              
                              {/* Decorative Corner */}
                              <div className={`absolute bottom-0 right-0 w-12 h-12 ${colors.accent} opacity-10 rounded-tl-full`}></div>
                            </motion.div>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
              
              {/* Load More Button */}
              {visibleItems < filteredEvents.length && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="text-center mt-16"
                >
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={loadMore}
                    className="px-8 py-4 bg-primary-600 text-white rounded-full font-semibold shadow-lg hover:bg-primary-700 transition-all duration-300"
                  >
                    Load More Events ({filteredEvents.length - visibleItems} remaining)
                  </motion.button>
                </motion.div>
              )}
              
              {/* Summary Stats */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mt-20 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-3xl p-8 text-white text-center"
              >
                <h3 className="text-3xl font-bold mb-4">Timeline Summary</h3>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                  {Object.entries(categoryLabels).map(([key, label]) => {
                    const count = timelineData.filter(event => event.category === key).length;
                    const colors = categoryColors[key as keyof typeof categoryColors];
                    
                    return (
                      <motion.div
                        key={key}
                        whileHover={{ scale: 1.05 }}
                        className="text-center"
                      >
                        <div className={`w-12 h-12 ${colors.accent} rounded-full flex items-center justify-center mx-auto mb-2`}>
                          <span className="text-white font-bold">{count}</span>
                        </div>
                        <div className="text-sm opacity-90">{label}</div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
}