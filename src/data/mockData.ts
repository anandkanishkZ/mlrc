// Mock data for the library website

interface Event {
  id: number;
  title: string;
  date: string;
  time?: string;
  location?: string;
  description: string;
  speaker?: string;
  facilitator?: string;
  type?: string;
  image?: string;
}

export const heroData = {
  title: "Building a Conscious Madheshi Intelligentsia",
  subtitle: "Madhesh Library & Research Center",
  description: "A pioneering institution dedicated to research, discussion, and knowledge production focused on the Madhesh region of Nepal. Empowering Madheshi youths and scholars since July 2023.",
  ctaText: "Explore Our Mission",
  backgroundImage: "/images/hero-bg.jpg"
};

export const aboutData = {
  title: "About Madhesh Library & Research Center",
  description: "Founded in July 2023 by a group of like-minded Madheshi youths, MLRC is a pioneering institution located in Aloknagar, Kathmandu. We serve as a hub for research, discussion, and knowledge production focused on the Madhesh region of Nepal, filling the gap left by mainstream knowledge production which often marginalizes Madhesh perspectives in national discourse.",
  mission: "To build a conscious and knowledgeable Madheshi intelligentsia through research, discussion, and accessible knowledge production focused on Madhesh region.",
  vision: "To empower Madheshi youths and scholars to engage critically with issues of identity, representation, and social dignity through comprehensive research and discourse.",
  values: [
    { title: "Madheshi Perspective", description: "Centering Madhesh voices in national discourse" },
    { title: "Critical Engagement", description: "Fostering critical thinking on identity and representation" },
    { title: "Digital Access", description: "Building digital repositories for wider knowledge access" },
    { title: "Youth Empowerment", description: "Empowering Madheshi youths and scholars" }
  ],
  image: "/images/about-library.jpg"
};



export const articlesData = {
  title: "Media Coverage",
  description: "Explore how Madhesh Library & Research Center is featured in various media outlets and publications",
  articles: [
    {
      id: 1,
      title: "Madhesh Library to Build Conscious Madheshi Intelligentsia Through Knowledge Production",
      author: "Farsight Nepal",
      date: "2024-09-28",
      excerpt: "Madhesh Library & Research Center's initiative to foster critical thinking and knowledge production among Madheshi scholars and intellectuals, contributing to the development of a conscious intelligentsia.",
      image: "/library-photo.jpg",
      category: "Knowledge Production",
      readTime: "8 min read",
      url: "https://farsightnepal.com/news/madhesh-library-to-build-conscious-madheshi-intelligentsia-through-knowledge-production"
    },
    {
      id: 2,
      title: "मधेशका युवाहरूले काठमाडौंमा सञ्चालनमा ल्याए मधेश पुस्तकालय तथा अनुसन्धान केन्द्र",
      author: "न्यूज ब्यूरो",
      date: "2023-08-04",
      excerpt: "मधेशका युवाहरूको एक सक्रिय समूहले काठमाडौंको आलोकनगरमा मधेश पुस्तकालय तथा अनुसन्धान केन्द्र सञ्चालनमा ल्याएका छन्। पुस्तकालयमा मधेश, देश र विश्व अनि विभिन्न क्रान्ति, संघर्ष र दर्शनसँग सम्बन्धित किताबहरू राखिएका छन्।",
      image: "/library-photo.jpg",
      category: "उद्घाटन समाचार",
      readTime: "6 min read",
      url: "https://www.enewsbureau.com/news-details/16193/2023-08-04"
    }
  ]
};

