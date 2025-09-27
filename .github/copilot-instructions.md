# Madhesh Library & Research Center - Project Instructions

This project is a modern, responsive Next.js frontend website for the Madhesh Library & Research Center.

## Project Overview

**Tech Stack:**
- Framework: Next.js 14.2.5 (React-based)
- Language: TypeScript
- Styling: Tailwind CSS with custom configuration
- Animations: Framer Motion
- Icons: React Icons (HeroIcons & FontAwesome)
- Image Optimization: Next.js Image component

**Key Features:**
- Responsive, mobile-first design
- Smooth animations and transitions
- Interactive search and filtering
- Modal components for detailed content
- SEO-optimized with proper meta tags
- Accessibility compliant

## Project Structure

- `/src/app/` - Next.js App Router pages and layout
- `/src/components/` - All React components (Header, Hero, About, Collection, Articles, Events, ELibrary, Contact, Footer, ScrollToTop, Modal)
- `/src/data/mockData.ts` - Comprehensive mock data for all sections
- `/src/app/globals.css` - Global styles with Tailwind directives and custom classes

## Development

**Available Scripts:**
- `npm run dev` - Start development server on localhost:3000
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

**Development Server:** Currently running on http://localhost:3000

## Design Guidelines

**Colors:**
- Primary: Blue shades (primary-50 to primary-900)
- Secondary: Green shades (secondary-50 to secondary-900)  
- Neutral: Gray/beige shades (neutral-50 to neutral-900)

**Typography:**
- Headings: Poppins font family
- Body: Roboto font family

**Components:**
- All components use Framer Motion for animations
- Consistent hover effects and transitions
- Mobile-responsive design patterns
- Semantic HTML structure

## Content Sections

1. **Hero** - Dynamic typewriter effect with rotating headlines
2. **About** - Mission, vision, and core values
3. **Collection** - Searchable resource categories
4. **Articles** - Research publications with modal views
5. **Events** - Upcoming and past events
6. **E-Library** - Digital resources with filtering
7. **Contact** - Contact form and information
8. **Footer** - Links, social media, and newsletter signup

## Next Steps for Development

- Add real backend API integration
- Implement user authentication
- Add real search functionality
- Integrate with a CMS for content management
- Add more interactive features
- Implement actual newsletter subscription
- Add real map integration for contact section

The project is fully functional as a static frontend and ready for deployment to Vercel, Netlify, or similar platforms.