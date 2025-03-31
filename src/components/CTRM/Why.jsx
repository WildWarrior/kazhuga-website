import { FaPencilAlt, FaSearch } from 'react-icons/fa';
import { GiNetworkBars } from 'react-icons/gi';

const Why = () => {
  return (
    <section className='why'>
      <div className='container'>
        <h2>Why Choose Us?</h2>
        <div className='flex-row write-up'>
          <div className='col'>
            <FaPencilAlt
              size='50'
              className='why-icons'
            />
            <h3>Proven Track Record of Success</h3>
            <p>
              With over a decade in business and successful client engagements
              delivered, Kazhuga has a strong track record of driving tangible
              business outcomes through data-informed solutions. Our case
              studies demonstrate clear ROI and impact across industries.
              Clients can trust our experience delivering data analytics
              projects on-time, on-budget, and aligned to their KPIs.
            </p>
            {/* <span>Read More</span> */}
          </div>
          <div className='col'>
            <GiNetworkBars
              size='50'
              className='why-icons'
            />
            <h3>Full Range of Services</h3>
            <p>
              Kazhuga provides complete end-to-end services, from data strategy
              consulting to managed analytics. Our expertise spans data
              engineering, data science, BI, advanced analytics, and more. This
              integrated approach allows us to customize solutions tailored to
              each client&apos;s specific data challenges and goals. We become
              trusted partners on our client&apos;s data journey.
            </p>
            {/* <span>Read More</span> */}
          </div>
          <div className='col'>
            <FaSearch
              size='50'
              className='why-icons'
            />
            <h3>Technical Excellence</h3>
            <p>
              Our team comprises highly seasoned data scientists, data
              engineers, and consultants with deep expertise across the latest
              tools and technologies. Kazhuga stays on the cutting edge of the
              data landscape through R&D and contributions back to the open
              source community. Our technical capabilities allow us to solve
              even the most complex data problems.
            </p>
            {/* <span>Read More</span> */}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Why;
