"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const FeatureCard = ({
  imageSrc,
  title,
  description,
  linkText,
  linkHref,
}: {
  imageSrc: string;
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
}) => (
  <div className="flex flex-col items-center p-0 h-full">
    <Image
      src={imageSrc}
      width={400}
      height={240}
      className="w-full h-40 object-contain mb-4"
      alt={title}
    />
    <h3 className="text-xl font-semibold mb-2 text-gray-900 text-center">
      {title}
    </h3>
    <p className="mb-6 text-gray-600 text-sm text-center">{description}</p>
    <Link
      href={linkHref}
      className="mt-auto inline-block border border-orange-600 text-orange-600 rounded-lg px-5 py-2 font-semibold hover:bg-orange-50 transition"
      scroll={false}
    >
      {linkText}
    </Link>
  </div>
);

export default function FeatureSection() {
  const titles = [
    "Powerful Search Filters",
    "Verified Listings",
    "Instant Contact with Owners",
  ];
  const descriptions = [
    "Narrow down your search by city, neighborhood, price, and more to find your perfect home.",
    "Browse only trusted and verified rental properties for a worry-free experience.",
    "Connect directly with property owners or agents for quick responses and easy communication.",
  ];
  const linkTexts = ["Explore", "Search", "Discover"];
  const linkHrefs = ["/explore", "/search", "/discover"];
  return (
    <div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="py-24 px-6 sm:px-8 lg:px-12 xl:px-16"
      >
        <div className="max-w-4xl xl:max-w-6xl mx-auto">
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-bold text-center mb-12 w-full sm:w-2/3 mx-auto"
          >
            Quickly find the home you wamt using our effective search filter !
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 xl:gap-16">
            {[0, 1, 2].map((index) => (
              <motion.div key={index} variants={itemVariants}>
                <FeatureCard
                  imageSrc={`/landing-search${3 - index}.png`}
                  title={titles[index]}
                  description={descriptions[index]}
                  linkText={linkTexts[index]}
                  linkHref={linkHrefs[index]}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
