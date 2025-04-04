import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaCloudDownloadAlt, FaServer, FaRegFileCode, FaCodeBranch, FaLayerGroup, FaChartBar, FaPaperPlane, FaFileAlt, FaExchangeAlt, FaDatabase, FaFileCode } from 'react-icons/fa';
import { SiApachekafka } from 'react-icons/si';
import { MdOutlineIntegrationInstructions, MdAnalytics, MdAutorenew, MdOutlineTimeline, MdApi } from 'react-icons/md';
import { BsCloudCheck, BsDatabase, BsFileEarmarkCode, BsSpeedometer, BsShieldCheck, BsArrowRightShort, BsCheckCircle } from 'react-icons/bs';
import { GiArtificialIntelligence } from 'react-icons/gi';
import { AiOutlineFileSearch, AiOutlineNotification, AiOutlineApi } from 'react-icons/ai';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../styles/ProductPage.css';

const GasTariffAI = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      mirror: false
    });
  }, []);

  return (
    <div className="product-page">
      <div className="product-hero">
        <div className="container">
          <span className="product-badge" data-aos="fade-down">AI-POWERED TARIFF PLATFORM</span>
          <h1 data-aos="fade-up">GasTariff AI</h1>
          <h2 data-aos="fade-up" data-aos-delay="100" style={{color: 'white'}}>Automated natural gas tariff data integration</h2>
          <p data-aos="fade-up" data-aos-delay="200">Eliminate manual tariff data entry with AI-powered extraction and seamless ETRM integration</p>
          <div className="hero-cta" data-aos="fade-up" data-aos-delay="300">
            <Link to="/contact-us?product=gastariff-ai" className="cta-button">
              Schedule a Demo <BsArrowRightShort size={25} />
            </Link>
            <a href="#how-it-works" className="text-link">
              See how it works <BsArrowRightShort />
            </a>
          </div>
          
          <div className="hero-stats" data-aos="fade-up" data-aos-delay="400">
            <div className="stat-item">
              <span className="stat-number">90%</span>
              <span className="stat-label">Reduction in manual data entry</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">200+</span>
              <span className="stat-label">Pipeline tariffs covered</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">99.8%</span>
              <span className="stat-label">Data accuracy rate</span>
            </div>
          </div>
        </div>
        <div className="shape-divider">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
          </svg>
        </div>
      </div>

      <section id="how-it-works" className="product-overview">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <span className="section-subtitle">HOW IT WORKS</span>
            <h2>Streamlining Natural Gas Tariff Management</h2>
            <p>AI-powered pipeline rate extraction with seamless ETRM integration</p>
          </div>
          
          <div className="overview-content">
            <div className="overview-text" data-aos="fade-right">
              <p className="large-text">GasTariff AI revolutionizes how energy companies access and utilize pipeline tariff data. Our AI-powered platform continuously monitors, extracts, and normalizes tariff rates from hundreds of pipelines across North America.</p>
              
              <div className="text-with-icon">
                <GiArtificialIntelligence className="icon-primary" size={30} />
                <div>
                  <h3>AI-Powered Extraction</h3>
                  <p>Advanced machine learning algorithms automatically extract structured tariff data from complex rate sheets, PDFs, and regulatory filings with unmatched accuracy.</p>
                </div>
              </div>
              
              <div className="text-with-icon">
                <MdOutlineIntegrationInstructions className="icon-primary" size={30} />
                <div>
                  <h3>Seamless ETRM Integration</h3>
                  <p>Pre-built connectors for major ETRM systems eliminate manual data entry and ensure your trading systems always have the most current rate information.</p>
                </div>
              </div>
            </div>
            
            <div className="overview-visual" data-aos="fade-left">
              <div className="process-flow">
                <div className="process-step">
                  <div className="process-icon">
                    <AiOutlineFileSearch size={30} />
                  </div>
                  <div className="process-content">
                    <h4>Tariff Monitoring</h4>
                    <p>Continuous monitoring of 200+ pipeline tariff sources</p>
                  </div>
                  <div className="step-connector"></div>
                </div>
                
                <div className="process-step">
                  <div className="process-icon">
                    <FaFileAlt size={30} />
                  </div>
                  <div className="process-content">
                    <h4>AI Extraction</h4>
                    <p>Machine learning models extract structured rate data</p>
                  </div>
                  <div className="step-connector"></div>
                </div>
                
                <div className="process-step">
                  <div className="process-icon">
                    <MdAnalytics size={30} />
                  </div>
                  <div className="process-content">
                    <h4>Data Normalization</h4>
                    <p>Standardization across different rate formats and units</p>
                  </div>
                  <div className="step-connector"></div>
                </div>
                
                <div className="process-step">
                  <div className="process-icon">
                    <FaExchangeAlt size={30} />
                  </div>
                  <div className="process-content">
                    <h4>ETRM Integration</h4>
                    <p>Automated data feed to your trading systems</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="product-features" style={{background: '#f8f9fa'}}>
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <span className="section-subtitle">KEY FEATURES</span>
            <h2>Comprehensive Tariff Management</h2>
            <p>Everything you need for automated tariff data management</p>
          </div>
          
          <div className="features-grid">
            <div className="feature-card" data-aos="fade-up">
              <div className="feature-icon">
                <FaDatabase size={24} color="#0d47a1" />
              </div>
              <h3>Comprehensive Coverage</h3>
              <p>Access tariff data from over 200 natural gas pipelines across the US and Canada, including interstate and intrastate systems.</p>
              <ul className="feature-list">
                <li>Interstate pipelines</li>
                <li>Intrastate systems</li>
                <li>LDC rate sheets</li>
                <li>Storage facilities</li>
              </ul>
            </div>
            
            <div className="feature-card" data-aos="fade-up" data-aos-delay="100">
              <div className="feature-icon">
                <GiArtificialIntelligence size={24} color="#0d47a1" />
              </div>
              <h3>AI-Powered Extraction</h3>
              <p>Our advanced machine learning algorithms extract and normalize complex tariff data with unprecedented accuracy.</p>
              <ul className="feature-list">
                <li>ML-based document parsing</li>
                <li>Pattern recognition</li>
                <li>Automated quality checks</li>
                <li>Continuous learning</li>
              </ul>
            </div>
            
            <div className="feature-card" data-aos="fade-up" data-aos-delay="200">
              <div className="feature-icon">
                <MdOutlineIntegrationInstructions size={24} color="#0d47a1" />
              </div>
              <h3>Seamless Integration</h3>
              <p>Pre-built connectors for major ETRM systems streamline data flow into your existing technology stack.</p>
              <ul className="feature-list">
                <li>ION Endur connector</li>
                <li>Allegro integration</li>
                <li>OpenLink compatibility</li>
                <li>RESTful API access</li>
              </ul>
            </div>
            
            <div className="feature-card" data-aos="fade-up" data-aos-delay="300">
              <div className="feature-icon">
                <AiOutlineNotification size={24} color="#0d47a1" />
              </div>
              <h3>Real-Time Updates</h3>
              <p>Stay informed of tariff changes as they happen with automated notifications and alerts.</p>
              <ul className="feature-list">
                <li>Rate change alerts</li>
                <li>Filing notifications</li>
                <li>Custom alert thresholds</li>
                <li>Email and system notifications</li>
              </ul>
            </div>
            
            <div className="feature-card" data-aos="fade-up" data-aos-delay="400">
              <div className="feature-icon">
                <MdOutlineTimeline size={24} color="#0d47a1" />
              </div>
              <h3>Historical Analysis</h3>
              <p>Access and analyze historical tariff data to identify trends and optimize trading strategies.</p>
              <ul className="feature-list">
                <li>Rate history tracking</li>
                <li>Trend visualization</li>
                <li>Seasonal pattern analysis</li>
                <li>Comparative analytics</li>
              </ul>
            </div>
            
            <div className="feature-card" data-aos="fade-up" data-aos-delay="500">
              <div className="feature-icon">
                <BsShieldCheck size={24} color="#0d47a1" />
              </div>
              <h3>Compliance & Audit</h3>
              <p>Maintain detailed records of tariff changes with comprehensive audit trails for regulatory compliance.</p>
              <ul className="feature-list">
                <li>Change documentation</li>
                <li>Audit logging</li>
                <li>Regulatory filing links</li>
                <li>Version control</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="product-benefits">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <span className="section-subtitle">BUSINESS BENEFITS</span>
            <h2>Transforming Tariff Management</h2>
            <p>How GasTariff AI delivers measurable business value</p>
          </div>
          
          <div className="benefits-grid">
            <div className="benefit-card" data-aos="fade-up">
              <div className="benefit-icon">
                <BsSpeedometer size={30} />
              </div>
              <h3>Increase Operational Efficiency</h3>
              <p>Eliminate 90% of manual work associated with gathering, processing, and entering tariff data, freeing your team to focus on higher-value activities.</p>
            </div>
            
            <div className="benefit-card" data-aos="fade-up" data-aos-delay="100">
              <div className="benefit-icon">
                <BsShieldCheck size={30} />
              </div>
              <h3>Reduce Risk</h3>
              <p>Minimize errors and ensure compliance with accurate, up-to-date tariff information. Our platform reduces rate input errors by 99% compared to manual processes.</p>
            </div>
            
            <div className="benefit-card" data-aos="fade-up" data-aos-delay="200">
              <div className="benefit-icon">
                <FaChartBar size={30} />
              </div>
              <h3>Improve Trading Decisions</h3>
              <p>Make more informed trading decisions with instant access to comprehensive rate data, including historical trends and automated change notifications.</p>
            </div>
            
            <div className="benefit-card" data-aos="fade-up" data-aos-delay="300">
              <div className="benefit-icon">
                <BsCloudCheck size={30} />
              </div>
              <h3>Fast Implementation</h3>
              <p>Be up and running in weeks, not months, with our expert implementation team and pre-built integrations for major ETRM systems.</p>
            </div>
          </div>
          
          <div className="comparison-wrapper" data-aos="fade-up">
            <h3 className="text-center">Manual vs. Automated Tariff Management</h3>
            <div className="comparison-container">
              <div className="comparison-column manual">
                <div className="comparison-header">
                  <h4>Manual Process</h4>
                </div>
                <ul className="comparison-list">
                  <li>Hours spent searching for tariff updates</li>
                  <li>Manual data entry prone to errors</li>
                  <li>Delayed rate implementation</li>
                  <li>Limited historical analysis</li>
                  <li>Risk of missed rate changes</li>
                  <li>High labor costs</li>
                </ul>
              </div>
              
              <div className="comparison-column automated">
                <div className="comparison-header">
                  <h4>GasTariff AI</h4>
                </div>
                <ul className="comparison-list">
                  <li>Automated monitoring of all sources</li>
                  <li>99.8% data accuracy</li>
                  <li>Real-time rate updates</li>
                  <li>Comprehensive historical database</li>
                  <li>Automated change notifications</li>
                  <li>90% reduction in overhead</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="integration-section" style={{background: '#f8f9fa'}}>
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <span className="section-subtitle">INTEGRATIONS</span>
            <h2>Integration Capabilities</h2>
            <p>Connect seamlessly with your energy trading and risk management systems</p>
          </div>
{/*           
          <div className="integration-logos" data-aos="fade-up">
            <div className="integration-logo">
              <FaServer size={50} color="#2E7D32" />
              <span>ION Endur</span>
            </div>
            <div className="integration-logo">
              <BsDatabase size={50} color="#1976D2" />
              <span>Allegro</span>
            </div>
            <div className="integration-logo">
              <FaLayerGroup size={50} color="#7B1FA2" />
              <span>OpenLink</span>
            </div>
            <div className="integration-logo">
              <FaCodeBranch size={50} color="#F57C00" />
              <span>Fendrs</span>
            </div>
            <div className="integration-logo">
              <SiApachekafka size={50} color="#D32F2F" />
              <span>Custom API</span>
            </div>
          </div> */}
          
          <div className="integration-details" data-aos="fade-up">
            <div className="integration-detail-item">
              <h3>Ready-to-Use Connectors</h3>
              <p>Our platform includes pre-built connectors for all major ETRM systems, enabling rapid deployment without custom development. Standard connectors support bi-directional data flow, rate versioning, and change tracking.</p>
            </div>
            
            <div className="integration-detail-item">
              <h3>Flexible API Access</h3>
              <p>For custom integrations, our comprehensive REST API provides programmatic access to all tariff data, supporting JSON and XML formats with detailed documentation and sample code for major programming languages.</p>
            </div>
            
            <div className="integration-detail-item">
              <h3>Secure Data Exchange</h3>
              <p>All integrations utilize secure data transfer protocols with encryption, authentication, and detailed access logs. Our platform supports both scheduled batch transfers and real-time event-based updates.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="implementation-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <span className="section-subtitle">IMPLEMENTATION</span>
            <h2>Rapid Deployment Process</h2>
            <p>From kickoff to production in weeks, not months</p>
          </div>
          
          <div className="implementation-timeline" data-aos="fade-up">
            <div className="timeline-item">
              <div className="timeline-number">1</div>
              <div className="timeline-content">
                <h3>Requirements Analysis</h3>
                <p>We analyze your current workflow and ETRM environment to identify integration points and data requirements.</p>
                <span className="timeline-duration">Week 1</span>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-number">2</div>
              <div className="timeline-content">
                <h3>System Configuration</h3>
                <p>Our team configures the platform to match your specific pipeline portfolio and trading requirements.</p>
                <span className="timeline-duration">Week 2</span>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-number">3</div>
              <div className="timeline-content">
                <h3>Integration Setup</h3>
                <p>We deploy and test connectors with your ETRM system, ensuring seamless data flow and validation.</p>
                <span className="timeline-duration">Week 3</span>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-number">4</div>
              <div className="timeline-content">
                <h3>Training & Handover</h3>
                <p>We train your team on the platform and transition to ongoing support with 24/7 technical assistance.</p>
                <span className="timeline-duration">Week 4</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="use-cases-section" style={{background: '#f8f9fa'}}>
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <span className="section-subtitle">USE CASES</span>
            <h2>How Customers Use GasTariff AI</h2>
            <p>Real-world applications across the natural gas industry</p>
          </div>
          
          <div className="use-case-grid">
            <div className="use-case-card" data-aos="fade-up">
              <div className="use-case-icon"><FaChartBar /></div>
              <h3>Trading Operations</h3>
              <p>Energy trading companies leverage GasTariff AI to ensure accurate basis spreads and optimize trading strategies with current transport costs.</p>
              <ul className="use-case-benefits">
                <li>Real-time rate updates</li>
                <li>Basis spread calculation</li>
                <li>Transport cost optimization</li>
                <li>Risk management</li>
              </ul>
            </div>
            
            <div className="use-case-card" data-aos="fade-up" data-aos-delay="100">
              <div className="use-case-icon"><MdAnalytics /></div>
              <h3>Price Analytics</h3>
              <p>Market analysts use historical tariff data to identify pricing patterns and forecast regional gas price movements with greater accuracy.</p>
              <ul className="use-case-benefits">
                <li>Historical trend analysis</li>
                <li>Rate change impact modeling</li>
                <li>Regional price forecasting</li>
                <li>Seasonal pattern detection</li>
              </ul>
            </div>
            
            <div className="use-case-card" data-aos="fade-up" data-aos-delay="200">
              <div className="use-case-icon"><FaPaperPlane /></div>
              <h3>Transport Management</h3>
              <p>Pipeline capacity managers optimize routes and contracting strategies with comprehensive visibility into changing tariff rates.</p>
              <ul className="use-case-benefits">
                <li>Route optimization</li>
                <li>Capacity planning</li>
                <li>Contract evaluation</li>
                <li>Cost minimization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <span className="section-subtitle">FAQ</span>
            <h2>Common Questions</h2>
            <p>Everything you need to know about GasTariff AI</p>
          </div>
          
          <div className="faq-grid">
            <div className="faq-item" data-aos="fade-up">
              <div className="faq-question">
                <BsDatabase />
                <h3>Which pipelines do you cover?</h3>
              </div>
              <div className="faq-answer">
                <p>Our platform covers over 200 natural gas pipelines across North America, including all major interstate pipelines regulated by FERC, intrastate systems, and Canadian pipelines regulated by CER. We continuously add coverage based on customer demand.</p>
              </div>
            </div>
            
            <div className="faq-item" data-aos="fade-up" data-aos-delay="100">
              <div className="faq-question">
                <FaExchangeAlt />
                <h3>How does the ETRM integration work?</h3>
              </div>
              <div className="faq-answer">
                <p>We provide pre-built connectors for major ETRM systems including ION Endur, Allegro, OpenLink, and others. These connectors handle the automated transfer of tariff data into your system's rate tables, with options for scheduled updates or manual approval workflows.</p>
              </div>
            </div>
            
            <div className="faq-item" data-aos="fade-up" data-aos-delay="200">
              <div className="faq-question">
                <BsCheckCircle />
                <h3>How accurate is the data extraction?</h3>
              </div>
              <div className="faq-answer">
                <p>Our AI-powered extraction achieves 99.8% accuracy in converting complex tariff documents into structured data. All extracted data goes through multiple validation processes, including automated rule-based checks and periodic human verification for quality assurance.</p>
              </div>
            </div>
            
            <div className="faq-item" data-aos="fade-up" data-aos-delay="300">
              <div className="faq-question">
                <MdAutorenew />
                <h3>How often is the data updated?</h3>
              </div>
              <div className="faq-answer">
                <p>Our system monitors pipeline sources daily and processes updates as soon as new tariffs are published. Most customers receive rate updates within hours of official publication. For critical pipelines, we offer priority processing with guaranteed update timing.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="product-cta">
        <div className="container">
          <div className="cta-card" data-aos="fade-up">
            <h2 style={{color: 'white'}}>Ready to transform your natural gas operations?</h2>
            <p>Schedule a demo to see how GasTariff AI can streamline your tariff management.</p>
            <div className="cta-buttons">
              <Link to="/contact-us?product=gastariff-ai&type=demo" className="cta-button">
                Schedule a Demo <BsArrowRightShort size={25} />
              </Link>
              <Link to="/contact-us?product=gastariff-ai&type=info" className="cta-button secondary">
                Request Information
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GasTariffAI; 