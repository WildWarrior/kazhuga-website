import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Leadership from './components/Leadership';
import CTRMServices from './components/CTRM/ctrm';
import BlogList from './components/blog/BlogList';
import BlogPost from './components/blog/BlogPost';
import BlogAdmin from './components/blog/BlogAdmin';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './components/Login';
import ContactUs from './components/ContactUs';
import LandingPage from './components/Landing';
import Careers from './components/Careers';
import PrivacyPolicy from './components/PrivacyPolicy';
import SuccessStories from './components/SuccessStories';
import Partners from './components/Partners';
import NLQAnalytics from './components/products/NLQAnalytics';
import KazStackDataHub from './components/products/KazStackDataHub';
import GasTariffAI from './components/products/GasTariffAI';
import VoxAIAssistant from './components/products/VoxAIAssistant';

function App() {
  return (
    <>
      <Header />

      <main>
        <Routes>
          <Route
            path='/login'
            element={<Login />}
          />
          <Route
            path='/admin/case-studies'
            element={
              <ProtectedRoute>
                <BlogAdmin />
              </ProtectedRoute>
            }
          />
          <Route
            path='/digital-transformation'
            element={<Home />}
          />
          <Route
            path='/leadership'
            element={<Leadership />}
          />
          <Route
            path='/ctrm-services'
            element={<CTRMServices />}
          />
          <Route
            path='/case-studies'
            element={<BlogList />}
          />
          <Route
            path='/case-studies/:id'
            element={<BlogPost />}
          />
          <Route
            path='/contact-us'
            element={<ContactUs />}
          />
          <Route
            path='/home'
            element={<LandingPage />}
          />
          <Route
            path='/success-stories'
            element={<SuccessStories />}
          />
          <Route
            path='/partners'
            element={<Partners />}
          />
          <Route
            path='/'
            element={<LandingPage />}
          />
          <Route path="/careers" element={<Careers />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route
            path='/products/nlq-analytics'
            element={<NLQAnalytics />}
          />
          <Route
            path='/products/kazstack-data-hub'
            element={<KazStackDataHub />}
          />
          <Route
            path='/products/gastariff-ai'
            element={<GasTariffAI />}
          />
          <Route
            path='/products/voxai-assistant'
            element={<VoxAIAssistant />}
          />
        </Routes>
      </main>

      <Footer />
    </> 
  );
}

export default App;
