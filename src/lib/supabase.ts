import { createClient } from '@supabase/supabase-js';

const url = import.meta.env.VITE_SUPABASE_URL as string;
const key = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

export const supabase = createClient(url, key);

export interface Post {
  id: string;
  title: string;
  slug: string;
  content: string;
  category: string;
  sponsor_name: string | null;
  published_at: string;
}
