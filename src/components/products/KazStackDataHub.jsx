import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaDatabase, FaLock, FaCloudDownloadAlt, FaCogs, FaChartLine, FaNetworkWired, FaAws, FaMicrosoft } from 'react-icons/fa';
import { BsArrowRightShort, BsShieldCheck, BsClockHistory, BsSpeedometer } from 'react-icons/bs';
import { MdOutlineIntegrationInstructions, MdAnalytics, MdStorage } from 'react-icons/md';
import { SiApachekafka, SiApachespark, SiElasticsearch, SiApachehadoop, SiApacheairflow, SiTrino, SiKubernetes, SiSnowflake, SiGooglecloud, SiTableau, SiPowerbi } from 'react-icons/si';
import { GiServerRack } from 'react-icons/gi';
import { AiOutlineCloudServer, AiOutlineApi } from 'react-icons/ai';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../styles/ProductPage.css';

const KazStackDataHub = () => {
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
          <span className="product-badge" data-aos="fade-down">OPEN SOURCE DATA PLATFORM</span>
          <h1 data-aos="fade-up">KazStack Data Hub</h1>
          <h2 data-aos="fade-up" data-aos-delay="100" style={{color: 'white'}}>Enterprise-grade managed data platform built on open source</h2>
          <p data-aos="fade-up" data-aos-delay="200">Get all the benefits of open source tools with the reliability and security of fully-managed infrastructure</p>
          <div className="hero-cta" data-aos="fade-up" data-aos-delay="300">
            <Link to="/contact-us?product=kazstack-data-hub" className="cta-button">
              Schedule a Demo <BsArrowRightShort size={25} />
            </Link>
            <a href="#how-it-works" className="text-link">
              Explore Platform <BsArrowRightShort />
            </a>
          </div>
          
          <div className="hero-stats" data-aos="fade-up" data-aos-delay="400">
            <div className="stat-item">
              <span className="stat-number">70%</span>
              <span className="stat-label">Lower TCO vs proprietary solutions</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">99.99%</span>
              <span className="stat-label">Enterprise SLA uptime</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">10x</span>
              <span className="stat-label">Faster deployment</span>
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
            <span className="section-subtitle">PLATFORM OVERVIEW</span>
            <h2>Open Source Power, Enterprise Reliability</h2>
            <p>A fully managed data platform that eliminates infrastructure complexity</p>
          </div>
          
          <div className="overview-content">
            <div className="overview-text" data-aos="fade-right">
              <p className="large-text">KazStack Data Hub combines the flexibility and innovation of open source data tools with the security, reliability, and support of an enterprise-grade managed service.</p>
              
              <div className="text-with-icon">
                <GiServerRack className="icon-primary" size={30} />
                <div>
                  <h3>Pre-integrated Data Stack</h3>
                  <p>Get instant access to a carefully curated stack of best-in-class open source tools that work seamlessly together, pre-configured for optimal performance.</p>
                </div>
              </div>
              
              <div className="text-with-icon">
                <AiOutlineCloudServer className="icon-primary" size={30} />
                <div>
                  <h3>Zero Infrastructure Management</h3>
                  <p>We handle deployment, scaling, patching, backups, and monitoring so your team can focus on extracting value from your data, not managing infrastructure.</p>
                </div>
              </div>
            </div>
            
            <div className="overview-visual" data-aos="fade-left">
              <div className="demo-container">
                <div className="architecture-diagram">
                  <div className="diagram-layer data-sources-layer">
                    <div className="diagram-header">Data Sources</div>
                    <div className="diagram-components">
                      <div className="diagram-component">
                        <FaDatabase className="component-icon" />
                        <span>Databases</span>
                      </div>
                      <div className="diagram-component">
                        <AiOutlineApi className="component-icon" />
                        <span>APIs</span>
                      </div>
                      <div className="diagram-component">
                        <FaCloudDownloadAlt className="component-icon" />
                        <span>Cloud Storage</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="diagram-connectors">
                    <div className="connector-line"></div>
                    <div className="connector-line"></div>
                    <div className="connector-line"></div>
                  </div>
                  
                  <div className="diagram-layer ingestion-layer">
                    <div className="diagram-header">Ingestion & Storage</div>
                    <div className="diagram-components">
                      <div className="diagram-component">
                        <SiApachekafka className="component-icon" />
                        <span>Kafka</span>
                      </div>
                      <div className="diagram-component">
                        <SiApachehadoop className="component-icon" />
                        <span>HDFS</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="diagram-connectors">
                    <div className="connector-line"></div>
                    <div className="connector-line"></div>
                  </div>
                  
                  <div className="diagram-layer processing-layer">
                    <div className="diagram-header">Processing & Analytics</div>
                    <div className="diagram-components">
                      <div className="diagram-component">
                        <SiApachespark className="component-icon" />
                        <span>Spark</span>
                      </div>
                      <div className="diagram-component">
                        <i className="tech-icon component-icon">Tr</i>
                        <span>Trino</span>
                      </div>
                      <div className="diagram-component">
                        <i className="tech-icon component-icon">Af</i>
                        <span>Airflow</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="diagram-connectors">
                    <div className="connector-line"></div>
                    <div className="connector-line"></div>
                    <div className="connector-line"></div>
                  </div>
                  
                  <div className="diagram-layer services-layer">
                    <div className="diagram-header">Enterprise Services</div>
                    <div className="diagram-components">
                      <div className="diagram-component">
                        <FaLock className="component-icon" />
                        <span>Security</span>
                      </div>
                      <div className="diagram-component">
                        <FaCogs className="component-icon" />
                        <span>Management</span>
                      </div>
                      <div className="diagram-component">
                        <BsSpeedometer className="component-icon" />
                        <span>Monitoring</span>
                      </div>
                    </div>
                  </div>
                </div>
                <style jsx>{`
                  .architecture-diagram {
                    background: linear-gradient(135deg, #0a2540 0%, #1a3d5c 100%);
                    border-radius: 8px;
                    padding: 20px;
                    color: white;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.2);
                    min-height: 400px;
                  }
                  
                  .diagram-layer {
                    background: rgba(255,255,255,0.1);
                    border-radius: 6px;
                    padding: 15px;
                    margin-bottom: 10px;
                  }
                  
                  .diagram-header {
                    font-weight: bold;
                    margin-bottom: 10px;
                    text-align: center;
                    font-size: 14px;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                  }
                  
                  .diagram-components {
                    display: flex;
                    justify-content: space-around;
                    flex-wrap: wrap;
                  }
                  
                  .diagram-component {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding: 12px;
                    background: rgba(255,255,255,0.05);
                    border-radius: 6px;
                    min-width: 80px;
                    margin: 5px;
                    transition: all 0.3s ease;
                  }
                  
                  .diagram-component:hover {
                    transform: translateY(-3px);
                    background: rgba(255,255,255,0.1);
                    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
                  }
                  
                  .component-icon {
                    font-size: 24px;
                    margin-bottom: 8px;
                    color: #4fc3f7;
                  }
                  
                  .diagram-connectors {
                    display: flex;
                    justify-content: space-around;
                    padding: 0 30px;
                    height: 15px;
                    position: relative;
                  }
                  
                  .connector-line {
                    width: 2px;
                    height: 15px;
                    background: rgba(79, 195, 247, 0.7);
                    position: relative;
                  }
                  
                  .connector-line:before {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: -4px;
                    width: 0;
                    height: 0;
                    border-left: 5px solid transparent;
                    border-right: 5px solid transparent;
                    border-top: 5px solid rgba(79, 195, 247, 0.7);
                  }
                  
                  .tech-icon {
                    background: rgba(79, 195, 247, 0.2);
                    border-radius: 4px;
                    width: 30px;
                    height: 30px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-style: normal;
                    font-weight: bold;
                  }
                `}</style>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="product-features">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <span className="section-subtitle">KEY FEATURES</span>
            <h2>Enterprise-Grade Data Platform</h2>
            <p>Everything you need for production-ready data infrastructure</p>
          </div>
          
          <div className="features-grid">
            <div className="feature-card" data-aos="fade-up">
              <div className="feature-icon"><MdStorage /></div>
              <h3>Scalable Storage</h3>
              <p>Petabyte-scale distributed storage with automatic tiering between hot and cold data for optimal cost efficiency.</p>
            </div>
            <div className="feature-card" data-aos="fade-up" data-aos-delay="100">
              <div className="feature-icon"><BsShieldCheck /></div>
              <h3>Enterprise Security</h3>
              <p>End-to-end encryption, role-based access controls, audit logging, and compliance with major security frameworks (HIPAA, GDPR, SOC2).</p>
            </div>
            <div className="feature-card" data-aos="fade-up" data-aos-delay="200">
              <div className="feature-icon"><BsSpeedometer /></div>
              <h3>Elastic Scaling</h3>
              <p>Automatically scale compute resources up or down based on workload demands, ensuring optimal performance without overprovisioning.</p>
            </div>
            <div className="feature-card" data-aos="fade-up" data-aos-delay="300">
              <div className="feature-icon"><MdAnalytics /></div>
              <h3>Advanced Analytics</h3>
              <p>Built-in support for batch processing, stream processing, interactive queries, and machine learning workflows.</p>
            </div>
            <div className="feature-card" data-aos="fade-up" data-aos-delay="400">
              <div className="feature-icon"><FaNetworkWired /></div>
              <h3>High Availability</h3>
              <p>Multi-zone and multi-region deployment options with automatic failover for 99.99% uptime SLA.</p>
            </div>
            <div className="feature-card" data-aos="fade-up" data-aos-delay="500">
              <div className="feature-icon"><AiOutlineApi /></div>
              <h3>API-First Design</h3>
              <p>Comprehensive APIs and SDK support for programmatic control and integration with your existing tools and workflows.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="technology-stack">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <span className="section-subtitle">TECHNOLOGY</span>
            <h2>Best-in-Class Open Source Stack</h2>
            <p>Pre-integrated and optimized for enterprise workloads</p>
          </div>
          
          <div className="tech-logos" data-aos="fade-up">
            <div className="tech-logo">
              <SiApachehadoop size={40} color="#0d47a1" />
              <span>Hadoop</span>
            </div>
            <div className="tech-logo">
              <SiApachespark size={40} color="#E25A1C" />
              <span>Spark</span>
            </div>
            <div className="tech-logo">
              <SiApachekafka size={40} color="#231F20" />
              <span>Kafka</span>
            </div>
            <div className="tech-logo">
              <SiElasticsearch size={40} color="#FEC514" />
              <span>Elasticsearch</span>
            </div>
            <div className="tech-logo">
              <SiApacheairflow size={40} color="#017CEE" />
              <span>Airflow</span>
            </div>
            <div className="tech-logo">
              <SiTrino size={40} color="#DD00A1" />
              <span>Trino</span>
            </div>
            <div className="tech-logo">
              <FaDatabase size={40} color="#BA160C" />
              <span>HBase</span>
            </div>
            <div className="tech-logo">
              <SiKubernetes size={40} color="#326CE5" />
              <span>Kubernetes</span>
            </div>
          </div>
        </div>
      </section>

      <section className="use-cases-section" style={{background: '#f8f9fa'}}>
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <span className="section-subtitle">USE CASES</span>
            <h2>Industry Solutions</h2>
            <p>How different industries leverage KazStack Data Hub</p>
          </div>
          
          <div className="use-case-grid">
            <div className="use-case-card" data-aos="fade-up">
              <div className="use-case-icon"><FaChartLine /></div>
              <h3>Financial Services</h3>
              <p>Process millions of transactions in real-time for fraud detection, risk analytics, and customer insights while meeting strict regulatory requirements.</p>
              <ul className="use-case-benefits">
                <li>Real-time fraud detection</li>
                <li>Regulatory compliance</li>
                <li>Customer 360° analytics</li>
                <li>Risk modeling & simulation</li>
              </ul>
            </div>
            
            <div className="use-case-card" data-aos="fade-up" data-aos-delay="100">
              <div className="use-case-icon"><MdAnalytics /></div>
              <h3>Healthcare & Life Sciences</h3>
              <p>Securely analyze clinical, research, and operational data at scale with full HIPAA compliance and audit capabilities.</p>
              <ul className="use-case-benefits">
                <li>Clinical data integration</li>
                <li>Patient outcome analysis</li>
                <li>Research data management</li>
                <li>Operational efficiency</li>
              </ul>
            </div>
            
            <div className="use-case-card" data-aos="fade-up" data-aos-delay="200">
              <div className="use-case-icon"><FaNetworkWired /></div>
              <h3>Manufacturing & IoT</h3>
              <p>Ingest and analyze high-volume sensor data for predictive maintenance, quality assurance, and operational intelligence.</p>
              <ul className="use-case-benefits">
                <li>Predictive maintenance</li>
                <li>Supply chain optimization</li>
                <li>Quality analytics</li>
                <li>Energy efficiency</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <section className="roi-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <span className="section-subtitle">BUSINESS IMPACT</span>
            <h2>Measurable Benefits</h2>
            <p>Quantifiable advantages of our open source approach</p>
          </div>
          
          <div className="metrics-grid">
            <div className="metric-card" data-aos="fade-up">
              <div className="metric-value">60-70%</div>
              <div className="metric-label">Cost Reduction</div>
              <p>Lower total cost of ownership compared to proprietary data platforms</p>
            </div>
            
            <div className="metric-card" data-aos="fade-up" data-aos-delay="100">
              <div className="metric-value">3x</div>
              <div className="metric-label">Faster Innovation</div>
              <p>Accelerate time-to-insight with pre-integrated tooling and automated workflows</p>
            </div>
            
            <div className="metric-card" data-aos="fade-up" data-aos-delay="200">
              <div className="metric-value">99.99%</div>
              <div className="metric-label">Reliability</div>
              <p>Enterprise-grade SLA with geo-redundant architecture and automated failover</p>
            </div>
            
            <div className="metric-card" data-aos="fade-up" data-aos-delay="300">
              <div className="metric-value">100%</div>
              <div className="metric-label">Predictable Pricing</div>
              <p>Fixed, transparent pricing with no usage-based surprises or hidden fees</p>
            </div>
          </div>
          
          <div className="comparison-table-container" data-aos="fade-up">
            <h3 className="text-center" style={{marginBottom: '2rem'}}>How We Compare</h3>
            <div className="comparison-table">
              <div className="comparison-header">
                <div className="comparison-cell header-cell"></div>
                <div className="comparison-cell header-cell">KazStack Data Hub</div>
                <div className="comparison-cell header-cell">Traditional Solutions</div>
                <div className="comparison-cell header-cell">DIY Open Source</div>
              </div>
              <div className="comparison-row">
                <div className="comparison-cell">Initial Cost</div>
                <div className="comparison-cell highlight">Low</div>
                <div className="comparison-cell">High</div>
                <div className="comparison-cell">Very Low</div>
              </div>
              <div className="comparison-row">
                <div className="comparison-cell">Ongoing Costs</div>
                <div className="comparison-cell highlight">Fixed & Predictable</div>
                <div className="comparison-cell">Variable & Unpredictable</div>
                <div className="comparison-cell">Unpredictable</div>
              </div>
              <div className="comparison-row">
                <div className="comparison-cell">Time to Deploy</div>
                <div className="comparison-cell highlight">3-4 Months</div>
                <div className="comparison-cell">6-12 Months</div>
                <div className="comparison-cell">9-18 Months</div>
              </div>
              <div className="comparison-row">
                <div className="comparison-cell">Management Overhead</div>
                <div className="comparison-cell highlight">Minimal</div>
                <div className="comparison-cell">Medium</div>
                <div className="comparison-cell">High</div>
              </div>
              <div className="comparison-row">
                <div className="comparison-cell">Flexibility</div>
                <div className="comparison-cell highlight">High</div>
                <div className="comparison-cell">Low</div>
                <div className="comparison-cell">High</div>
              </div>
              <div className="comparison-row">
                <div className="comparison-cell">Support</div>
                <div className="comparison-cell highlight">24/7 Enterprise</div>
                <div className="comparison-cell">Vendor Dependent</div>
                <div className="comparison-cell">Community</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="integration-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <span className="section-subtitle">INTEGRATIONS</span>
            <h2>Seamless Connectivity</h2>
            <p>Connect to your existing tools and data sources with minimal effort</p>
          </div>
          
          <div className="integration-logos" data-aos="fade-up">
            <div className="integration-logo">
              <SiSnowflake size={50} color="#29B5E8" />
              <span>Snowflake</span>
            </div>
            <div className="integration-logo">
              <FaAws size={50} color="#FF9900" />
              <span>AWS</span>
            </div>
            <div className="integration-logo">
              <FaMicrosoft size={50} color="#00A4EF" />
              <span>Azure</span>
            </div>
            <div className="integration-logo">
              <SiGooglecloud size={50} color="#4285F4" />
              <span>Google Cloud</span>
            </div>
            <div className="integration-logo">
              <SiTableau size={50} color="#E97627" />
              <span>Tableau</span>
            </div>
            <div className="integration-logo">
              <SiPowerbi size={50} color="#F2C811" />
              <span>Power BI</span>
            </div>
          </div>
        </div>
      </section>

      <section className="product-benefits">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <span className="section-subtitle">BENEFITS</span>
            <h2>Business Advantages</h2>
            <p>How KazStack Data Hub drives business value</p>
          </div>
          
          <div className="benefits-list">
            <div className="benefit-item" data-aos="fade-up">
              <h3>70% Lower TCO</h3>
              <p>Eliminate expensive proprietary software licenses while reducing infrastructure and operational costs through automation and optimization.</p>
            </div>
            <div className="benefit-item" data-aos="fade-up" data-aos-delay="100">
              <h3>10x Faster Time to Market</h3>
              <p>Deploy production-ready data infrastructure in days instead of months, accelerating your data initiatives and innovation cycles.</p>
            </div>
            <div className="benefit-item" data-aos="fade-up" data-aos-delay="200">
              <h3>No Vendor Lock-in</h3>
              <p>Built on open standards and formats, ensuring your data remains portable and your organization stays flexible as technology evolves.</p>
            </div>
            <div className="benefit-item" data-aos="fade-up" data-aos-delay="300">
              <h3>Focus on Value Creation</h3>
              <p>Free your data engineers and scientists from infrastructure management so they can focus on extracting insights and building data products.</p>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="testimonials-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <span className="section-subtitle">TESTIMONIALS</span>
            <h2>Customer Success Stories</h2>
            <p>How organizations are transforming with OpenStack Data Hub</p>
          </div>
          
          <div className="testimonials-grid">
            <div className="testimonial-card" data-aos="fade-up">
              <div className="testimonial-content">
                <p>OpenStack Data Hub reduced our infrastructure costs by 60% while giving us access to a more robust and scalable data platform than our previous proprietary solution.</p>
              </div>
              <div className="testimonial-author">
                <div className="author-info">
                  <h4>Rahul Sharma</h4>
                  <p>CTO, Financial Services Company</p>
                </div>
              </div>
            </div>
            
            <div className="testimonial-card" data-aos="fade-up" data-aos-delay="100">
              <div className="testimonial-content">
                <p>We deployed a complete data lake solution in just two weeks. What would have taken our team months to build and configure was ready in days, fully optimized and secure.</p>
              </div>
              <div className="testimonial-author">
                <div className="author-info">
                  <h4>Priya Patel</h4>
                  <p>Head of Analytics, E-commerce Platform</p>
                </div>
              </div>
            </div>
            
            <div className="testimonial-card" data-aos="fade-up" data-aos-delay="200">
              <div className="testimonial-content">
                <p>The ability to scale automatically with demand has been game-changing for our IoT platform. We process over 50TB of sensor data daily with consistent performance and zero management overhead.</p>
              </div>
              <div className="testimonial-author">
                <div className="author-info">
                  <h4>Vikram Mehta</h4>
                  <p>VP Engineering, Industrial IoT Company</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="implementation-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <span className="section-subtitle">IMPLEMENTATION</span>
            <h2>Enterprise Deployment Process</h2>
            <p>Comprehensive enterprise implementation with proven methodology</p>
          </div>
          
          <div className="implementation-timeline" data-aos="fade-up">
            <div className="timeline-item">
              <div className="timeline-number">1</div>
              <div className="timeline-content">
                <h3>Discovery & Requirements</h3>
                <p>We analyze your enterprise needs, existing infrastructure, and design the optimal data platform architecture.</p>
                <span className="timeline-duration">Month 1</span>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-number">2</div>
              <div className="timeline-content">
                <h3>Platform Architecture & Design</h3>
                <p>We design the complete solution with security, scalability, and compliance requirements tailored to your enterprise.</p>
                <span className="timeline-duration">Month 1-2</span>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-number">3</div>
              <div className="timeline-content">
                <h3>Infrastructure Setup & Deployment</h3>
                <p>We provision enterprise-grade infrastructure and deploy core components with high-availability configuration.</p>
                <span className="timeline-duration">Month 2-3</span>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-number">4</div>
              <div className="timeline-content">
                <h3>Data Migration & Integration</h3>
                <p>Migrate existing data, connect enterprise systems, and establish secure data pipelines across your organization.</p>
                <span className="timeline-duration">Month 2-3</span>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-number">5</div>
              <div className="timeline-content">
                <h3>Testing & Optimization</h3>
                <p>Rigorous testing with your production workloads and optimization for your specific use cases and data volumes.</p>
                <span className="timeline-duration">Month 3-4</span>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-number">6</div>
              <div className="timeline-content">
                <h3>Training & Knowledge Transfer</h3>
                <p>Comprehensive training for different stakeholder groups and detailed documentation for your technical teams.</p>
                <span className="timeline-duration">Month 4</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <span className="section-subtitle">FAQ</span>
            <h2>Common Questions</h2>
            <p>Everything you need to know about KazStack Data Hub</p>
          </div>
          
          <div className="faq-grid">
            <div className="faq-item" data-aos="fade-up">
              <div className="faq-question">
                <BsClockHistory />
                <h3>How long does implementation typically take?</h3>
              </div>
              <div className="faq-answer">
                <p>Most customers are up and running within 3-4 months, depending on the complexity of your data environment and integration requirements. Our streamlined deployment process ensures you can start generating value quickly.</p>
              </div>
            </div>
            
            <div className="faq-item" data-aos="fade-up" data-aos-delay="100">
              <div className="faq-question">
                <FaLock />
                <h3>How do you ensure data security and compliance?</h3>
              </div>
              <div className="faq-answer">
                <p>Our platform includes comprehensive security controls including encryption at rest and in transit, role-based access controls, audit logging, and compliance with major frameworks like HIPAA, GDPR, SOC2, and PCI-DSS. We also offer dedicated VPC deployments for additional isolation.</p>
              </div>
            </div>
            
            <div className="faq-item" data-aos="fade-up" data-aos-delay="200">
              <div className="faq-question">
                <FaDatabase />
                <h3>Can I migrate existing data workloads to KazStack Data Hub?</h3>
              </div>
              <div className="faq-answer">
                <p>Yes, we provide comprehensive migration tools and services to help you transition existing data and workloads from legacy systems or other platforms. Our team has extensive experience migrating from proprietary data warehouses, Hadoop clusters, and cloud data services.</p>
              </div>
            </div>
            
            <div className="faq-item" data-aos="fade-up" data-aos-delay="300">
              <div className="faq-question">
                <FaChartLine />
                <h3>How does pricing work?</h3>
              </div>
              <div className="faq-answer">
                <p>We offer transparent, fixed pricing plans unlike other providers who charge variable consumption-based fees. Our predictable pricing structure means no surprises on your monthly bill. There are no hidden charges, per-user fees, or feature licensing costs. Most customers see 60-70% cost savings compared to proprietary alternatives with our all-inclusive pricing model.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-card" data-aos="fade-up">
            <h2 style={{color: 'white'}}>Ready to modernize your data infrastructure?</h2>
            <p>Join leading organizations using KazStack Data Hub to reduce costs and accelerate innovation.</p>
            <div className="cta-buttons">
              <Link to="/contact-us?product=kazstack-data-hub&type=demo" className="cta-button">
                Schedule a Demo <BsArrowRightShort size={25} />
              </Link>
              <Link to="/contact-us?product=kazstack-data-hub&type=whitepaper" className="cta-button secondary">
                Download Whitepaper
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KazStackDataHub; 