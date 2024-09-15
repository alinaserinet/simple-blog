import { PostHead, PostMeta, PostWrapper, PostText } from '@post';
import { AddComment, CommentCard, CommentsWrapper } from '@comment';

const Post = () => {
  return <PostWrapper>
    <PostHead title="test post" />
    <PostMeta createdAt={1726387486} />
    <PostText
      text="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available"
    />
    <CommentsWrapper>
      <CommentCard />
    </CommentsWrapper>
    <AddComment />
  </PostWrapper>;
};

export default Post;