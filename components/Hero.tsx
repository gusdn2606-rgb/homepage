import type { Product } from "@/lib/product";

export default function Hero({ product }: { product: Product }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-dark to-brand text-white">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 py-20 text-center sm:py-28">
        <span className="rounded-full bg-white/15 px-4 py-1 text-sm font-medium tracking-wide">
          {product.origin} · 당일 산지직송
        </span>
        <h1 className="text-4xl font-black leading-tight sm:text-5xl">
          바다에서 식탁까지,
          <br />
          오늘 잡은 가리비 그대로
        </h1>
        <p className="max-w-xl text-base text-white/85 sm:text-lg">
          살아있는 상태로 계측하고, 얼음과 함께 신선하게 포장해 보내드립니다.
        </p>
        <a
          href="#order"
          className="mt-2 rounded-full bg-accent px-8 py-3 text-base font-bold text-white shadow-lg shadow-black/20 transition hover:bg-accent/90"
        >
          {product.price.toLocaleString()}원에 주문하기
        </a>
      </div>
    </section>
  );
}
