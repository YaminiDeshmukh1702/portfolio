import { Award, Briefcase, ChevronDown, Code, Database, ExternalLink, GraduationCap, Linkedin, Mail, MapPin, Menu, Monitor, Moon, Shield, Sun, User, X } from 'lucide-react';
import { useEffect, useState } from 'react';
// Import your profile image here
import profileImage from '../src/images/YaminiWhite.png'; // **Change this path to your image's location**

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  // --- Initial Load Effect ---
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // --- New useEffect for Scroll Observation (The Fix) ---
  useEffect(() => {
    const sections =['home', 'about', 'experience', 'skills', 'projects', 'education', 'contact'];

    const observerOptions = {
      root: null, 
      rootMargin: '0px',
      threshold: 0.5, 
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach(id => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []); 

  // --- Theme Toggle and Scroll Handlers ---
  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId); 
      setIsMenuOpen(false);
    }
  };

  // --- Theme-Dependent Variables ---
  const theme = isDarkMode ? {
    bgPrimary: 'from-black via-gray-900 to-black',
    bgCard: 'from-black to-gray-900',
    textPrimary: 'text-white',
    textSecondary: 'text-white/80',
    textMuted: 'text-white/60',
    gradientAccent: 'from-purple-400 to-pink-400',
    cardBorder: 'border-gray-800',
    shadow: 'shadow-purple-500/20',
    hoverScale: 'hover:scale-105',
    buttonPrimary: 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700',
    buttonSecondary: 'border-2 border-purple-400 hover:bg-purple-400 hover:text-slate-900',
  } : {
    bgPrimary: 'from-white via-gray-100 to-white',
    bgCard: 'from-white to-gray-200',
    textPrimary: 'text-slate-800',
    textSecondary: 'text-slate-700',
    textMuted: 'text-slate-500',
    gradientAccent: 'from-blue-600 to-indigo-600',
    cardBorder: 'border-gray-300',
    shadow: 'shadow-blue-500/20',
    hoverScale: 'hover:scale-102',
    buttonPrimary: 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700',
    buttonSecondary: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white',
  };

  // --- Content Data ---
  const skills = [
    { category: "Languages & Runtime", items: ["JavaScript", "TypeScript", "Node.js"], icon: Code },
    { category: "API Development", items: ["RESTful APIs", "GraphQL APIs", "Postman", "Altair GraphQL Client"], icon: ExternalLink },
    { category: "Databases", items: ["MySQL", "Sequelize"], icon: Database },
    { category: "Frameworks", items: ["NestJS", "GraphQL"], icon: Code },
    { category: "Authentication & Security", items: ["Auth0", "Okta", "OAuth2", "Authentication Flow Design"], icon: Shield },
    { category: "Monitoring & Observability", items: ["Grafana", "OpenTelemetry (OTEL)"], icon: Monitor }
  ];

  const experience = [
    {
      title: "Associate Member of Development Team",
      company: "Zitics Private Limited",
      period: "08/2024 - Present",
      location: "Pune, India",
      achievements: [
        "Developed and maintained backend services using Node.js with NestJS framework",
        "Built scalable RESTful and GraphQL APIs to support web applications",
        "Integrated Auth0 and Okta for secure authentication and authorization",
        "Designed authentication flows and implemented robust access control mechanisms",
        "Worked on Grafana OTEL integrations for observability and monitoring",
        "Contributed to database management including schema design and optimizations"
      ]
    },
    {
      title: "Intern - Development Team",
      company: "Zitics Private Limited",
      period: "02/2024 - 07/2024",
      location: "Pune, India",
      achievements: [
        "Assisted in backend development using NestJS framework",
        "Contributed to Identity Management and secure authentication systems",
        "Collaborated on developing scalable and modular API services"
      ]
    }
  ];

  const certificates = [
    "Java Internship - R3 Systems India Pvt. Ltd.",
    "Communication Skills Course - TCS iON",
    "Prompt Design in Vertex AI - Google Cloud",
    "Aptitude and Technical Training Program - Campus Credentials",
    "Smart India Hackathon 2022 - Participant"
  ];
