const faqs = [
  {
    q: "배송은 얼마나 걸리나요?",
    a: "오후 12시 이전 주문 확인 시 익일 출고를 원칙으로 합니다. 도서산간 지역은 1~2일 추가될 수 있습니다.",
  },
  {
    q: "가리비 입이 벌어져 있어요, 상한 건가요?",
    a: "이동 중 스트레스로 입이 벌어질 수 있으나 신선도와는 무관합니다. 손으로 눌렀을 때 다시 오므라들면 정상입니다.",
  },
  {
    q: "교환/환불이 가능한가요?",
    a: "신선식품 특성상 단순 변심에 의한 교환·환불은 어렵습니다. 상품 하자의 경우 수령 당일 사진과 함께 연락 주시면 안내해 드립니다.",
  },
  {
    q: "결제는 어떻게 하나요?",
    a: "현재는 계좌이체로 주문을 접수하고 있습니다. 주문 신청 후 안내드리는 계좌로 입금해주시면 출고가 진행됩니다.",
  },
];

export default function Faq() {
  return (
    <section className="bg-background py-16">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-2xl font-bold sm:text-3xl">자주 묻는 질문</h2>
        <div className="mt-8 space-y-3">
          {faqs.map((f) => (
            <details
              key={f.q}
              className="group rounded-xl border border-foreground/10 bg-white p-5"
            >
              <summary className="cursor-pointer list-none font-medium text-foreground marker:content-none">
                {f.q}
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-foreground/65">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
