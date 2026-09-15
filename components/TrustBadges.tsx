const badges = [
  { title: "당일 포획·손질", desc: "주문 즉시 산지에서 손질해 바로 출고합니다." },
  { title: "국내산 제철 가리비", desc: "산지를 직접 확인한 믿을 수 있는 생산자와 거래합니다." },
  { title: "얼음 신선 포장", desc: "아이스박스 냉장 포장으로 신선도를 유지한 채 배송합니다." },
];

export default function TrustBadges() {
  return (
    <section className="border-b border-foreground/10 bg-white py-12">
      <div className="mx-auto grid max-w-5xl gap-8 px-6 sm:grid-cols-3">
        {badges.map((b) => (
          <div key={b.title} className="text-center">
            <p className="text-lg font-bold text-brand-dark">{b.title}</p>
            <p className="mt-1 text-sm text-foreground/65">{b.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
