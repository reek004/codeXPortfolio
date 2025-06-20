# CodeX Portfolio

A modern, responsive portfolio website for CodeX - a software development agency specializing in Web3, FinTech, and custom software solutions.

## Overview

CodeX Portfolio is a sleek, interactive website built with Next.js and React, featuring stunning animations, responsive design, and a modern UI. The website showcases the company's services, projects, testimonials, and provides a contact form for potential clients.

## Features

- **Responsive Design**: Fully responsive across all device sizes
- **Modern UI**: Clean, professional design with glassmorphism effects
- **Interactive Elements**: Animations, hover effects, and smooth transitions
- **Dynamic Components**: 
  - Hero section with animated cards
  - Projects showcase with filtering
  - Testimonial carousel
  - Animated counter statistics
  - Contact form with email integration
- **Email Integration**: Contact form connected to an email API for client inquiries

## Technologies Used

- [Next.js 15](https://nextjs.org/) - React framework with App Router
- [React 19](https://react.dev/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- [TailwindCSS 4](https://tailwindcss.com/) - Utility-first CSS framework
- [Lucide React](https://lucide.dev/) - SVG icon library
- [NodeMailer](https://nodemailer.com/) - Email sending for contact form
- [EmailJS](https://www.emailjs.com/) - Email service integration

## Project Structure

```
/
├── public/             # Static assets
│   ├── images/         # Project and client images
├── src/
│   ├── app/            # Next.js App Router
│   │   ├── api/        # API routes
│   │   │   └── send-email/ # Email API endpoint
│   │   ├── globals.css # Global styles
│   │   ├── layout.tsx  # Root layout
│   │   └── page.tsx    # Home page
│   ├── components/     # React components
│       ├── About.tsx   # About section
│       ├── Contact.tsx # Contact section
│       ├── Hero.tsx    # Hero section
│       ├── Navbar.tsx  # Navigation
│       ├── Projects.tsx # Projects section
│       └── Testimonials.tsx # Testimonials section
```

## Getting Started

### Prerequisites

- Node.js 20.x or later
- npm or yarn or pnp

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/codex-portfolio.git
   cd codex-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Environment setup:
   Create a [`.env`](.env ) file in the root directory with the following variables:
   ```
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-email-app-password
   CONTACT_EMAIL=contact@yourdomain.com
   ```

## Development

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## Building for Production

```bash
npm run build
# or
yarn build
```


## Performance Optimization

This project uses:
- Next.js built-in image optimization
- Lazy loading for components
- Turbopack for faster development
- CSS optimization with TailwindCSS


## License

This project is licensed under the MIT License - see the LICENSE file for details.

---

Built with ❤️ by CodeX
