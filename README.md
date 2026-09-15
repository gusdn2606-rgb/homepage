# 제철 가리비 쇼핑몰

해산물(가리비) 직거래 쇼핑몰의 랜딩페이지입니다. Next.js + Tailwind CSS로 만들었고, 상품/주문/후기 데이터는 Supabase에 저장합니다.

## 시작하기

```bash
npm install
npm run dev
```

Supabase를 연결하지 않아도 기본(placeholder) 상품 정보로 페이지가 동작합니다.

## Supabase 연결하기

1. [supabase.com](https://supabase.com)에서 새 프로젝트를 만듭니다.
2. 프로젝트의 SQL Editor에서 [`supabase/schema.sql`](supabase/schema.sql) 내용을 실행해 `products`, `orders`, `reviews` 테이블을 만듭니다.
3. 프로젝트 설정 > API 메뉴에서 `Project URL`과 `anon public` 키를 복사합니다.
4. `.env.example`을 `.env.local`로 복사하고 값을 채워 넣습니다.

```bash
cp .env.example .env.local
```

## 공개(배포) 전 꼭 확인할 것

- [`components/Footer.tsx`](components/Footer.tsx)의 상호명, 사업자등록번호, 통신판매업 신고번호 등 법정 표기 정보를 실제 값으로 채워야 합니다. (전자상거래법상 필수 표기 사항)
- 상품 설명·가격·배송 정책 문구는 실제 운영 방식에 맞게 검토해주세요.
- 현재 주문 방식은 계좌이체 접수(주문 후 수기 안내)이며, 카드 결제 등 PG 연동은 아직 없습니다.
- 호스팅은 아직 정해지지 않았습니다. Next.js 프로젝트이므로 Vercel 배포가 가장 간단합니다.

## 폴더 구조

- `app/` — 페이지, 레이아웃, 주문 Server Action
- `components/` — 랜딩페이지 섹션 컴포넌트
- `lib/` — Supabase 클라이언트, 상품/후기 조회 로직
- `supabase/schema.sql` — 테이블 스키마 및 초기 상품 데이터
