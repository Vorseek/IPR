import React from 'react';
import styles from './FormSection.module.scss';

const FormSection = ({ isReady = true }) => {
  return (
    <section className={`${styles.form_section}`}>
      <div className="container">
        <form className={`${styles.form} grid`}>
          <div className="">
            <input
              className={styles.input}
              type="text"
              name="name"
              placeholder="youName"
              required
            />
          </div>
          <div className="">
            <input className={styles.input} type="text" name="name" placeholder="youName" />
          </div>
          <div className="">
            <input className={styles.input} type="text" name="name" placeholder="youName" />
          </div>
          <div>
            {isReady && (
              <button className={`${styles['form-button']} button`} type="submit">
                Yes Ready
              </button>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default FormSection;
