import type { DetailedHTMLProps, FC, LabelHTMLAttributes, ReactNode } from 'react';
import styles from './styles.module.css';

interface LabelProps extends DetailedHTMLProps<
  LabelHTMLAttributes<HTMLLabelElement>,
  HTMLLabelElement
> {
  children: ReactNode;
  htmlFor: string;
}

export const Label: FC<LabelProps> = ({ children, ...rest }) => {
  return <label {...rest} className={styles.label}>
    {children}
  </label>;
};