import { FaConnectdevelop } from 'react-icons/fa';
import { TbReport, TbTransform, TbSettingsExclamation } from 'react-icons/tb';
import {
  MdMoveUp,
  MdDashboardCustomize,
  MdOutlineElectricalServices,
} from 'react-icons/md';
import { FaHammer } from 'react-icons/fa6';
import { CgOpenCollective } from 'react-icons/cg';

const Services = () => {
  return (
    <section
      id='services'
      className='services'
    >
      <div className='container'>
        <h2>Our Services</h2>
        <div className='grid'>
          <div className='flex-row'>
            <TbSettingsExclamation
              size={64}
              className='services-icon pink-text'
            />
            <div className='right'>
              <h3>Risk Analysis and Mitigation</h3>
              <p>
                Conducting comprehensive risk assessments to identify potential
                vulnerabilities and implementing strategies to mitigate risks in
                energy trading operations.
              </p>
            </div>
          </div>
          <div className='flex-row'>
            <FaConnectdevelop
              size={64}
              className='services-icon yellow-text'
            />
            <div className='right'>
              <h3>Market Analysis and Strategy Development</h3>
              <p>
                Providing insights into market trends, competitor analysis, and
                helping clients develop effective trading strategies to optimize
                their positions.
              </p>
            </div>
          </div>
          <div className='flex-row'>
            <CgOpenCollective
              size={64}
              className='services-icon teal-text'
            />
            <div className='right'>
              <h3>Regulatory Compliance</h3>
              <p>
                Ensuring clients adhere to industry regulations and standards by
                implementing compliance frameworks and assisting in regulatory
                reporting.
              </p>
            </div>
          </div>
          <div className='flex-row'>
            <TbTransform
              size={64}
              className='services-icon green-text'
            />
            <div className='right'>
              <h3>System Integration and Upgrades</h3>
              <p>
                Integrating Various enterprise applications, as well as managing
                system upgrades to enhance functionality and efficiency.
              </p>
            </div>
          </div>
          <div className='flex-row'>
            <FaHammer
              size={64}
              className='services-icon limeGreen-text'
            />
            <div className='right'>
              <h3>Training and Support</h3>
              <p>
                Offering training programs for staff on Business Technology
                usage, along with ongoing support to address any issues and
                ensure smooth operation.
              </p>
            </div>
          </div>
          <div className='flex-row'>
            <MdMoveUp
              size={64}
              className='services-icon blue-text'
            />
            <div className='right'>
              <h3>Business Process Optimization</h3>
              <p>
                Streamlining and optimizing trading and risk management
                processes to improve operational efficiency and reduce costs.
              </p>
            </div>
          </div>
          <div className='flex-row'>
            <TbReport
              size={64}
              className='services-icon teal-text'
            />
            <div className='right'>
              <h3>Data Analytics and Reporting</h3>
              <p>
                Implementing advanced analytics solutions to help clients
                leverage data for informed decision-making and generating
                comprehensive reports.
              </p>
            </div>
          </div>
          <div className='flex-row'>
            <MdDashboardCustomize
              size={64}
              className='services-icon green-text'
            />
            <div className='right'>
              <h3>Customization and Tailoring</h3>
              <p>
                Customizing Commodities and Risk management solutions to align
                with the unique requirements and workflows of each client,
                ensuring a seamless fit with their business operations.
              </p>
            </div>
          </div>
          <div className='flex-row'>
            <MdOutlineElectricalServices
              size={64}
              className='services-icon blue-text'
            />
            <div className='right'>
              <h3>Technology Advisory Services</h3>
              <p>
                Providing strategic guidance on technology adoption, innovation,
                and digital transformation within the Commodities domain.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Services;
