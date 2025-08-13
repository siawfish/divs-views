# Divs & Views Company Website

A modern, professional website for Divs & Views software development services company.

## Features

- Responsive design with Tailwind CSS
- Contact form with email functionality via Resend
- Modern UI with smooth animations
- Mobile-first approach

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd company-website
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env.local` file in the root directory and add:
```bash
RESEND_API_KEY=your_resend_api_key_here
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Environment Variables

- `RESEND_API_KEY`: Your Resend API key for email functionality

## Email Functionality

The contact form uses Resend to send emails:
- Sends notification emails to the company email
- Sends confirmation emails to users who submit the form
- Includes proper validation and error handling

## Technologies Used

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Resend (for email functionality)

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## License

MIT
