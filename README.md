# Business Website Template

A modern, responsive website template perfect for local service businesses. This template features a beautiful UI, dynamic content sections, and is fully customizable for any business type.

## ✨ Features

- **Modern UI/UX**: Beautiful, responsive design optimized for all devices
- **Dynamic Hero Section**: Auto-rotating background slideshow
- **Service Showcase**: Dedicated pages for up to 3 main services
- **Customer Reviews**: Interactive carousel for testimonials
- **Work Gallery**: Portfolio showcase section
- **Brand Partners**: Scrolling logo carousel for partner brands
- **SEO Optimized**: Implements react-helmet-async for enhanced search engine visibility
- **Smooth Animations**: Intersection Observer API for engaging scroll animations
- **Touch-Friendly**: Swipe gestures support for mobile users
- **Contact Form**: Built-in contact form ready for integration

## 🛠️ Tech Stack

- **Framework**: React 19.1.1
- **Build Tool**: Vite 7.1.7
- **Routing**: React Router DOM 7.9.3
- **SEO**: React Helmet Async 2.0.4
- **Styling**: CSS3 with custom animations
- **Code Quality**: ESLint with React-specific rules

## 📋 Prerequisites

Before running this project, ensure you have:

- Node.js (v16 or higher recommended)
- npm or yarn package manager
- Your business images and content ready

## 🚀 Quick Start

1. **Clone or download this template**

2. **Install dependencies:**
```bash
npm install
```

3. **Start the development server:**
```bash
npm run dev
```

4. **Open your browser and navigate to** `http://localhost:5173`

## 📦 Available Scripts

### `npm run dev`
Starts the development server with hot module replacement (HMR).
The page will reload when you make changes.

### `npm run build`
Builds the app for production to the `dist` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run preview`
Previews the production build locally before deployment.

### `npm run lint`
Runs ESLint to check for code quality issues and potential errors.

## 🎨 Customization Guide

### 1. **Replace Placeholder Images**

All images are currently using placeholder URLs. Replace them with your own images:

**Location**: Throughout the `src/pages/` directory

**Hero Section** (`Home.jsx`, lines ~7-13):
```javascript
const backgroundImages = [
  'YOUR_IMAGE_URL_1',
  'YOUR_IMAGE_URL_2',
  // Add more images
];
```

**Service Images** (`Home.jsx`, lines ~268-298):
- Replace the placeholder URLs in the service cards with your service images

**Gallery Images** (`Home.jsx`, lines ~435-457):
- Replace portfolio placeholder images with your actual work

**Brand Logos** (`Home.jsx`, lines ~17-26):
- Replace with your partner brand logos
- Note: Google logo is included and used for the reviews section

### 2. **Update Company Information**

**Header** (`src/components/Header.jsx`):
- Line 28: Replace logo placeholder
- Line 34: Update phone number

**Footer** (`src/components/Footer.jsx`):
- Line 11: Replace logo placeholder
- Lines 36-38: Update contact information

**Contact Page** (`src/pages/Contact.jsx`):
- Lines 37-50: Update all contact details

### 3. **Customize Content**

**Home Page** (`src/pages/Home.jsx`):
- Line 206: Update company name in hero
- Lines 236-253: Update about section with your company story
- Lines 273-296: Customize service descriptions
- Lines 343-364: Update feature cards with your unique selling points
- Lines 31-66: Replace customer testimonials with your own

**About Page** (`src/pages/About.jsx`):
- Lines 18-25: Update company story and mission

**Service Pages** (`src/pages/CustomCarAudio.jsx`, `CarStereos.jsx`, `WindowTinting.jsx`):
- Update service titles, descriptions, and feature lists
- Customize SEO meta tags (Helmet component)

### 4. **Update Page Titles and SEO**

**Index.html** (`index.html`):
- Line 9: Update the default page title

**Each Page Component**:
- Update the `<Helmet>` component with your business-specific titles and descriptions

### 5. **Customize Colors and Styling**

**Global Styles** (`src/index.css`):
- Update CSS custom properties for colors
- Modify font families

**Component Styles** (`src/**/*.css`):
- Customize individual component styling as needed

### 6. **Update Navigation**

**Header** (`src/components/Header.jsx`):
- Lines 69-71: Rename service dropdown menu items to match your services

**Routes** (`src/App.jsx`):
- Update route paths if you rename service pages

### 7. **Configure Form Submission**

**Contact Form** (`src/pages/Contact.jsx`):
- Line 18-24: Implement actual form submission (currently logs to console)
- Integrate with your backend API or email service

## 📁 Project Structure

```
website-template/
├── src/
│   ├── components/
│   │   ├── Header.jsx        # Navigation header
│   │   ├── Header.css
│   │   ├── Footer.jsx        # Site footer
│   │   └── Footer.css
│   ├── pages/
│   │   ├── Home.jsx          # Landing page
│   │   ├── Home.css
│   │   ├── About.jsx         # About page
│   │   ├── About.css
│   │   ├── Services.jsx      # Services overview
│   │   ├── Services.css
│   │   ├── CustomCarAudio.jsx    # Service 1 detail
│   │   ├── CarStereos.jsx        # Service 2 detail
│   │   ├── WindowTinting.jsx     # Service 3 detail
│   │   ├── ServicePage.css       # Shared service page styles
│   │   ├── Gallery.jsx       # Portfolio gallery
│   │   ├── Gallery.css
│   │   ├── Contact.jsx       # Contact page
│   │   └── Contact.css
│   ├── App.jsx              # Main app component
│   ├── App.css              # App styles
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
├── public/                  # Static assets
├── index.html              # HTML template
├── vite.config.js          # Vite configuration
├── eslint.config.js        # ESLint configuration
├── package.json            # Dependencies
└── README.md               # This file
```

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1920px and above)
- Laptop (1024px - 1919px)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🚢 Deployment

### Netlify/Vercel:
1. Connect your repository
2. Set build command: `npm run build`
3. Set publish directory: `dist`

### Manual Deployment:
1. Run `npm run build`
2. Upload the `dist` folder to your hosting provider

## 📝 Tips for Best Results

1. **Images**: 
   - Use high-quality images (WebP format recommended)
   - Hero images: 1920x1080px
   - Service cards: 600x400px
   - Gallery items: 400x300px
   - Logos: 200x100px (transparent background)

2. **Content**:
   - Keep headlines concise and impactful
   - Use clear, benefit-focused descriptions
   - Include real customer testimonials
   - Update meta descriptions for SEO

3. **Performance**:
   - Optimize all images before uploading
   - Test on multiple devices
   - Run `npm run lint` before deploying

4. **Branding**:
   - Replace all color variables with your brand colors
   - Use consistent font families
   - Update favicon in the `public` folder

## 🔄 Version Control

After customizing, initialize your own git repository:

```bash
git init
git add .
git commit -m "Initial commit - customized template"
git remote add origin YOUR_REPOSITORY_URL
git push -u origin master
```

## 📄 License

This template is free to use for personal and commercial projects.

## 🙏 Credits

Template built with React + Vite for modern, fast, and scalable web applications.

---

**Need Help?** 
- Check the inline comments in the code
- Review React and Vite documentation
- Test all changes in development before deploying

Built with ❤️ for entrepreneurs and small businesses
