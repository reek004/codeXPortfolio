'use client'

import { useEffect, useState, useRef } from 'react'
import { Monitor, Zap, Shield, Globe } from 'lucide-react'

export default function About() {
  const [isVisible, setIsVisible] = useState(false)
  const [counters, setCounters] = useState({ years: 0, projects: 0, clients: 0 })
  const [isMobile, setIsMobile] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

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
    // Fallback: Set visible after 500ms on mobile
    const mobileTimeout = setTimeout(() => {
      if (isMobile) {
        setIsVisible(true)
      }
    }, 500)

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Animate counters
          const targets = { years: 2, projects: 12, clients: 8 }
          const duration = 2000
          const interval = 50
          const steps = duration / interval

          Object.keys(targets).forEach((key) => {
            const target = targets[key as keyof typeof targets]
            const increment = target / steps
            let current = 0

            const timer = setInterval(() => {
              current += increment
              if (current >= target) {
                current = target
                clearInterval(timer)
              }
              setCounters(prev => ({ ...prev, [key]: Math.floor(current) }))
            }, interval)
          })
        }
      },
      { 
        threshold: isMobile ? 0.05 : 0.1, 
        rootMargin: isMobile ? '100px' : '50px' 
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      observer.disconnect()
      clearTimeout(mobileTimeout)
    }
  }, [isMobile])

  const sectionStyle = {
    padding: 'clamp(2rem, 5vw, 5rem) clamp(1rem, 4vw, 2rem)',
    background: 'linear-gradient(180deg, #1e1b4b 0%, #312e81 50%, #1e1b4b 100%)',
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
    background: 'linear-gradient(135deg, #6366f1, #8b5cf6, #a855f7)',
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

  const statsContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
    gap: 'clamp(1rem, 3vw, 2rem)',
    marginBottom: '4rem',
    transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
    opacity: isVisible ? 1 : 0,
    transition: 'all 1s ease-out 0.3s'
  }

  const statCardStyle = {
    textAlign: 'center' as const,
    background: 'rgba(15, 23, 42, 0.6)',
    backdropFilter: 'blur(10px)',
    borderRadius: '16px',
    padding: '2rem',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    transition: 'all 0.3s ease'
  }

  const missionStyle = {
    background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(139, 92, 246, 0.2))',
    borderRadius: '24px',
    padding: '3rem 2rem',
    marginBottom: '4rem',
    textAlign: 'center' as const,
    transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
    opacity: isVisible ? 1 : 0,
    transition: 'all 1s ease-out 0.5s',
    border: '1px solid rgba(255, 255, 255, 0.1)'
  }

  const featuresGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: 'clamp(1rem, 3vw, 2rem)'
  }

  const featureCardStyle = {
    background: 'rgba(15, 23, 42, 0.6)',
    backdropFilter: 'blur(10px)',
    borderRadius: '16px',
    padding: '2rem',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    transition: 'all 0.3s ease',
    transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
    opacity: isVisible ? 1 : 0,
    textAlign: 'center' as const
  }

  const features = [
    {
      icon: Monitor,
      title: 'Full-Stack Development',
      description: 'Building comprehensive web and mobile applications with modern technologies and best practices.'
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Delivering fast, scalable, and efficient software solutions that exceed client expectations.'
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Rigorous testing and code review processes ensuring the highest reliability and performance standards.'
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'Empowering businesses worldwide with innovative software solutions that drive digital transformation.'
    }
  ]

  const stats = [
    { key: 'years', label: 'Years Experience', suffix: '+' },
    { key: 'projects', label: 'Projects Delivered', suffix: '+' },
    { key: 'clients', label: 'Happy Clients', suffix: '+' }
  ]

  return (
    <section 
      ref={sectionRef}
      id="about" 
      style={sectionStyle}
      className={isMobile ? 'mobile-padding' : ''}
    >
      <div style={containerStyle}>
        {/* Section Header */}
        <div style={{
          ...headerStyle,
          opacity: isMobile ? 1 : (isVisible ? 1 : 0),
          transform: isMobile ? 'translateY(0)' : (isVisible ? 'translateY(0)' : 'translateY(30px)')
        }}>
          <h2 style={titleStyle} className="gradient-text">
            About Our Firm
          </h2>
          <p style={subtitleStyle}>
            We are a passionate software development firm, crafting innovative solutions that bridge the gap between 
            ideas and reality in the digital world.
          </p>
        </div>

        {/* Stats Counter */}
        <div style={{
          ...statsContainerStyle,
          opacity: isMobile ? 1 : (isVisible ? 1 : 0),
          transform: isMobile ? 'translateY(0)' : (isVisible ? 'translateY(0)' : 'translateY(30px)')
        }} className={isMobile ? 'mobile-grid' : ''}>
          {stats.map((stat) => (
            <div 
              key={stat.key}
              style={statCardStyle}
              className="card"
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)'
                e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.3)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'
              }}
            >
              <div style={{ 
                fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', 
                fontWeight: 'bold', 
                color: '#a855f7', 
                marginBottom: '0.5rem' 
              }}>
                {counters[stat.key as keyof typeof counters]}{stat.suffix}
              </div>
              <div style={{ color: '#e2e8f0', fontWeight: '500' }}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <div style={missionStyle}>
          <h3 style={{ 
            fontSize: 'clamp(2rem, 4vw, 2.5rem)', 
            fontWeight: 'bold', 
            color: '#ffffff', 
            marginBottom: '1.5rem' 
          }}>
            Our Mission
          </h3>
          <p style={{ 
            fontSize: 'clamp(1.1rem, 3vw, 1.3rem)', 
            color: '#e2e8f0', 
            lineHeight: '1.6',
            maxWidth: '900px',
            margin: '0 auto'
          }}>
            To revolutionize businesses through innovative software solutions that are scalable, 
            reliable, and user-centric. We believe in transforming ideas into powerful digital 
            experiences that drive growth and success for our clients.
          </p>
        </div>

        {/* Features Grid */}
        <div style={featuresGridStyle}>
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div
                key={index}
                style={{
                  ...featureCardStyle,
                  transitionDelay: `${0.7 + index * 0.1}s`
                }}
                className="card"
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px) scale(1.02)'
                  e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.3)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)'
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'
                }}
              >
                <div style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>
                  <IconComponent size={48} color="#ffffff" />
                </div>
                <h4 style={{ 
                  fontSize: '1.3rem', 
                  fontWeight: 'bold', 
                  color: '#ffffff', 
                  marginBottom: '1rem' 
                }}>
                  {feature.title}
                </h4>
                <p style={{ color: '#cbd5e1', lineHeight: '1.5' }}>{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
} 