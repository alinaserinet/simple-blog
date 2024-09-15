import type { FC, ReactNode } from 'react';

interface PostCommentsWrapperProps {
  children: ReactNode;
}

export const PostCommentsWrapper: FC<PostCommentsWrapperProps> = ({ children }) => {
  return <ul>
    {children}
  </ul>;
};