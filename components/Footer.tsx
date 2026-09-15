export default function Footer() {
  return (
    <footer className="mt-auto bg-brand-dark py-10 text-white/70">
      <div className="mx-auto max-w-5xl px-6 text-sm">
        <p className="font-bold text-white">제철 가리비</p>
        <p className="mt-2 leading-relaxed">
          상호명: (입력 필요) · 대표자: (입력 필요) · 사업자등록번호: (입력
          필요)
          <br />
          통신판매업 신고번호: (입력 필요) · 주소: (입력 필요)
          <br />
          고객센터: (입력 필요) · 이메일: (입력 필요)
        </p>
        <p className="mt-4 text-xs text-white/50">
          © {new Date().getFullYear()} 제철 가리비. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
