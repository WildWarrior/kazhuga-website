import DataEngineering from './DataEngineering';
import BusinessIntelligence from './BusinessIntelligence';
import DataAnalytics from './DataAnalytics';
import CloudExpert from './CloudExpert';
import AdvancedAI from './AdvancedAI';

const Services = () => {
  return (
    <div className="services-container">
      <DataEngineering />
      <AdvancedAI />
      <CloudExpert />
      <BusinessIntelligence />
      <DataAnalytics />
    </div>
  );
};

export default Services;
