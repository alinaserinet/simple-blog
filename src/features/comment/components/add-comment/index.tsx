import { Button, InputError, Label, Textarea, VerticalGapWrapper } from '@components';
import { SubmitHandler, useForm } from 'react-hook-form';
import { commentSchema, CommentSchema } from './schemas';
import { zodResolver } from '@hookform/resolvers/zod';

export const AddComment = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CommentSchema>({
    resolver: zodResolver(commentSchema),
  });

  const handler: SubmitHandler<CommentSchema> = data => {
    console.log(data);
  };

  return <form onSubmit={handleSubmit(handler)}>
    <VerticalGapWrapper>
      <div>
        <Label htmlFor="comment-text">Comment</Label>
        <Textarea {...register('text')} id="comment-text" />
        <InputError message={errors?.text?.message} />
      </div>
      <div>
        <Button type="submit">Add Comment</Button>
      </div>
    </VerticalGapWrapper>
  </form>;
};