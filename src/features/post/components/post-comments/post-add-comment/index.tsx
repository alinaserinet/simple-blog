import { Button, InputError, Textarea, VerticalGapWrapper } from '@components';
import { SubmitHandler, useForm } from 'react-hook-form';
import { postCommentSchema, PostCommentSchema } from './schemas';
import { zodResolver } from '@hookform/resolvers/zod';

export const PostAddComment = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PostCommentSchema>({
    resolver: zodResolver(postCommentSchema),
  });

  const handler: SubmitHandler<PostCommentSchema> = data => {
    console.log(data);
  };

  return <form onSubmit={handleSubmit(handler)}>
    <VerticalGapWrapper>
      <div>
        <Textarea {...register('text')} />
        <InputError message={errors?.text?.message} />
      </div>
      <div>
        <Button type="submit">Add Comment</Button>
      </div>
    </VerticalGapWrapper>
  </form>;
};