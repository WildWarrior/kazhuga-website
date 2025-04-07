import { FaChartLine, FaRobot, FaCloud, FaExchangeAlt, FaDatabase, FaServer, FaTimes, FaWarehouse, FaBrain } from 'react-icons/fa';
import { BsChatDots } from 'react-icons/bs';
import successVideo from '../assets/videos/success.mp4';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';

export const caseStudies = [
  {
    id: 1,
    icon: <BsChatDots />,
    title: "Agentic AI-Powered Trading Analytics Platform",
    shortDesc: "Natural language interface for complex trading data analysis",
    fullContent: {
      challenge: "A leading energy trading firm needed an intuitive solution for front and middle office users to access and analyze complex trading and risk management data without requiring technical query expertise. Traditional reporting methods were time-consuming and required specialized knowledge of query languages.",
      solution: [
        "Developed conversational AI interface enabling natural language queries",
        "Implemented advanced NLP for understanding complex trading terminology",
        "Created intelligent query parsing and optimization engine",
        "Built real-time data visualization and analytics dashboard",
        "Integrated with existing trading and risk management systems",
        "Implemented machine learning for predictive analytics and trend identification",
        "Added contextual awareness for understanding user intent and preferences"
      ],
      impact: {
        metrics: [
          { value: "85%", label: "Query Time Reduction" },
          { value: "95%", label: "User Adoption Rate" },
          { value: "60%", label: "Operational Efficiency Increase" }
        ]
      }
    }
  },
  {
    id: 2,
    icon: <FaServer />,
    title: "Lead Management System for Global Banking",
    shortDesc: "Streamlined data collection and processing for global banking operations",
    fullContent: {
      challenge: "A leading British multinational bank struggled with inefficient manual lead management processes. Their agents were collecting incomplete customer information during city visits, resulting in delayed processing and missed opportunities.",
      solution: [
        "Developed mobile app interface for streamlined data collection",
        "Implemented Kafka for real-time data processing and enrichment",
        "Utilized Spark for high-performance data processing",
        "Integrated HBase/Solr for efficient data storage and retrieval",
        "Built automated agent assignment and DND compliance system"
      ],
      impact: {
        metrics: [
          { value: "95%", label: "Processing Time Reduction" },
          { value: "100%", label: "Global Implementation" },
          { value: "80%", label: "Data Quality Improvement" }
        ]
      }
    }
  },
  {
    id: 3,
    icon: <FaWarehouse />,
    title: "Inventory Optimization System",
    shortDesc: "AI-powered inventory management for automotive parts provider",
    fullContent: {
      challenge: "An American automotive parts provider struggled with inventory optimization across 5000 stores. Their legacy systems took 15 grueling days just to query inventory data, leading to frequent stockouts and poor customer service.",
      solution: [
        "Built modern big data pipelines to rapidly ingest, process, and analyze inventory data",
        "Implemented machine learning for demand forecasting",
        "Provided store stocking recommendations based on seasonal needs",
        "Prevented stockouts through predictive analytics",
        "Implemented solution on AWS leveraging Airflow for workflow orchestration",
        "Used Spark processing on EMR clusters for weekly batch pipeline",
        "Created automated monitoring and alerting system"
      ],
      impact: {
        metrics: [
          { value: "80%", label: "Processing Time Reduction" },
          { value: "36hrs", label: "New Processing Time" },
          { value: "5000+", label: "Stores Optimized" }
        ]
      }
    }
  },
  {
    id: 4,
    icon: <FaExchangeAlt />,
    title: "Power Swap Trading Platform Migration",
    shortDesc: "Migration strategy for seamless transition from Allegro to OpenLink Endur",
    fullContent: {
      challenge: "A major energy trading firm needed to migrate their power swap trading operations from Allegro to OpenLink Endur while ensuring zero business disruption and maintaining data integrity.",
      solution: [
        "Designed comprehensive migration strategy with detailed mapping",
        "Developed custom ETL tools for legacy data transformation",
        "Implemented enhanced trading workflows in OpenLink Endur",
        "Created automated data validation and reconciliation processes",
        "Conducted parallel runs to ensure accuracy and performance"
      ],
      impact: {
        metrics: [
          { value: "100%", label: "Zero-downtime Migration" },
          { value: "30%", label: "Trading Workflow Efficiency Improvement" },
          { value: "100%", label: "Data Integrity Maintenance" }
        ]
      }
    }
  },
  {
    id: 5,
    icon: <FaRobot />,
    title: "AI-Powered Energy Trading Analytics",
    shortDesc: "Intuitive solution for front and middle office users to access and analyze complex trading data",
    fullContent: {
      challenge: "Energy trading firm needed an intuitive solution for front and middle office users to access and analyze complex trading data without requiring technical query expertise.",
      solution: [
        "Developed conversational AI interface for natural language queries",
        "Implemented advanced NLP for query interpretation and optimization",
        "Created real-time data visualization and analytics dashboard",
        "Built seamless integration with existing trading systems",
        "Incorporated machine learning for predictive analytics"
      ],
      impact: {
        metrics: [
          { value: "70%", label: "Report Generation Time Reduction" },
          { value: "85%", label: "Data Accessibility Improvement" },
          { value: "100%", label: "Decision-Making Support" }
        ]
      }
    }
  },
  {
    id: 6,
    icon: <FaCloud />,
    title: "AWS-Endur Analytics Integration",
    shortDesc: "Advanced analytics capabilities for OpenLink Endur process logs",
    fullContent: {
      challenge: "A global trading firm needed advanced analytics capabilities for OpenLink Endur process logs to optimize system performance and trading operations.",
      solution: [
        "Designed cloud-native analytics pipeline using AWS services",
        "Implemented real-time log processing and analysis",
        "Developed custom monitoring dashboards",
        "Created predictive maintenance system",
        "Built automated alerting and reporting mechanisms"
      ],
      impact: {
        metrics: [
          { value: "40%", label: "System Performance Improvement" },
          { value: "60%", label: "System Downtime Reduction" },
          { value: "100%", label: "Real-time Visibility" }
        ]
      }
    }
  },
  {
    id: 7,
    icon: <FaBrain />,
    title: "Intelligent Insurance Support Voice Bot",
    shortDesc: "AI-powered voice bot for enhanced post-purchase customer support",
    fullContent: {
      challenge: "A US-based insurance provider needed to enhance post-purchase customer support while reducing operational costs and maintaining service quality.",
      solution: [
        "Developed AI-powered voice bot with natural language understanding",
        "Implemented seamless integration with customer database",
        "Created intelligent call routing and escalation system",
        "Built multi-language support capabilities",
        "Designed conversational flow optimization"
      ],
      impact: {
        metrics: [
          { value: "50%", label: "Support Operational Costs Reduction" },
          { value: "90%", label: "Customer Satisfaction Rate" },
          { value: "24/7", label: "Support Availability" }
        ]
      }
    }
  }
];

