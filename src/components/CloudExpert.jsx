import { FaCloud, FaLock, FaNetworkWired } from 'react-icons/fa';
import { MdStorage, MdSecurity } from 'react-icons/md';
import { SiKubernetes } from 'react-icons/si';

const CloudExpert = () => {
  return (
    <section id='cloud-expert' className='services'>
      <div className='container'>
        <h2>Cloud Expert Services</h2>
        <div className='grid'>
          <div className='flex-row'>
            <FaCloud
              size={64}
              className='services-icon pink-text'
            />
            <div className='right'>
              <h3>Cloud Architecture & Strategy</h3>
              <p>
                Enterprise cloud architecture design and migration strategies for 
                AWS, Azure, and GCP. Multi-cloud and hybrid cloud solutions with 
                focus on scalability, reliability, and cost optimization.
              </p>
            </div>
          </div>

          <div className='flex-row'>
            <SiKubernetes
              size={64}
              className='services-icon yellow-text'
            />
            <div className='right'>
              <h3>Container Orchestration</h3>
              <p>
                Kubernetes deployment and management for containerized applications. 
                Microservices architecture implementation, container security, and 
                automated scaling solutions.
              </p>
            </div>
          </div>

          <div className='flex-row'>
            <MdStorage
              size={64}
              className='services-icon teal-text'
            />
            <div className='right'>
              <h3>Cloud Data Solutions</h3>
              <p>
                Cloud-native data storage, processing, and analytics solutions. 
                Implementation of data lakes, warehouses, and real-time processing 
                pipelines using cloud services.
              </p>
            </div>
          </div>

          <div className='flex-row'>
            <FaNetworkWired
              size={64}
              className='services-icon green-text'
            />
            <div className='right'>
              <h3>Cloud Infrastructure</h3>
              <p>
                Infrastructure as Code (IaC) implementation using Terraform, 
                CloudFormation, and Ansible. Automated deployment and management 
                of cloud resources and services.
              </p>
            </div>
          </div>

          <div className='flex-row'>
            <MdSecurity
              size={64}
              className='services-icon limeGreen-text'
            />
            <div className='right'>
              <h3>Cloud Security</h3>
              <p>
                Comprehensive cloud security solutions including identity management, 
                encryption, compliance, and threat detection. Implementation of 
                security best practices and frameworks.
              </p>
            </div>
          </div>

          <div className='flex-row'>
            <FaLock
              size={64}
              className='services-icon blue-text'
            />
            <div className='right'>
              <h3>DevSecOps</h3>
              <p>
                Integration of security practices into DevOps pipelines. Automated 
                security testing, compliance monitoring, and vulnerability management 
                in cloud environments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CloudExpert; 