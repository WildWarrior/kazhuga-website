// import Header from './Header';
import Hero from './Hero';
import About from './About';
import Services from './Services';
import Why from './Why';
import ContactUs from './ContactUs';
import { Helmet } from 'react-helmet-async';
// import Footer from './Footer';

function CTRM() {
  return (
    <>
      <Helmet>
        <title>CTRM and ETRM Services</title>
        <meta name="title" content="CTRM and ETRM Services" />
        <meta name="description" content="Expert CTRM and ETRM consulting services including system implementation, integration and optimization for commodity trading firms." />
        <meta property="og:title" content="CTRM and ETRM Services" />
        <meta property="og:description" content="Expert CTRM and ETRM consulting services including system implementation, integration and optimization for commodity trading firms." />
        <meta property="twitter:title" content="CTRM and ETRM Services" />
        <meta property="twitter:description" content="Expert CTRM and ETRM consulting services including system implementation, integration and optimization for commodity trading firms." />
      </Helmet>
      {/* <Header /> */}
      <Hero />
      <About />
      <Services />
      <Why />
      {/* <Footer /> */}
    </>
  );
}

export default CTRM;
