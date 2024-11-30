import { MdAnalytics, MdOutlineAnalytics } from 'react-icons/md';
import { IoAnalyticsSharp } from 'react-icons/io5';
import { TbDeviceAnalytics } from 'react-icons/tb';
import { TbDeviceDesktopAnalytics } from 'react-icons/tb';
import { GiMining } from 'react-icons/gi';

const DataAnalytics = () => {
  return (
    <section
      id=''
      className='services'
    >
      <div className='container'>
        <h2>Data Analytics</h2>
        <div className='grid'>
          <div className='flex-row'>
            <MdAnalytics
              size={64}
              className='services-icon pink-text'
            />
            <div className='right'>
              <h3>Descriptive Analytics</h3>
              <p>
                Analyzing past trends, patterns, and behaviors in data to
                understand what happened and why it occurred.
              </p>
            </div>
          </div>
          <div className='flex-row'>
            <MdOutlineAnalytics
              size={64}
              className='services-icon yellow-text'
            />
            <div className='right'>
              <h3>Diagnostic Analytics</h3>
              <p>
                Conducting deeper analysis into past data to identify the root
                causes behind observed trends and phenomena.
              </p>
            </div>
          </div>
          <div className='flex-row'>
            <IoAnalyticsSharp
              size={64}
              className='services-icon teal-text'
            />
            <div className='right'>
              <h3>Predictive Analytics</h3>
              <p>
                Using statistical models, machine learning algorithms, and other
                techniques to make data-driven predictions about future
                outcomes.
              </p>
            </div>
          </div>
          <div className='flex-row'>
            <TbDeviceAnalytics
              size={64}
              className='services-icon green-text'
            />
            <div className='right'>
              <h3>Prescriptive Analytics</h3>
              <p>
                Recommending specific actions to take based on insights derived
                from predictive analytics and decision science techniques.
              </p>
            </div>
          </div>
          <div className='flex-row'>
            <TbDeviceDesktopAnalytics
              size={64}
              className='services-icon limeGreen-text'
            />
            <div className='right'>
              <h3>Big Data Analytics</h3>
              <p>
                Analyzing high volumes, velocities, and varieties of structured
                and unstructured data from different sources to uncover
                insights.
              </p>
            </div>
          </div>
          <div className='flex-row'>
            <GiMining
              size={64}
              className='services-icon blue-text'
            />
            <div className='right'>
              <h3>Data Mining</h3>
              <p>
                Searching large datasets to identify trends, patterns,
                correlations, and other useful business insights that can inform
                decisions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default DataAnalytics;
