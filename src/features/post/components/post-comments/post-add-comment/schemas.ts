import type { ZodType } from 'zod';
import { z } from 'zod';

import type { PostComment } from './types';

export const postCommentSchema: ZodType<PostComment> = z.object({
  text: z.string().min(10),
});

export type PostCommentSchema = z.infer<typeof postCommentSchema>;