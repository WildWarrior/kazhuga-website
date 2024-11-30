import { MdOutlineDashboard, MdNotificationsActive } from 'react-icons/md';
import { IoAnalytics } from 'react-icons/io5';
import { IoIosAnalytics } from 'react-icons/io';
import { HiOutlineClipboardDocumentList } from 'react-icons/hi2';
import { FcSelfServiceKiosk } from 'react-icons/fc';

const BusinessIntelligence = () => {
  return (
    <section
      id=''
      className='services'
    >
      <div className='container'>
        <h2>Business Intelligence</h2>
        <div className='grid'>
          <div className='flex-row'>
            <MdOutlineDashboard
              size={64}
              className='services-icon pink-text'
            />
            <div className='right'>
              <h3>Interactive Dashboards</h3>
              <p>
                Visual dashboards to monitor KPIs, track metrics, and get
                real-time insights into business performance.
              </p>
            </div>
          </div>
          <div className='flex-row'>
            <HiOutlineClipboardDocumentList
              size={64}
              className='services-icon yellow-text'
            />
            <div className='right'>
              <h3>Ad Hoc Reporting</h3>
              <p>
                On-demand reports to analyze trends, drill into details, and
                answer business questions as they arise.
              </p>
            </div>
          </div>
          <div className='flex-row'>
            <FcSelfServiceKiosk
              size={64}
              className='services-icon teal-text'
            />
            <div className='right'>
              <h3>End User Self Service</h3>
              <p>
                Empowering business users to access, analyze, visualize and
                share data without IT support.
              </p>
            </div>
          </div>
          <div className='flex-row'>
            <MdNotificationsActive
              size={64}
              className='services-icon green-text'
            />
            <div className='right'>
              <h3>Alerts and Notifications</h3>
              <p>
                With a short summary for each that could be displayed on a
                website: Proactive alerts to notify users about thresholds being
                crossed, anomalies, or critical events.
              </p>
            </div>
          </div>
          <div className='flex-row'>
            <IoIosAnalytics
              size={64}
              className='services-icon limeGreen-text'
            />
            <div className='right'>
              <h3>Embedded Analytics</h3>
              <p>
                Integrating analytics directly into business processes and
                applications to drive insights.
              </p>
            </div>
          </div>
          <div className='flex-row'>
            <IoAnalytics
              size={64}
              className='services-icon blue-text'
            />
            <div className='right'>
              <h3>Advanced Analytics</h3>
              <p>
                Statistical models, machine learning, and predictive techniques
                to uncover deeper data insights.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default BusinessIntelligence;
