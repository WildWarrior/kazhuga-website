import Hero from './Hero';
import About from './About';
import Services from './Services';
import Why from './Why';
import SuccessStories from './SuccessStories';
import ContactUs from './ContactUs';
import { Helmet } from 'react-helmet-async';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Digital Transformation</title>
        <meta name="title" content="Digital Transformation Services" />
        <meta name="description" content="Leading digital transformation services for commodity, Energy and other firms. Data strategy, AI solutions, and advanced analytics for business growth." />
        <meta property="og:title" content="Digital Transformation Services" />
        <meta property="og:description" content="Leading digital transformation services for commodity firms. Data strategy, AI solutions, and advanced analytics for business growth." />
        <meta property="twitter:title" content="Digital Transformation Services" />
        <meta property="twitter:description" content="Leading digital transformation services for commodity firms. Data strategy, AI solutions, and advanced analytics for business growth." />
      </Helmet>
      <Hero />
      <About />
      <Services />
      <Why />
      {/* <SuccessStories /> */}
    </>
  );
};

export default Home; 