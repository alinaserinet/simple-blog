import { FC } from 'react';
import styles from './styles.module.css';
import Link from 'next/link';

interface PostPreviewCardProps {
  title: string;
  summary: string;
  url: string;
}

export const PostPreviewCard: FC<PostPreviewCardProps> = ({ url, summary, title }) => {
  return <li className={styles.card}>
    <h2>{title}</h2>
    <p>{summary}</p>
    <Link href={url}>Show Post</Link>
  </li>;
};