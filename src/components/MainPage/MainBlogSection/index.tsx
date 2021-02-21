/* eslint-disable react/no-array-index-key */
import React from 'react';
import data from './data';
import styles from './MainBlogSection.module.scss';

const MainBlogSection = () => {
  return (
    <section className={`${styles['section-blog']} landing-section`}>
      <div className="container">
        <h2>Ready To Read Blog?</h2>
        <div className={`${styles['blog-home']} grid`}>
          {data.map((e, i) => (
            <a href="/" className={`${styles['blog-item']} grid`} key={i}>
              <span
                className={styles['blog-item-img']}
                style={{ backgroundImage: `url(${e.img})` }}
              />
              <span className={`${styles['blog-item-content']} grid`}>
                <h4>{e.title}</h4>
                <p>{e.description}</p>
              </span>
            </a>
          ))}
          <div className={`buttoncase text-center ${styles.buttoncase}`}>
            <button className="button" type="button">
              View Blog
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainBlogSection;
