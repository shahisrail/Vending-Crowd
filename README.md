# VendingCrowd

The Amazon of Vending Machine Operations — A modern platform connecting vending machine operators with trained attendants for restocking, maintenance, and cash collection services.

## Overview

VendingCrowd provides a vast network of vending machine attendants highly trained to restock, repair, and service your machines, including cash collection and transport. Our platform allows operators to remotely dispatch attendants to manage their vending machine operations efficiently.

## Features

- **Machine Transport**: Network of logistics experts to transport your vending machines
- **Inventory Restocking**: On-demand or scheduled restocking to keep machines fully stocked
- **Inventory Storage**: Products stored at convenient locations near your machines
- **Keyholder Services**: Local keyholders provide inventory storage and key management
- **Maintenance Assessment**: Attendants assess and report on machine issues
- **Maintenance Services**: Trained attendants handle all maintenance needs

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) — React framework with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **UI Components**: [Ant Design 6](https://ant.design/)
- **Icons**: [@ant-design/icons](https://ant.design/components/icon)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, pnpm, or bun package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd vending-crowd
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
vending-crowd/
├── components/          # React components
│   ├── Hero.tsx        # Main hero section
│   ├── Features.tsx    # Feature cards
│   ├── HowItWorks.tsx  # How it works steps
│   ├── FAQ.tsx         # FAQ section
│   └── ...
├── lib/                # Utilities and data
│   └── siteData.ts     # Site content and metadata
├── public/             # Static assets
│   ├── icons/          # Icon images
│   ├── images/         # Site images
│   └── logo/           # Logo files
└── src/
    └── app/           # Next.js app directory
        ├── layout.tsx # Root layout
        └── page.tsx   # Home page
```

## Available Scripts

- `npm run dev` — Start development server
- `npm run build` — Build for production
- `npm start` — Start production server
- `npm run lint` — Run ESLint

## Key Components

- **Hero**: Main landing section with CTA buttons
- **Features**: Grid of feature cards with images
- **HowItWorks**: Step-by-step process visualization
- **SavingsCalculator**: Interactive calculator for cost savings
- **FAQ**: Accordion-style frequently asked questions
- **TopNav**: Navigation bar with responsive menu
- **Footer**: Site footer with social links

## Customization

Site content is managed through `lib/siteData.ts`, which contains:
- Navigation items and social links
- Hero section content and highlights
- Feature cards configuration
- How it works steps
- FAQ items
- SEO metadata and JSON-LD schemas

## Deployment

The easiest way to deploy is using [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme):

```bash
vercel deploy
```

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## License

This project is private and proprietary.

## Support

For support, visit [vendingcrowd.com](https://vendingcrowd.com) or contact the development team.
