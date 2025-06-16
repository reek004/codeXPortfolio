'use client'

import { useState, useEffect } from 'react'
import { Star } from 'lucide-react'

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    const section = document.getElementById('testimonials')
    if (section) {
      observer.observe(section)
    }

    return () => observer.disconnect()
  }, [])

  const testimonials = [
    {
      id: 1,
      name: "Leon Lee",
      position: "Founder & CEO",
      company: "Fengshui",
      content: "CodeX transformed our vision into a beautiful, functional platform. Their expertise in modern web technologies and attention to user experience is exceptional.",
      rating: 5,
      avatar: "/images/clients/leonlee.png",
      delay: 0,
      metrics: {
        "User Growth": "+180%",
        "Performance": "+95%",
        "Engagement": "+220%"
      }
    },
    {
      id: 2,
      name: "Alex Chen",
      position: "CTO & Co-Founder",
      company: "Mooner Money",
      content: "The financial platform developed by CodeX exceeded all our expectations. Their blockchain integration and security implementation is world-class.",
      rating: 5,
      avatar: "/images/clients/alexchen.png",
      delay: 0.2,
      metrics: {
        "Transactions": "+300%",
        "Security": "99.9%",
        "Speed": "< 1s"
      }
    },
    {
      id: 3,
      name: "Sarah Kim",
      position: "Product Director",
      company: "WGMI NFT Marketplace",
      content: "Working with CodeX on our Web3 marketplace was transformative. Their deep understanding of blockchain technology enabled breakthrough user experiences.",
      rating: 5,
      avatar: "/images/clients/sarahkim.png",
      delay: 0.4,
      metrics: {
        "Volume": "$5M+",
        "Users": "+400%",
        "Gas Fees": "-40%"
      }
    },
    {
      id: 4,
      name: "Marcus Rodriguez",
      position: "VP of Engineering",
      company: "DeFi Capital",
      content: "CodeX's DeFi solutions have revolutionized our trading platform. Their smart contract development and frontend integration is absolutely outstanding.",
      rating: 5,
      avatar: "/images/clients/marcus.png",
      delay: 0.6,
      metrics: {
        "TVL": "$12M+",
        "Uptime": "99.98%",
        "APY": "+85%"
      }
    },
    {
      id: 5,
      name: "Emily Zhang",
      position: "Chief Technology Officer",
      company: "MetaVerse Studios",
      content: "The Web3 gaming platform from CodeX has enabled us to achieve unprecedented player engagement. Truly next-generation blockchain gaming technology.",
      rating: 5,
      avatar: "/images/clients/img.png",
      delay: 0.8,
      metrics: {
        "Players": "+500%",
        "Revenue": "+280%",
        "Retention": "+150%"
      }
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [testimonials.length])

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        size={20}
        fill={i < rating ? '#fbbf24' : 'transparent'}
        color={i < rating ? '#fbbf24' : '#4b5563'}
      />
    ))
  }

  const sectionStyle = {
    padding: '3rem 1.5rem',
    background: 'linear-gradient(180deg, #0f172a 0%, #581c87 50%, #1e1b4b 100%)',
    minHeight: 'auto'
  }

  const containerStyle = {
    maxWidth: '1000px',
    margin: '0 auto'
  }

  const headerStyle = {
    textAlign: 'center' as const,
    marginBottom: '2.5rem',
    transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
    opacity: isVisible ? 1 : 0,
    transition: 'all 1s ease-out'
  }

  const titleStyle = {
    fontSize: 'clamp(2rem, 5vw, 3rem)',
    fontWeight: 'bold',
    marginBottom: '1rem',
    background: 'linear-gradient(135deg, #60a5fa, #a855f7)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  }

  const subtitleStyle = {
    fontSize: 'clamp(1rem, 2.5vw, 1.1rem)',
    color: '#cbd5e1',
    maxWidth: '600px',
    margin: '0 auto',
    lineHeight: '1.5'
  }

  return (
    <section id="testimonials" style={sectionStyle}>
      <div style={containerStyle}>
        {/* Section Header */}
        <div style={headerStyle}>
          <h2 style={titleStyle}>
            Client Testimonials
          </h2>
          <p style={subtitleStyle}>
            Hear from industry leaders who have partnered with us to achieve breakthrough innovations.
          </p>
        </div>

        {/* Main Testimonial Display */}
        <div style={{
          maxWidth: '800px',
          margin: '0 auto 2.5rem',
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          opacity: isVisible ? 1 : 0,
          transition: 'all 1s ease-out 0.3s'
        }}>
          <div style={{
            background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(59, 130, 246, 0.2))',
            backdropFilter: 'blur(10px)',
            borderRadius: '16px',
            padding: 'clamp(1.5rem, 4vw, 2rem)',
            position: 'relative' as const,
            overflow: 'hidden',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            {/* Background Pattern */}
            <div style={{
              position: 'absolute',
              inset: 0,
              opacity: 0.1
            }}>
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '4rem',
                height: '4rem',
                background: '#8b5cf6',
                borderRadius: '50%',
                transform: 'translate(-2rem, -2rem)'
              }}></div>
              <div style={{
                position: 'absolute',
                bottom: 0,
                right: 0,
                width: '3rem',
                height: '3rem',
                background: '#3b82f6',
                borderRadius: '50%',
                transform: 'translate(1.5rem, 1.5rem)'
              }}></div>
            </div>

            <div style={{ position: 'relative', zIndex: 10 }}>
              {/* Quote */}
              <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                <div style={{ fontSize: '2.5rem', color: '#a855f7', marginBottom: '0.5rem' }}>&quot;</div>
                <p style={{
                  fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
                  color: '#ffffff',
                  lineHeight: '1.6',
                  fontWeight: '300',
                  maxWidth: '600px',
                  margin: '0 auto'
                }}>
                  {testimonials[currentTestimonial].content}
                </p>
                <div style={{ 
                  fontSize: '2.5rem', 
                  color: '#a855f7', 
                  marginTop: '0.5rem',
                  transform: 'rotate(180deg)',
                  display: 'inline-block'
                }}>&quot;</div>
              </div>

              {/* Rating */}
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                marginBottom: '1.5rem',
                gap: '0.25rem'
              }}>
                {renderStars(testimonials[currentTestimonial].rating)}
              </div>

              {/* Client Info */}
              <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                <div style={{ 
                  marginBottom: '1rem',
                  display: 'flex',
                  justifyContent: 'center'
                }}>
                  <img 
                    src={testimonials[currentTestimonial].avatar}
                    alt={testimonials[currentTestimonial].name}
                    style={{
                      width: '80px',
                      height: '80px',
                      borderRadius: '50%',
                      objectFit: 'cover',
                      border: '3px solid rgba(139, 92, 246, 0.3)',
                      boxShadow: '0 4px 15px rgba(139, 92, 246, 0.2)'
                    }}
                  />
                </div>
                <h4 style={{
                  fontSize: '1.2rem',
                  fontWeight: 'bold',
                  color: '#ffffff',
                  marginBottom: '0.25rem'
                }}>
                  {testimonials[currentTestimonial].name}
                </h4>
                <p style={{
                  color: '#c084fc',
                  fontWeight: '500',
                  fontSize: '0.9rem',
                  marginBottom: '0.125rem'
                }}>
                  {testimonials[currentTestimonial].position}
                </p>
                <p style={{ color: '#9ca3af', fontSize: '0.85rem' }}>
                  {testimonials[currentTestimonial].company}
                </p>
              </div>

              {/* Project Metrics */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '1rem',
                paddingTop: '1rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.2)'
              }}>
                {Object.entries(testimonials[currentTestimonial].metrics).map(([key, value]) => (
                  <div key={key} style={{ textAlign: 'center' }}>
                    <div style={{
                      fontSize: '0.75rem',
                      color: '#9ca3af',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      marginBottom: '0.25rem'
                    }}>
                      {key}
                    </div>
                    <div style={{
                      fontSize: '0.9rem',
                      fontWeight: 'bold',
                      color: '#c084fc'
                    }}>
                      {value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '0.5rem',
          marginBottom: '2rem',
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          opacity: isVisible ? 1 : 0,
          transition: 'all 1s ease-out 0.5s'
        }}>
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                background: index === currentTestimonial ? '#8b5cf6' : '#4b5563',
                transform: index === currentTestimonial ? 'scale(1.2)' : 'scale(1)'
              }}
              onMouseEnter={(e) => {
                if (index !== currentTestimonial) {
                  e.currentTarget.style.background = '#6b7280'
                }
              }}
              onMouseLeave={(e) => {
                if (index !== currentTestimonial) {
                  e.currentTarget.style.background = '#4b5563'
                }
              }}
            />
          ))}
        </div>

        {/* Trust Indicators */}
        <div style={{
          textAlign: 'center',
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          opacity: isVisible ? 1 : 0,
          transition: 'all 1s ease-out 0.7s'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
            gap: '1.5rem',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: '1.8rem',
                fontWeight: 'bold',
                color: '#a855f7'
              }}>98%</div>
              <div style={{
                color: '#9ca3af',
                fontSize: '0.75rem'
              }}>Client Satisfaction</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: '1.8rem',
                fontWeight: 'bold',
                color: '#60a5fa'
              }}>12+</div>
              <div style={{
                color: '#9ca3af',
                fontSize: '0.75rem'
              }}>Projects Delivered</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: '1.8rem',
                fontWeight: 'bold',
                color: '#a855f7'
              }}>8+</div>
              <div style={{
                color: '#9ca3af',
                fontSize: '0.75rem'
              }}>Global Partners</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: '1.8rem',
                fontWeight: 'bold',
                color: '#60a5fa'
              }}>24/7</div>
              <div style={{
                color: '#9ca3af',
                fontSize: '0.75rem'
              }}>Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials 