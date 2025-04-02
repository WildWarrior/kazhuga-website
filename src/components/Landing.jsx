import React, { useEffect, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import shellLogo from '../assets/img/testimonial/shell-logo.png';
import chevronLogo from '../assets/img/testimonial/chevron-logo.png';
import mitsuLogo from '../assets/img/testimonial/mitsu-logo.png';
import databricksLogo from '../assets/img/testimonial/databricks-logo.png';
import amazonLogo from '../assets/img/testimonial/amazon-Logo.png';
import homeVideo from '../assets/videos/home.mp4';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
  const heroRef = useRef(null);
  const expertiseSectionRef = useRef(null);
  const [activeLogoIndex, setActiveLogoIndex] = useState(0);
  const logos = [
    { src: shellLogo, alt: "Shell" },
    { src: chevronLogo, alt: "Chevron" },
    { src: mitsuLogo, alt: "TVS" },
    { src: databricksLogo, alt: "DRW" },
    { src: amazonLogo, alt: "Amazon" }
  ];
  const navigate = useNavigate();
   
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!heroRef.current) return;
      const { clientX, clientY } = e;
      const x = clientX / window.innerWidth;
      const y = clientY / window.innerHeight;
      
      heroRef.current.style.backgroundPosition = `${x * 20}% ${y * 20}%`;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLogoIndex((prevIndex) => (prevIndex + 1) % logos.length);
    }, 2000); // 2 seconds per logo
    
    return () => clearInterval(interval);
  }, [logos.length]);
  
  // Scroll handler function
  const scrollToExpertise = () => {
    expertiseSectionRef.current.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };
  
  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <LandingContainer>
      {/* Hero Section */}
      <HeroSectionComponent scrollToExpertise={scrollToExpertise} />

      {/* Problem Section */}
      <ProblemSection>
        <SectionTitle>Is Your Business Ready for What's Next?</SectionTitle>
        <ProblemContent>
          <p>Today's markets demand agility, foresight, and precision. Disconnected data, legacy systems, and volatile commodity landscapes can hinder growth and expose you to unnecessary risk. In an era where 85% of digital transformation initiatives fail to meet expectations, Kazhuga bridges the gap by transforming complex challenges into strategic advantages through tailored technology solutions and expert guidance.</p>
          
          <StatCounter>
            <StatItem>
              <motion.div 
                className="number"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                73%
              </motion.div>
              <div className="label">of businesses struggle with data integration</div>
            </StatItem>
            
            <StatItem>
              <motion.div 
                className="number"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                62%
              </motion.div>
              <div className="label">face challenges with legacy system modernization</div>
            </StatItem>
            
            <StatItem>
              <motion.div 
                className="number"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                91%
              </motion.div>
              <div className="label">want better analytics for decision-making</div>
            </StatItem>
          </StatCounter>
          
          <ChallengeIcons>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <ChallengeIcon>
                <IconCircle>
                  <svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="#316FE2" strokeWidth="2">
                    <path d="M10 3H3v7M21 14v7h-7M14 3h7v7M3 14v7h7" />
                  </svg>
                </IconCircle>
                <p className="title">Data Silos</p>
                <p className="description">Isolated information systems prevent holistic insights and create barriers to effective decision-making across departments.</p>
              </ChallengeIcon>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <ChallengeIcon>
                <IconCircle>
                  <svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="#316FE2" strokeWidth="2">
                    <path d="M2 12h20M12 2v20M4.93 4.93l14.14 14.14M19.07 4.93L4.93 19.07" />
                  </svg>
                </IconCircle>
                <p className="title">Market Volatility</p>
                <p className="description">Rapid price fluctuations and unpredictable market shifts require advanced analytics and agile response capabilities.</p>
              </ChallengeIcon>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <ChallengeIcon>
                <IconCircle>
                  <svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="#316FE2" strokeWidth="2">
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                  </svg>
                </IconCircle>
                <p className="title">Legacy Systems</p>
                <p className="description">Outdated technologies are costly to maintain, difficult to integrate, and inhibit innovation and competitive response.</p>
              </ChallengeIcon>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <ChallengeIcon>
                <IconCircle>
                  <svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="#316FE2" strokeWidth="2">
                    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                  </svg>
                </IconCircle>
                <p className="title">Operational Inefficiency</p>
                <p className="description">Manual processes and fragmented workflows reduce productivity, increase error rates, and impact customer satisfaction.</p>
              </ChallengeIcon>
            </motion.div>
          </ChallengeIcons>
        </ProblemContent>
      </ProblemSection>

      {/* Core Expertise Section */}
      <ExpertiseSection ref={expertiseSectionRef}>
        <SectionTitle>Our Integrated Expertise</SectionTitle>
        
        <CardContainer>
          <ExpertiseCard>
            <CardIcon>
              <svg viewBox="0 0 24 24" width="60" height="60" fill="none" stroke="#316FE2" strokeWidth="2">
                {/* Data analytics icon with database and connections */}
                <rect x="4" y="5" width="16" height="5" rx="1" />
                <rect x="4" y="14" width="16" height="5" rx="1" />
                <line x1="8" y1="10" x2="8" y2="14" />
                <line x1="16" y1="10" x2="16" y2="14" />
                <circle cx="12" cy="7.5" r="1" />
                <circle cx="8" cy="7.5" r="1" />
                <circle cx="16" cy="7.5" r="1" />
                <circle cx="12" cy="16.5" r="1" />
                <circle cx="8" cy="16.5" r="1" />
                <circle cx="16" cy="16.5" r="1" />
              </svg>
            </CardIcon>
            <CardTitle>Drive Innovation with Intelligent Data Solutions</CardTitle>
            <CardDescription>
              Leverage the full potential of your data. We architect and implement cutting-edge solutions – from robust data engineering and cloud platforms to predictive AI models and seamless digital transformation strategies.
            </CardDescription>
            <CardList>
              <li>Data Strategy & Architecture</li>
              <li>AI & Machine Learning Solutions</li>
              <li>Cloud Migration & Optimization</li>
              <li>Data Engineering & Analytics</li>
              <li>Bespoke Software Development</li>
              <li>Digital Transformation Roadmap</li>
            </CardList>
            <CardButton onClick={() => handleNavigation('/digital-transformation')}>Explore Data & AI Services</CardButton>
          </ExpertiseCard>
          
          <ExpertiseCard>
            <CardIcon>
              <svg viewBox="0 0 24 24" width="60" height="60" fill="none" stroke="#316FE2" strokeWidth="2">
                {/* Commodity trading icon with chart and shield */}
                <path d="M2 12h6l2-5 4 10 2-5h6" />
                <path d="M4 19h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </CardIcon>
            <CardTitle>Optimize Your Commodity and Energy Operations & Mitigate Risk</CardTitle>
            <CardDescription>
              Navigate the complexities of energy and commodity markets with confidence. Our seasoned consultants provide expert advisory and implementation services for leading CTRM systems.
            </CardDescription>
            <br></br>
            <CardList>
              <li>CTRM System Implementation & Upgrades</li>
              <li>Process Optimization & Best Practices</li>
              <li>Risk Management Strategy & Modeling</li>
              <li>System Integration & Customization</li>
              <li>Regulatory Compliance Support</li>
              <li>User Training & Support</li>
            </CardList>
            <CardButton onClick={() => handleNavigation('/ctrm-services')}>Explore CTRM Consulting</CardButton>
          
          </ExpertiseCard>
        </CardContainer>
      </ExpertiseSection>

      {/* CTRM Platforms Section */}
      <CTRMPlatformsSection>
        <div className="container">
          <PlatformsTitle>Specialized in Leading C/ETRM Platforms</PlatformsTitle>
          <PlatformsSubtitle>We have deep expertise implementing and optimizing industry-leading systems:</PlatformsSubtitle>
          
          <PlatformLogos>
            <PlatformLogo>OpenLink Endur</PlatformLogo>
            <PlatformLogo>OpenLink Findur</PlatformLogo>
            <PlatformLogo>Allegro</PlatformLogo>
            <PlatformLogo>Right Angle</PlatformLogo>
            <PlatformLogo>Aspect Enterprise</PlatformLogo>
          </PlatformLogos>
        </div>
      </CTRMPlatformsSection>

      {/* Data & AI Technologies Section */}
      <DataAITechSection>
        <div className="container">
          <TechTitle>Advanced Data & AI Technologies</TechTitle>
          <TechSubtitle>We leverage cutting-edge technologies to deliver intelligent solutions:</TechSubtitle>
          
          <TechLogosGrid>
            <TechLogoCard>AWS/Azure/GCP</TechLogoCard>
            <TechLogoCard>TensorFlow/PyTorch</TechLogoCard>
            <TechLogoCard>Spark/Hadoop</TechLogoCard>
            <TechLogoCard>Power BI/Tableau</TechLogoCard>
            <TechLogoCard>SQL/NoSQL</TechLogoCard>
            <TechLogoCard>Kubernetes/Docker</TechLogoCard>
            <TechLogoCard>GPT/Claude/Llama</TechLogoCard>
            <TechLogoCard>Generative AI</TechLogoCard>
            <TechLogoCard>Computer Vision</TechLogoCard>
            <TechLogoCard>Vector Databases</TechLogoCard>
            <TechLogoCard>MLOps/AIOps</TechLogoCard>
            <TechLogoCard>RAG/LangChain</TechLogoCard>
          </TechLogosGrid>
        </div>
      </DataAITechSection>

      {/* Advantage Section */}
      <AdvantageSection>
        <SectionTitle>The Synergy That Sets You Apart</SectionTitle>
        
        <AdvantageContent>
          <p>Why choose Kazhuga? We offer a unique convergence of deep technological prowess and specialized domain knowledge:</p>
          
          <AdvantageGrid>
            <AdvantageItem>
              <AdvantageIcon>
                <svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="#316FE2" strokeWidth="2">
                  <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" />
                  <path d="M12 6a6 6 0 1 0 6 6 6 6 0 0 0-6-6zm0 10a4 4 0 1 1 4-4 4 4 0 0 1-4 4z" />
                </svg>
              </AdvantageIcon>
              <h3>Holistic Solutions</h3>
              <p>We don't just understand data, AI, and digital transformation; we understand how to apply them specifically to the intricate world of commodities trading and risk management.</p>
            </AdvantageItem>
            
            <AdvantageItem>
              <AdvantageIcon>
                <svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="#316FE2" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </AdvantageIcon>
              <h3>Expert Teams</h3>
              <p>Our consultants bring years of hands-on experience in both advanced technology deployment and the nuances of CTRM systems and market dynamics.</p>
            </AdvantageItem>
            
            <AdvantageItem>
              <AdvantageIcon>
                <svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="#316FE2" strokeWidth="2">
                  <path d="M12 20V10" />
                  <path d="M18 20V4" />
                  <path d="M6 20v-6" />
                </svg>
              </AdvantageIcon>
              <h3>Tailored Strategies</h3>
              <p>No one-size-fits-all approaches. We partner with you to understand your unique challenges and goals, delivering customized solutions that drive measurable results.</p>
            </AdvantageItem>
            
            <AdvantageItem>
              <AdvantageIcon>
                <svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="#316FE2" strokeWidth="2">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              </AdvantageIcon>
              <h3>Future-Focused</h3>
              <p>We help you not only solve today's problems but also build the capabilities to anticipate and capitalize on future opportunities.</p>
            </AdvantageItem>
          </AdvantageGrid>
        </AdvantageContent>
      </AdvantageSection>

      {/* Companies Served Section */}
      <TestimonialsSection>
        <SectionTitle>Our Experts Have Served Industry Leaders</SectionTitle>
        
        <TestimonialContainer>
          <Testimonial>
            <TestimonialQuote>Our team of experts brings decades of combined experience working with global leaders in energy, commodities, and technology sectors.</TestimonialQuote>
            <TestimonialAuthor>- Delivering excellence across industries</TestimonialAuthor>
          </Testimonial>
        </TestimonialContainer>
        
        <ClientLogos>
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: index === activeLogoIndex ? 1 : 0,
                scale: index === activeLogoIndex ? 1 : 0.8
              }}
              transition={{ duration: 0.5 }}
              style={{ position: index === activeLogoIndex ? 'relative' : 'absolute' }}
            >
              <ClientLogo>
                <img src={logo.src} alt={logo.alt} />
              </ClientLogo>
            </motion.div>
          ))}
        </ClientLogos>
      </TestimonialsSection>

      {/* CTA Section */}
      <CTASection>
        <CTAContent>
          <h2>Ready to Transform Your Potential into Performance?</h2>
          <p>Let Kazhuga be your strategic partner in navigating the future. Whether you need to harness the power of AI, optimize your CTRM systems, or embark on a complete digital transformation, we have the expertise to guide you.</p>
          <CTAButtons>
            <PrimaryButton onClick={() => handleNavigation('/contact-us')}>
              Get In Touch
            </PrimaryButton>
            <SecondaryButton onClick={() => handleNavigation('/case-studies')}>
              View Our Case Studies
            </SecondaryButton>
          </CTAButtons>
        </CTAContent>
      </CTASection>
    </LandingContainer>
  );
};

// Styled Components
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const floatAnimation = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const pulseAnimation = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const LandingContainer = styled.div`
  font-family: 'Inter', sans-serif;
  color: #333;
  line-height: 1.6;
`;

const HeroSection = styled.section`
  height: 100vh;
  position: relative;
  overflow: hidden;
  background: linear-gradient(120deg, rgba(12, 30, 61, 0.9) 0%, rgba(29, 56, 102, 0.9) 100%);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-top: 40px;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.45);
    z-index: 1;
  }
  
  .video-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 0;
    opacity: 0.7;
  }
  
  @media (max-width: 768px) {
    padding-top: 30px;
    height: auto;
    min-height: 100vh;
  }
`;

const ParticleNetwork = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  
  canvas {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const HeroOverlay = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  padding: 0 20px;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const HeroContent = styled.div`
  max-width: 1000px;
  text-align: left;
  z-index: 2;
  padding: 0 20px;
  margin-top: 40px;
  
  h1 {
    font-size: 3rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
    line-height: 1.1;
    color: white;
    
    @media (max-width: 768px) {
      font-size: 2rem;
      margin-top: 20px;
      padding-right: 15px;
    }
    
    @media (max-width: 480px) {
      font-size: 1.8rem;
      margin-top: 10px;
      line-height: 1.2;
    }
  }
  
  p {
    font-size: 1.35rem;
    margin-bottom: 2.5rem;
    color: white;
    opacity: 0.9;
    
    @media (max-width: 768px) {
      font-size: 1rem;
      padding-right: 15px;
    }
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: flex-start;
  margin-top: 2.5rem;
  
  @media (max-width: 576px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const PrimaryButton = styled.button`
  background-color: transparent;
  color: white;
  border: 2px solid white;
  padding: 0.9rem 2rem;
  border-radius: 0;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  
  &:hover {
    background-color: #2154BA;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(49, 111, 226, 0.2);
  }
`;

const SecondaryButton = styled.button`
  background-color: transparent;
  color: white;
  border: 2px solid white;
  padding: 0.9rem 2rem;
  border-radius: 0;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  
  &:hover {
    background-color: #2154BA;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(49, 111, 226, 0.1);
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 2rem;
  color: #316FE2;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ProblemSection = styled.section`
  padding: 100px 5%;
  background: linear-gradient(to bottom, white, #f8faff);
  position: relative;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: 
      radial-gradient(circle at 10% 10%, rgba(49, 111, 226, 0.03) 0%, transparent 40%),
      radial-gradient(circle at 90% 90%, rgba(49, 111, 226, 0.03) 0%, transparent 40%);
    pointer-events: none;
  }
`;

const ProblemContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  
  > p {
    font-size: 1.2rem;
    text-align: center;
    max-width: 900px;
    margin: 0 auto 50px;
    color: #555;
    line-height: 1.8;
  }
`;

const ChallengeIcons = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 40px;
  margin-top: 50px;
`;

const ChallengeIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 250px;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-8px);
  }
  
  p.title {
    margin-top: 15px;
    font-size: 1.1rem;
    font-weight: 600;
    color: #316FE2;
  }
  
  p.description {
    text-align: center;
    color: #555;
    font-size: 0.95rem;
    margin-top: 10px;
    line-height: 1.5;
  }
`;

const IconCircle = styled.div`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background: white;
  box-shadow: 0 5px 20px rgba(49, 111, 226, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
  animation: ${pulseAnimation} 4s infinite ease-in-out;
  position: relative;
  z-index: 1;
  
  &:after {
    content: '';
    position: absolute;
    top: -5px;
    left: -5px;
    right: -5px;
    bottom: -5px;
    border-radius: 50%;
    background: linear-gradient(135deg, #316FE2, #5093ff);
    opacity: 0;
    z-index: -1;
    transition: opacity 0.3s ease;
  }
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(49, 111, 226, 0.25);
    
    &:after {
      opacity: 0.15;
    }
    
    svg {
      transform: scale(1.1);
    }
  }
  
  svg {
    transition: transform 0.3s ease;
  }
`;

const StatCounter = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  max-width: 1000px;
  margin: 60px auto 30px;
  gap: 20px;
`;

const StatItem = styled.div`
  text-align: center;
  width: 200px;
  
  .number {
    font-size: 3rem;
    font-weight: 700;
    color: #316FE2;
    margin-bottom: 10px;
    position: relative;
    display: inline-block;
    
    &:after {
      content: '';
      position: absolute;
      bottom: 5px;
      left: 0;
      width: 100%;
      height: 4px;
      background: rgba(49, 111, 226, 0.2);
      border-radius: 2px;
    }
  }
  
  .label {
    font-size: 1rem;
    color: #555;
    font-weight: 500;
  }
`;

const ExpertiseSection = styled.section`
  padding: 120px 5%;
  background: linear-gradient(180deg, #f8faff 0%, #ffffff 100%);
  position: relative;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: radial-gradient(circle at 10% 10%, rgba(49, 111, 226, 0.03) 0%, transparent 40%),
                      radial-gradient(circle at 90% 90%, rgba(49, 111, 226, 0.03) 0%, transparent 40%);
    pointer-events: none;
  }
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
`;

const ExpertiseCard = styled.div`
  background: white;
  border-radius: 15px;
  padding: 40px;
  flex: 1;
  min-width: 300px;
  max-width: 550px;
  box-shadow: 0 15px 50px rgba(49, 111, 226, 0.12);
  transition: transform 0.3s, box-shadow 0.3s;
  position: relative;
  overflow: hidden;
  z-index: 1;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 8px;
    background: linear-gradient(90deg, #316FE2, #5093ff);
    z-index: 2;
  }
  
  &:after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 40%;
    height: 100%;
    background: linear-gradient(135deg, rgba(49, 111, 226, 0.03) 0%, rgba(49, 111, 226, 0) 100%);
    z-index: -1;
  }
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 60px rgba(49, 111, 226, 0.2);
  }
`;

const CardIcon = styled.div`
  margin-bottom: 25px;
  animation: ${floatAnimation} 5s infinite ease-in-out;
  background: linear-gradient(135deg, #f0f5ff 0%, #e6eeff 100%);
  width: 110px;
  height: 110px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 30px rgba(49, 111, 226, 0.1);
`;

const CardTitle = styled.h3`
  font-size: 1.6rem;
  font-weight: 700;
  color: #316FE2;
  margin-bottom: 15px;
  position: relative;
  display: inline-block;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 40px;
    height: 3px;
    background: #316FE2;
  }
`;

const CardDescription = styled.p`
  font-size: 1.1rem;
  color: #555;
  margin-bottom: 25px;
  line-height: 1.7;
`;

const CardList = styled.ul`
  padding-left: 0;
  margin-bottom: 30px;
  list-style-type: none;
  
  li {
    margin-bottom: 12px;
    color: #555;
    position: relative;
    padding-left: 28px;
    
    &:before {
      content: '';
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 18px;
      height: 18px;
      background: #f0f5ff;
      border-radius: 50%;
      border: 2px solid #316FE2;
    }
    
    &:after {
      content: '✓';
      position: absolute;
      left: 4px;
      top: 50%;
      transform: translateY(-50%);
      color: #316FE2;
      font-size: 10px;
      font-weight: bold;
    }
  }
`;

const CardButton = styled.button`
  background: linear-gradient(90deg, #316FE2, #5093ff);
  color: white;
  border: none;
  padding: 14px 28px;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s;
  position: relative;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(49, 111, 226, 0.3);
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: all 0.4s;
  }
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(49, 111, 226, 0.4);
    
    &:before {
      left: 100%;
    }
  }
`;

const TechLogos = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 30px;
`;

const TechLogo = styled.div`
  background: linear-gradient(135deg, #f0f5ff 0%, #e6eeff 100%);
  color: #316FE2;
  padding: 10px 20px;
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 600;
  box-shadow: 0 3px 10px rgba(49, 111, 226, 0.1);
  transition: all 0.3s;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(49, 111, 226, 0.2);
  }
`;

const CTRMPlatformsSection = styled.section`
  padding: 80px 5%;
  background: #f8fbff;
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
  }
`;

const PlatformsTitle = styled.h2`
  font-size: 2.2rem;
  font-weight: 700;
  color: #316FE2;
  text-align: center;
  margin-bottom: 1rem;
`;

const PlatformsSubtitle = styled.p`
  font-size: 1.2rem;
  color: #555;
  text-align: center;
  max-width: 800px;
  margin: 0 auto 40px;
`;

const PlatformLogos = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
  margin-top: 40px;
