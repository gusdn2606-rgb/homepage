import { getReviews } from "@/lib/reviews";
import type { Product } from "@/lib/product";

export default async function Reviews({ product }: { product: Product }) {
  const reviews = await getReviews(product.id);

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-2xl font-bold sm:text-3xl">구매 후기</h2>

        {reviews.length === 0 ? (
          <p className="mt-6 rounded-2xl bg-background p-8 text-center text-sm text-foreground/60">
            아직 등록된 후기가 없어요. 첫 구매 후기의 주인공이 되어보세요!
          </p>
        ) : (
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {reviews.map((r) => (
              <div key={r.id} className="rounded-2xl bg-background p-6">
                <p className="text-accent">
                  {"★".repeat(r.rating)}
                  {"☆".repeat(5 - r.rating)}
                </p>
                <p className="mt-3 text-sm text-foreground/75">
                  &ldquo;{r.comment}&rdquo;
                </p>
                <p className="mt-3 text-sm font-medium text-foreground/50">
                  {r.customer_name}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
