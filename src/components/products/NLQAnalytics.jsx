import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaRocket, FaChartLine, FaDatabase, FaMobileAlt, FaUsersCog, FaClock, FaLightbulb, FaUniversity } from 'react-icons/fa';
import { BiCodeAlt, BiMessageRoundedCheck } from 'react-icons/bi';
import { RiRobot2Line, RiTeamLine } from 'react-icons/ri';
import { IoAnalyticsSharp } from 'react-icons/io5';
import { BsArrowRightShort, BsQuestionSquare, BsGraphUp } from 'react-icons/bs';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../styles/ProductPage.css';

const NLQAnalytics = () => {
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
          <span className="product-badge" data-aos="fade-down">AI-POWERED REPORTING ENGINE</span>
          <h1 data-aos="fade-up">NLQ Analytics</h1>
          <h2 data-aos="fade-up" data-aos-delay="100" style={{color: 'white'}}>Just Ask. Instant Insights.</h2>
          <p data-aos="fade-up" data-aos-delay="200">Transform how your organization discovers insights with our revolutionary natural language query engine</p>
          <div className="hero-cta" data-aos="fade-up" data-aos-delay="300">
            <Link to="/contact-us?product=nlq-analytics" className="cta-button">
              Schedule a Demo <BsArrowRightShort size={25} />
            </Link>
            <a href="#how-it-works" className="text-link">
              See how it works <BsArrowRightShort />
            </a>
          </div>
          
          <div className="hero-stats" data-aos="fade-up" data-aos-delay="400">
            <div className="stat-item">
              <span className="stat-number">85%</span>
              <span className="stat-label">Reduction in report creation time</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">94%</span>
              <span className="stat-label">User satisfaction</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">3.2x</span>
              <span className="stat-label">ROI within 6 months</span>
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
            <h2>Making Data Analysis Accessible For Everyone</h2>
            <p>No more complex SQL queries or waiting for data team resources</p>
          </div>
          
          <div className="overview-content">
            <div className="overview-text" data-aos="fade-right">
              <p className="large-text">NLQ Analytics demolishes the technical barrier between your team and your data. Our Gen AI-powered engine translates natural language questions into complex queries, allowing anyone to extract meaningful insights without SQL expertise.</p>
              
              <div className="text-with-icon">
              <RiRobot2Line className="icon-primary" size={30} />
                <div>
                  <h3>Advanced AI Understanding</h3>
                  <p>Trained on millions of business queries and your company's unique data models to understand context, industry jargon, and complex relationships.</p>
                </div>
              </div>
              
              <div className="text-with-icon">
                <IoAnalyticsSharp className="icon-primary" size={30} />
                <div>
                  <h3>Instant Visual Analysis</h3>
                  <p>Automatically selects the best visualization for your query results, making insights immediately accessible and shareable.</p>
                </div>
              </div>
              
              <div className="text-with-icon">
                <BiCodeAlt className="icon-primary" size={30} />
                <div>
                  <h3>Zero Learning Curve</h3>
                  <p>No new interfaces to learn. Simply type your question in plain language and receive answers in seconds.</p>
                </div>
              </div>
            </div>
            
            <div className="overview-visual" data-aos="fade-left">
              <div className="demo-container">
                <div className="demo-header">
                  <div className="demo-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <div className="demo-title">NLQ Analytics</div>
                </div>
                <div className="demo-content">
                  <div className="demo-query">
                    <span className="query-label">User Query:</span>
                    <span className="query-text">"Show me monthly sales by region for the last year, highlighting which products exceeded quarterly targets"</span>
                  </div>
                  <div className="demo-result">
                    <div className="demo-visual-placeholder">
                      <BsGraphUp size={40} />
                      <span>Interactive visualization displayed here</span>
                    </div>
                    <div className="demo-insight">
                      <h4>Key Insight Detected:</h4>
                      <p>North region exceeded targets for all quarters, with Product X showing 27% growth in Q4 2022.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="technology-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <span className="section-subtitle">TECHNOLOGY</span>
            <h2>Built on Cutting-Edge AI</h2>
            <p>Our proprietary natural language processing technology is trained on billions of data points</p>
          </div>
          
          <div className="tech-grid">
            <div className="tech-item" data-aos="fade-up">
              <div className="tech-icon">
                <BiMessageRoundedCheck size={40} />
              </div>
              <h3>Semantic Understanding</h3>
              <p>Contextual comprehension of business terminology and intent that goes beyond simple keyword matching.</p>
            </div>
            
            <div className="tech-item" data-aos="fade-up" data-aos-delay="100">
              <div className="tech-icon">
                <FaDatabase size={40} />
              </div>
              <h3>Multi-Source Connection</h3>
              <p>Seamlessly connects to your data warehouse, data lake, or business applications to provide unified insights.</p>
            </div>
            
            <div className="tech-item" data-aos="fade-up" data-aos-delay="200">
              <div className="tech-icon">
                <RiTeamLine size={40} />
              </div>
              <h3>Collaborative Intelligence</h3>
              <p>Learns from user interactions to continuously improve accuracy and relevance of results.</p>
            </div>
            
            <div className="tech-item" data-aos="fade-up" data-aos-delay="300">
              <div className="tech-icon">
                <FaUsersCog size={40} />
              </div>
              <h3>Domain Adaptation</h3>
              <p>Custom-trained for your industry with pre-built understanding of relevant metrics and KPIs.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="product-features">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <span className="section-subtitle">FEATURES</span>
            <h2>Why Teams Love NLQ Analytics</h2>
            <p>Designed for business users, approved by IT teams</p>
          </div>
          
          <div className="features-grid">
            <div className="feature-card" data-aos="fade-up">
              <div className="feature-icon">
                <FaChartLine />
              </div>
              <h3>Natural Language Interface</h3>
              <p>Ask questions like "What were our top products in the Northeast last quarter?" and receive instant visualizations.</p>
              <ul className="feature-list">
                <li>Supports complex, multi-part questions</li>
                <li>Handles follow-up queries with context</li>
                <li>Available in 12 languages</li>
              </ul>
            </div>
            
            <div className="feature-card" data-aos="fade-up" data-aos-delay="100">
              <div className="feature-icon">
                <FaDatabase />
              </div>
              <h3>Enterprise Data Integration</h3>
              <p>Securely connects to your existing data infrastructure with minimal IT involvement.</p>
              <ul className="feature-list">
                <li>Pre-built connectors for Snowflake, BigQuery, Redshift</li>
                <li>Custom API integration capability</li>
                <li>Respects existing security and governance policies</li>
              </ul>
            </div>
            
            <div className="feature-card" data-aos="fade-up" data-aos-delay="200">
              <div className="feature-icon">
                <FaMobileAlt />
              </div>
              <h3>Cross-Platform Access</h3>
              <p>Access insights from anywhere via web, mobile, or embedded in your applications.</p>
              <ul className="feature-list">
                <li>Responsive web interface</li>
                <li>Native iOS and Android apps</li>
                <li>Embeddable into existing dashboards</li>
              </ul>
            </div>
            
            <div className="feature-card" data-aos="fade-up" data-aos-delay="300">
              <div className="feature-icon">
                <FaRocket />
              </div>
              <h3>Rapid Deployment</h3>
              <p>Get up and running in days, not months, with our guided implementation process.</p>
              <ul className="feature-list">
                <li>3-day typical configuration time</li>
                <li>No-code setup for business users</li>
                <li>Comprehensive onboarding program</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="use-cases-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <span className="section-subtitle">USE CASES</span>
            <h2>Real-World Applications</h2>
            <p>How leading organizations are using NLQ Analytics</p>
          </div>
          
          <div className="use-cases-grid">
            <div className="use-case-card" data-aos="fade-up">
              <div className="use-case-industry">RETAIL</div>
              <h3>Sales Performance Analysis</h3>
              <p>Retail managers ask questions about store performance, inventory trends, and customer behavior to optimize operations and merchandising strategies.</p>
              <div className="use-case-result">
                <span>Result:</span> 32% increase in inventory turnover
              </div>
            </div>
            
            <div className="use-case-card" data-aos="fade-up" data-aos-delay="100">
              <div className="use-case-industry">FINANCIAL SERVICES</div>
              <h3>Risk Assessment</h3>
              <p>Risk analysts explore exposure data through natural language queries, enabling faster identification of potential issues and compliance reporting.</p>
              <div className="use-case-result">
                <span>Result:</span> 78% reduction in reporting time
              </div>
            </div>
            
            <div className="use-case-card" data-aos="fade-up" data-aos-delay="200">
              <div className="use-case-industry">ETRM</div>
              <h3>Trading Position Analysis</h3>
              <p>Energy traders analyze market positions, exposures, and P&L across commodities through simple questions, getting instant visibility into complex portfolio data.</p>
              <div className="use-case-result">
                <span>Result:</span> 42% faster market position assessments and risk identification
              </div>
            </div>
            
            <div className="use-case-card" data-aos="fade-up" data-aos-delay="300">
              <div className="use-case-industry">MANUFACTURING</div>
              <h3>Supply Chain Optimization</h3>
              <p>Operations teams analyze supplier performance, lead times, and quality metrics through conversational queries.</p>
              <div className="use-case-result">
                <span>Result:</span> 18% reduction in supply chain costs
              </div>
            </div>

            <div className="use-case-card" data-aos="fade-up" data-aos-delay="400">
              <div className="use-case-industry">AGRICULTURE</div>
              <h3>Crop Yield Optimization</h3>
              <p>Farm managers ask natural language questions about historical yield data, weather patterns, and input costs to optimize planting decisions and resource allocation.</p>
              <div className="use-case-result">
                <span>Result:</span> 27% increase in yield efficiency across multiple crops
              </div>
            </div>
            
            <div className="use-case-card" data-aos="fade-up" data-aos-delay="500">
              <div className="use-case-industry">TREASURY</div>
              <h3>Cash Flow & Liquidity Analysis</h3>
              <p>Treasury teams use natural language to analyze cash positions, FX exposures, and liquidity metrics across global operations without complex data pulling.</p>
              <div className="use-case-result">
                <span>Result:</span> 23% improvement in working capital efficiency
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <span className="section-subtitle">TESTIMONIALS</span>
            <h2>What Our Clients Say</h2>
            <p>Success stories from organizations that transformed their data experience</p>
          </div>
          
          <div className="testimonials-grid">
            <div className="testimonial-card" data-aos="fade-up">
              <div className="testimonial-content">
                <p>"NLQ Analytics has democratized data access across our entire organization. Our marketing team can now instantly get the insights they need without waiting for analytics support."</p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">
                  <span>JD</span>
                </div>
                <div className="author-info">
                  <h4>Raghu V</h4>
                  <p>CEO, CNERZY</p>
                </div>
              </div>
            </div>
            
            <div className="testimonial-card" data-aos="fade-up" data-aos-delay="100">
              <div className="testimonial-content">
                <p>"We've reduced our reporting backlog by 85% while enabling our business teams to self-serve their analytics needs. The ROI has been exceptional."</p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">
                  <span>MP</span>
                </div>
                <div className="author-info">
                  <h4>Pravin Kumar</h4>
                  <p>Head of Business Intelligence, WebHub Analytics</p>
                </div>
              </div>
            </div>
            
            <div className="testimonial-card" data-aos="fade-up" data-aos-delay="200">
              <div className="testimonial-content">
                <p>"The natural language capabilities are remarkable. Even complex queries about our supply chain performance are handled accurately, and the visualizations make insights immediately clear."</p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">
                  <span>TL</span>
                </div>
                <div className="author-info">
                  <h4>Anand</h4>
                  <p>CIO, Automobile Manufacturing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="implementation-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <span className="section-subtitle">IMPLEMENTATION</span>
            <h2>Simple 4-Step Deployment</h2>
            <p>From kickoff to insights in as little as two weeks</p>
          </div>
          
          <div className="implementation-timeline">
            <div className="timeline-item" data-aos="fade-up">
              <div className="timeline-number">1</div>
              <div className="timeline-content">
                <h3>Data Connection</h3>
                <p>We connect securely to your data sources without moving your data.</p>
                <span className="timeline-duration">Days 1-2</span>
              </div>
            </div>
            
            <div className="timeline-item" data-aos="fade-up" data-aos-delay="100">
              <div className="timeline-number">2</div>
              <div className="timeline-content">
                <h3>Semantic Layer Configuration</h3>
                <p>Our AI maps your data structure and learns your business terminology.</p>
                <span className="timeline-duration">Days 3-5</span>
              </div>
            </div>
            
            <div className="timeline-item" data-aos="fade-up" data-aos-delay="200">
              <div className="timeline-number">3</div>
              <div className="timeline-content">
                <h3>User Training</h3>
                <p>Brief training sessions get your team comfortable with asking the right questions.</p>
                <span className="timeline-duration">Days 6-7</span>
              </div>
            </div>
            
            <div className="timeline-item" data-aos="fade-up" data-aos-delay="300">
              <div className="timeline-number">4</div>
              <div className="timeline-content">
                <h3>Deployment & Refinement</h3>
                <p>Go live with ongoing optimization as the system learns from interactions.</p>
                <span className="timeline-duration">Days 8-14</span>
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
            <p>Everything you need to know about NLQ Analytics</p>
          </div>
          
          <div className="faq-grid">
            <div className="faq-item" data-aos="fade-up">
              <div className="faq-question">
                <BsQuestionSquare />
                <h3>How accurate is the natural language understanding?</h3>
              </div>
              <div className="faq-answer">
                <p>Our system achieves over 95% accuracy for standard business queries. For specialized or complex questions, the system will ask for clarification. The more your team uses NLQ Analytics, the more it learns your specific terminology and data context.</p>
              </div>
            </div>
            
            <div className="faq-item" data-aos="fade-up" data-aos-delay="100">
              <div className="faq-question">
                <BsQuestionSquare />
                <h3>What data sources can it connect to?</h3>
              </div>
              <div className="faq-answer">
                <p>NLQ Analytics connects to most modern data warehouses (Snowflake, Redshift, BigQuery, Azure Synapse), data lakes, SQL databases, Salesforce, and hundreds of other sources via our API connectors. Custom connections can be built for specialized systems.</p>
              </div>
            </div>
            
            <div className="faq-item" data-aos="fade-up" data-aos-delay="200">
              <div className="faq-question">
                <BsQuestionSquare />
                <h3>Is our data secure with NLQ Analytics?</h3>
              </div>
              <div className="faq-answer">
                <p>Absolutely. NLQ Analytics connects to your data but doesn't store it. All queries run within your security perimeter, and we maintain SOC 2 Type II, GDPR, and HIPAA compliance. The system inherits your existing data access permissions.</p>
              </div>
            </div>
            
            <div className="faq-item" data-aos="fade-up" data-aos-delay="300">
              <div className="faq-question">
                <BsQuestionSquare />
                <h3>What's the typical ROI timeframe?</h3>
              </div>
              <div className="faq-answer">
                <p>Most clients see positive ROI within 3-6 months, primarily through time savings for both technical and business teams. Organizations report 70-85% reduction in time spent creating reports and a 35% increase in data-driven decision making.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-card" data-aos="fade-up">
            <h2 style={{color: 'white'}}>Ready to transform how your organization interacts with data?</h2>
            <p>Join hundreds of forward-thinking companies using NLQ Analytics to democratize data access and accelerate insights.</p>
            <div className="cta-buttons">
              <Link to="/contact-us?product=nlq-analytics&type=demo" className="cta-button">
                Schedule a Demo <BsArrowRightShort size={25} />
              </Link>
              <Link to="/contact-us?product=nlq-analytics&type=pricing" className="cta-button secondary">
                Get Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NLQAnalytics;