`;

const PlatformLogo = styled.div`
  background: white;
  padding: 20px 35px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(49, 111, 226, 0.1);
  font-size: 1.1rem;
  font-weight: 600;
  color: #316FE2;
  min-width: 200px;
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(49, 111, 226, 0.2);
  }
`;

const DataAITechSection = styled.section`
  padding: 80px 5%;
  background: white;
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
  }
`;

const TechTitle = styled.h2`
  font-size: 2.2rem;
  font-weight: 700;
  color: #316FE2;
  text-align: center;
  margin-bottom: 1rem;
`;

const TechSubtitle = styled.p`
  font-size: 1.2rem;
  color: #555;
  text-align: center;
  max-width: 800px;
  margin: 0 auto 40px;
`;

const TechLogosGrid = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 25px;
  margin-top: 40px;
`;

const TechLogoCard = styled.div`
  background: #f0f5ff;
  padding: 20px 30px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(49, 111, 226, 0.1);
  font-size: 1.1rem;
  font-weight: 600;
  color: #316FE2;
  min-width: 180px;
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(49, 111, 226, 0.2);
  }
`;

const AdvantageSection = styled.section`
  padding: 100px 5%;
  background: white;
`;

const AdvantageContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  
  > p {
    text-align: center;
    font-size: 1.2rem;
    max-width: 800px;
    margin: 0 auto 50px;
    color: #555;
  }
