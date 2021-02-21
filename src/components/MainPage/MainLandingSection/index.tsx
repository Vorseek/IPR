import React from 'react';
import example from 'assets/image/example.jpg';
import styles from './MainLandingSection.module.scss';

const MainLandingSection = () => {
  return (
    <section className={`${styles['section-ready']} landing-section`}>
      <div className={`${styles.container} container grid`}>
        <div className={styles['ready-left']}>
          <h2>Are You Ready?</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo, libero quasi magnam
            error ut porro ad architecto hic vitae, tenetur iure tempora accusamus aut assumenda
            laborum sapiente, mollitia voluptatum. Voluptatem!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate cumque ea quasi
            eaque architecto nobis mollitia, impedit consequuntur minima amet suscipit nam
            consequatur tempora nesciunt vero. Quas accusantium aliquam delectus.
          </p>
        </div>
        <div className={`${styles['ready-right']}`}>
          <img src={example} alt="example" className="img-responsive" />
        </div>
      </div>
    </section>
  );
};

export default MainLandingSection;
