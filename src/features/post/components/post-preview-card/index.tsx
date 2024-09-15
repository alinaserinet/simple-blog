import { FC } from 'react';
import styles from './styles.module.css';
import Link from 'next/link';
import { Permission } from '@types';

interface PostPreviewCardProps {
  title: string;
  summary: string;
  url: string;
  permission?: Permission;
}

export const PostPreviewCard: FC<PostPreviewCardProps> = ({ url, summary, title, permission }) => {
  return <li className={styles.card}>
    <h2>{title}</h2>
    {permission?.edit ? <Link href="/">Edit</ Link> : null}
    {permission?.delete ? <Link href="/">Delete</ Link> : null}
    <p>{summary}</p>
    {permission?.show !== false ? <Link href={url}>Show Post</Link> : null}
  </li>;
};