const SuccessStories = () => {
  const [selectedCase, setSelectedCase] = useState(null);
  const [activeCardId, setActiveCardId] = useState(null);
  
  const toggleCard = (id) => {
    setActiveCardId(activeCardId === id ? null : id);
  };

  return (
    <>
      <Helmet>
        <title>Success Stories - Kazhuga</title>
        <meta name="title" content="Success Stories" />
        <meta name="description" content="Discover how Kazhuga has helped organizations transform their operations with Data and AI Solutions, delivering exceptional results across Trading, Banking, and Enterprise Systems." />
        <meta property="og:title" content="Success Stories" />
        <meta property="og:description" content="Discover how Kazhuga has helped organizations transform their operations with Data and AI Solutions, delivering exceptional results across Trading, Banking, and Enterprise Systems." />
        <meta property="twitter:title" content="Success Stories" />
        <meta property="twitter:description" content="Discover how Kazhuga has helped organizations transform their operations with Data and AI Solutions, delivering exceptional results across Trading, Banking, and Enterprise Systems." />
      </Helmet>
      
      <section className='hero'>
        <video
          className='video-background'
          autoPlay
          muted
          loop
        >
          <source
            src={successVideo}
            type='video/mp4'
          />
          Your browser does not support HTML5 video.
        </video>
        <div className='overlay'></div>
        <div className='hero-content'>
          <h1 className='hero-heading'>Customer Success Stories</h1>
          <p className='sub-heading'>
            Discover how we've helped organizations transform their operations with
            <span className='highlight' style={{color: '#0552fa'}}> Data and AI Solutions</span>, delivering
            exceptional results across
            <span className='highlight' style={{color: '#0552fa'}}>
              {' '}
              Trading, Banking, and Enterprise Systems
            </span>
          </p>
        </div>
      </section>
      
      <section className='success-stories-page'>
        <div className='container'>
          <div className="section-header">
            
            <div className="title-underline"></div>
          </div>
          
          {/* Case Studies Grid */}
          <div className='case-studies-grid'>
            {caseStudies.map((caseStudy) => (
              <div 
                key={caseStudy.id} 
                className={`case-study ${activeCardId === caseStudy.id ? 'active' : ''}`}
              >
                <div className="case-header" onClick={() => toggleCard(caseStudy.id)}>
                  <div className="case-icon">
                    {caseStudy.icon}
                  </div>
                  <h3>{caseStudy.title}</h3>
                </div>
                
                <div className="case-content">
                  <div className="challenge">
                    <h4>Business Challenge</h4>
                    <p>{caseStudy.fullContent.challenge}</p>
                  </div>
                  
                  <div className="solution">
                    <h4>Our Solution</h4>
                    <ul>
                      {caseStudy.fullContent.solution.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="results">
                    <h4>Impact Delivered</h4>
                    <div className="metrics-grid">
                      {caseStudy.fullContent.impact.metrics.map((metric, index) => (
                        <div key={index} className="metric">
                          <span className="metric-value">{metric.value}</span>
                          <span className="metric-label">{metric.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popup remains the same */}
      {/* ... existing popup code ... */}
    </>
  );
};

export default SuccessStories;
