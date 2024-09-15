import { DetailedHTMLProps, forwardRef, TextareaHTMLAttributes } from 'react';
import styles from './styles.module.css';

interface TextAreaProps extends Omit<DetailedHTMLProps<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
>, 'className'> {
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextAreaProps>((props, ref) => {
  return <textarea className={styles.textarea} {...props} ref={ref} />;
});