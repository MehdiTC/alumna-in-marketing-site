'use client'

import { motion } from 'framer-motion'
import Button from '@/components/Button'
import FeatureCard from '@/components/FeatureCard'
import DemoCarousel from '@/components/DemoCarousel'
import { Shield, Grid, Bell, Mail, Calendar, CreditCard } from 'lucide-react'
import { useState } from 'react'

const features = [
  {
    title: 'Secure Magic-Link Login',
    description: 'No passwords to remember. Members receive a secure login link via email.',
    image: (
      <img
        src="/demo/password.png"
        alt="Secure Magic-Link Login"
        className="bg-gray-50 rounded-lg shadow-lg object-cover w-full h-[220px] md:w-[360px] md:h-[220px]"
      />
    )
  },
  {
    title: 'View Fellow Alumni Profiles',
    description: 'Modern, mobile-friendly profiles with real-time updates and search.',
    image: (
      <img
        src="/demo/view-profile.png"
        alt="View Fellow Alumni Profiles"
        className="bg-gray-50 rounded-lg shadow-lg object-cover w-full h-[220px] md:w-[360px] md:h-[220px]"
      />
    )
  },
  {
    title: 'Create and Manage Profiles Instantly',
    description: 'Access your alumni data from a clean admin dashboard. View and edit tables of profiles, download CSV exports, add custom fields, and manage user accounts—all in one place.',
    image: (
      <img
        src="/demo/backend.png"
        alt="Create and Manage Profiles Instantly"
        className="bg-gray-50 rounded-lg shadow-lg object-cover w-full h-[220px] md:w-[360px] md:h-[220px]"
      />
    )
  }
]

export default function Home() {
  // Demo form state (no backend, just UI)
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    organization: ''
  })

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden w-full">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-indigo-500 to-indigo-600" />
        <div className="relative w-full flex flex-col md:flex-row items-center justify-between px-4 md:px-8 py-24 gap-12 min-h-screen">
          <div className="text-left text-white max-w-xl ml-0 md:ml-12">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              Your Alumni Network, <span className="text-blue-300">Reimagined</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl md:text-3xl mb-8"
            >
              Secure magic-link login · Real-time updates
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center gap-4"
            >
              <a href="#demo-form">
                <button className="bg-white text-indigo-600 font-semibold rounded-full px-8 py-3 shadow-md hover:shadow-xl transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                  Book Demo
                </button>
              </a>
              <a href="/setup">
                <button className="bg-emerald-500 text-white font-semibold rounded-full px-8 py-3 shadow-md hover:bg-emerald-600 transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-emerald-400">
                  Set Up Now
                </button>
              </a>
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-8 text-sm text-indigo-100"
            >
              Build a directory in minutes...
            </motion.p>
          </div>
          <div className="hidden md:block flex-1">
            <DemoCarousel />
          </div>
        </div>
      </section>

      {/* Features Section - Three Real Features, closer and more central, middle reversed */}
      <section id="features" className="py-12 bg-white w-full flex justify-center">
        <div className="flex flex-col gap-10 w-full max-w-4xl mx-auto px-4 md:px-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className={`flex flex-col md:flex-row items-center gap-6 md:gap-10 w-full ${i === 1 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className="flex-1 max-w-[420px] flex flex-col justify-center text-left">
                <h2 className="text-2xl md:text-3xl font-bold text-[#012169] mb-3">{feature.title}</h2>
                <p className="text-base text-gray-700 mb-2">{feature.description}</p>
              </div>
              <div className={`flex-1 flex w-full ${i === 1 ? 'justify-start' : 'justify-center md:justify-end'}`}> 
                {feature.image}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Compact Demo Form Section */}
      <section id="demo-form" className="py-16 bg-gray-50 w-full flex items-center justify-center">
        <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-8 mx-4">
          <h2 className="text-3xl font-bold text-[#012169] mb-6">Get a demo</h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6" action="https://formspree.io/f/xjkrkwvj" method="POST">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">First Name*</label>
              <input name="First Name" type="text" required className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-indigo-500 outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Last Name*</label>
              <input name="Last Name" type="text" required className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-indigo-500 outline-none" />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Email*</label>
              <input name="Email" type="email" required className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-indigo-500 outline-none" />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Organization*</label>
              <input name="Organization" type="text" required className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-indigo-500 outline-none" />
            </div>
            <div className="md:col-span-2 flex justify-end">
              <button type="submit" className="bg-indigo-600 text-white font-semibold rounded-full px-8 py-3 shadow-md hover:bg-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500">Submit</button>
            </div>
          </form>
        </div>
      </section>

      {/* Pricing Section - Left headline, right mockup */}
      <section id="pricing" className="py-24 bg-blue-900 text-white w-full flex items-center justify-center">
        <div className="w-full max-w-2xl mx-auto flex flex-col items-center text-center px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Set up your directory for <span className="text-emerald-300">free</span>
          </h2>
          <p className="text-lg mb-8">
            No payment required to get started. <br className="hidden md:block" />
            You only pay if you decide to launch your directory.
          </p>
          <a href="/setup">
            <button className="bg-indigo-600 text-white font-semibold rounded-full px-10 py-4 shadow-md hover:bg-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 text-lg">
              Set Up
            </button>
          </a>
          <p className="mt-4 text-sm text-emerald-200">No credit card required.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-400 py-8">
        <div className="w-full px-8 md:px-16">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              <p>© 2025 Alumna. All rights reserved.</p>
            </div>
            <div className="flex space-x-6">
              <a href="https://www.linkedin.com/in/mehditouhami" className="hover:text-white transition-colors" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
} 