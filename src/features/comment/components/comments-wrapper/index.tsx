import type { FC, ReactNode } from 'react';
import styles from './styles.module.css';

interface CommentsWrapperProps {
  children: ReactNode;
}

export const CommentsWrapper: FC<CommentsWrapperProps> = ({ children }) => {
  return <div>
    <h2 className={styles.wrapperTitle}>Comments</h2>
    <ul>
      {children}
    </ul>
  </div>;
};