`;

const AdvantageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
`;

const AdvantageItem = styled.div`
  text-align: center;
  padding: 30px;
  border-radius: 10px;
  transition: transform 0.3s, box-shadow 0.3s;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(49, 111, 226, 0.1);
  }
  
  h3 {
    font-size: 1.3rem;
    font-weight: 700;
    color: #316FE2;
    margin: 15px 0;
  }
  
  p {
    color: #555;
  }
`;

const AdvantageIcon = styled.div`
  margin: 0 auto;
  animation: ${floatAnimation} 5s infinite ease-in-out;
`;

const TestimonialsSection = styled.section`
  padding: 100px 5%;
  background: #f8faff;
`;

const TestimonialContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto 50px;
`;

const Testimonial = styled.div`
  background: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(49, 111, 226, 0.1);
  flex: 1;
  min-width: 300px;
  max-width: 550px;
  transition: transform 0.3s;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const TestimonialQuote = styled.p`
  font-size: 1.2rem;
  font-style: italic;
  margin-bottom: 15px;
  color: #555;
`;

const TestimonialAuthor = styled.p`
  font-weight: 600;
  color: #316FE2;
`;

const ClientLogos = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;
`;

const ClientLogo = styled.div`
  background: white;
  padding: 30px 60px;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(49, 111, 226, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 220px;
  min-height: 120px;
  transition: transform 0.3s;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(49, 111, 226, 0.2);
  }
  
  img {
    max-width: 100%;
    max-height: 100px;
    object-fit: contain;
  }
