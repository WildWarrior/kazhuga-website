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
import { AuthProvider } from './context/AuthContext';
import Login from './components/Login';
import ContactUs from './components/ContactUs';
import LandingPage from './components/Landing';
import Careers from './components/Careers';

function App() {
  return (
    <AuthProvider>
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
            path='/'
            element={<LandingPage />}
          />
          <Route path="/careers" element={<Careers />} />
        </Routes>
      </main>

      <Footer />
    </AuthProvider>
  );
}

export default App;
