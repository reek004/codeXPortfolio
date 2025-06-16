'use client'

import { useState, useEffect } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    project: '',
    message: ''
  })
  const [isVisible, setIsVisible] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024)
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    const section = document.getElementById('contact')
    if (section) {
      observer.observe(section)
    }

    return () => {
      observer.disconnect()
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', company: '', project: '', message: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus('idle'), 5000)
    }
  }

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      value: 'swarnabhawork@gmail.com',
      description: 'Send us your project details'
    },
    {
      icon: '📞',
      title: 'Phone',
      value: '+91 7003017293',
      description: 'Available 24/7 for urgent inquiries'
    },
    {
      icon: '📍',
      title: 'Location',
      value: 'Kolkata, West Bengal',
      description: 'Global headquarters & R&D center'
    },
    {
      icon: '⏰',
      title: 'Response Time',
      value: '< 4 hours',
      description: 'Typical response for new inquiries'
    }
  ]

  const projectTypes = [
    'IoT Development',
    'AI/ML Integration',
    'Quantum Computing',
    'Medical Devices',
    'Automotive Systems',
    'Telecommunications',
    'Custom Solutions',
    'Consultation'
  ]

  const sectionStyle = {
    padding: '4rem 1rem 0',
    background: 'linear-gradient(180deg, rgba(139, 92, 246, 0.3) 0%, #0f172a 100%)',
    position: 'relative' as const,
    overflow: 'hidden'
  }

  const containerStyle = {
    maxWidth: '1400px',
    margin: '0 auto',
    position: 'relative' as const,
    zIndex: 10
  }

  const headerStyle = {
    textAlign: 'center' as const,
    marginBottom: '3rem',
    transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
    opacity: isVisible ? 1 : 0,
    transition: 'all 1s ease-out'
  }

  const titleStyle = {
    fontSize: 'clamp(2.5rem, 6vw, 4rem)',
    fontWeight: 'bold',
    marginBottom: '1rem',
    background: 'linear-gradient(135deg, #a855f7, #3b82f6)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  }

  const subtitleStyle = {
    fontSize: 'clamp(1rem, 3vw, 1.2rem)',
    color: '#cbd5e1',
    maxWidth: '700px',
    margin: '0 auto',
    lineHeight: '1.6'
  }

  const formContainerStyle = {
    background: 'rgba(255, 255, 255, 0.08)',
    backdropFilter: 'blur(20px)',
    borderRadius: '16px',
    padding: '2.5rem 2.5rem 1.5rem',
    border: '1px solid rgba(255, 255, 255, 0.15)',
    transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
    opacity: isVisible ? 1 : 0,
    transition: 'all 1s ease-out 0.3s',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)'
  }

  const inputStyle = {
    width: '100%',
    padding: '1rem 1.25rem',
    background: 'rgba(255, 255, 255, 0.12)',
    border: '1px solid rgba(255, 255, 255, 0.25)',
    borderRadius: '10px',
    color: '#ffffff',
    fontSize: '1rem',
    transition: 'all 0.3s ease',
    outline: 'none',
    fontFamily: 'inherit'
  }

  const labelStyle = {
    display: 'block',
    fontSize: '0.9rem',
    fontWeight: '600',
    color: '#e2e8f0',
    marginBottom: '0.5rem'
  }

  const buttonStyle = {
    width: '100%',
    padding: '1.25rem 2rem',
    borderRadius: '10px',
    fontWeight: '700',
    fontSize: '1.1rem',
    transition: 'all 0.3s ease',
    border: 'none',
    cursor: isSubmitting ? 'not-allowed' : 'pointer',
    background: isSubmitting 
      ? 'linear-gradient(135deg, #6b7280, #4b5563)' 
      : 'linear-gradient(135deg, #8b5cf6, #3b82f6)',
    color: '#ffffff',
    transform: 'scale(1)',
    boxShadow: '0 10px 20px rgba(139, 92, 246, 0.3)'
  }

  return (
    <section id="contact" style={sectionStyle}>
      {/* Background Pattern */}
      <div style={{
        position: 'absolute',
        inset: 0,
        opacity: 0.05
      }}>
        <div style={{
          position: 'absolute',
          top: '25%',
          left: '25%',
          width: '16rem',
          height: '16rem',
          background: '#8b5cf6',
          borderRadius: '50%',
          filter: 'blur(60px)'
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '25%',
          right: '25%',
          width: '12rem',
          height: '12rem',
          background: '#3b82f6',
          borderRadius: '50%',
          filter: 'blur(60px)'
        }}></div>
      </div>

      <div style={containerStyle}>
        {/* Section Header */}
        <div style={headerStyle}>
          <h2 style={titleStyle}>
            Get In Touch
          </h2>
          <p style={subtitleStyle}>
            Ready to bring your software vision to life? Let&apos;s discuss your project and explore how we can innovate together.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: isDesktop ? '1fr 1fr' : '1fr',
          gap: '4rem'
        }}>
          {/* Contact Form */}
          <div style={formContainerStyle} className='pb-0'>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              color: '#ffffff',
              marginBottom: '1.5rem'
            }}>Start Your Project</h3>
            
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: isDesktop ? '1fr 1fr' : '1fr',
                gap: '1.5rem'
              }}>
                <div>
                  <label htmlFor="name" style={labelStyle}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    style={inputStyle}
                    placeholder="John Doe"
                    onFocus={(e) => {
                      e.target.style.borderColor = '#8b5cf6'
                      e.target.style.boxShadow = '0 0 0 2px rgba(139, 92, 246, 0.2)'
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)'
                      e.target.style.boxShadow = 'none'
                    }}
                  />
                </div>
                <div>
                  <label htmlFor="email" style={labelStyle}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    style={inputStyle}
                    placeholder="john@company.com"
                    onFocus={(e) => {
                      e.target.style.borderColor = '#8b5cf6'
                      e.target.style.boxShadow = '0 0 0 2px rgba(139, 92, 246, 0.2)'
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)'
                      e.target.style.boxShadow = 'none'
                    }}
                  />
                </div>
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: isDesktop ? '1fr 1fr' : '1fr',
                gap: '1.5rem'
              }}>
                <div>
                  <label htmlFor="company" style={labelStyle}>
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    style={inputStyle}
                    placeholder="Your Company"
                    onFocus={(e) => {
                      e.target.style.borderColor = '#8b5cf6'
                      e.target.style.boxShadow = '0 0 0 2px rgba(139, 92, 246, 0.2)'
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)'
                      e.target.style.boxShadow = 'none'
                    }}
                  />
                </div>
                <div>
                  <label htmlFor="project" style={labelStyle}>
                    Project Type
                  </label>
                  <select
                    id="project"
                    name="project"
                    value={formData.project}
                    onChange={handleInputChange}
                    style={{
                      ...inputStyle,
                      cursor: 'pointer'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#8b5cf6'
                      e.target.style.boxShadow = '0 0 0 2px rgba(139, 92, 246, 0.2)'
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)'
                      e.target.style.boxShadow = 'none'
                    }}
                  >
                    <option value="" style={{ background: '#1e293b', color: '#ffffff' }}>Select a project type</option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type} style={{ background: '#1e293b', color: '#ffffff' }}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" style={labelStyle}>
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  style={{
                    ...inputStyle,
                    resize: 'none' as const,
                    minHeight: '150px'
                  }}
                  placeholder="Tell us about your project requirements, timeline, and goals..."
                  onFocus={(e) => {
                    e.target.style.borderColor = '#8b5cf6'
                    e.target.style.boxShadow = '0 0 0 2px rgba(139, 92, 246, 0.2)'
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)'
                    e.target.style.boxShadow = 'none'
                  }}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                style={buttonStyle}
                onMouseEnter={(e) => {
                  if (!isSubmitting) {
                    e.currentTarget.style.transform = 'scale(1.02)'
                    e.currentTarget.style.boxShadow = '0 10px 25px rgba(139, 92, 246, 0.3)'
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isSubmitting) {
                    e.currentTarget.style.transform = 'scale(1)'
                    e.currentTarget.style.boxShadow = 'none'
                  }
                }}
              >
                {isSubmitting ? (
                  <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg style={{ 
                      animation: 'spin 1s linear infinite',
                      marginLeft: '-0.25rem',
                      marginRight: '0.75rem',
                      height: '1.25rem',
                      width: '1.25rem',
                      color: '#ffffff'
                    }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle style={{ opacity: 0.25 }} cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path style={{ opacity: 0.75 }} fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  'Send Message'
                )}
              </button>

              {submitStatus === 'success' && (
                <div style={{
                  padding: '1rem',
                  background: 'rgba(34, 197, 94, 0.2)',
                  border: '1px solid rgba(34, 197, 94, 0.5)',
                  borderRadius: '8px',
                  color: '#86efac'
                }}>
                  ✅ Message sent successfully! We&apos;ll get back to you within 4 hours.
                </div>
              )}

              {submitStatus === 'error' && (
                <div style={{
                  padding: '1rem',
                  background: 'rgba(239, 68, 68, 0.2)',
                  border: '1px solid rgba(239, 68, 68, 0.5)',
                  borderRadius: '8px',
                  color: '#fca5a5'
                }}>
                  ❌ Something went wrong. Please try again or contact us directly.
                </div>
              )}
            </form>
          </div>

          {/* Contact Information */}
          <div style={{
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            opacity: isVisible ? 1 : 0,
            transition: 'all 1s ease-out 0.5s'
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div>
                <h3 style={{
                  fontSize: '1.75rem',
                  fontWeight: 'bold',
                  color: '#ffffff',
                  marginBottom: '1.5rem'
                }}>Contact Information</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {contactInfo.map((info, index) => (
                    <div
                      key={index}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '1rem',
                        padding: '1.5rem',
                        background: 'rgba(255, 255, 255, 0.08)',
                        backdropFilter: 'blur(20px)',
                        borderRadius: '12px',
                        transition: 'all 0.3s ease',
                        border: '1px solid rgba(255, 255, 255, 0.15)',
                        boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.12)'
                        e.currentTarget.style.transform = 'translateY(-3px)'
                        e.currentTarget.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.3)'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)'
                        e.currentTarget.style.transform = 'translateY(0)'
                        e.currentTarget.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.2)'
                      }}
                    >
                      <div style={{ 
                        fontSize: '2.5rem',
                        minWidth: '3rem',
                        textAlign: 'center'
                      }}>{info.icon}</div>
                      <div>
                        <h4 style={{
                          fontWeight: '700',
                          color: '#ffffff',
                          marginBottom: '0.5rem',
                          fontSize: '1.1rem'
                        }}>{info.title}</h4>
                        <p style={{
                          color: '#c084fc',
                          fontWeight: '600',
                          marginBottom: '0.25rem',
                          fontSize: '1rem'
                        }}>{info.value}</p>
                        <p style={{
                          color: '#94a3b8',
                          fontSize: '0.875rem',
                          lineHeight: '1.4'
                        }}>{info.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Stats */}
              <div style={{
                background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.25), rgba(59, 130, 246, 0.25))',
                backdropFilter: 'blur(20px)',
                borderRadius: '16px',
                padding: '2rem',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)'
              }}>
                <h4 style={{
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  color: '#ffffff',
                  marginBottom: '1.5rem'
                }}>Why Choose CodeX?</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {[
                    '2+ years of industry expertise',
                    '12+ successful projects delivered',
                    '24/7 technical support',
                    'IP protection guaranteed'
                  ].map((item, index) => (
                    <div key={index} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      padding: '0.5rem 0'
                    }}>
                      <span style={{ 
                        color: '#22c55e',
                        fontSize: '1.2rem',
                        fontWeight: 'bold'
                      }}>✓</span>
                      <span style={{ 
                        color: '#e2e8f0',
                        fontSize: '1rem',
                        fontWeight: '500'
                      }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 style={{
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  color: '#ffffff',
                  marginBottom: '1.5rem'
                }}>Follow Us</h4>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  {[
                    { name: 'LinkedIn', icon: '💼', link: '#' },
                    { name: 'Twitter', icon: '🐦', link: '#' },
                    { name: 'GitHub', icon: '💻', link: '#' },
                    { name: 'YouTube', icon: '📹', link: '#' }
                  ].map((social) => (
                    <a
                      key={social.name}
                      href={social.link}
                      style={{
                        width: '3.5rem',
                        height: '3.5rem',
                        background: 'rgba(255, 255, 255, 0.12)',
                        backdropFilter: 'blur(20px)',
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'all 0.3s ease',
                        textDecoration: 'none',
                        border: '1px solid rgba(255, 255, 255, 0.15)',
                        boxShadow: '0 5px 15px rgba(0, 0, 0, 0.2)'
                      }}
                      title={social.name}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'rgba(139, 92, 246, 0.3)'
                        e.currentTarget.style.transform = 'scale(1.1) translateY(-2px)'
                        e.currentTarget.style.boxShadow = '0 10px 25px rgba(139, 92, 246, 0.4)'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.12)'
                        e.currentTarget.style.transform = 'scale(1) translateY(0)'
                        e.currentTarget.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.2)'
                      }}
                    >
                      <span style={{ fontSize: '1.5rem' }}>{social.icon}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div style={{
          marginTop: '5rem',
          paddingTop: '2rem',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          textAlign: 'center',
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          opacity: isVisible ? 1 : 0,
          transition: 'all 1s ease-out 0.7s'
        }}>
          <p style={{ color: '#9ca3af' }}>
            © 2024 CodeX. All rights reserved. | 
            <span style={{ color: '#a855f7' }}> Innovating Tomorrow&apos;s Technology Today</span>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Contact 