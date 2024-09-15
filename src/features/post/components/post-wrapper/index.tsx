import type { FC, ReactNode } from 'react';
import styles from './styles.module.css';

interface PostWrapperProps {
  children: ReactNode;
}

export const PostWrapper: FC<PostWrapperProps> = ({ children }) => {
  return <article className={styles.post}>{children}</article>;
};