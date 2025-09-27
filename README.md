# Madhesh Library & Research Center Website

A modern, responsive frontend website built with Next.js for the Madhesh Library & Research Center, showcasing library resources, research materials, events, articles, and digital collections.

## 🌟 Features

- **Modern Design**: Clean, minimalist, and professional UI/UX
- **Responsive Layout**: Mobile-first design that works on all devices
- **Smooth Animations**: Framer Motion powered animations and transitions
- **Interactive Components**: Dynamic search, filtering, and modal interactions
- **Accessibility**: Built with accessibility best practices
- **SEO Optimized**: Meta tags and semantic HTML structure
- **Performance Optimized**: Next.js Image optimization and code splitting

## 🚀 Tech Stack

- **Framework**: Next.js 14.2.5 (React-based)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Images**: Next.js Image component for optimization
- **Forms**: Frontend-only with mock submissions

## 📱 Pages & Sections

### 🏠 Header/Navigation
- Sticky navigation with smooth scroll
- Mobile-responsive hamburger menu
- Integrated search functionality
- Logo and branding

### 🎯 Hero Section
- Dynamic typewriter effect with rotating headlines
- Call-to-action buttons with smooth scrolling
- Statistics showcase
- Animated scroll indicator

### 📖 About Section
- Library mission and vision
- Core values with interactive cards
- Professional imagery
- Call-to-action integration

### 📚 Collection Section
- Searchable and filterable resource grid
- Category-based organization
- Interactive cards with hover effects
- Statistics and metrics

### 📄 Articles Section
- Latest research articles and publications
- Modal popups for detailed article views
- Author information and reading time
- Category-based filtering

### 🎉 Events Section
- Upcoming and past events
- Event registration functionality (mock)
- Newsletter subscription
- Time and location details

### 💻 E-Library Section
- Digital resources with search and filter
- File type indicators (PDF, Video, Audio)
- Download statistics
- Usage guidelines

### 📞 Contact Section
- Contact information with icons
- Interactive contact form (frontend-only)
- Social media links
- Operating hours and location
- Map placeholder

### 🔗 Footer
- Newsletter subscription
- Quick links navigation
- Social media integration
- Copyright and legal information

## 🎨 Design Features

- **Color Scheme**: Soft neutral colors with blue/green accents
- **Typography**: Roboto and Poppins fonts
- **Animations**: Fade-in, slide-up, and hover effects
- **Interactive Elements**: Buttons, cards, and navigation
- **Visual Hierarchy**: Clear content organization

## 🚦 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone or navigate to the project directory**
   ```bash
   cd mlrc
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
mlrc/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Main page
│   │   └── globals.css         # Global styles
│   ├── components/
│   │   ├── Header.tsx          # Navigation component
│   │   ├── Hero.tsx            # Hero section
│   │   ├── About.tsx           # About section
│   │   ├── Collection.tsx      # Collection section
│   │   ├── Articles.tsx        # Articles section
│   │   ├── Events.tsx          # Events section
│   │   ├── ELibrary.tsx        # E-Library section
│   │   ├── Contact.tsx         # Contact section
│   │   ├── Footer.tsx          # Footer component
│   │   ├── ScrollToTop.tsx     # Scroll to top button
│   │   └── Modal.tsx           # Reusable modal component
│   └── data/
│       └── mockData.ts         # Mock data for all sections
├── public/                     # Static assets
├── .eslintrc.json             # ESLint configuration
├── tailwind.config.js         # Tailwind CSS configuration
├── tsconfig.json              # TypeScript configuration
└── package.json               # Dependencies and scripts
```

## 🎭 Mock Data

The website uses comprehensive mock data including:
- Library information and statistics
- Collection categories and resources
- Articles and publications
- Events and workshops
- E-library digital resources
- Contact information and social media

## 🌐 Deployment Ready

The project is optimized and ready for deployment on:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- **Any static hosting service**

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

For support and questions, please contact:
- Email: info@madheshlibrary.org
- Phone: +977-41-521234

---

**Built with ❤️ for knowledge and cultural preservation**