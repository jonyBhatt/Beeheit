"use client";
import Image from "next/image";
import React, { useState } from "react";

// Sample array containing projects with category and image
const workArray = [
  {
    category: "UI/UX",
    title: "UI/UX Project 1",
    description: "A user-friendly design for a modern web app.",
    imageUrl: "/portfolio/WhatsApp Image 2024-10-18 at 00.15.41_3afb8f17.jpg",
  },
  {
    category: "Full Stack Development",
    title: "Full Stack Project 1",
    description: "A fully-featured MERN stack application.",
    imageUrl: "/portfolio/WhatsApp Image 2024-10-18 at 00.15.59_8765bc25.jpg",
  },
  {
    category: "App Development",
    title: "App Development Project 1",
    description: "A cross-platform mobile app built with React Native.",
    imageUrl: "/portfolio/WhatsApp Image 2024-10-18 at 00.15.41_3afb8f17.jpg",
  },
  {
    category: "Full Stack Development",
    title: "Full Stack Project 2",
    description: "A large-scale eCommerce platform.",
    imageUrl: "/portfolio/WhatsApp Image 2024-10-18 at 00.15.59_8765bc25.jpg",
  },
  {
    category: "UI/UX",
    title: "UI/UX Project 2",
    description: "A minimalistic, clean design for an admin dashboard.",
    imageUrl: "/portfolio/WhatsApp Image 2024-10-18 at 00.15.59_8765bc25.jpg",
  },
];

const WorkSection = () => {
  // State to track the selected filter
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Function to handle filter change
  const handleFilterChange = (category: string) => {
    setSelectedCategory(category);
  };

  // Filter the workArray based on selected category
  const filteredWork =
    selectedCategory === "All"
      ? workArray
      : workArray.filter((work) => work.category === selectedCategory);

  return (
    <div className="min-h-screen py-32 container mx-auto">
      {/* Title and Slogan */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-medium text-gray-800">
          Our work speaks for itself...
        </h1>
        <p className="text-sm md:text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
          Our design-first approach has helped transform innovative businesses
          like these.
        </p>
      </div>
      {/* Filter Section */}
      <div className="flex space-x-4 mb-8">
        <button
          onClick={() => handleFilterChange("All")}
          className={`px-4 py-2 rounded-lg text-white ${
            selectedCategory === "All" ? "bg-primary" : "bg-gray-500"
          }`}
        >
          All
        </button>
        <button
          onClick={() => handleFilterChange("Full Stack Development")}
          className={`px-4 py-2 rounded-lg text-white ${
            selectedCategory === "Full Stack Development"
              ? "bg-primary"
              : "bg-gray-500"
          }`}
        >
          Full Stack Development
        </button>
        <button
          onClick={() => handleFilterChange("UI/UX")}
          className={`px-4 py-2 rounded-lg text-white ${
            selectedCategory === "UI/UX" ? "bg-primary" : "bg-gray-500"
          }`}
        >
          UI/UX
        </button>
        <button
          onClick={() => handleFilterChange("App Development")}
          className={`px-4 py-2 rounded-lg text-white ${
            selectedCategory === "App Development"
              ? "bg-primary"
              : "bg-gray-500"
          }`}
        >
          App Development
        </button>
      </div>

      {/* Work Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 cursor-pointer">
        {filteredWork.map((work, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 transition-all hover:scale-105 hover:shadow-xl"
          >
            <Image
              src={work.imageUrl}
              alt={work.title}
              className="w-full h-40 object-cover rounded-md mb-4"
              width={500}
              height={40}
            />
            <h3 className="text-xl font-bold mb-2">{work.title}</h3>
            <p className="text-gray-600">{work.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkSection;
