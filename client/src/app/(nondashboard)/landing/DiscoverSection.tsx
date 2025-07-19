"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,

    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const DiscoverCard = ({
  imageSrc,
  title,
  description,
}: {
  imageSrc: string;
  title: string;
  description: string;
}) => (
  <div className="px-4 py-12 bg-gray-50 rounded-lg shadow-lg md:h-72">
    <div className="bg-zinc-800 p-[0.6rem] rounded-full mb-4 h-10 w-10 mx-auto">
      <Image
        src={imageSrc}
        width={32}
        height={32}
        className="w-full h-full"
        alt={title}
      />
    </div>
    <h3 className="mt-4 text-xl font-medium  text-gray-900 text-center">
      {title}
    </h3>
    <p className="mt-2 text-base text-gray-600  text-center">{description}</p>
  </div>
);

export default function DiscoverSection() {
  const discoverItems = [
    {
      imageSrc: "/landing-icon-wand.png",
      title: "Diverse Property Choices",
      description:
        "From modern apartments to spacious family homes, discover a wide range of rental options to suit every lifestyle.",
    },
    {
      imageSrc: "/landing-icon-calendar.png",
      title: "Verified & Trusted Listings",
      description:
        "Browse only thoroughly verified properties, ensuring a safe and reliable rental experience for you and your family.",
    },
    {
      imageSrc: "/landing-icon-heart.png",
      title: "Seamless Discovery Experience",
      description:
        "Use our intuitive platform to easily filter, compare, and find your next home with just a few clicks.",
    },
  ];

  return (
    <div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.8 }}
        variants={containerVariants}
        className="py-12 mb-16"
      >
        <div className="max-w-6xl xl:max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
          <motion.div variants={itemVariants} className="my-12 text-center ">
            <h2 className="text-3xl font-semibold leading-tight text-gray-800">
              Discover
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Find your Dream rental property today!
            </p>
            <p className="mt-2 text-gray-500 max-w-3xl mx-auto">
              Looking for your next home has never been easier. Explore a
              variety of properties in your favorite neighborhoods. Connect
              directly with owners and agents for quick responses. Find,
              compare, and move in—all in one place.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 xl:gap-16">
            {discoverItems.map((item, index) => (
              <motion.div key={index} variants={itemVariants}>
                <DiscoverCard
                  imageSrc={item.imageSrc}
                  title={item.title}
                  description={item.description}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
