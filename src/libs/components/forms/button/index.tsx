import type { ButtonHTMLAttributes, DetailedHTMLProps, FC, ReactNode } from 'react';
import styles from './styles.module.css';

interface ButtonProps extends Omit<DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>, 'className'> {
  children: ReactNode;
}

export const Button: FC<ButtonProps> = ({ type, children, ...rest }) => {
  return <button
    className={styles.button}
    type={type ?? 'button'}
    {...rest}>
    {children}
  </button>;
};