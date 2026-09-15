-- Run this in the Supabase SQL editor to set up the shop's tables.

create extension if not exists "pgcrypto";

create table if not exists products (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  description text not null,
  price integer not null,
  unit text not null,
  origin text not null,
  stock integer not null default 0,
  created_at timestamptz not null default now()
);

create table if not exists orders (
  id uuid primary key default gen_random_uuid(),
  product_id uuid references products(id),
  customer_name text not null,
  phone text not null,
  address text not null,
  quantity integer not null default 1,
  memo text,
  status text not null default 'pending',
  created_at timestamptz not null default now()
);

create table if not exists reviews (
  id uuid primary key default gen_random_uuid(),
  product_id uuid references products(id) not null,
  customer_name text not null,
  rating smallint not null check (rating between 1 and 5),
  comment text not null,
  created_at timestamptz not null default now()
);

-- Allow the public (anon) client to read products and reviews and create
-- orders, but not read other customers' orders or post reviews directly
-- (add reviews from the Supabase dashboard after verifying a real purchase).
alter table products enable row level security;
alter table orders enable row level security;
alter table reviews enable row level security;

create policy "Products are publicly readable"
  on products for select
  using (true);

create policy "Reviews are publicly readable"
  on reviews for select
  using (true);

create policy "Anyone can place an order"
  on orders for insert
  with check (true);

insert into products (name, description, price, unit, origin, stock)
values (
  '제철 활가리비',
  '당일 산지직송, 껍질째 신선하게 포장한 활가리비입니다.',
  19900,
  '1kg (10~15미)',
  '국내산',
  100
);
