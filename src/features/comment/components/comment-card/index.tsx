import styles from './styles.module.css';

export const CommentCard = () => {
  return <li className={styles.commentCard}>
    <h4 className={styles.userTitle}>Ali Naseri</h4>
    <div className={styles.text}>
      <p>text</p>
    </div>
  </li>;
};