import { FaPencilRuler } from 'react-icons/fa';
import { TbBoxModel, TbTransform } from 'react-icons/tb';
import { MdMoveUp } from 'react-icons/md';
import { FaHammer } from 'react-icons/fa6';
import { CgOpenCollective } from 'react-icons/cg';

const DataEngineering = () => {
  return (
    <section
      id='services'
      className='services'
    >
      <div className='container'>
        <h2>Data Engineering</h2>
        <div className='grid'>
          <div className='flex-row'>
            <FaPencilRuler
              size={64}
              className='services-icon pink-text'
            />
            <div className='right'>
              <h3>Data Architecture</h3>
              <p>
                We provide data architecture services that describe how data is
                managed from collection through to transformation, distribution,
                and consumption. It sets the blueprint for data and the way it
                flows through data storage systems.
              </p>
            </div>
          </div>
          <div className='flex-row'>
            <TbBoxModel
              size={64}
              className='services-icon yellow-text'
            />
            <div className='right'>
              <h3>Data Modelling</h3>
              <p>
                Data modeling visualizes data connections, types, and formats to
                meet business needs, integrating stakeholder input for system
                design. It&apos;s a roadmap translating requirements into
                database designs, ensuring consistent data management and
                supporting evolving business strategies and processes.
              </p>
            </div>
          </div>
          <div className='flex-row'>
            <CgOpenCollective
              size={64}
              className='services-icon teal-text'
            />
            <div className='right'>
              <h3>Data Ingestion</h3>
              <p>
                Data ingestion gathers unstructured data from sources like email
                marketing, CRM, and social platforms, funneling it for storage
                and analysis in various formats.
              </p>
              <p>
                Big data ingestion involves batch processing for collective data
                handling and real-time processing, capturing data as it&apos;s
                generated, forming the primary approaches.
              </p>
            </div>
          </div>
          <div className='flex-row'>
            <TbTransform
              size={64}
              className='services-icon green-text'
            />
            <div className='right'>
              <h3>Data Transformation</h3>
              <p>
                Data transformation is the process of converting data from one
                format or structure into another format or structure. It is a
                critical component of larger data processes, including data
                integration and management. Data transformation may include
                changing the values within the data, such as financial metrics
                within a data table.
              </p>
            </div>
          </div>
          <div className='flex-row'>
            <FaHammer
              size={64}
              className='services-icon limeGreen-text'
            />
            <div className='right'>
              <h3>Data Lake/Lake House implementation</h3>
              <p>
                Data lakes store all data types at scale, offering flexibility
                for raw data exploration. Conversely, a data lake house combines
                the lake&apos;s scalability with a data warehouse&apos;s
                structure and reliability. Our expertise extends to diverse
                lakehouse formats for implementation.
              </p>
            </div>
          </div>
          <div className='flex-row'>
            <MdMoveUp
              size={64}
              className='services-icon blue-text'
            />
            <div className='right'>
              <h3>Data Migration</h3>
              <p>
                Migrating data from on-premises to the cloud can be a complex
                process that requires careful planning and execution. There are
                several factors to consider, such as the type of data
                you&apos;re migrating, the size of your data set, and the
                network resources available.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default DataEngineering;
