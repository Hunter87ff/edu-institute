import React from 'react';
import { 
  GraduationCap, 
  BookOpen, 
  Globe, 
  Users, 
  Award, 
  Star 
} from 'lucide-react';

const Landing = () => {
  const featureCards = [
    {
      icon: <BookOpen className="text-blue-600" size={40} />,
      title: 'Diverse Programs',
      description: 'Offering 50+ undergraduate and graduate programs across multiple disciplines.'
    },
    {
      icon: <Globe className="text-green-600" size={40} />,
      title: 'Global Perspective',
      description: 'International partnerships and exchange programs in 20+ countries.'
    },
    {
      icon: <Award className="text-purple-600" size={40} />,
      title: 'Research Excellence',
      description: 'Top-ranked research initiatives with $15M annual research funding.'
    }
  ];

  const heroStats = [
    { number: '5,000+', label: 'Students' },
    { number: '250+', label: 'Faculty' },
    { number: '95%', label: 'Placement Rate' }
  ];

  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-5xl font-bold text-blue-900 mb-6">
            Empowering Minds, <br />Transforming Futures
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            A premier institution dedicated to academic excellence, innovative research, and holistic student development.
          </p>
          <div className="flex space-x-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
              Explore Programs
            </button>
            <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition">
              Admission Process
            </button>
          </div>
        </div>
        <div className="hidden md:block">
          <img 
            src="./campus.jpg" 
            alt="Campus" 
            className="rounded-lg shadow-xl"
          />
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-blue-50 py-12">
        <div className="container mx-auto px-4 flex justify-center space-x-12">
          {heroStats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl font-bold text-blue-800">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
          Why Choose Us
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {featureCards.map((card) => (
            <div 
              key={card.title} 
              className="bg-white border rounded-lg p-6 text-center shadow-md hover:shadow-xl transition"
            >
              <div className="flex justify-center mb-4">{card.icon}</div>
              <h3 className="text-xl font-semibold text-blue-800 mb-3">
                {card.title}
              </h3>
              <p className="text-gray-600">{card.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="bg-blue-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <Star className="text-yellow-500 mx-auto mb-4" size={40} />
          <blockquote className="text-xl text-gray-800 max-w-2xl mx-auto mb-6">
            "Our institution is not just about academic learning, but about creating transformative experiences that shape future leaders."
          </blockquote>
          <p className="text-gray-700">- Dr. Academic Director</p>
        </div>
      </div>
    </div>
  );
};

export default Landing;