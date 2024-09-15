import { FC } from 'react';

interface PostTextProps {
  text: string;
}

export const PostText: FC<PostTextProps> = ({ text }) => {
  return <section>
    <p>{text}</p>
  </section>;
};