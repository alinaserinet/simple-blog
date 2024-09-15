import type { ZodType } from 'zod';
import { z } from 'zod';

import type { Comment } from './types';

export const commentSchema: ZodType<Comment> = z.object({
  text: z.string().min(10),
});

export type CommentSchema = z.infer<typeof commentSchema>;