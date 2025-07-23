# Samriddhi - Professional Business Solutions

A modern, responsive Next.js website built with TypeScript, Tailwind CSS, and professional UI components. This website is designed to be mobile and desktop friendly with a clean, professional look.

## 🚀 Features

- **Responsive Design**: Fully responsive across all devices
- **Modern UI**: Built with Tailwind CSS and custom UI components
- **TypeScript**: Type-safe development experience
- **Professional Layout**: Header, hero section, features, about, testimonials, and footer
- **SEO Optimized**: Meta tags and social media optimization
- **Smooth Animations**: Subtle animations for better user experience
- **Mobile Menu**: Hamburger menu for mobile navigation

## 🛠️ Tech Stack

- **Framework**: Next.js 15.4.3
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: Vercel

## 📱 Sections

1. **Hero Section**: Eye-catching introduction with call-to-action buttons
2. **Features Section**: Highlighting key benefits and services
3. **About Section**: Company information and mission
4. **Testimonials**: Customer reviews and ratings
5. **Contact/CTA Section**: Call-to-action for user engagement

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, pnpm, or bun package manager

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd samriddhi
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) to view the website.

## 🏗️ Build & Deploy

### Build for Production

```bash
npm run build
npm run start
```

### Deploy to Vercel

1. **Automatic Deployment** (Recommended):
   - Push your code to GitHub
   - Import your repository in [Vercel Dashboard](https://vercel.com/new)
   - Vercel will automatically detect Next.js and deploy

2. **Manual Deployment**:
   ```bash
   npm install -g vercel
   vercel --prod
   ```

3. **GitHub Integration**:
   - Connect your GitHub repository to Vercel
   - Every push to main branch will trigger automatic deployment

## 📁 Project Structure

```
samriddhi/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── ui/
│   │   │   ├── button.tsx
│   │   │   └── card.tsx
│   │   └── layout/
│   │       ├── header.tsx
│   │       └── footer.tsx
│   └── lib/
│       └── utils.ts
├── public/
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vercel.json
```

## 🎨 Customization

### Update Content
- Edit `src/app/page.tsx` to modify page content
- Update `src/components/layout/header.tsx` for navigation
- Modify `src/components/layout/footer.tsx` for footer content

### Styling
- Global styles: `src/app/globals.css`
- Tailwind config: `tailwind.config.js`
- Component styles: Individual component files

### SEO & Metadata
- Update metadata in `src/app/layout.tsx`
- Modify page titles and descriptions as needed

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📞 Support

For support and customization requests, please contact the development team.

## 📄 License

This project is proprietary and confidential.
