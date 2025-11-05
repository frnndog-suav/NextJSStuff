// import { Geist, Geist_Mono } from 'next/font/google';

import { CustomerStorySection } from "../components/customer-story-section";
import { FeatureSection } from "../components/feature-section";
import { HeroSection } from "../components/hero-section";
import { SupportSection } from "../components/support-section";

// const geistSans = Geist({
//   variable: '--font-geist-sans',
//   subsets: ['latin'],
// });

// const geistMono = Geist_Mono({
//   variable: '--font-geist-mono',
//   subsets: ['latin'],
// });

// export default function Home() {
//   return (
//     <div
//       className={`${geistSans.variable} ${geistMono.variable} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
//     ></div>
//   );
// }

export default function Home() {
  return (
    <>
      <article className="flex flex-col">
        <HeroSection />
        <FeatureSection />
        <SupportSection />
        <CustomerStorySection />
      </article>
    </>
  );
}
