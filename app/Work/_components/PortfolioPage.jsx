"use client"
import React, { useState } from 'react';

const PortfolioPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { name: 'Explore all', slug: 'all', count: 47 },
    { name: 'Fashion', slug: 'fashion', count: 8 },
    { name: 'Fitness & Sport', slug: 'fitness', count: 3 },
    { name: 'Education', slug: 'education', count: 4 },
    { name: 'Health', slug: 'health', count: 5 },
    { name: 'Property', slug: 'property', count: 10 },
    { name: 'Corporate', slug: 'corporate', count: 6 },
    { name: 'Food & Drink', slug: 'food', count: 6 },
    { name: 'Agency', slug: 'agency', count: 10 },
    { name: 'eCommerce', slug: 'ecommerce', count: 18 },
    { name: 'B2B', slug: 'b2b', count: 23 },
    { name: 'B2C', slug: 'b2c', count: 14 },
    { name: 'Shopify', slug: 'shopify', count: 6 },
    { name: 'Archive', slug: 'archive', count: 19 }
  ];

  const projects = [
    {
      id: 1,
      title: 'Bring your A-Game',
      company: 'A-Game',
      year: '2025',
      tags: ['Shopify', 'Website'],
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop',
      categories: ['all', 'fashion', 'shopify', 'ecommerce']
    },
    {
      id: 2,
      title: 'A new vision for a fashion store in Toronto',
      company: 'Relevé Clothing',
      year: '2020',
      tags: ['Branding', 'Website', 'Shopify'],
      image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&h=600&fit=crop',
      categories: ['all', 'fashion', 'shopify', 'ecommerce']
    },
    {
      id: 3,
      title: 'Contemporary jewellery handmade in Ireland',
      company: 'Enibas',
      year: '2024',
      tags: ['Website', 'SEO', 'Illustration'],
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=600&fit=crop',
      categories: ['all', 'fashion', 'ecommerce']
    },
    {
      id: 4,
      title: 'Shopify website for a fashion brand with global influences',
      company: 'ODolls Collection',
      year: '2021',
      tags: ['Shopify'],
      image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&h=600&fit=crop',
      categories: ['all', 'fashion', 'shopify', 'ecommerce']
    },
    {
      id: 5,
      title: 'eCommerce for Womenswear fitness brand',
      company: 'Njorun Active',
      year: '2020',
      tags: ['Branding', 'Website'],
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=600&fit=crop',
      categories: ['all', 'fashion', 'fitness', 'ecommerce']
    },
    {
      id: 6,
      title: 'Stunning imagery, honest stories, dressed in this season\'s look',
      company: 'Boys By Girls',
      year: '2020',
      tags: ['Website'],
      image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&h=600&fit=crop',
      categories: ['all', 'fashion']
    },
    {
      id: 7,
      title: 'A sustainable fashion brand in London, UK',
      company: 'Riley Studio',
      year: '2020',
      tags: ['Shopify', 'Website'],
      image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&h=600&fit=crop',
      categories: ['all', 'fashion', 'shopify', 'ecommerce']
    },
    {
      id: 8,
      title: 'A new luxury swimwear brand that started with nothing',
      company: 'Missie Swimwear',
      year: '2020',
      tags: ['Branding', 'Website', 'Art Direction'],
      image: 'https://images.unsplash.com/photo-1582639590011-f5a8416d1101?w=800&h=600&fit=crop',
      categories: ['all', 'fashion', 'ecommerce']
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.categories.includes(activeFilter));

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <div className="pt-20 pb-28 px-6 lg:pt-36 lg:pb-32">
        <div className="max-w-7xl mx-auto">
          {/* Section Label */}
          <div className="flex items-center space-x-2 mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-gray-400"></div>
            <div className="text-sm lg:text-base text-gray-400 font-light">Our Work</div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-4 lg:gap-10">
            {categories.map((cat) => (
              <button
                key={cat.slug}
                onClick={() => setActiveFilter(cat.slug)}
                className={`group flex items-end transition-colors duration-200 ${
                  activeFilter === cat.slug ? 'text-white' : 'text-gray-300'
                }`}
              >
                <span className={`text-3xl lg:text-5xl xl:text-6xl font-light tracking-tight lowercase transition-colors duration-200 hover:text-gray-600 ${
                  activeFilter === cat.slug ? 'text-gray-200' : ''
                }`}>
                  {cat.name}
                </span>
                <span className="text-sm ml-1 mb-1 lg:mb-2">{cat.count}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonial */}
      <div className="max-w-2xl mx-auto px-6 mb-20 lg:mb-32">
        <svg className="w-6 h-6 text-gray-100 mb-5" viewBox="0 0 17 11" fill="currentColor">
          <path d="M0 6.646C0 3.107 2.531 1.002 4.11.032c.2-.123.416.133.262.312A8.202 8.202 0 002.92 2.777 4.023 4.023 0 110 6.647zm8.955 0c0-3.539 2.531-5.644 4.11-6.613.2-.123.416.132.263.31a8.202 8.202 0 00-1.454 2.434 4.023 4.023 0 11-2.92 3.87z"/>
        </svg>
        <h2 className="text-2xl xl:text-3xl font-light tracking-tight text-gray-100 leading-tight mb-5">
          Your company shows great design which is important for us at Apple
        </h2>
        <div className="flex items-end space-x-3">
          <div className="w-12 h-12 rounded-lg bg-lime-300 flex items-center justify-center text-xl">
            D
          </div>
          <div>
            <div className="text-gray-200 font-medium">Daniel Morrison</div>
            <div className="text-sm text-gray-400">Apple</div>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-28 mb-16 lg:mb-28">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group cursor-pointer">
              <div className="relative mb-6 overflow-hidden rounded-2xl lg:rounded-3xl bg-gray-50">
                {/* Tags Overlay */}
                <div className="absolute top-0 right-0 z-20 bg-white rounded-bl-3xl p-3 transform translate-y-0 lg:-translate-y-full lg:group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="text-sm px-4 py-1.5 bg-gray-50 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Image */}
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.company}
                    className="w-full h-full object-cover transform scale-110 transition-transform duration-500 lg:group-hover:scale-100"
                  />
                </div>
              </div>

              {/* Project Info */}
              <div className="flex items-center space-x-3 mb-2 text-sm lg:text-base text-gray-400">
                <span className="font-light">{project.year}</span>
                <div className="w-1.5 h-1.5 rounded-full bg-gray-400"></div>
                <span className="font-light">{project.company}</span>
              </div>
              <h2 className="text-xl xl:text-2xl 4xl:text-3xl font-light tracking-tight text-gray-200 leading-tight pr-10">
                {project.title}
              </h2>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 overflow-hidden relative">
        <style>{`
          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-marquee {
            animation: marquee 30s linear infinite;
          }
          .animate-marquee:hover {
            animation-play-state: paused;
          }
        `}</style>
        
        <div className="flex whitespace-nowrap animate-marquee">
          {[1, 2, 3, 4].map((i) => (
            <a
              key={i}
              href="/contact"
              className="group relative inline-flex items-center cursor-pointer mx-8 lg:mx-16"
            >
              <span className="text-4xl lg:text-6xl xl:text-7xl font-light tracking-tight transition-opacity text-gray-300 duration-300 group-hover:opacity-50">
                Let's work together.
              </span>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 lg:w-20 lg:h-20 rounded-full bg-lime-300 flex items-center justify-center opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
                <svg className="w-5 h-5 lg:w-8 lg:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </a>
          ))}
        </div>
        </div>
    </div>
  );
};

export default PortfolioPage;