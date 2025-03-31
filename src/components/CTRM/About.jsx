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
                Kazhuga specializes in solving complex business and tech
                challenges for commodity-centric organizations. We offer
                extensive expertise to streamline managing various commodities,
                from crude and natural gas to agriculture and freight. At
                Kazhuga, we prioritize creating effortless client relationships
                and delivering refined solutions to intricate problems.
              </p>
              <div className='flex-row'>
                <FaBullhorn
                  className='about-icons'
                  size='50'
                />
                <div className='info'>
                  <h4>We&apos;re sure of a better way</h4>
                  <p>
                    Kazhuga embodies an <em>Innovator’s Mindset</em>,
                    prioritizing client satisfaction, continuous improvement,
                    and creating value through innovation and growth. Ingenuity
                    for Business Challenges. The expert partner for complex
                    business needs, from CTRM to advanced environment deployment
                    like RightAngle and Allegro, delivering agile solutions and
                    industry expertise.
                  </p>
                </div>
              </div>
              <div className='flex-row'>
                <FaBullhorn
                  className='about-icons'
                  size='50'
                />
                <div className='info'>
                  <h4>Unmatched Industry Expertise</h4>
                  <p>
                    Kazhuga&apos;s seasoned experts offer unmatched commodities
                    industry experience, backed by a specialized team. We
                    optimize processes, ensuring transparency, efficiency, and
                    better returns on your IT investments.
                  </p>
                </div>
              </div>
              <div className='flex-row'>
                <FaBullhorn
                  className='about-icons'
                  size='50'
                />
                <div className='info'>
                  <h4>Fueling Technological Innovation</h4>
                  <p>
                    Kazhuga pioneers tech innovation in commodities, using
                    real-world expertise to improve processes. We offer tailored
                    IT solutions, ensuring certainty and support.
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
            <h3>Global Energy Solutions: Delivering Excellence</h3>
            <p>
              Kazhuga, a technology solutions company, serves major energy
              clients across North America, Europe, and Asia. Our commitment to
              creating impactful solutions is reflected in our track record of
              on-time, on-budget project execution. Through a client-focused
              approach and knowledge transfer, Kazhuga ensures accurate delivery
              from the outset.
            </p>
          </div>
        </div>
      </section>
      <section className='about about-3'>
        <div className='container flex-row'>
          <div className='left'>
            <h3>Fueling Technological Innovation</h3>
            <p>
              We&apos;re committed to simplifying commodity management and
              creating solutions that maximize trading and risk system value.
              Through our structured business modeling, we uncover the details
              of your key scenarios, enabling streamlined transactions, process
              automation, and improved data transparency company-wide.
            </p>
            <p>
              We specialize in CTRM implementations, system selections, and
              software upgrades, offering profound expertise to our clients. Our
              mastery spans critical business functions like risk management,
              trading, distribution, accounting, credit management, compliance,
              and reporting. Leveraging our technical prowess, we craft custom
              extensions and tailored solutions that significantly enhance data
              flow and streamline business operations.
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
