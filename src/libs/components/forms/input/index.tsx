import type { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import { forwardRef } from 'react';
import styles from './styles.module.css';

interface InputProps extends DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> {
}

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
    return <input  {...props} className={styles.input} ref={ref} />;
  },
);