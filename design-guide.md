# PETHROOM Design Guide
**pethroom.com** 기반 디자인 시스템 가이드  
*BMSMILE Co., Ltd. | 반려동물 케어 브랜드*

---

## 목차
1. [브랜드 개요](#1-브랜드-개요)
2. [색상 시스템](#2-색상-시스템)
3. [타이포그래피](#3-타이포그래피)
4. [레이아웃 & 그리드](#4-레이아웃--그리드)
5. [컴포넌트 패턴](#5-컴포넌트-패턴)
6. [섹션 구성](#6-섹션-구성)
7. [인터랙션 & 애니메이션](#7-인터랙션--애니메이션)
8. [디자인 원칙](#8-디자인-원칙)

---

## 1. 브랜드 개요

| 항목 | 내용 |
|------|------|
| 브랜드명 | PETHROOM (페스룸) |
| 운영사 | BMSMILE Co., Ltd. |
| 플랫폼 | Cafe24 e-커머스 |
| 포지셔닝 | 프리미엄 반려동물 케어 · IoT · 라이프스타일 |
| 어워드 | Red Dot 2025 · German Design 2025 · IDEA 2024 · Good Design 2024 |
| 브랜드 미션 | "지구상의 모든 유기동물들이 행복해지는 그 날까지" |

---

## 2. 색상 시스템

### 2-1. 코어 팔레트

```
Primary Yellow   #F5C300  ████  브랜드 대표색 (로고, VIP, IoT 포인트)
Dark Charcoal    #1A1A1A  ████  메인 텍스트, 헤딩 (var(--main-b))
Pure White       #FFFFFF  ████  배경, 카드 기본
```

### 2-2. 확장 팔레트

```
Sale Orange      #FF6B35  ████  할인가, SALE 배지, 프로모 숫자
Coral Accent     #FF9966  ████  보조 프로모 강조
Medium Gray      #666666  ████  설명 텍스트, 서브카피
Light Gray       #999999  ████  비활성 텍스트, 플레이스홀더
Border Gray      #EEEEEE  ████  카드 테두리, 구분선
Section Gray     #F8F8F8  ████  보조 섹션 배경
```

### 2-3. CSS 변수 정의

```css
:root {
  /* Brand Core */
  --main-y: #F5C300;        /* Primary Yellow */
  --main-b: #1A1A1A;        /* Main Black / Charcoal */
  --main-w: #FFFFFF;        /* White */

  /* Text */
  --text-primary:   #1A1A1A;
  --text-secondary: #666666;
  --text-disabled:  #999999;

  /* Accent */
  --accent-sale:    #FF6B35;
  --accent-vip:     #F5C300;

  /* Surface */
  --bg-page:        #FFFFFF;
  --bg-section:     #F8F8F8;
  --border-default: #EEEEEE;

  /* Shadow */
  --shadow-card:    0 2px 8px rgba(0, 0, 0, 0.08);
  --shadow-hover:   0 4px 16px rgba(0, 0, 0, 0.14);
}
```

### 2-4. 색상 사용 규칙

| 요소 | 색상 |
|------|------|
| 로고 · 브랜드 아이덴티티 | `--main-y` (#F5C300) |
| 헤딩 · 본문 텍스트 | `--main-b` (#1A1A1A) |
| 설명 · 서브카피 | `--text-secondary` (#666666) |
| 원가 (취소선) | `--text-disabled` (#999999) |
| 일반 할인가 | `--accent-sale` (#FF6B35) |
| VIP 혜택가 | `--accent-vip` (#F5C300) |
| CTA 버튼 (Primary) | `--main-b` 배경 + `--main-w` 텍스트 |
| CTA 버튼 (Accent) | `--main-y` 배경 + `--main-b` 텍스트 |

---

## 3. 타이포그래피

### 3-1. 폰트 패밀리

```css
/* 한국어 — 기본 UI 전체 */
@import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard-dynamic-subset.min.css');
font-family: 'Pretendard', -apple-system, sans-serif;

/* 한국어 — 보조 */
@import url('https://cdn.jsdelivr.net/gh/sun-typeface/SUIT/fonts/static/woff2/SUIT.css');
font-family: 'SUIT', sans-serif;

/* 영문 — 헤딩 · 브랜드 카피 (Variable) */
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;900&display=swap');
font-family: 'Montserrat', sans-serif;  /* weight: 100–900 */

/* 영문 — 고급 디스플레이 */
font-family: 'Frutiger LT Pro 95 Ultra Black', sans-serif;
font-family: 'Frutiger LT Pro 65 Bold', sans-serif;
font-family: 'Frutiger LT Pro 45 Light', sans-serif;

/* 영문 — 데코 포인트 */
@import url('https://fonts.googleapis.com/css2?family=Square+Peg&display=swap');
font-family: 'Square Peg', cursive;
```

### 3-2. 타입 스케일

| 레벨 | 크기 | 웨이트 | 폰트 | 사용처 |
|------|------|--------|------|--------|
| Display | 64–72px | 900 | Frutiger Ultra Black / Montserrat | Hero 대형 헤딩 |
| H1 | 48–56px | 800–900 | Montserrat | 페이지 타이틀 |
| H2 | 32–40px | 700–900 | Montserrat Bold | 섹션 타이틀 |
| H3 | 24–28px | 700 | Pretendard | 서브 섹션 |
| H4 | 20–22px | 600 | Pretendard | 카드 타이틀 |
| Body L | 16–18px | 400 | Pretendard | 본문, 상품 설명 |
| Body M | 14–16px | 400–600 | Pretendard | 상품명, UI 텍스트 |
| Caption | 11–13px | 400–700 | Pretendard | 배지, 레이블, 각주 |

```css
/* 타입 스케일 CSS */
.text-display { font-family: 'Frutiger LT Pro 95 Ultra Black'; font-size: 64px; }
.text-h1      { font-family: 'Montserrat'; font-size: 48px;  font-weight: 800; }
.text-h2      { font-family: 'Montserrat'; font-size: 36px;  font-weight: 700; }
.text-h3      { font-family: 'Pretendard'; font-size: 24px;  font-weight: 700; }
.text-body    { font-family: 'Pretendard'; font-size: 16px;  font-weight: 400; }
.text-small   { font-family: 'Pretendard'; font-size: 13px;  font-weight: 400; }
.text-label   { font-family: 'Pretendard'; font-size: 12px;  font-weight: 700; }
.text-deco    { font-family: 'Square Peg'; font-size: 20px;  } /* 서브타이틀 포인트 */
```

### 3-3. 이중 언어 타이포그래피 패턴

섹션 헤딩은 **영문(Montserrat 대형) + 한글(Pretendard 소형)** 조합을 반복 사용:

```
Best Seller                 ← Montserrat Bold 36px, #1A1A1A
Most Loved                  ← Square Peg or Montserrat Light 18px, #999999
페스룸의 가장 사랑받는 제품들   ← Pretendard 14px, #666666
```

---

## 4. 레이아웃 & 그리드

### 4-1. 컨테이너

```css
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px;         /* 데스크탑 */
}

@media (max-width: 768px) {
  .container { padding: 0 20px; }
}
```

### 4-2. 섹션 간격

```css
.section {
  padding-top:    80px;
  padding-bottom: 80px;
}

.section-sm { padding: 48px 0; }   /* 어워드 배너 등 작은 섹션 */
.section-lg { padding: 120px 0; }  /* Hero, IoT 등 대형 섹션 */
```

### 4-3. 상품 그리드

```css
/* 데스크탑: 4열 */
.product-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

/* 태블릿: 3열 */
@media (max-width: 1024px) {
  .product-grid { grid-template-columns: repeat(3, 1fr); }
}

/* 모바일: 2열 */
@media (max-width: 768px) {
  .product-grid { grid-template-columns: repeat(2, 1fr); gap: 12px; }
}
```

### 4-4. 간격 체계 (Spacing Scale)

```css
--space-1:  4px
--space-2:  8px
--space-3:  12px
--space-4:  16px
--space-5:  20px
--space-6:  24px
--space-8:  32px
--space-10: 40px
--space-12: 48px
--space-16: 64px
--space-20: 80px
--space-24: 96px
--space-30: 120px
```

---

## 5. 컴포넌트 패턴

### 5-1. 상품 카드 (Product Card)

```
┌──────────────────────────┐
│  [이미지 1:1 비율]        │  ← object-fit: cover
│  ┌─────┐                 │
│  │배지 │                 │  ← 좌상단 PNG 오버레이
│  └─────┘                 │
├──────────────────────────┤
│  상품명                   │  14px / 600 / #1A1A1A
│  설명 한 줄               │  13px / 400 / #666666
├──────────────────────────┤
│  ~~원가 40,000원~~        │  13px / 400 / #999999 + line-through
│  일반할인가  27,900원     │  14px / 700 / #FF6B35
│  VIP혜택가   18,200원     │  14px / 700 / #F5C300
│  VIP 35% 추가할인         │  11px / 600 / #F5C300
├──────────────────────────┤
│                    [🛒]  │  ← 우하단 아이콘 버튼
└──────────────────────────┘
```

```css
.product-card {
  background: #FFFFFF;
  border-radius: 8px;
  border: 1px solid #EEEEEE;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  transition: box-shadow 0.2s ease;
}

.product-card:hover {
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.14);
}

.product-card__image {
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
}

.product-card__name    { font-size: 14px; font-weight: 600; color: #1A1A1A; }
.product-card__desc    { font-size: 13px; font-weight: 400; color: #666666; }
.product-card__origin  { font-size: 13px; color: #999999; text-decoration: line-through; }
.product-card__sale    { font-size: 14px; font-weight: 700; color: #FF6B35; }
.product-card__vip     { font-size: 14px; font-weight: 700; color: #F5C300; }
```

---

### 5-2. 버튼 (Buttons)

```css
/* Primary — 다크 배경 */
.btn-primary {
  background: #1A1A1A;
  color: #FFFFFF;
  padding: 12px 28px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 600;
  font-family: 'Pretendard', sans-serif;
  transition: background 0.2s;
}
.btn-primary:hover { background: #333333; }

/* Accent — 브랜드 Yellow */
.btn-accent {
  background: #F5C300;
  color: #1A1A1A;
  padding: 12px 28px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 700;
}
.btn-accent:hover { background: #e6b800; }

/* Secondary — 아웃라인 */
.btn-outline {
  background: transparent;
  color: #1A1A1A;
  border: 1.5px solid #1A1A1A;
  padding: 11px 27px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 600;
}

/* Text Link — 화살표 */
.btn-text {
  background: none;
  border: none;
  color: #1A1A1A;
  font-size: 14px;
  font-weight: 600;
}
.btn-text::after { content: ' →'; }

/* App 다운로드 — Pill */
.btn-app {
  background: #1A1A1A;
  color: #FFFFFF;
  padding: 10px 22px;
  border-radius: 50px;
  font-size: 13px;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

/* 장바구니 아이콘 버튼 */
.btn-cart {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #FFFFFF;
  border: 1px solid #EEEEEE;
  display: flex;
  align-items: center;
  justify-content: center;
}
```

---

### 5-3. 내비게이션 (Global Nav)

```
┌────────────────────────────────────────────────────────────────┐
│  🐾 PETHROOM    SHOP  VIP CENTER  FRIENDS  EVENT  ABOUT  COMMUNITY    🔍 👤 🛒  │
└────────────────────────────────────────────────────────────────┘
```

```css
.header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: #FFFFFF;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
  height: 60px;
  display: flex;
  align-items: center;
}

.header__logo {
  /* Yellow 로고 이미지 (logo-y.png) */
  height: 32px;
}

.header__nav-item {
  font-family: 'Montserrat', 'Pretendard', sans-serif;
  font-size: 13px;
  font-weight: 600;
  color: #1A1A1A;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

/* 드롭다운 서브메뉴 */
.header__submenu {
  /* ALL / NEW / BEST / FOR DOG / FOR CAT / COLLABO */
  background: #FFFFFF;
  border-top: 2px solid #F5C300;  /* Yellow 상단 강조선 */
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}
```

---

### 5-4. 프로모 배너 바 (Promo Notice Strip)

```
[ VIP 정기배송 35% 추가 할인! ]  [ 첫 결제 50% 페이백! ]  [ 카카오 쿠폰 3,000원 ] ...
```

```css
.promo-bar {
  background: #F5C300;           /* 브랜드 Yellow */
  color: #1A1A1A;
  font-size: 12px;
  font-weight: 600;
  text-align: center;
  padding: 8px 16px;
  /* 5개 문구 자동 롤링 (Swiper 또는 CSS animation) */
}
```

---

### 5-5. 섹션 타이틀 블록

```css
.section-title {
  text-align: center;
  margin-bottom: 48px;
}

.section-title__en {           /* "Best Seller" */
  font-family: 'Montserrat', sans-serif;
  font-size: 36px;
  font-weight: 700;
  color: #1A1A1A;
  line-height: 1.2;
}

.section-title__sub {          /* "Most Loved" */
  font-family: 'Square Peg', cursive;
  font-size: 20px;
  color: #999999;
  margin-top: 4px;
}

.section-title__ko {           /* "페스룸의 가장 사랑받는 제품들" */
  font-family: 'Pretendard', sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: #666666;
  margin-top: 8px;
}
```

---

### 5-6. 어워드 배지 스트립 (Awards Strip)

```
[Red Dot 2025]  [German Design 2025]  [IDEA 2024]  [Good Design 2024]
```

```css
.awards-strip {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 48px;
  padding: 48px 0;
  background: #FFFFFF;
}

.award-badge {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.award-badge img   { height: 60px; }
.award-badge__name { font-size: 11px; font-weight: 600; color: #666666; }
```

---

### 5-7. VIP 혜택 리스트

```css
.vip-benefits {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  padding: 48px 0;
}

.vip-benefit-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
}

.vip-benefit-item__icon {
  color: #F5C300;
  font-size: 24px;
  flex-shrink: 0;
}

.vip-benefit-item__title {
  font-size: 14px;
  font-weight: 700;
  color: #1A1A1A;
}

.vip-benefit-item__desc {
  font-size: 13px;
  font-weight: 400;
  color: #666666;
  margin-top: 2px;
}
```

---

### 5-8. 고객 후기 카드 (Testimonial Card)

```
┌─────────────────────────────────┐
│  ⭐⭐⭐⭐⭐                       │
│  "정기배송 덕분에 편하게..."       │
│                       김*정 님   │
└─────────────────────────────────┘
```

```css
.testimonial-card {
  background: #FFFFFF;
  border-radius: 12px;
  padding: 24px;
  border: 1px solid #EEEEEE;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
}

.testimonial-card__stars { color: #F5C300; font-size: 14px; }
.testimonial-card__text  { font-size: 14px; color: #333333; line-height: 1.6; margin: 12px 0; }
.testimonial-card__name  { font-size: 12px; color: #999999; text-align: right; }
```

---

### 5-9. 가격 표시 패턴 (Price Display)

3단계 가격 체계 — 페스룸의 핵심 UX 패턴:

```css
.price-block { display: flex; flex-direction: column; gap: 2px; }

.price-origin {               /* 원가 (취소선) */
  font-size: 12px;
  color: #999999;
  text-decoration: line-through;
}

.price-sale {                 /* 일반 할인가 */
  font-size: 15px;
  font-weight: 700;
  color: #FF6B35;
}
.price-sale::before { content: '일반할인가 '; font-size: 11px; font-weight: 400; }

.price-vip {                  /* VIP 혜택가 */
  font-size: 15px;
  font-weight: 700;
  color: #F5C300;
}
.price-vip::before  { content: 'VIP혜택가 ';  font-size: 11px; font-weight: 400; }

.price-vip-badge {            /* "VIP 35% 추가할인" 레이블 */
  font-size: 11px;
  font-weight: 600;
  color: #F5C300;
  background: rgba(245, 195, 0, 0.1);
  padding: 2px 6px;
  border-radius: 3px;
  display: inline-block;
}
```

---

## 6. 섹션 구성

### 전체 페이지 구조

| # | 섹션명 | 목적 | 배경 | 핵심 컴포넌트 |
|---|--------|------|------|--------------|
| 01 | Promo Notice Bar | 혜택 공지 롤링 | `#F5C300` | 텍스트 배너 × 5 |
| 02 | Global Header Nav | 전체 내비게이션 | `#FFFFFF` | 로고 + 메뉴 6종 + 아이콘 |
| 03 | Hero | 브랜드 미션 전달 | 이미지/다크 | 대형 헤딩 + CTA |
| 04 | Awards Strip | 신뢰도 구축 | `#FFFFFF` | 어워드 배지 × 4 |
| 05 | Best Sellers | 인기 상품 노출 | `#FFFFFF` | 상품 슬라이더 |
| 06 | New Arrivals | 신상품 노출 | `#F8F8F8` | 상품 슬라이더 |
| 07 | VIP Membership | 멤버십 전환 유도 | Yellow 강조 | 혜택 리스트 + CTA |
| 08 | Daily Care Curation | 케어스틱 라인 소개 | `#FFFFFF` | 2×4 상품 그리드 |
| 09 | FRIENDS App | 앱 다운로드 유도 | 다크/이미지 | 앱 스크린샷 + 스토어 버튼 |
| 10 | IoT Devices | 스마트 기기 소개 | 다크/딥 | 기기 카드 × 3 + 대시보드 |
| 11 | CSR | 브랜드 철학 전달 | `#FFFFFF` | 이미지 갤러리 + CTA |
| 12 | Companion Stories | 소셜 프루프 | `#F8F8F8` | 후기 캐러셀 |
| 13 | Footer | 정보 + 정책 | `#FFFFFF` | 회사정보 + 링크 |

### Hero 섹션 상세

```css
.hero {
  min-height: 80vh;
  display: flex;
  align-items: center;
  /* 배경: 제품 이미지 슬라이더 또는 영상 */
}

.hero__eyebrow {
  font-family: 'Montserrat', sans-serif;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #F5C300;
}

.hero__title {
  font-family: 'Frutiger LT Pro 95 Ultra Black', 'Montserrat', sans-serif;
  font-size: clamp(40px, 6vw, 72px);
  font-weight: 900;
  color: #FFFFFF;             /* 이미지 배경 위 흰색 */
  line-height: 1.1;
}

.hero__sub {
  font-family: 'Pretendard', sans-serif;
  font-size: 16px;
  color: rgba(255,255,255,0.8);
  max-width: 520px;
  line-height: 1.7;
}
```

---

## 7. 인터랙션 & 애니메이션

### 사용 라이브러리

| 라이브러리 | 버전 | 용도 |
|-----------|------|------|
| Swiper.js | v11 | 상품 슬라이더, 후기 캐러셀, Hero 슬라이더 |
| AOS | v2.3.1 | 스크롤 트리거 등장 애니메이션 |

### AOS 설정 패턴

```html
<!-- 섹션 타이틀: 아래에서 올라오기 -->
<h2 data-aos="fade-up" data-aos-duration="600">Best Seller</h2>

<!-- 상품 카드: 순차 등장 -->
<div data-aos="fade-up" data-aos-delay="100">카드1</div>
<div data-aos="fade-up" data-aos-delay="200">카드2</div>
<div data-aos="fade-up" data-aos-delay="300">카드3</div>

<!-- 어워드 배지: 좌→우 페이드인 -->
<div data-aos="fade-right" data-aos-duration="500">어워드</div>
```

```js
AOS.init({
  duration: 600,
  easing: 'ease-out-quad',
  once: true,
  offset: 80
});
```

### Swiper 상품 슬라이더 설정

```js
new Swiper('.product-swiper', {
  slidesPerView: 4,
  spaceBetween: 20,
  loop: false,
  navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
  breakpoints: {
    1024: { slidesPerView: 4 },
    768:  { slidesPerView: 3 },
    480:  { slidesPerView: 2 },
    0:    { slidesPerView: 1.5, spaceBetween: 12 }
  }
});
```

### 전환 & 호버 효과

```css
/* 전역 트랜지션 */
* { transition-timing-function: ease-out; }

/* 카드 호버 */
.product-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-hover);
}

/* 버튼 호버 */
.btn-primary:hover  { background: #333333; }
.btn-accent:hover   { background: #e6b800; transform: translateY(-1px); }

/* 네비게이션 링크 */
.header__nav-item::after {
  content: '';
  display: block;
  width: 0;
  height: 2px;
  background: #F5C300;
  transition: width 0.2s ease;
}
.header__nav-item:hover::after { width: 100%; }
```

---

## 8. 디자인 원칙

### 핵심 원칙 7가지

| # | 원칙 | 설명 |
|---|------|------|
| 1 | **Yellow-Black 대비** | `#F5C300` + `#1A1A1A` 고대비로 에너지감과 고급감 동시 구현 |
| 2 | **이중 언어 타이포** | 영문 헤딩(Montserrat/Frutiger) + 한글 본문(Pretendard) 일관 적용 |
| 3 | **풀블리드 레이아웃** | 섹션 배경 100vw + 콘텐츠 max-width 1200px 중앙 정렬 |
| 4 | **3단계 가격 UX** | 원가→할인가→VIP가 항상 노출, 멤버십 가입 동기 지속 강화 |
| 5 | **스크롤 경험** | AOS 등장 애니메이션 + Swiper 캐러셀로 탐색 흥미 유지 |
| 6 | **신뢰 적층 구조** | 어워드 → 상품 → 후기 → CSR 순서로 신뢰를 단계적으로 쌓음 |
| 7 | **생태계 통합 UI** | 상품 + IoT 기기 + FRIENDS 앱 + 커뮤니티를 하나의 브랜드 경험으로 연결 |

### 접근성 & 반응형

- 모바일 퍼스트 기준: 2열 상품 그리드 → 데스크탑 4열 확장
- 텍스트 최소 크기: 12px (캡션 레벨)
- 터치 타겟 최소 크기: 44×44px (버튼, 아이콘)
- 색상 대비: Yellow(`#F5C300`) on White는 보조 용도만, 텍스트는 다크 컬러 우선

---

*분석 기준일: 2026-06-09*  
*출처: pethroom.com 직접 분석 (HTML 소스, CSS 파일, 시각적 구조 검토)*
