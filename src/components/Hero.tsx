'use client'

import { useEffect, useState } from 'react'
import { Globe, DollarSign, Code, Rocket } from 'lucide-react'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const heroStyle = {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center' as const,
    position: 'relative' as const,
    background: 'radial-gradient(circle at 20% 80%, #1e1b4b 0%, transparent 50%), radial-gradient(circle at 80% 20%, #312e81 0%, transparent 50%), radial-gradient(circle at 40% 40%, #6366f1 0%, transparent 50%)',
    overflow: 'hidden',
    paddingTop: isMobile ? '5rem' : '4rem', // Account for fixed navbar
    paddingBottom: isMobile ? '2rem' : '0'
  }

  const titleStyle = {
    fontSize: isMobile ? 'clamp(2.5rem, 12vw, 4rem)' : 'clamp(3rem, 8vw, 8rem)',
    fontWeight: 'bold',
    background: 'linear-gradient(135deg, #6366f1, #8b5cf6, #a855f7)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    marginBottom: isMobile ? '1rem' : '1.5rem',
    textShadow: '0 0 30px rgba(139, 92, 246, 0.3)',
    lineHeight: isMobile ? '1.1' : '1.2'
  }

  const subtitleStyle = {
    fontSize: isMobile ? 'clamp(1rem, 4vw, 1.2rem)' : 'clamp(1.2rem, 4vw, 1.5rem)',
    color: '#e2e8f0',
    marginBottom: isMobile ? '1.5rem' : '2rem',
    maxWidth: isMobile ? '90%' : '800px',
    margin: isMobile ? '0 auto 1.5rem auto' : '0 auto 2rem auto',
    lineHeight: '1.6',
    padding: isMobile ? '0 1rem' : '0'
  }

  const buttonContainerStyle = {
    display: 'flex',
    gap: isMobile ? '0.75rem' : '1rem',
    justifyContent: 'center',
    marginBottom: isMobile ? '2rem' : '4rem',
    flexWrap: 'wrap' as const,
    flexDirection: isMobile ? 'column' as const : 'row' as const,
    alignItems: 'center',
    padding: isMobile ? '0 1rem' : '0'
  }

  const cardContainerStyle = {
    display: 'grid',
    gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: isMobile ? '1rem' : '2rem',
    maxWidth: isMobile ? '320px' : '1000px',
    margin: '0 auto',
    padding: isMobile ? '0 1rem' : '0 2rem'
  }

  const cardStyle = {
    background: 'rgba(15, 23, 42, 0.8)',
    borderRadius: '16px',
    padding: isMobile ? '1.5rem' : '2rem',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    transition: 'all 0.3s ease',
    textAlign: 'center' as const
  }

  return (
    <section id="home" style={heroStyle}>
      <div style={{ padding: isMobile ? '0 0.5rem' : '0 2rem', width: '100%', zIndex: 2 }}>
        <div className={`slide-in-up ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <h1 style={titleStyle} className="gradient-animation">
            CodeX
          </h1>
          <p style={subtitleStyle}>
            Innovating Tomorrow<br />
            Building cutting-edge Web3, FinTech, and software solutions that power the future of digital innovation. 
            From blockchain applications to financial platforms, we engineer excellence in every line of code.
          </p>
          
          <div style={buttonContainerStyle}>
            <button 
              className="btn-primary pulse-glow"
              onClick={() => scrollToSection('projects')}
              style={{
                width: isMobile ? '100%' : 'auto',
                maxWidth: isMobile ? '280px' : 'none',
                fontSize: isMobile ? '1rem' : '1.1rem',
                padding: isMobile ? '12px 24px' : '14px 28px'
              }}
            >
              View Our Projects
            </button>
            <button 
              className="btn-secondary"
              onClick={() => scrollToSection('contact')}
              style={{
                width: isMobile ? '100%' : 'auto',
                maxWidth: isMobile ? '280px' : 'none',
                fontSize: isMobile ? '1rem' : '1.1rem',
                padding: isMobile ? '12px 24px' : '14px 28px'
              }}
            >
              Get In Touch
            </button>
          </div>

          <div style={cardContainerStyle}>
            <div style={cardStyle} className="card float-animation">
              <div style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>
                <Globe size={isMobile ? 32 : 40} color="#ffffff" />
              </div>
              <h3 style={{ color: '#6366f1', marginBottom: '0.5rem', fontSize: isMobile ? '1rem' : '1.2rem', fontWeight: '600' }}>Web3</h3>
              <p style={{ color: '#cbd5e1', fontSize: isMobile ? '0.85rem' : '0.9rem' }}>Blockchain & DApps</p>
            </div>
            
            <div style={{ ...cardStyle, animationDelay: '0.2s' }} className="card float-animation">
              <div style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>
                <DollarSign size={isMobile ? 32 : 40} color="#ffffff" />
              </div>
              <h3 style={{ color: '#8b5cf6', marginBottom: '0.5rem', fontSize: isMobile ? '1rem' : '1.2rem', fontWeight: '600' }}>FinTech</h3>
              <p style={{ color: '#cbd5e1', fontSize: isMobile ? '0.85rem' : '0.9rem' }}>Digital Payment Solutions</p>
            </div>
            
            <div style={{ ...cardStyle, animationDelay: '0.4s' }} className="card float-animation">
              <div style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>
                <Code size={isMobile ? 32 : 40} color="#ffffff" />
              </div>
              <h3 style={{ color: '#a855f7', marginBottom: '0.5rem', fontSize: isMobile ? '1rem' : '1.2rem', fontWeight: '600' }}>Software</h3>
              <p style={{ color: '#cbd5e1', fontSize: isMobile ? '0.85rem' : '0.9rem' }}>Custom Applications</p>
            </div>
            
            <div style={{ ...cardStyle, animationDelay: '0.6s' }} className="card float-animation">
              <div style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>
                <Rocket size={isMobile ? 32 : 40} color="#ffffff" />
              </div>
              <h3 style={{ color: '#c084fc', marginBottom: '0.5rem', fontSize: isMobile ? '1rem' : '1.2rem', fontWeight: '600' }}>Startup</h3>
              <p style={{ color: '#cbd5e1', fontSize: isMobile ? '0.85rem' : '0.9rem' }}>MVP Development</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Hide on mobile to save space */}
      {!isMobile && (
        <div style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          animation: 'float 3s ease-in-out infinite'
        }}>
          <div style={{
            width: '2px',
            height: '30px',
            background: 'linear-gradient(to bottom, #6366f1, transparent)',
            borderRadius: '1px'
          }}></div>
        </div>
      )}
    </section>
  )
} 