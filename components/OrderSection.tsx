"use client";

import { useActionState } from "react";
import { placeOrder, type OrderState } from "@/app/actions";
import type { Product } from "@/lib/product";

const initialState: OrderState = { status: "idle" };

export default function OrderSection({ product }: { product: Product }) {
  const [state, formAction, isPending] = useActionState(
    placeOrder,
    initialState,
  );

  return (
    <section id="order" className="bg-white py-16">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
          주문하기
        </h2>
        <p className="mt-2 text-sm text-foreground/70">
          주문 접수 후 입금 계좌 안내를 위해 연락드립니다. 입금 확인 후
          출고됩니다.
        </p>

        <div className="mt-8 rounded-2xl border border-brand/15 bg-brand/5 p-6 sm:p-8">
          <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-brand/15 pb-4">
            <div>
              <p className="font-bold text-foreground">{product.name}</p>
              <p className="text-sm text-foreground/60">
                {product.unit} · {product.origin}
              </p>
            </div>
            <p className="text-xl font-black text-brand-dark">
              {product.price.toLocaleString()}원
            </p>
          </div>

          <form action={formAction} className="mt-6 space-y-4">
            <input type="hidden" name="productId" value={product.id} />
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="이름" name="customerName" placeholder="홍길동" required />
              <Field
                label="연락처"
                name="phone"
                placeholder="010-0000-0000"
                required
              />
            </div>
            <Field
              label="배송지 주소"
              name="address"
              placeholder="배송받으실 주소를 입력해주세요"
              required
            />
            <div className="grid gap-4 sm:grid-cols-2">
              <Field
                label="수량"
                name="quantity"
                type="number"
                defaultValue={1}
                min={1}
                required
              />
              <Field
                label="요청사항 (선택)"
                name="memo"
                placeholder="예: 부재 시 경비실에 맡겨주세요"
              />
            </div>

            <button
              type="submit"
              disabled={isPending}
              className="w-full rounded-full bg-accent px-6 py-3 font-bold text-white transition hover:bg-accent/90 disabled:opacity-60"
            >
              {isPending ? "접수 중..." : "주문 신청하기"}
            </button>

            {state.status !== "idle" && state.message && (
              <p
                role="status"
                className={`text-sm font-medium ${
                  state.status === "success"
                    ? "text-brand-dark"
                    : "text-red-600"
                }`}
              >
                {state.message}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
  defaultValue,
  min,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  defaultValue?: string | number;
  min?: number;
}) {
  return (
    <label className="block text-sm">
      <span className="mb-1 block font-medium text-foreground/80">
        {label}
      </span>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        defaultValue={defaultValue}
        min={min}
        className="w-full rounded-lg border border-foreground/15 bg-white px-3 py-2 text-foreground outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
      />
    </label>
  );
}