export const eventsData = {
  title: "Discourse Series & Events",
  description: "Join our discourse series, book discussions, and research initiatives to engage critically with Madheshi identity and representation",
  upcomingEvents: [] as Event[],
  pastEvents: [
    {
      id: 1,
      title: "मधेश संवाद - १",
      date: "2023-08-02",
      time: "3:30 PM",
      description: "उद्घाटन, मधेशमा शिक्षा",
      speaker: "डा. सोहन साह",
      facilitators: "सि.एन थारु, संघर्ष दाहाल"
    },
    {
      id: 2,
      title: "मधेश संवाद - २",
      date: "2023-08-10",
      description: "राजनीतिमा युवा हस्तक्षेपको आवश्यकता",
      speaker: "बि.पि. साह, रसना यादव, फूलमती",
      facilitator: "आभाष गुरु, संरक्षक, मधेस पुस्तकालय तथा अनुसन्धान केन्द्र"
    },
    {
      id: 3,
      title: "मधेश संवाद -३",
      date: "2024-05-02",
      time: "4:30 PM",
      description: "Movie Screening and Panel Discussion: 'Let's Fight Against the Corruption Through Films'",
      speaker: "Sarita Sah & Anil Kurmie (Actor/Writer/Director)",
      panelists: "Sohan Sah, Adv. Bhawana Jha, Amrendra Yadav, Ram Ratan"
    },
    {
      id: 4,
      title: "मधेश संवाद -४",
      date: "2024-05-12",
      time: "3:05 PM",
      description: "किन फुट्छन दलहरु ?",
      speaker: "तुला नारायण साह, राजनीतिक विश्लेषक"
    },
    {
      id: 5,
      title: "मधेश संवाद -५",
      date: "2024-05-18",
      description: "मधेशको दृष्टिकोणमा नीति तथा कार्यक्रम",
      speaker: "डा. जयकान्त राउत, पूर्वसदस्य, राष्ट्रिय योजना आयोग"
    },
    {
      id: 6,
      title: "मधेश संवाद -६",
      date: "2024-05-21",
      description: "Agriculture in Madhesh: Possibilities and Challenges",
      speaker: "Sanjay Yadav, Former Deputy Agriculture Minister, Madhesh Province"
    },
    {
      id: 7,
      title: "मधेश संवाद -७",
      date: "2024-06-12",
      time: "3:45 PM",
      description: "मधेश राजनीतिको सकस",
      speaker: "Manoj Sah, Political Analyst"
    },
    {
      id: 8,
      title: "मधेश संवाद -८",
      date: "2024-07-12",
      time: "3:30 PM",
      description: "मधेश राजनीतिको आलोचनात्मक विश्लेषण",
      speaker: "राकेश मिश्रा, विश्लेषक"
    },
    {
      id: 9,
      title: "मधेश संवाद - ९",
      date: "2024-07-19",
      time: "3:30 PM",
      description: "चुरे दोहन : मधेश मरभुमीकरण",
      speaker: "सुनिल यादव, संयोजक, चुरे तथा वन जंगल संरक्षण अभियान नेपाल",
      cospeaker: "SASHI SHARMA, सदस्य, राष्ट्रपति चुरे तराई मधेश संरक्षण विकास समिति"
    },
    {
      id: 10,
      title: "मधेश संवाद -१०",
      date: "2024-07-25",
      time: "3:30 PM",
      description: "काशिन्द्र कविरसँग खुल्ला संवाद",
      speaker: "काशिन्द्र कविर"
    },
    {
      id: 11,
      title: "मधेश संवाद -११",
      date: "2024-08-11",
      time: "3:30 PM",
      description: "मधेश राजनीतिको पुनर्गठनको आवश्यकता र युवाको भुमिका",
      participants: "अंशु यादव, स्नेहा कश्यप, विवेक बनरवाल, सन्तोष यादव, चुडामणि यादव, पुष्पा पाण्डे, इन्द्रजित साफी, आभास गुरु"
    },
    {
      id: 12,
      title: "मधेश संवाद -१२",
      date: "2024-08-21",
      time: "3:30 PM",
      description: "टीकापुर विद्रोह पछिको थारू आन्दोलन",
      speaker: "CN Tharu, नेता, राष्ट्रिय मुक्ति त्रान्ती"
    },
    {
      id: 13,
      title: "मधेश संवाद -१३",
      date: "2024-08-31",
      description: "मिथिला चित्रकलामा महिला : सम्भवना र चुनौती",
      speaker: "रञ्जु यादव, मिथिला चित्रकार"
    },
    {
      id: 14,
      title: "मधेश संवाद -१४",
      date: "2024-09-05",
      time: "3:35 PM",
      description: "उत्पीडित समुदायको मुक्ति र बहुल राष्ट्रको सवाल",
      speaker: "बुद्ध छिरिङ मोक्ता, चिन्तक / नेता, राष्ट्रिय मुक्ति क्रान्ति"
    },
    {
      id: 15,
      title: "Book Discussion",
      date: "2024-09-14",
      description: "AMBIVALENCE DENIED: THE MAKING OF RASTRIYA ITIHAS IN PANCHAYAT ERA TEXTBOOK by Pratyoush Onta",
      facilitator: "आनन्द कनिष्क, सदस्य, MLRC"
    },
    {
      id: 16,
      title: "मधेश संवाद-१५",
      date: "2024-09-16",
      time: "3:05 PM",
      description: "विभेदित संविधान लादिएको कालो दिनको सन्दर्भमा 'संविधान पुनर्लेखनको आवश्यकता'",
      speaker: "विजय कान्त कर्ण, पूर्वराजदूत",
      cospeaker: "लेखक रिता, लेखक/ अनुसन्धानकर्ता"
    },
    {
      id: 17,
      title: "Book Discussion",
      date: "2024-10-15",
      description: "Redrawing the World's Borders by Graham E. Fuller",
      facilitator: "Ram Ratan, Member, MLRC"
    },
    {
      id: 18,
      title: "मधेश संवाद-१६",
      date: "2024-11-15",
      time: "3:05 PM",
      description: "वैदेशिक रोजगार : मौलाउँदै बेथिति, समाधान कसरी?",
      speaker: "Saroj Ray, Social Activist",
      facilitator: "Aakriti Mahato, Member, MLRC"
    },
    {
      id: 19,
      title: "मधेश संवाद -१७",
      date: "2024-12-26",
      description: "सामाजिक सद्भाव र नस्लीय पूर्वाग्रहः नेपाली समाजको दोहोरो चरित्र",
      speaker: "दिपक गुप्ता, अनुसन्धानकर्ता",
      facilitator: "अन्जली साह, Member, MLRC"
    },
    {
      id: 20,
      title: "मधेश संवाद -१८",
      date: "2025-01-18",
      description: "मधेशवाद: केन्द्रिकृत राज्य अवधारणाको प्रतिरोधी चेत",
      speaker: "सन्तोष मेहता, नेता, राष्ट्रिय मुक्ति पार्टी नेपाल",
      cospeaker: "विकास विकल्प, पूर्व संयोजक, TMNC",
      facilitator: "Anjali Sah, Member, MLRC"
    },
    {
      id: 21,
      title: "दलित संवाद - 1",
      date: "2025-02-16",
      description: "दलनको दलदलमा दलित समुदाय",
      speaker: "Santosh Pariyar",
      facilitator: "Prerana Paswan, Member, MLRC"
    },
    {
      id: 22,
      title: "Madheshi Women Meet",
      date: "2025-03-08",
      description: "International Women's Day - Madheshi Women Meet",
      type: "Women Meet"
    },
    {
      id: 23,
      title: "मधेश संवाद -१९",
      date: "2025-03-15",
      description: "नेपालको चलचित्रमा मधेश",
      speaker: "दीपक रौनियार, Film Maker & Associate Professor at Boston University",
      facilitator: "Anjali Sah, Member, Library"
    },
    {
      id: 24,
      title: "Madheshi Women Meet-2",
      date: "2025-04-12",
      time: "3:30 PM",
      description: "Follow-up & Action Plan Discussion",
      type: "Women Meet"
    },
    {
      id: 25,
      title: "मधेश संवाद -२०",
      date: "2025-04-20",
      time: "3:30 PM",
      description: "लोकतन्त्रको विकल्प लोकतन्त्र",
      speaker: "Prashaant Singh, Spokesperson, People First Movement"
    },
    {
      id: 26,
      title: "दलित संवाद - 2",
      date: "2025-05-10",
      time: "3:30 PM",
      description: "दलित आन्दोलनको पुनर्गठन र वैचारिकी",
      speaker: "Aahuti Aahuti, महासचिव, वैज्ञानिक समाजवादी कम्युनिस्ट पार्टी, नेपाल",
      facilitator: "Ram Ratan"
    },
    {
      id: 27,
      title: "Madheshi Women Meet-3",
      date: "2025-06-01",
      time: "3:00 PM",
      description: "Revolution on Canvas: The Art of Madhesh",
      speaker: "Pallavi Payal, Sapana Sanjeevani"
    }
  ]
};



export const contactData = {
  title: "Contact Us",
  description: "                Get in touch with our team to learn more about our services and research initiatives.",
  address: {
    street: "Alok Nagar",
    city: "Kathmandu",
    state: "Bagmati Province",
    zipCode: "44600",
    country: "Nepal"
  },
  phone: "+977 9825733821",
  email: "info@madheshlibrary.com | madheshlibrary@gmail.com",
  hours: {
    weekdays: "10:00 AM - 6:00 PM",
    saturday: "10:00 AM - 4:00 PM",
    sunday: "Closed"
  },
  socialMedia: {
    facebook: "https://www.facebook.com/madheshlibrary/",
    twitter: "https://x.com/madheshlibrary",
    instagram: "https://www.instagram.com/madheshlibrary",
    tiktok: "https://www.tiktok.com/@madheshlibrary",
    youtube: "https://www.youtube.com/@MadheshLibrary"
  }
};

export const navigationData = {
  logo: "Madhesh Library",
  menuItems: [
    { name: "Home" },
    { name: "About" },
    { name: "Timeline" },
    { name: "Media Coverage" },
    { name: "Events" },
    { name: "Contact" }
  ]
};