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
            path='/'
            element={<Home />}
          />
          <Route
            path='/leadership'
            element={<Leadership />}
          />
          <Route
            path='/ctrm'
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
        </Routes>
      </main>

      <Footer />
    </AuthProvider>
  );
}

export default App;
