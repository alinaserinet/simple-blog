import type { FC, ReactNode } from 'react';

interface CommentsWrapperProps {
  children: ReactNode;
}

export const CommentsWrapper: FC<CommentsWrapperProps> = ({ children }) => {
  return <ul>
    {children}
  </ul>;
};