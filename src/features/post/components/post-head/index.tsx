import type { FC } from 'react';
import styles from './styles.module.css';

interface PostHeadProps {
  title: string;
}

export const PostHead: FC<PostHeadProps> = ({ title }) => {
  return <header className={styles.head}>
    <h1>{title}</h1>
  </header>;
};