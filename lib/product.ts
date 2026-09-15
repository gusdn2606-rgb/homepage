import { supabase, isSupabaseConfigured } from "./supabase";

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  unit: string;
  origin: string;
  stock: number;
};

export const DEFAULT_PRODUCT: Product = {
  id: "default-scallop",
  name: "제철 활가리비",
  description: "당일 산지직송, 껍질째 신선하게 포장한 활가리비입니다.",
  price: 19900,
  unit: "1kg (10~15미)",
  origin: "국내산",
  stock: 100,
};

export async function getFeaturedProduct(): Promise<Product> {
  if (!isSupabaseConfigured || !supabase) {
    return DEFAULT_PRODUCT;
  }

  const { data, error } = await supabase
    .from("products")
    .select("id, name, description, price, unit, origin, stock")
    .order("created_at", { ascending: true })
    .limit(1)
    .maybeSingle();

  if (error || !data) {
    return DEFAULT_PRODUCT;
  }

  return data;
}
