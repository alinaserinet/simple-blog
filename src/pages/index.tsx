import { PostPreviewCard, PostPreviewWrapper } from '@post';


const Posts = () => {
  return (
    <PostPreviewWrapper>
      <PostPreviewCard url="/post/1" summary="test summary" title="test post" />
      <PostPreviewCard url="/post/1" summary="test summary" title="test post" />
      <PostPreviewCard url="/post/1" summary="test summary" title="test post" />
      <PostPreviewCard url="/post/1" summary="test summary" title="test post" />
    </PostPreviewWrapper>
  );
};

export default Posts;