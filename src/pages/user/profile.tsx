import { VerticalGapWrapper } from '@components';
import { UserDetails } from '@user';
import { PostPreviewCard, PostPreviewWrapper } from '@post';

const UserProfile = () => {
  return <VerticalGapWrapper>
    <UserDetails />
    <PostPreviewWrapper>
      <PostPreviewCard
        title="user-post-1"
        summary="text"
        url="/post/2"
        permission={{ edit: true, delete: true }}
      />
      <PostPreviewCard
        title="user-post-1"
        summary="text"
        url="/post/2"
        permission={{ edit: true, delete: true }}
      />
    </PostPreviewWrapper>
  </VerticalGapWrapper>;
};

export default UserProfile;