/* eslint-disable react/no-array-index-key */
import React from 'react';
import sectionData from './data';
import styles from './MainPageSection.module.scss';

const MainPageSection = () => {
  return (
    <section className={`${styles['portfolio-section']} grid`}>
      {sectionData.map((e, i) => (
        <div
          className={`${styles['portfolio-item']} grid`}
          key={i}
          style={{ backgroundImage: `url(${e.img})` }}>
          <span>{e.title}</span>
        </div>
      ))}
      <div className="buttoncase text-center">
        <button className="button" type="button">
          View Portfolio
        </button>
      </div>
    </section>
  );
};

export default MainPageSection;
