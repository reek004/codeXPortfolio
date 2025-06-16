'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [isVisible, setIsVisible] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Mobile detection
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    // Fallback: Set visible after 1000ms on mobile
    const mobileTimeout = setTimeout(() => {
      if (isMobile) {
        setIsVisible(true)
      }
    }, 1000)

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { 
        threshold: isMobile ? 0.05 : 0.1, 
        rootMargin: isMobile ? '100px' : '50px' 
      }
    )

    const section = document.getElementById('projects')
    if (section) {
      observer.observe(section)
    }

    return () => {
      observer.disconnect()
      clearTimeout(mobileTimeout)
    }
  }, [isMobile])

  const sectionStyle = {
    padding: 'clamp(2rem, 5vw, 5rem) clamp(1rem, 4vw, 2rem)',
    background: 'linear-gradient(180deg, #312e81 0%, #1e1b4b 50%, #312e81 100%)',
    minHeight: 'auto'
  }

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto'
  }

  const headerStyle = {
    textAlign: 'center' as const,
    marginBottom: '4rem',
    transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
    opacity: isVisible ? 1 : 0,
    transition: 'all 1s ease-out'
  }

  const titleStyle = {
    fontSize: 'clamp(2.5rem, 6vw, 4rem)',
    fontWeight: 'bold',
    marginBottom: '1.5rem',
    background: 'linear-gradient(135deg, #a855f7, #6366f1, #3b82f6)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  }

  const subtitleStyle = {
    fontSize: 'clamp(1.1rem, 3vw, 1.3rem)',
    color: '#e2e8f0',
    maxWidth: '800px',
    margin: '0 auto',
    lineHeight: '1.6'
  }

  const filterContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap' as const,
    justifyContent: 'center',
    gap: '1rem',
    marginBottom: '3rem',
    transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
    opacity: isVisible ? 1 : 0,
    transition: 'all 1s ease-out 0.3s'
  }

  const projectsGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: 'clamp(1rem, 3vw, 2rem)',
    marginBottom: '4rem'
  }

  const projectCardStyle = {
    background: 'rgba(15, 23, 42, 0.6)',
    backdropFilter: 'blur(10px)',
    borderRadius: '16px',
    overflow: 'hidden',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    transition: 'all 0.2s ease',
    position: 'relative' as const,
    cursor: 'pointer'
  }

  const ctaStyle = {
    textAlign: 'center' as const,
    transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
    opacity: isVisible ? 1 : 0,
    transition: 'all 1s ease-out 0.7s'
  }

  const projects = [
    {
      id: 1,
      title: 'GameX',
      category: 'web3',
      description: 'Revolutionary gaming platform with advanced features, real-time gameplay, and immersive user experiences for the next generation of gamers.',
      technologies: ['React', 'Node.js', 'Web3.js'],
      url: 'https://gamexto.com/',
      image: '/images/projects/gamex.png',
      metrics: { users: '10K+', rating: '4.9/5', uptime: '99.9%' }
    },
    {
      id: 2,
      title: 'Fengshui Modern',
      category: 'web',
      description: 'Modern interpretation of ancient Fengshui principles with contemporary design and user-friendly interface for space optimization.',
      technologies: ['Next.js', 'TypeScript', 'MongoDB'],
      url: 'https://nikhil-sigma.vercel.app/',
      image: '/images/projects/fengshui.png',
      metrics: { clients: '500+', rating: '4.8/5', projects: '1K+' }
    },
    {
      id: 3,
      title: 'Mooner Money',
      category: 'fintech',
      description: 'Advanced financial management platform with cryptocurrency tracking, portfolio management, and comprehensive investment analytics.',
      technologies: ['React', 'Node.js', 'PostgreSQL'],
      url: 'https://mooner.money/',
      image: '/images/projects/mooner.png',
      metrics: { transactions: '100K+', security: 'Bank-grade', speed: '< 2s' }
    },
    {
      id: 4,
      title: 'WGMI Exchange',
      category: 'defi',
      description: 'Decentralized exchange platform enabling seamless cryptocurrency trading with advanced features and optimal user experience.',
      technologies: ['Vue.js', 'Solidity', 'Web3.js'],
      url: 'https://v1.wgmi.exchange/',
      image: '/images/projects/wgmi.png',
      metrics: { volume: '$5M+', fees: '0.3%', pairs: '200+' }
    }
  ]

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'web', label: 'Web Apps' },
    { key: 'fintech', label: 'FinTech' },
    { key: 'defi', label: 'DeFi' },
    { key: 'web3', label: 'Web3 Gaming' }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleProjectClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="projects" style={sectionStyle} className={isMobile ? 'mobile-padding' : ''}>
      <div style={containerStyle}>
        {/* Section Header */}
        <div style={{
          ...headerStyle,
          opacity: isMobile ? 1 : (isVisible ? 1 : 0),
          transform: isMobile ? 'translateY(0)' : (isVisible ? 'translateY(0)' : 'translateY(30px)')
        }}>
          <h2 style={titleStyle} className="gradient-text">
            Our Projects
          </h2>
          <p style={subtitleStyle}>
            Explore our innovative software projects that showcase creativity, technical excellence, and user-centric design.
          </p>
        </div>

        {/* Filter Buttons */}
        <div style={{
          ...filterContainerStyle,
          opacity: isMobile ? 1 : (isVisible ? 1 : 0),
          transform: isMobile ? 'translateY(0)' : (isVisible ? 'translateY(0)' : 'translateY(30px)')
        }}>
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              style={{
                padding: '12px 24px',
                borderRadius: '25px',
                fontWeight: '600',
                transition: 'all 0.3s ease',
                border: 'none',
                cursor: 'pointer',
                background: activeFilter === filter.key 
                  ? 'linear-gradient(135deg, #6366f1, #8b5cf6)' 
                  : 'rgba(255, 255, 255, 0.1)',
                color: activeFilter === filter.key ? '#ffffff' : '#e2e8f0',
                backdropFilter: 'blur(10px)'
              }}
              onMouseEnter={(e) => {
                if (activeFilter !== filter.key) {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)'
                  e.currentTarget.style.color = '#ffffff'
                  e.currentTarget.style.transform = 'scale(1.05)'
                }
              }}
              onMouseLeave={(e) => {
                if (activeFilter !== filter.key) {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'
                  e.currentTarget.style.color = '#e2e8f0'
                  e.currentTarget.style.transform = 'scale(1)'
                }
              }}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div style={projectsGridStyle}>
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              style={{
                ...projectCardStyle,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                opacity: isVisible ? 1 : 0,
                transitionDelay: `${0.5 + index * 0.1}s`
              }}
              onClick={() => handleProjectClick(project.url)}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)'
                e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.4)'
                e.currentTarget.style.boxShadow = '0 15px 35px rgba(99, 102, 241, 0.25)'
                e.currentTarget.style.transition = 'all 0.15s ease-out'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)'
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'
                e.currentTarget.style.boxShadow = 'none'
                e.currentTarget.style.transition = 'all 0.2s ease-out'
              }}
            >
              {/* Project Image */}
              <div style={{
                height: '200px',
                background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.3), rgba(59, 130, 246, 0.3))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <Image 
                  src={project.image} 
                  alt={project.title}
                  width={400}
                  height={200}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.2s ease-out'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.1)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)'
                  }}
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'rgba(0, 0, 0, 0.2)',
                  transition: 'all 0.15s ease'
                }}></div>
              </div>

              {/* Project Content */}
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  color: '#ffffff',
                  marginBottom: '1rem',
                  transition: 'color 0.15s ease'
                }}>
                  {project.title}
                </h3>
                <p style={{
                  color: '#cbd5e1',
                  marginBottom: '1rem',
                  lineHeight: '1.5'
                }}>
                  {project.description}
                </p>

                {/* Technologies */}
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                  marginBottom: '1rem'
                }}>
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      style={{
                        padding: '4px 12px',
                        background: 'rgba(139, 92, 246, 0.3)',
                        color: '#c084fc',
                        borderRadius: '20px',
                        fontSize: '0.875rem',
                        fontWeight: '500',
                        transition: 'all 0.15s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'rgba(139, 92, 246, 0.5)'
                        e.currentTarget.style.color = '#ffffff'
                        e.currentTarget.style.transform = 'scale(1.05)'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'rgba(139, 92, 246, 0.3)'
                        e.currentTarget.style.color = '#c084fc'
                        e.currentTarget.style.transform = 'scale(1)'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Metrics */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '0.5rem',
                  paddingTop: '1rem',
                  borderTop: '1px solid rgba(255, 255, 255, 0.1)'
                }}>
                  {Object.entries(project.metrics).map(([key, value]) => (
                    <div key={key} style={{ textAlign: 'center' }}>
                      <div style={{
                        fontSize: '0.875rem',
                        color: '#9ca3af',
                        textTransform: 'capitalize'
                      }}>
                        {key}
                      </div>
                      <div style={{
                        fontSize: '0.875rem',
                        fontWeight: 'bold',
                        color: '#a855f7'
                      }}>
                        {value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div style={ctaStyle}>
          <p style={{
            color: '#e2e8f0',
            marginBottom: '1.5rem',
            fontSize: '1.1rem'
          }}>
            Ready to bring your software project to life?
          </p>
          <button 
            onClick={scrollToContact}
            className="btn-primary pulse-glow"
            style={{
              fontSize: '1.1rem',
              padding: '14px 32px'
            }}
          >
            Start a Project
          </button>
        </div>
      </div>
    </section>
  )
} 