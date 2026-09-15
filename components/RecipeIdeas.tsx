const recipes = [
  { name: "가리비 찜", desc: "센 불에 8분, 술과 마늘만 더해도 감칠맛이 살아납니다." },
  { name: "가리비 회", desc: "차가운 얼음물에 헹궈 쫄깃한 식감 그대로 초장과 함께." },
  { name: "버터 치즈 구이", desc: "오븐에 버터와 치즈를 올려 노릇하게 구우면 든든한 한 끼." },
];

export default function RecipeIdeas() {
  return (
    <section className="bg-background py-16">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-2xl font-bold sm:text-3xl">이렇게 즐겨보세요</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {recipes.map((r) => (
            <div
              key={r.name}
              className="rounded-2xl border border-foreground/10 bg-white p-6"
            >
              <p className="text-lg font-bold text-brand-dark">{r.name}</p>
              <p className="mt-2 text-sm text-foreground/65">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
