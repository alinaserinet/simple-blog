export interface Post {
  id: number;
  title: string;
  description: string;
  slug: string;
  created_at: number;
  updated_at: number;
  image_url: string | null;
}