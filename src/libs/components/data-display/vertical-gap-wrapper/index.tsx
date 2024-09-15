import type { FC, ReactNode } from 'react';
import styles from './styles.module.css';

interface VerticalGapWrapperProps {
  children: ReactNode;
}

export const VerticalGapWrapper: FC<VerticalGapWrapperProps> = ({ children }) => {
  return <div className={styles.wrapper}>
    {children}
  </div>;
};