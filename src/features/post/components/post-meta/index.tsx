import type { FC } from 'react';
import { unixConverter } from '@utils';

interface PostMetaProps {
  createdAt: number;
  updatedAt?: number;
}

export const PostMeta: FC<PostMetaProps> = ({ updatedAt, createdAt }) => {
  return <div>
    <div>
      <span>last update: </span>
      <time>{unixConverter(updatedAt ?? createdAt)}</time>
    </div>
  </div>;
};