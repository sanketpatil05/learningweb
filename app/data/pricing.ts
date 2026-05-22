export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  monthlyPrice: number;
  yearlyPrice?: number;
  oneTimePrice?: number;
  priceNote: string;
  features: Feature[];
  ctaText: string;
  highlighted: boolean;
  badge?: string;
  color: string;
}

export interface Feature {
  text: string;
  included: boolean;
}

export const pricingPlans: PricingPlan[] = [
  {
    id: "starter",
    name: "SQL & Analytics Starter",
    tagline: "Perfect for analysts stepping into data engineering",
    monthlyPrice: 999,
    priceNote: "per month",
    features: [
      { text: "Access to SQL & Analytics courses", included: true },
      { text: "All recorded session archive", included: true },
      { text: "Community Discord access", included: true },
      { text: "Notebooks, scripts & slides downloads", included: true },
      { text: "Monthly group Q&A session", included: true },
      { text: "Certificate of completion", included: true },
      { text: "1:1 mentorship sessions", included: false },
      { text: "Pipeline project code reviews", included: false },
      { text: "Data engineering mock interviews", included: false },
      { text: "Job placement & referrals", included: false },
    ],
    ctaText: "Start Learning",
    highlighted: false,
    color: "from-slate-500 to-slate-600",
  },
  {
    id: "pro",
    name: "Data Engineering Pro",
    tagline: "For engineers building real-world data systems",
    monthlyPrice: 2499,
    priceNote: "per month",
    features: [
      { text: "Access to ALL 10 courses", included: true },
      { text: "All recorded session archive", included: true },
      { text: "Community Discord access", included: true },
      { text: "Notebooks, scripts & slides downloads", included: true },
      { text: "Weekly group Q&A session", included: true },
      { text: "Certificate of completion", included: true },
      { text: "2 × 1:1 mentorship sessions / month", included: true },
      { text: "Pipeline project code reviews", included: true },
      { text: "Data engineering mock interviews", included: false },
      { text: "Job placement & referrals", included: false },
    ],
    ctaText: "Go Pro",
    highlighted: true,
    badge: "Most Popular",
    color: "from-brand-500 to-accent-500",
  },
  {
    id: "premium",
    name: "Premium Mentorship Program",
    tagline: "Dedicated support for serious career transitions",
    monthlyPrice: 7999,
    priceNote: "per month",
    features: [
      { text: "Access to ALL 10 courses", included: true },
      { text: "All recorded session archive", included: true },
      { text: "Community Discord access", included: true },
      { text: "Notebooks, scripts & slides downloads", included: true },
      { text: "Daily group Q&A sessions", included: true },
      { text: "Certificate of completion", included: true },
      { text: "Unlimited 1:1 mentorship sessions", included: true },
      { text: "Detailed pipeline code reviews", included: true },
      { text: "5 mock data engineering interviews / month", included: true },
      { text: "Job placement & referrals (50+ data companies)", included: true },
    ],
    ctaText: "Apply for Mentorship",
    highlighted: false,
    badge: "Best Value",
    color: "from-accent-500 to-pink-500",
  },
];
