import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Portfolio from '../components/Portfolio';
import Testimonials from '../components/Testimonials';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import Modal from '../components/Modal';

const Home = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState({});

  const handleViewProfile = (data) => {
    setModalData(data);
    setModalOpen(true);
  };

  // Smooth scroll
  useEffect(() => {
    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach((anchor) => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth',
          });
        }
      });
    });

    return () => {
      anchors.forEach((anchor) => {
        anchor.removeEventListener('click', () => {});
      });
    };
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Portfolio onView={handleViewProfile} />
      <Testimonials />
      <ContactForm />
      <Footer />
      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        data={modalData}
      />
    </>
  );
};

export default Home;