`;

const CTASection = styled.section`
  padding: 100px 5%;
  background: linear-gradient(120deg, #316FE2, #2a5fc9);
  color: white;
`;

const CTAContent = styled.div`
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
  
  h2 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    
    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }
  
  p {
    font-size: 1.2rem;
    margin-bottom: 2.5rem;
    opacity: 0.9;
  }
`;

const CTAButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;

const HeroSectionComponent = ({ scrollToExpertise }) => {
  const canvasRef = useRef(null);
  const navigate = useNavigate();
  
  // Handle particle network animation
  useEffect(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Set canvas to full window size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);
    
    // Create particles
    const particleCount = 80;
    const particles = [];
    const connectionDistance = 150;
    const colors = ['#316FE2', '#4A5568', '#2154BA', '#6B9AFF'];
    
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.radius = Math.random() * 2 + 1;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.opacity = Math.random() * 0.5 + 0.2;
      }
      
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.opacity;
        ctx.fill();
        ctx.globalAlpha = 1;
      }
      
      update() {
        this.x += this.vx;
        this.y += this.vy;
        
        // Boundary check
        if (this.x < 0 || this.x > canvas.width) this.vx = -this.vx;
        if (this.y < 0 || this.y > canvas.height) this.vy = -this.vy;
      }
    }
    
    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }
    
    const drawConnections = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < connectionDistance) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            const opacity = 1 - (distance / connectionDistance);
            ctx.strokeStyle = `rgba(49, 111, 226, ${opacity * 0.2})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }
    };
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      
      // Draw connections
      drawConnections();
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', setCanvasSize);
    };
  }, []);
  
  // Navigation handler function
  const handleContactNavigation = () => {
    navigate('/contact-us');
  };
  
  return (
    <HeroSection>
      <ParticleNetwork>
        <canvas ref={canvasRef}></canvas>
      </ParticleNetwork>
      
      <video
        className='video-background'
        autoPlay
        muted
        loop
      >
        <source
          src={homeVideo}
          type='video/mp4'
        />
        Your browser does not support HTML5 video.
      </video>
      <div className='overlay'></div>
      <HeroOverlay>
        <HeroContent>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Unlocking Future Value with Intelligent Data & Optimized Commodity Trading.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            We empower businesses to thrive in dynamic markets by harnessing the power of advanced data technologies, AI, and deep expertise in commodities trading & risk management.
          </motion.p>
          <ButtonContainer>
            <PrimaryButton onClick={scrollToExpertise}>Discover Our Solutions</PrimaryButton>
            <SecondaryButton onClick={handleContactNavigation}>Request a Consultation</SecondaryButton>
          </ButtonContainer>
        </HeroContent>
      </HeroOverlay>
    </HeroSection>
  );
};

export default Landing;
