import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/footer';
import Header from './components/header';
import Login from './components/login';
import MyRide from './pages/myride/my_ride';

function Layout() {
  return (
    <>
      <Header />
      <MyRide />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        {/* Login page without header/footer */}
        <Route path="/" element={<Login />} />

        {/* Home page with header/footer */}
        <Route path="/home" element={<Layout />} />
      </Routes>
    </Router>
  );
}

export default App;
