import type { FC } from 'react';
import styles from './styles.module.css';

interface InputErrorProps {
  message?: string;
}

export const InputError: FC<InputErrorProps> = ({ message }) => {
  if (!message) return null;

  return <small className={styles.error}>
    {message}
  </small>;
};