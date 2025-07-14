import styles from './description.module.scss';

export function Description() {
  return (
    <div className={styles.base}>
      <div className={styles.title}>
        <p>abc.com</p>
      </div>
      <div className={styles.description}>
        <p>
          abc.com is the best place to find remote talent. We’ve been super
          impress by the quality of applicants.
        </p>
      </div>
      <div className={styles.footer}>
        <p>Madhushan sasanka CEO, abc.com</p>
      </div>
    </div>
  );
}
