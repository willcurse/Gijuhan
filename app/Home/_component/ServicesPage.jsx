"use client"
import React, { useState } from 'react';

const ServicesPage = () => {
  const services = [
    {
      id: 1,
      category: 'Design',
      title: 'Brand designers and web designers in-house crafting visuals to match your brand values.',
      items: [
        { num: '01', name: 'Brand Identity' },
        { num: '02', name: 'Web Design' },
        { num: '03', name: 'eCommerce' }
      ]
    },
    {
      id: 2,
      category: 'Develop',
      title: 'Web development to the highest standards, and matching the latest industry requirements.',
      items: [
        { num: '01', name: 'Web Development' },
        { num: '02', name: 'Craft CMS' },
        { num: '03', name: 'Shopify' },
        { num: '04', name: 'Craft Commerce' },
        { num: '05', name: 'eCommerce' },
        { num: '06', name: 'Technical SEO' }
      ]
    },
    {
      id: 3,
      category: 'Support',
      title: 'Lean on our in-house team to support with your design, development and seo needs.',
      items: [
        { num: '01', name: 'SEO' },
        { num: '02', name: 'Web Hosting' },
        { num: '03', name: 'Shape Support' },
        { num: '04', name: 'PPC' },
        { num: '05', name: 'Content Writing' },
        { num: '06', name: 'Craft CMS' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="pt-20 pb-20 lg:pt-32 lg:pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center space-x-2 mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-gray-900"></div>
            <div className="text-sm lg:text-base text-gray-200">Services</div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <h1 className="text-5xl lg:text-7xl xl:text-8xl text-white font-light tracking-tight leading-none mb-0">
                We're a digital marketing agency with expertise
              </h1>
            </div>
            <div className="flex items-end">
              <p className="text-2xl lg:text-3xl xl:text-4xl text-white font-light tracking-tight leading-tight">
                We bring our passion for good design to brave brands and deliver something you can shout about.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Services Sections */}
      <div className="border-t border-gray-200">
        {services.map((service, index) => (
          <div 
            key={service.id}
            className="border-b border-gray-200 py-16 lg:py-24 px-6  transition-colors duration-300"
          >
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                {/* Left Column - Category & Description */}
                <div>
                  <h2 className="text-6xl text-white lg:text-8xl xl:text-9xl font-light tracking-tight leading-none mb-12 lg:mb-16">
                    {service.category}
                  </h2>
                  <p className="text-xl lg:text-2xl xl:text-3xl text-white font-light tracking-tight leading-tight max-w-lg">
                    {service.title}
                  </p>
                </div>

                {/* Right Column - Service Items */}
                <div className="flex items-center">
                  <div className="w-full space-y-6">
                    {service.items.map((item) => (
                      <div 
                        key={item.num}
                        className="group flex items-baseline gap-6 py-4 border-b border-gray-200 transition-colors duration-200 cursor-pointer"
                      >
                        <span className="text-sm font-light text-white group-hover:text-gray-900 transition-colors duration-200 min-w-[2rem]">
                          {item.num}
                        </span>
                        <span className="text-xl lg:text-2xl font-light text-white tracking-tight group-hover:translate-x-2 transition-transform duration-200">
                          {item.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="py-20 lg:py-32 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl text-white lg:text-6xl xl:text-7xl font-light tracking-tight mb-8">
            Ready to start your project?
          </h2>
          <a 
            href="/contact"
            className="inline-flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-lime-300 hover:scale-110 transition-transform duration-300"
          >
            <svg className="w-6 h-6 lg:w-8 lg:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;