import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';
import HomePage from './pages/HomePage';
import Subheader from './components/Subheader';
import Footer from './components/Footer';
import Men from './pages/Men';
import Women from './pages/Women';
import Kids from './pages/Kids';
import ProductDetails from './pages/ProductDetails';

const App = () => {
  return (
    <Router>
      <Header />
      <Subheader />
      <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/home/men" element={<Men />} />
        <Route path="/home/men/:id" element={<ProductDetails />} />
        <Route path="/home/women" element={<Women />} />
        <Route path="/home/kids" element={<Kids />} />
      </Routes>
      <Footer />
    </Router>
  );
};
export default App;

