import { useState } from 'react';
import { FaBriefcase, FaGraduationCap, FaUsers, FaRocket } from 'react-icons/fa';

const Careers = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  const jobOpenings = [
    {
      id: 1,
      title: "Senior Data Scientist",
      department: "technology",
      location: "Bengaluru, India",
      type: "Full-time",
      experience: "5-8 years",
      description: "We're looking for a Senior Data Scientist to join our AI & Machine Learning team. You'll work on developing advanced analytics solutions for commodity trading.",
      requirements: [
        "Masters/PhD in Computer Science, Statistics, or related field",
        "Strong experience with machine learning algorithms and statistical modeling",
        "Expertise in Python, R, and data visualization tools",
        "Experience in commodity trading analytics is a plus"
      ]
    },
    {
      id: 2,
      title: "CTRM Consultant",
      department: "consulting",
      location: "Bengaluru, India",
      type: "Full-time",
      experience: "3-6 years",
      description: "Join our CTRM consulting team to help clients optimize their trading and risk management processes.",
      requirements: [
        "Bachelor's degree in Business, Finance, or related field",
        "Experience with major CTRM systems",
        "Strong understanding of commodity trading workflows",
        "Excellent client communication skills"
      ]
    },
    {
      id: 3,
      title: "Cloud Solutions Architect",
      department: "technology",
      location: "Bengaluru, India",
      type: "Full-time",
      experience: "4-7 years",
      description: "Design and implement cloud-based solutions for our clients' digital transformation journey.",
      requirements: [
        "AWS/Azure/GCP certification",
        "Experience with cloud architecture and migration",
        "Knowledge of containerization and microservices",
        "Strong problem-solving skills"
      ]
    }
  ];

  const filteredJobs = selectedDepartment === 'all' 
    ? jobOpenings 
    : jobOpenings.filter(job => job.department === selectedDepartment);

  return (
    <div className="careers-page">
      {/* Hero Section */}
      <section className="careers-hero">
        <div className="container">
          <h1>Join Our Team</h1>
          <p>Build the future of Digital Tranformation and Commodity trading technology with us</p>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="why-join-us">
        <div className="container">
          <h2>Why Join Kazhuga?</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <FaRocket className="benefit-icon" />
              <h3>Innovation First</h3>
              <p>Work with cutting-edge technologies and shape the future of trading</p>
            </div>
            <div className="benefit-card">
              <FaUsers className="benefit-icon" />
              <h3>Great Culture</h3>
              <p>Join a diverse, collaborative team that values your unique perspective</p>
            </div>
            <div className="benefit-card">
              <FaGraduationCap className="benefit-icon" />
              <h3>Learning & Growth</h3>
              <p>Continuous learning opportunities and career development support</p>
            </div>
            <div className="benefit-card">
              <FaBriefcase className="benefit-icon" />
              <h3>Work-Life Balance</h3>
              <p>Flexible work arrangements and competitive benefits package</p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="open-positions">
        <div className="container">
          <h2>Open Positions</h2>
          
          {/* Department Filter */}
          <div className="department-filter">
            <button 
              className={selectedDepartment === 'all' ? 'active' : ''} 
              onClick={() => setSelectedDepartment('all')}
            >
              All Departments
            </button>
            <button 
              className={selectedDepartment === 'technology' ? 'active' : ''} 
              onClick={() => setSelectedDepartment('technology')}
            >
              Technology
            </button>
            <button 
              className={selectedDepartment === 'consulting' ? 'active' : ''} 
              onClick={() => setSelectedDepartment('consulting')}
            >
              Consulting
            </button>
          </div>

          {/* Job Listings */}
          <div className="job-listings">
            {filteredJobs.map(job => (
              <div key={job.id} className="job-card">
                <div className="job-header">
                  <h3>{job.title}</h3>
                  <span className="job-type">{job.type}</span>
                </div>
                <div className="job-details">
                  <p className="job-location">📍 {job.location}</p>
                  <p className="job-experience">👔 {job.experience}</p>
                </div>
                <p className="job-description">{job.description}</p>
                <div className="job-requirements">
                  <h4>Requirements:</h4>
                  <ul>
                    {job.requirements.map((req, index) => (
                      <li key={index}>{req}</li>
                    ))}
                  </ul>
                </div>
                <br></br>
                <div className="apply-info">
                  <p>To apply, please send your CV to:</p>
                  <a href="mailto:info@kazhuga.com" className="email-link">
                    info@kazhuga.com
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers; 