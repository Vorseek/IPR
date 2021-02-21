import React from 'react';
import styles from './MainPageHeader.module.scss';

const MainPageHeader = () => {
  return (
    <header className={`${styles['main-header']} grid`}>
      <div className={`${styles['header-content']} grid`}>
        <h1>We are creators</h1>
        <div className={`${styles['header-button']}`}>
          <button className={`${styles.button}`} type="button">
            Follow
          </button>
          <button className={`${styles.button} ${styles['button-grey']}`} type="button">
            Go home
          </button>
        </div>
      </div>
    </header>
  );
};

export default MainPageHeader;
