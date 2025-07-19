"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function CallToAction() {
  return (
    <div className="relative py-24">
      <Image
        src="/landing-call-to-action.jpg"
        alt="RentEase rental platform hero section"
        fill
        style={{ objectFit: "cover", objectPosition: "center" }}
      />
      <div
        className="absolute inset-0 bg-black z-10"
        style={{ opacity: 0.6 }}
      ></div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative max-w-4xl xl:max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-12 z-20"
      >
        <div className="flex flex-col items-center text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Find Your Dream Rental Property
          </h2>
          <p className="text-white mb-6">
            Discover a wide range of rental properties in your desired location.
          </p>
          <div className="flex justify-center gap-4">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="inline-block text-primary-700 bg-white rounded-lg px-6 py-3 font-semibold hover:bg-primary-500 hover:text-primary-50"
            >
              Search
            </button>
            <Link
              href="/signup"
              className="inline-block text-white bg-orange-500 rounded-lg px-6 py-3 font-semibold hover:bg-secondary-600"
              scroll={false}
            >
              Sign Up
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