const projects = [
  {
    title: "Encryption–Decryption System",
    description:
      "A full-stack encryption/decryption system supporting secure payload transformations for any data type with modern UI for testing.",
    tech: [
      "NestJS",
      "React",
      "AES-256",
      "Crypto",
      "TypeScript",
      "Full Stack"
    ],
    link: "https://github.com/your-repo-link", // update if needed
    details: [
      "Implemented a full-stack encryption/decryption system using NestJS and React.",
      "Built secure APIs capable of encrypting any data type (JSON, text, numbers, binary).",
      "Added support for both server-side encryption and client-side zero-trust encryption using user-supplied keys.",
      "Designed a modern UI for testing payloads."
    ]
  },

  {
    title: "IMA Platform — Multi-Tenant Identity & Access Management",
    description:
      "An Auth0-style IAM backend for SaaS apps supporting multi-organization onboarding, modular services, and secure authentication.",
    tech: [
      "NestJS",
      "PostgreSQL",
      "TypeORM",
      "JWT",
      "Refresh Tokens",
      "RBAC",
      "Microservices"
    ],
    link: "https://github.com/your-repo-link", // update if needed
    details: [
      "Building a multi-tenant IAM backend with organization onboarding.",
      "Implemented organizations, users, memberships, and JWT auth with DB-backed refresh tokens.",
      "Designed modular NestJS architecture using PostgreSQL and TypeORM with UUID entities.",
      "Delivered core modules: Organizations, Users, Memberships, Auth (login/refresh/logout).",
      "Upcoming: Tenant module, full RBAC permissions, and application-level roles."
    ]
  }
];


  return (
    <div className={`min-h-screen ${theme.textPrimary} ${isDarkMode ? 'bg-gradient-to-br from-black via-gray-900 to-black' : 'bg-gradient-to-br from-white via-gray-100 to-white'}`}>
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 ${isDarkMode ? 'bg-black/70 border-gray-800' : 'bg-white/70 border-gray-300'} backdrop-blur-lg border-b`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className={`text-xl font-bold bg-gradient-to-r ${theme.gradientAccent} bg-clip-text text-transparent`}>
              Yamini Deshmukh
            </div>
            
            <div className="flex items-center space-x-4">
              {/* Desktop Menu */}
              <div className="hidden md:flex space-x-8">
                {['home', 'about', 'experience', 'skills', 'education', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`capitalize transition-colors duration-200 ${
                      isDarkMode ? 'hover:text-purple-400' : 'hover:text-blue-600'
                    } ${
                      activeSection === item 
                        ? (isDarkMode ? 'text-purple-400 font-bold' : 'text-blue-600 font-bold') 
                        : theme.textSecondary
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>

              {/* Theme Toggle Button */}
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-full transition-colors duration-300 ${isDarkMode ? 'bg-gray-800 hover:bg-gray-700 text-purple-400' : 'bg-gray-200 hover:bg-gray-300 text-blue-600'}`}
                aria-label="Toggle theme"
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>

              {/* Mobile Menu Button */}
              <button
                className={`md:hidden p-2 ${theme.textPrimary}`}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className={`md:hidden ${isDarkMode ? 'bg-black/80 border-gray-800' : 'bg-white/80 border-gray-300'} backdrop-blur-lg rounded-lg mt-2 p-4 border`}>
              {['home', 'about', 'experience', 'skills', 'education', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left py-2 capitalize transition-colors duration-200 hover:text-purple-400"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Creative Hero Section */}
      <section 
        id="home" 
        className={`relative min-h-screen flex items-center justify-center pt-16 overflow-hidden`}
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating Shapes */}
          <div className={`absolute top-20 left-10 w-32 h-32 ${isDarkMode ? 'bg-gradient-to-br from-purple-500/20 to-pink-500/20' : 'bg-gradient-to-br from-blue-500/20 to-indigo-500/20'} rounded-full animate-bounce`} style={{animationDelay: '0s', animationDuration: '3s'}}></div>
          <div className={`absolute top-40 right-20 w-24 h-24 ${isDarkMode ? 'bg-gradient-to-br from-pink-500/20 to-purple-500/20' : 'bg-gradient-to-br from-indigo-500/20 to-blue-500/20'} rounded-full animate-bounce`} style={{animationDelay: '1s', animationDuration: '4s'}}></div>
          <div className={`absolute bottom-40 left-20 w-20 h-20 ${isDarkMode ? 'bg-gradient-to-br from-purple-400/20 to-pink-400/20' : 'bg-gradient-to-br from-blue-400/20 to-indigo-400/20'} rounded-full animate-bounce`} style={{animationDelay: '2s', animationDuration: '5s'}}></div>
          <div className={`absolute bottom-20 right-10 w-28 h-28 ${isDarkMode ? 'bg-gradient-to-br from-pink-400/20 to-purple-400/20' : 'bg-gradient-to-br from-indigo-400/20 to-blue-400/20'} rounded-full animate-bounce`} style={{animationDelay: '0.5s', animationDuration: '3.5s'}}></div>
          
          {/* Geometric Shapes */}
          <div className={`absolute top-1/3 left-1/4 w-16 h-16 ${isDarkMode ? 'border-purple-400/30' : 'border-blue-600/30'} border-2 rotate-45 animate-spin`} style={{animationDuration: '8s'}}></div>
          <div className={`absolute bottom-1/3 right-1/4 w-12 h-12 ${isDarkMode ? 'border-pink-400/30' : 'border-indigo-600/30'} border-2 animate-pulse`}></div>
          
          {/* Grid Pattern */}
          <div className={`absolute inset-0 ${isDarkMode ? 'opacity-5' : 'opacity-10'}`} style={{
            backgroundImage: `radial-gradient(${isDarkMode ? '#8b5cf6' : '#3b82f6'} 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className={`relative z-10 max-w-5xl mx-auto text-center px-4 transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
            {/* Profile Image */}
            <div className="relative">
              <div className={`w-64 h-64 lg:w-80 lg:h-80 mx-auto rounded-full bg-gradient-to-r ${theme.gradientAccent} p-2 shadow-2xl ${theme.shadow}`}>
                <img
                  src={profileImage}
                  alt="Yamini Deshmukh"
                  className="w-full h-full rounded-full object-cover border-4 border-white/20"
                  onError={(e) => {
                    // Fallback if image fails to load
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className={`w-full h-full rounded-full ${isDarkMode ? 'bg-black border-gray-800' : 'bg-white border-gray-300'} hidden items-center justify-center border-2`}>
                  <User size={96} className={isDarkMode ? 'text-purple-400' : 'text-blue-600'} />
                </div>
              </div>
              {/* Animated Ring */}
              <div className={`absolute inset-0 w-64 h-64 lg:w-80 lg:h-80 mx-auto rounded-full border-2 ${isDarkMode ? 'border-purple-400/30' : 'border-blue-600/30'} animate-ping`} style={{animationDuration: '3s'}}></div>
            </div>

            {/* Content */}
            <div className="flex-1 text-left lg:pl-8">
              <div className={`inline-block px-4 py-2 rounded-full ${isDarkMode ? 'bg-purple-500/20 text-purple-300' : 'bg-blue-500/20 text-blue-600'} text-sm font-semibold mb-4`}>
                👋 Hello, I'm
              </div>
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
                <span className={`bg-gradient-to-r ${theme.gradientAccent} bg-clip-text text-transparent`}>
                  Yamini
                </span>
                <br />
                <span className={theme.textPrimary}>Deshmukh</span>
              </h1>
              <div className={`text-xl lg:text-2xl ${isDarkMode ? 'text-purple-200' : 'text-blue-600'} mb-6 font-medium`}>
                Software Engineer & Backend Developer
              </div>
              <p className={`${theme.textSecondary} text-lg lg:text-xl max-w-2xl mb-8 leading-relaxed`}>
                Specialized in authentication, backend development, and database management. 
                Building secure APIs and optimizing system performance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => scrollToSection('experience')}
                  className={`px-8 py-4 rounded-full transition-all duration-300 transform ${theme.hoverScale} font-semibold ${theme.buttonPrimary} shadow-lg ${isDarkMode ? 'text-white shadow-purple-500/25' : 'text-white shadow-blue-500/25'}`}
                >
                  View My Work
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className={`px-8 py-4 rounded-full transition-all duration-300 transform ${theme.hoverScale} font-semibold ${theme.buttonSecondary} shadow-lg`}
                >
                  Get In Touch
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className={isDarkMode ? 'text-purple-400' : 'text-blue-600'} />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-20 bg-gradient-to-r ${isDarkMode ? 'from-black via-gray-900 to-black' : 'from-gray-100 via-gray-200 to-gray-100'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-4 bg-gradient-to-r ${theme.gradientAccent} bg-clip-text text-transparent`}>
              About Me
            </h2>
            <div className={`w-24 h-1 bg-gradient-to-r ${theme.gradientAccent} mx-auto mb-8`}></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className={`${theme.textSecondary} text-lg mb-6 leading-relaxed`}>
                I'm a passionate Software Engineer with expertise in backend development, 
                authentication systems, and database management. Currently working at Zitics Private Limited, 
                I specialize in building secure, scalable APIs and implementing robust authentication flows.
              </p>
              <p className={`${theme.textSecondary} text-lg mb-8 leading-relaxed`}>
                My technical journey focuses on modern technologies like Node.js, NestJS, and GraphQL, 
                with a strong emphasis on security through Auth0 and Okta integrations. I'm also experienced 
                in system observability using Grafana and OpenTelemetry.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className={`backdrop-blur-sm rounded-lg p-4 border ${theme.cardBorder} ${isDarkMode ? 'bg-black/60' : 'bg-white/60'}`}>
                  <div className="flex items-center mb-2">
                    <MapPin size={16} className={isDarkMode ? 'text-purple-400 mr-2' : 'text-blue-600 mr-2'} />
                    <span className={theme.textMuted}>Location</span>
                  </div>
                  <p className="font-semibold">Pune, India</p>
                </div>
                <div className={`backdrop-blur-sm rounded-lg p-4 border ${theme.cardBorder} ${isDarkMode ? 'bg-black/60' : 'bg-white/60'}`}>
                  <div className="flex items-center mb-2">
                    <Briefcase size={16} className={isDarkMode ? 'text-purple-400 mr-2' : 'text-blue-600 mr-2'} />
                    <span className={theme.textMuted}>Experience</span>
                  </div>
                  <p className="font-semibold">1+ Years</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className={`bg-gradient-to-br ${theme.bgCard} backdrop-blur-sm rounded-2xl p-8 border-2 ${theme.cardBorder} shadow-2xl ${theme.shadow}`}>
                <h3 className={`text-2xl font-bold mb-6 text-center ${theme.textPrimary}`}>Core Expertise</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Shield className={isDarkMode ? 'text-purple-400 mr-3' : 'text-blue-600 mr-3'} size={20} />
                    <span className={theme.textSecondary}>Authentication & Security</span>
                  </div>
                  <div className="flex items-center">
                    <Code className={isDarkMode ? 'text-pink-400 mr-3' : 'text-indigo-600 mr-3'} size={20} />
                    <span className={theme.textSecondary}>Backend Development</span>
                  </div>
                  <div className="flex items-center">
                    <Database className={isDarkMode ? 'text-purple-400 mr-3' : 'text-blue-600 mr-3'} size={20} />
                    <span className={theme.textSecondary}>Database Management</span>
                  </div>
                  <div className="flex items-center">
                    <Monitor className={isDarkMode ? 'text-pink-400 mr-3' : 'text-indigo-600 mr-3'} size={20} />
                    <span className={theme.textSecondary}>System Observability</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-4 bg-gradient-to-r ${theme.gradientAccent} bg-clip-text text-transparent`}>
              Experience
            </h2>
            <div className={`w-24 h-1 bg-gradient-to-r ${theme.gradientAccent} mx-auto mb-8`}></div>
          </div>
          <div className="space-y-12">
            {experience.map((job, index) => (
              <div key={index} className={`bg-gradient-to-br ${theme.bgCard} backdrop-blur-sm rounded-2xl p-8 border-2 ${theme.cardBorder} transform hover:scale-[1.01] transition-all duration-300 ${isDarkMode ? 'hover:border-purple-500/50' : 'hover:border-blue-500/50'} shadow-xl ${isDarkMode ? 'hover:shadow-purple-500/20' : 'hover:shadow-blue-500/20'}`}>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div>
                    <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-purple-300' : 'text-blue-600'} mb-2`}>{job.title}</h3>
                    <p className={`${theme.textSecondary} text-xl mb-2`}>{job.company}</p>
                    <div className={`flex items-center ${theme.textMuted}`}>
                      <MapPin size={16} className="mr-1" />
                      <span className="mr-4">{job.location}</span>
                      <span>{job.period}</span>
                    </div>
                  </div>
                  <div className="mt-4 lg:mt-0">
                    <div className={`bg-gradient-to-r ${theme.gradientAccent} rounded-full px-4 py-2 text-sm font-semibold ${isDarkMode ? 'text-white' : 'text-white'}`}>
                      {index === 0 ? 'Current Role' : 'Previous Role'}
                    </div>
                  </div>
                </div>
                <div className="grid gap-3">
                  {job.achievements.map((achievement, achIndex) => (
                    <div key={achIndex} className="flex items-start">
                      <div className={`w-2 h-2 ${isDarkMode ? 'bg-purple-400' : 'bg-blue-600'} rounded-full mt-2 mr-3 flex-shrink-0`}></div>
                      <p className={theme.textSecondary}>{achievement}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={`py-20 bg-gradient-to-r ${isDarkMode ? 'from-black via-gray-900 to-black' : 'from-gray-100 via-gray-200 to-gray-100'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-4 bg-gradient-to-r ${theme.gradientAccent} bg-clip-text text-transparent`}>
              Skills & Technologies
            </h2>
            <div className={`w-24 h-1 bg-gradient-to-r ${theme.gradientAccent} mx-auto mb-8`}></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => {
              const Icon = skillGroup.icon;
              return (
                <div key={index} className={`bg-gradient-to-br ${theme.bgCard} backdrop-blur-sm rounded-2xl p-6 border-2 ${theme.cardBorder} ${isDarkMode ? 'hover:border-purple-400/70' : 'hover:border-blue-600/70'} transition-all duration-300 transform ${theme.hoverScale} shadow-lg ${isDarkMode ? 'hover:shadow-purple-500/30' : 'hover:shadow-blue-500/30'}`}>
                  <div className="flex items-center mb-4">
                    <Icon size={24} className={isDarkMode ? 'text-purple-400 mr-3' : 'text-blue-600 mr-3'} />
                    <h3 className={`text-lg font-semibold ${theme.textPrimary}`}>{skillGroup.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <span key={skillIndex} className={`backdrop-blur-sm rounded-full px-3 py-1 text-sm border ${isDarkMode ? 'bg-gray-800 text-white/80 border-gray-700 hover:border-purple-400/50' : 'bg-gray-200 text-slate-700 border-gray-300 hover:border-blue-600/50'} transition-all duration-200`}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
{/* Projects Section */}
<section id="projects" className="py-20">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    
    <div className="text-center mb-16">
      <h2 className={`text-4xl font-bold mb-4 bg-gradient-to-r ${theme.gradientAccent} bg-clip-text text-transparent`}>
        Projects
      </h2>
      <div className={`w-24 h-1 bg-gradient-to-r ${theme.gradientAccent} mx-auto mb-8`}></div>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
      {projects.map((project, index) => (
        <div key={index}
          className={`bg-gradient-to-br ${theme.bgCard} backdrop-blur-sm rounded-2xl p-6 border-2 ${theme.cardBorder} 
          transform hover:scale-[1.02] transition-all duration-300 shadow-xl
          ${isDarkMode ? 'hover:border-purple-400/60 hover:shadow-purple-500/20' : 'hover:border-blue-600/60 hover:shadow-blue-500/20'}`}>
          
          <h3 className={`text-xl font-bold mb-3 ${theme.textPrimary}`}>
            {project.title}
          </h3>

          <p className={`${theme.textSecondary} text-sm mb-4`}>
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((t, i) => (
              <span key={i}
                className={`px-3 py-1 rounded-full text-xs border backdrop-blur-sm
                ${isDarkMode ? 'bg-gray-800 text-white/70 border-gray-700' : 'bg-gray-200 text-slate-700 border-gray-300'}
                `}>
                {t}
              </span>
            ))}
          </div>

          {/* Project Link
          <a href={project.link} 
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center text-sm font-semibold bg-gradient-to-r ${theme.gradientAccent} 
            text-white px-4 py-2 rounded-full transition-all duration-300 ${theme.hoverScale}`}>
            View Project <ExternalLink size={16} className="ml-2" />
          </a> */}
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Education & Certificates */}
      <section id="education" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-4 bg-gradient-to-r ${theme.gradientAccent} bg-clip-text text-transparent`}>
              Education & Certifications
            </h2>
            <div className={`w-24 h-1 bg-gradient-to-r ${theme.gradientAccent} mx-auto mb-8`}></div>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Education */}
            <div>
              <div className="flex items-center mb-6">
                <GraduationCap className={isDarkMode ? 'text-purple-400 mr-3' : 'text-blue-600 mr-3'} size={32} />
                <h3 className={`text-2xl font-bold ${theme.textPrimary}`}>Education</h3>
              </div>
              <div className="space-y-6">
                <div className={`bg-gradient-to-r ${theme.bgCard} backdrop-blur-sm rounded-xl p-6 border-2 ${theme.cardBorder} ${isDarkMode ? 'hover:border-purple-400/50' : 'hover:border-blue-600/50'} transition-all duration-300 shadow-lg`}>
                  <h4 className={`text-xl font-semibold ${isDarkMode ? 'text-purple-300' : 'text-blue-600'} mb-2`}>Bachelor of Technology</h4>
                  <p className={`${theme.textSecondary} mb-1`}>Computer Science</p>
                  <p className={`${theme.textMuted} mb-2`}>R. C. Patel Institute of Technology, Shirpur</p>
                  <p className={`text-sm ${theme.textMuted}`}>02/2021 - 07/2024</p>
                </div>
                <div className={`bg-gradient-to-r ${theme.bgCard} backdrop-blur-sm rounded-xl p-6 border-2 ${theme.cardBorder} ${isDarkMode ? 'hover:border-purple-400/50' : 'hover:border-blue-600/50'} transition-all duration-300 shadow-lg`}>
                  <h4 className={`text-xl font-semibold ${isDarkMode ? 'text-purple-300' : 'text-blue-600'} mb-2`}>Higher Secondary Certificate</h4>
                  <p className={`${theme.textMuted} mb-2`}>J. R. City Junior College, Dhule</p>
                  <p className={`text-sm ${theme.textMuted}`}>06/2018 - 03/2020</p>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div>
              <div className="flex items-center mb-6">
                <Award className={isDarkMode ? 'text-purple-400 mr-3' : 'text-blue-600 mr-3'} size={32} />
                <h3 className={`text-2xl font-bold ${theme.textPrimary}`}>Certifications</h3>
              </div>
              <div className="space-y-4">
                {certificates.map((cert, index) => (
                  <div key={index} className={`bg-gradient-to-r ${theme.bgCard} backdrop-blur-sm rounded-xl p-4 border-2 ${theme.cardBorder} ${isDarkMode ? 'hover:border-purple-400/50' : 'hover:border-blue-600/50'} transition-all duration-300 shadow-lg ${isDarkMode ? 'hover:shadow-purple-500/20' : 'hover:shadow-blue-500/20'}`}>
                    <div className="flex items-center">
                      <div className={`w-3 h-3 bg-gradient-to-r ${theme.gradientAccent} rounded-full mr-3`}></div>
                      <p className={theme.textSecondary}>{cert}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
  <section id="contact" className={`py-20 bg-gradient-to-r ${isDarkMode ? 'from-black via-gray-900 to-black' : 'from-gray-100 via-gray-200 to-gray-100'}`}>
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* ... (Header content remains the same) ... */}
        <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-4 bg-gradient-to-r ${theme.gradientAccent} bg-clip-text text-transparent`}>
                Let's Connect
            </h2>
            <div className={`w-24 h-1 bg-gradient-to-r ${theme.gradientAccent} mx-auto mb-8`}></div>
            <p className={`text-xl ${theme.textSecondary} max-w-2xl mx-auto`}>
                I'm always open to discussing new opportunities and interesting projects. Let's build something amazing together!
            </p>
        </div>
        
        {/* === UPDATED GRID FOR CENTERING === */}
        <div className="flex justify-center gap-8 mb-12">
    
    {/* Mail Card - Added w-full sm:w-72 for consistent size */}
    <a 
        href="mailto:yaminideshmukh1702@gmail.com" 
        className={`w-full sm:w-72 bg-gradient-to-br ${theme.bgCard} backdrop-blur-sm rounded-2xl p-6 border-2 ${theme.cardBorder} ${isDarkMode ? 'hover:border-purple-400/70' : 'hover:border-blue-600/70'} transition-all duration-300 transform ${theme.hoverScale} shadow-xl ${theme.shadow}`}
    >
        <Mail size={32} className={`${isDarkMode ? 'text-purple-400' : 'text-blue-600'} mx-auto mb-4`} />
        <h3 className={`text-lg font-semibold mb-2 ${theme.textPrimary}`}>Email</h3>
        <p className={`${theme.textSecondary} break-all`}>yaminideshmukh1702@gmail.com</p>
    </a>
    
    
    {/* LinkedIn Card - Added w-full sm:w-72 for consistent size */}
    <a 
        href="https://www.linkedin.com/in/yamini-deshmukh-ab72b6217" 
        target="_blank" 
        rel="noopener noreferrer" 
        className={`w-full sm:w-72 bg-gradient-to-br ${theme.bgCard} backdrop-blur-sm rounded-2xl p-6 border-2 ${theme.cardBorder} ${isDarkMode ? 'hover:border-purple-400/70' : 'hover:border-blue-600/70'} transition-all duration-300 transform ${theme.hoverScale} shadow-xl ${theme.shadow}`}
    >
        <Linkedin size={32} className={`${isDarkMode ? 'text-purple-400' : 'text-blue-600'} mx-auto mb-4`} />
        <h3 className={`text-lg font-semibold mb-2 ${theme.textPrimary}`}>LinkedIn</h3>
        <p className={theme.textSecondary}>Connect with me</p>
    </a>
</div>
        {/* === END UPDATED GRID === */}

        {/* ... (Ready to work together block remains the same) ... */}
        <div className={`bg-gradient-to-br ${theme.bgCard} backdrop-blur-sm rounded-2xl p-8 border-2 ${theme.cardBorder} shadow-2xl ${isDarkMode ? 'hover:border-purple-400/50' : 'hover:border-blue-600/50'} transition-all duration-300`}>
            <h3 className={`text-2xl font-bold mb-4 ${theme.textPrimary}`}>Ready to work together?</h3>
            <p className={`${theme.textSecondary} mb-6`}>Whether you have a project in mind or just want to chat about technology, I'd love to hear from you.</p>
            <a href="mailto:yaminideshmukh1702@gmail.com" className={`inline-flex items-center px-8 py-4 rounded-full transition-all duration-300 transform ${theme.hoverScale} font-semibold ${theme.buttonPrimary}`}>
                <Mail size={20} className="mr-2" />
                Send Message
            </a>
        </div>
    </div>
</section>
      {/* Footer */}
      <footer className={`py-8 ${isDarkMode ? 'bg-black border-gray-800' : 'bg-white border-gray-300'} border-t`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className={`${theme.textMuted} mb-4 md:mb-0`}>
              © 2024 Yamini Deshmukh. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a href="mailto:yaminideshmukh1702@gmail.com" className={`${theme.textMuted} hover:text-purple-400 transition-colors`}>
                <Mail size={20} />
              </a>
              <a href="https://www.linkedin.com/in/yamini-deshmukh-ab72b6217" target="_blank" rel="noopener noreferrer" className={`${theme.textMuted} hover:text-purple-400 transition-colors`}>
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;