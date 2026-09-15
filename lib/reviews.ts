import { supabase, isSupabaseConfigured } from "./supabase";

export type Review = {
  id: string;
  customer_name: string;
  rating: number;
  comment: string;
};

export async function getReviews(productId: string): Promise<Review[]> {
  if (!isSupabaseConfigured || !supabase) {
    return [];
  }

  const { data, error } = await supabase
    .from("reviews")
    .select("id, customer_name, rating, comment")
    .eq("product_id", productId)
    .order("created_at", { ascending: false })
    .limit(6);

  if (error || !data) {
    return [];
  }

  return data;
}
