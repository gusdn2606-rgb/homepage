"use server";

import { isSupabaseConfigured, supabase } from "@/lib/supabase";
import { DEFAULT_PRODUCT } from "@/lib/product";

export type OrderState = {
  status: "idle" | "success" | "error";
  message?: string;
};

export async function placeOrder(
  _prevState: OrderState,
  formData: FormData,
): Promise<OrderState> {
  const customerName = String(formData.get("customerName") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const address = String(formData.get("address") ?? "").trim();
  const quantity = Number(formData.get("quantity") ?? 1);
  const memo = String(formData.get("memo") ?? "").trim();
  const productId = String(formData.get("productId") ?? "");

  if (!customerName || !phone || !address) {
    return {
      status: "error",
      message: "이름, 연락처, 배송지를 모두 입력해주세요.",
    };
  }

  if (!isSupabaseConfigured || !supabase) {
    return {
      status: "error",
      message:
        "주문 접수 기능이 아직 연결되지 않았습니다. Supabase 설정 후 다시 시도해주세요.",
    };
  }

  const { error } = await supabase.from("orders").insert({
    product_id: productId === DEFAULT_PRODUCT.id ? null : productId,
    customer_name: customerName,
    phone,
    address,
    quantity: Number.isFinite(quantity) && quantity > 0 ? quantity : 1,
    memo: memo || null,
  });

  if (error) {
    return {
      status: "error",
      message: "주문 접수 중 문제가 발생했습니다. 잠시 후 다시 시도해주세요.",
    };
  }

  return {
    status: "success",
    message: "주문이 접수되었습니다! 입금 안내를 위해 곧 연락드릴게요.",
  };
}
