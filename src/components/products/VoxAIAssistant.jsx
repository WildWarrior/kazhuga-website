import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaRobot, FaBrain, FaPlug, FaChartBar, FaClock, FaUsers, FaHeadset, FaMicrophone, FaTools } from 'react-icons/fa';
import { BsArrowRightShort, BsQuestionSquare, BsCalendarCheck, BsShieldCheck } from 'react-icons/bs';
import { RiCustomerService2Fill, RiTeamLine } from 'react-icons/ri';
import { GiTalk, GiArtificialIntelligence } from 'react-icons/gi';
import { MdOutlineIntegrationInstructions, MdPayment, MdAnalytics } from 'react-icons/md';
import { FaRegComments } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../styles/ProductPage.css';

const VoxAIAssistant = () => {
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
          <span className="product-badge" data-aos="fade-down">AGENTIC AI PLATFORM</span>
          <h1 data-aos="fade-up">VoxAI Agentic Platform</h1>
          <h2 data-aos="fade-up" data-aos-delay="100" style={{color: 'white'}}>Autonomous AI agents that transform your business</h2>
          <p data-aos="fade-up" data-aos-delay="200">Deploy intelligent AI agents across voice, chat, and digital channels to automate complex workflows and enhance customer experiences</p>
          <div className="hero-cta" data-aos="fade-up" data-aos-delay="300">
            <Link to="/contact-us?product=voxai-assistant" className="cta-button">
              Schedule a Demo <BsArrowRightShort size={25} />
            </Link>
            <a href="#how-it-works" className="text-link">
              See how it works <BsArrowRightShort />
            </a>
          </div>
          
          <div className="hero-stats" data-aos="fade-up" data-aos-delay="400">
            <div className="stat-item">
              <span className="stat-number">40%</span>
              <span className="stat-label">Reduction in support costs</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">24/7</span>
              <span className="stat-label">Always-on customer service</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">90%</span>
              <span className="stat-label">Resolution rate for common queries</span>
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
            <h2>Intelligent Agentic AI Platform</h2>
            <p>Transforming business operations with autonomous AI agents that understand, reason, and take action</p>
          </div>
          
          <div className="overview-content">
            <div className="overview-text" data-aos="fade-right">
              <p className="large-text">VoxAI Assistant brings human-like conversation capabilities to your customer touchpoints. Our SaaS platform allows businesses of any size to deploy sophisticated voice AI agents without deep technical expertise.</p>
              
              <div className="text-with-icon">
                <GiArtificialIntelligence className="icon-primary" size={30} />
                <div>
                  <h3>Advanced Agent Intelligence</h3>
                  <p>Powered by large language models and reinforcement learning, our AI agents understand context, take goal-oriented actions, and adapt to changing environments.</p>
                </div>
              </div>
              
              <div className="text-with-icon">
                <FaRobot className="icon-primary" size={30} />
                <div>
                  <h3>Multi-Modal Interactions</h3>
                  <p>Engage with customers through voice, chat, email, SMS, or embedded web experiences—all powered by the same intelligent agent core.</p>
                </div>
              </div>
              
              <div className="text-with-icon">
                <MdOutlineIntegrationInstructions className="icon-primary" size={30} />
                <div>
                  <h3>Autonomous Workflows</h3>
                  <p>Agents can execute complex tasks, access backend systems, make decisions, and complete entire business processes without human intervention.</p>
                </div>
              </div>
            </div>
            <div className="overview-visual" data-aos="fade-left">
              <div className="visual-flow-designer">
                <div className="flow-header">
                  <span className="flow-dot"></span>
                  <span className="flow-dot"></span>
                  <span className="flow-dot"></span>
                  <span className="flow-title">VoxAI Flow Designer</span>
                </div>
                <div className="flow-body">
                  <div className="flow-canvas">
                    <div className="flow-node start-node">
                      <div className="node-icon"><FaRobot /></div>
                      <div className="node-content">
                        <h4>Agent Initialization</h4>
                        <p>"I'm your AI assistant. How can I help?"</p>
                      </div>
                    </div>
                    <div className="flow-connector">
                      <div className="connector-line"></div>
                      <div className="connector-arrow"></div>
                    </div>
                    <div className="flow-node decision-node">
                      <div className="node-icon"><BsQuestionSquare /></div>
                      <div className="node-content">
                        <h4>Intent Recognition</h4>
                        <p>Determine customer need</p>
                      </div>
                    </div>
                    <div className="flow-branches">
                      <div className="flow-branch">
                        <div className="branch-connector">
                          <div className="branch-label">Appointment</div>
                        </div>
                        <div className="flow-node action-node">
                          <div className="node-icon"><BsCalendarCheck /></div>
                          <div className="node-content">
                            <h4>Execute Task</h4>
                            <p>Schedule appointment via API</p>
                          </div>
                        </div>
                      </div>
                      <div className="flow-branch">
                        <div className="branch-connector">
                          <div className="branch-label">Order Status</div>
                        </div>
                        <div className="flow-node action-node">
                          <div className="node-icon"><FaChartBar /></div>
                          <div className="node-content">
                            <h4>Check Order Status</h4>
                          </div>
                        </div>
                      </div>
                      <div className="flow-branch">
                        <div className="branch-connector">
                          <div className="branch-label">Other</div>
                        </div>
                        <div className="flow-node fallback-node">
                          <div className="node-icon"><FaHeadset /></div>
                          <div className="node-content">
                            <h4>Human Handoff</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flow-controls">
                    <div className="flow-tool">Intent</div>
                    <div className="flow-tool">Message</div>
                    <div className="flow-tool">Action</div>
                    <div className="flow-tool">Decision</div>
                    <div className="flow-tool">Integration</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="product-features">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <span className="section-subtitle">FEATURES</span>
            <h2>Powerful Features, Simple Implementation</h2>
            <p>Everything you need to deploy enterprise-grade voice AI</p>
          </div>
          
          <div className="features-grid">
            <div className="feature-card" data-aos="fade-up">
              <div className="feature-icon"><FaTools /></div>
              <h3>Visual Agent Builder</h3>
              <p>Design sophisticated AI agents with our intuitive drag-and-drop interface—no coding required for most use cases.</p>
            </div>
            <div className="feature-card" data-aos="fade-up" data-aos-delay="100">
              <div className="feature-icon"><FaBrain /></div>
              <h3>Goal-Oriented Intelligence</h3>
              <p>Agents understand user objectives, develop multi-step plans, and persistently work to achieve goals through reasoning and adaptation.</p>
            </div>
            <div className="feature-card" data-aos="fade-up" data-aos-delay="200">
              <div className="feature-icon"><MdOutlineIntegrationInstructions /></div>
              <h3>Tool & System Integration</h3>
              <p>Agents can access and orchestrate your business systems including CRMs, databases, payment processors, and API-enabled services.</p>
            </div>
            <div className="feature-card" data-aos="fade-up" data-aos-delay="300">
              <div className="feature-icon"><MdAnalytics /></div>
              <h3>Continuous Learning</h3>
              <p>Agents improve through knowledge acquisition, user interactions, and feedback loops, becoming more effective over time.</p>
            </div>
            <div className="feature-card" data-aos="fade-up" data-aos-delay="400">
              <div className="feature-icon"><FaRegComments /></div>
              <h3>Multi-Channel Deployment</h3>
              <p>Deploy your agents across voice, messaging, web chat, mobile apps, and custom interfaces with consistent capabilities.</p>
            </div>
            <div className="feature-card" data-aos="fade-up" data-aos-delay="500">
              <div className="feature-icon"><BsShieldCheck /></div>
              <h3>Enterprise Security</h3>
              <p>SOC 2 compliant with end-to-end encryption, agent sandboxing, and comprehensive security controls.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="use-cases-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <span className="section-subtitle">USE CASES</span>
            <h2>Industry Solutions</h2>
            <p>How innovative companies are deploying VoxAI Assistant</p>
          </div>
          
          <div className="use-cases-grid">
            <div className="use-case-card" data-aos="fade-up">
              <div className="use-case-industry">FINANCIAL SERVICES</div>
              <h3>Intelligent Financial Assistant</h3>
              <p>AI agents that verify customers, analyze financial positions, provide personalized guidance, execute transactions, and resolve customer inquiries across channels.</p>
              <div className="use-case-result">
                <span>Result:</span> 62% automation rate with 94% customer satisfaction
              </div>
            </div>
            
            <div className="use-case-card" data-aos="fade-up" data-aos-delay="100">
              <div className="use-case-industry">HEALTHCARE</div>
              <h3>Patient Care Coordination</h3>
              <p>Agents that coordinate care journeys, from scheduling to follow-up, integrating with EHR systems and providing 24/7 patient support via preferred channels.</p>
              <div className="use-case-result">
                <span>Result:</span> 73% reduction in administrative workload
              </div>
            </div>
            
            <div className="use-case-card" data-aos="fade-up" data-aos-delay="200">
              <div className="use-case-industry">E-COMMERCE</div>
              <h3>Shopping & Support Agent</h3>
              <p>Conversational agents that assist with product discovery, provide personalized recommendations, process orders, and handle post-purchase service needs.</p>
              <div className="use-case-result">
                <span>Result:</span> 32% increase in conversion rates
              </div>
            </div>
            
            <div className="use-case-card" data-aos="fade-up" data-aos-delay="300">
              <div className="use-case-industry">TELECOMMUNICATIONS</div>
              <h3>Service Lifecycle Management</h3>
              <p>Agents that handle the complete customer journey, from onboarding to technical support, across voice, chat, and self-service portals.</p>
              <div className="use-case-result">
                <span>Result:</span> 47% reduction in service costs
              </div>
            </div>
            
            <div className="use-case-card" data-aos="fade-up" data-aos-delay="400">
              <div className="use-case-industry">IT OPERATIONS</div>
              <h3>Autonomous DevOps Assistant</h3>
              <p>AI agents that monitor systems, diagnose issues, execute remediation steps, and coordinate with human engineers when necessary.</p>
              <div className="use-case-result">
                <span>Result:</span> 83% faster incident resolution
              </div>
            </div>
            
            <div className="use-case-card" data-aos="fade-up" data-aos-delay="500">
              <div className="use-case-industry">HUMAN RESOURCES</div>
              <h3>Employee Experience Agent</h3>
              <p>Agents that handle HR inquiries, guide employees through company processes, and facilitate onboarding and training via chat and voice.</p>
              <div className="use-case-result">
                <span>Result:</span> 40% increase in employee satisfaction with HR
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
            <p>Hear from businesses transforming their customer experience</p>
          </div>
          
          <div className="testimonials-grid">
            <div className="testimonial-card" data-aos="fade-up">
              <div className="testimonial-content">
                <p>VoxAI has transformed our customer service operations. The voice agents handle over 40% of our support calls, and customers frequently ask if they're speaking with a real person.</p>
              </div>
              <div className="testimonial-author">
                <div className="author-info">
                  <h4>Dorris R</h4>
                  <p>Owner, Shopify Ecommerce Stores</p>
                </div>
              </div>
            </div>
            
            <div className="testimonial-card" data-aos="fade-up" data-aos-delay="100">
              <div className="testimonial-content">
                <p>Implementation was remarkably easy. Within 3 weeks, we had customized voice agents handling appointment scheduling and reminders, resulting in significantly fewer no-shows.</p>
              </div>
              <div className="testimonial-author">
                <div className="author-info">
                  <h4>Dr. Shweta</h4>
                  <p>Head, District Hospital</p>
                </div>
              </div>
            </div>
            
            <div className="testimonial-card" data-aos="fade-up" data-aos-delay="200">
              <div className="testimonial-content">
                <p>The ROI was almost immediate. Our call center costs decreased by 35% in the first quarter, while our customer satisfaction scores actually improved. The analytics insights are invaluable.</p>
              </div>
              <div className="testimonial-author">
                <div className="author-info">
                  <h4>Mursaleen Ameen</h4>
                  <p>Senior Manager, Concentrix BPO</p>
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
            <h2>Getting Started is Simple</h2>
            <p>From concept to deployment in weeks, not months</p>
          </div>
          
          <div className="implementation-timeline" data-aos="fade-up">
            <div className="timeline-item">
              <div className="timeline-number">1</div>
              <div className="timeline-content">
                <h3>Discovery & Planning</h3>
                <p>We analyze your needs and identify the ideal use cases for voice AI.</p>
                <span className="timeline-duration">Days 1-3</span>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-number">2</div>
              <div className="timeline-content">
                <h3>Configuration & Integration</h3>
                <p>We configure your voice agents and connect to your existing systems.</p>
                <span className="timeline-duration">Days 4-10</span>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-number">3</div>
              <div className="timeline-content">
                <h3>Testing & Training</h3>
                <p>We rigorously test capabilities and train the AI on your specific scenarios.</p>
                <span className="timeline-duration">Days 11-17</span>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-number">4</div>
              <div className="timeline-content">
                <h3>Launch & Optimization</h3>
                <p>Go live with ongoing monitoring and continuous improvement.</p>
                <span className="timeline-duration">Days 18-30</span>
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
            <p>Everything you need to know about VoxAI Assistant</p>
          </div>
          
          <div className="faq-grid">
            <div className="faq-item" data-aos="fade-up">
              <div className="faq-question">
                <BsQuestionSquare />
                <h3>How intelligent are these agents compared to traditional chatbots?</h3>
              </div>
              <div className="faq-answer">
                <p>VoxAI agents represent a fundamental leap beyond traditional chatbots and IVRs. While conventional systems follow rigid decision trees, our agentic AI can reason about complex problems, form and execute multi-step plans, learn from experiences, and adapt to novel situations. They understand context across long interactions, can use specialized tools and systems to accomplish tasks, and make appropriate decisions with minimal human oversight.</p>
              </div>
            </div>
            
            <div className="faq-item" data-aos="fade-up" data-aos-delay="100">
              <div className="faq-question">
                <BsQuestionSquare />
                <h3>What systems can VoxAI agents integrate with?</h3>
              </div>
              <div className="faq-answer">
                <p>VoxAI agents can integrate with virtually any API-enabled system. We offer pre-built connectors for major platforms including CRMs (Salesforce, Microsoft Dynamics, HubSpot), ticketing systems (Zendesk, ServiceNow), knowledge bases, databases, payment processors, and communication channels. Our agents can access, query, and manipulate data across your tech stack to deliver end-to-end automation of complex workflows.</p>
              </div>
            </div>
            
            <div className="faq-item" data-aos="fade-up" data-aos-delay="200">
              <div className="faq-question">
                <BsQuestionSquare />
                <h3>How do you ensure agents take appropriate actions?</h3>
              </div>
              <div className="faq-answer">
                <p>VoxAI employs multiple safety and quality mechanisms: 1) Agent sandboxing prevents unauthorized actions, 2) Configurable approval workflows require human verification for sensitive operations, 3) Guardrails limit agent capabilities to appropriate domains, 4) Continuous monitoring flags unexpected behaviors, and 5) Fine-tuning on your business rules ensures agents follow your policies. You maintain complete control over what actions agents can take.</p>
              </div>
            </div>
            
            <div className="faq-item" data-aos="fade-up" data-aos-delay="300">
              <div className="faq-question">
                <BsQuestionSquare />
                <h3>What kind of ROI can we expect?</h3>
              </div>
              <div className="faq-answer">
                <p>Most clients see positive ROI within 2-3 months. The average cost reduction for automated workflows is 40-60%, with additional benefits including 24/7 availability, consistent quality, faster processing times, and improved customer satisfaction. Unlike traditional automation that required constant maintenance, our agentic platform improves over time through continuous learning, delivering increasing ROI as it matures.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-card" data-aos="fade-up">
            <h2 style={{color: 'white'}}>Ready to transform business operations with intelligent AI agents?</h2>
            <p>Join leading organizations using VoxAI's Agentic Platform to automate complex workflows and deliver exceptional experiences.</p>
            <div className="cta-buttons">
              <Link to="/contact-us?product=voxai-assistant&type=demo" className="cta-button">
                Schedule a Demo <BsArrowRightShort size={25} />
              </Link>
              <Link to="/contact-us?product=voxai-assistant&type=pricing" className="cta-button secondary">
                Get Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VoxAIAssistant; 