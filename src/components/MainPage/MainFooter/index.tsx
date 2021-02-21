import React from 'react';
import styles from './MainFooter.module.scss';

const MainFooter = () => {
  return (
    <footer className={`${styles['main-footer']}`}>
      <div className="container">
        <div className={`${styles['footer-logo']}`}>
          We Are Real
          <span>Creators</span>
        </div>
        <div className={`${styles['footer-copy']}`}>~©~</div>
      </div>
    </footer>
  );
};

export default MainFooter;
