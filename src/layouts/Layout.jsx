import React from 'react';
import PropTypes from 'prop-types';
import StyledLayout from './StyledLayout.js';
import Footer from '../components/Footer.jsx';
import Header from '../components/Header.jsx';

export default function Layout({ children }) {
  return (
    <StyledLayout>
      <div className="page-data-wrap-seprator">
        <Header />
        <>{children}</>
        <div className="page-footer-wrap">
          <Footer />
        </div>
      </div>
    </StyledLayout>
  );
}

Layout.propTypes = {
  children: PropTypes.element,
};
