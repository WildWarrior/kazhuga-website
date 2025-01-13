import { FaBullhorn } from 'react-icons/fa';
import aboutImg from '/src/assets/img/about-img.svg';
import aboutExtra1 from '/src/assets/img/about-extra-1.svg';
import aboutExtra2 from '/src/assets/img/about-extra-2.svg';

const About = () => {
  return (
    <>
      <section
        id='about'
        className='about about-1'
      >
        <div className='container'>
          <h2>About Us</h2>
          <div className='flex-row'>
            <div className='left'>
              <p>
                At Kazhuga, we are passionate about enabling organizations to
                become truly data-driven. For over a decade, our team of data
                experts has partnered with leading companies to transform how
                they manage, analyze, and activate data to drive business
                success.
              </p>
              <div className='flex-row'>
                <FaBullhorn
                  className='about-icons'
                  size='50'
                />
                <div className='info'>
                  <h4>Data Experts Driving Growth</h4>
                  <p>
                  At Kazhuga, we specialize in delivering data-driven solutions for the commodities industry
                  and beyond. Our Software and data engineering and analytics services empower businesses to 
                  extract actionable insights and maximize value from their data.

                  </p>
                </div>
              </div>
              <div className='flex-row'>
                <FaBullhorn
                  className='about-icons'
                  size='50'
                />
                <div className='info'>
                  <h4>Strategic Partners in Your Data Journey</h4>
                  <p>
                    Our end-to-end capabilities span data strategy consulting,
                    integration, warehousing, business intelligence, advanced
                    analytics, machine learning, and more. We customize
                    solutions tailored to each client&apos;s unique business
                    objectives and data ecosystem.
                  </p>
                </div>
              </div>
              <div className='flex-row'>
                <FaBullhorn
                  className='about-icons'
                  size='50'
                />
                <div className='info'>
                  <h4>Trusted advisors for Data-Driven Success</h4>
                  <p>
                    With experience across industries from retail to healthcare,
                    Kazhuga delivers proven results in driving data-informed
                    growth and innovation. Our technical excellence combined
                    with strategic perspective enables us to become trusted
                    advisors and partners to every client.
                  </p>
                </div>
              </div>
            </div>
            <div className='right'>
              <img
                src={aboutImg}
                alt=''
              />
            </div>
          </div>
        </div>
      </section>
      <section className='about about-2'>
        <div className='container flex-row'>
          <div className='left'>
            <img
              src={aboutExtra1}
              alt=''
            />
          </div>
          <div className='right'>
            <h3>Expertise Powering Your Data Advantage</h3>
            <p>
              Kazhuga provides industry-leading technical capabilities across
              the latest tools and technologies to enable secure, scalable data
              management, integration, analytics, and machine learning. Our
              expertise spans cloud platforms, data engineering, analytics and
              BI, data science, MLOps, advanced visualization, DataOps, data
              privacy and governance, open source technologies, and R&D. We
              architect cloud-based solutions, develop efficient data pipelines,
              build analytics dashboards and applications, operationalize ML
              models, create intuitive visualizations, implement robust data
              security, and contribute to the open source community. This allows
              us to solve even the most complex data challenges for clients
              seeking to become data-driven organizations.
            </p>
          </div>
        </div>
      </section>
      <section className='about about-3'>
        <div className='container flex-row'>
          <div className='left'>
            <h3>Responsible Data Stewardship</h3>
            <p>
              At Kazhuga, we are committed to ensuring ethics, security, and
              responsible use of data in everything we do. We recognize that
              data is a strategic asset that must be handled with integrity and
              care.
            </p>
            <p>
              Our ethical data practices include transparency in how we collect,
              process and analyze data through clear documentation for clients.
              We implement rigorous governance protocols for access controls and
              data sensitivity. We partner with clients to minimize collection
              of personal data and conduct privacy impact assessments. Our
              analytics techniques reduce bias and promote fairness through
              algorithm auditing. We provide full visibility into model logic,
              limiting &ldquo;black box&ldquo; algorithms. Overall, we adhere to
              regulations and best practices for ethical AI/ML development.
            </p>
            <p>
              On the security side, we invest heavily in systems, technologies
              and staff training to protect client data through robust
              cybersecurity protocols, encryption of data in transit and at
              rest, granular access controls, and ongoing monitoring and
              auditing. We are committed to maintaining the highest standards in
              data ethics, privacy, and security for our clients.
            </p>
          </div>
          <div className='right'>
            <img
              src={aboutExtra2}
              alt=''
            />
          </div>
        </div>
      </section>
    </>
  );
};
export default About;
