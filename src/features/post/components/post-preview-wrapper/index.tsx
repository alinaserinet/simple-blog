import type { FC, ReactNode } from 'react';
import styles from './styles.module.css';

interface PostPreviewWrapperProps {
  children: ReactNode;
}

export const PostPreviewWrapper: FC<PostPreviewWrapperProps> = ({ children }) => {
  return <ul className={styles.container}>
    {children}
  </ul>;
};