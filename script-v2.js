'use strict';

/* ── PROMO ROLLING BAR ── */
const promoItems = document.querySelectorAll('.promo-item');
let promoIdx = 0;
let promoTimer;

function showPromo(idx) {
  promoItems.forEach(el => el.classList.remove('active'));
  promoIdx = (idx + promoItems.length) % promoItems.length;
  promoItems[promoIdx].classList.add('active');
}

function startPromo() { promoTimer = setInterval(() => showPromo(promoIdx + 1), 3500); }
function resetPromo()  { clearInterval(promoTimer); startPromo(); }

document.getElementById('promoPrev')?.addEventListener('click', () => { showPromo(promoIdx - 1); resetPromo(); });
document.getElementById('promoNext')?.addEventListener('click', () => { showPromo(promoIdx + 1); resetPromo(); });
startPromo();

/* ── HERO SLIDER ── */
const track      = document.getElementById('heroTrack');
const indicators = document.querySelectorAll('.indicator');
const SLIDE_CNT  = 3;
let current = 0;
let autoTimer;

function goTo(idx) {
  current = (idx + SLIDE_CNT) % SLIDE_CNT;
  track.style.transform = `translateX(-${current * (100 / SLIDE_CNT)}%)`;
  indicators.forEach((el, i) => el.classList.toggle('active', i === current));
}

document.getElementById('heroPrev').addEventListener('click', () => { goTo(current - 1); resetAuto(); });
document.getElementById('heroNext').addEventListener('click', () => { goTo(current + 1); resetAuto(); });
indicators.forEach((el, i) => el.addEventListener('click', () => { goTo(i); resetAuto(); }));

function startAuto() { autoTimer = setInterval(() => goTo(current + 1), 4500); }
function resetAuto()  { clearInterval(autoTimer); startAuto(); }
startAuto();

/* ── PRODUCT TABS ── */
document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    tab.closest('.tab-group').querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
  });
});

/* ── WISHLIST TOGGLE ── */
document.querySelectorAll('.wish').forEach(btn => {
  btn.addEventListener('click', e => {
    e.stopPropagation();
    btn.classList.toggle('active');
  });
});

/* ── CART ── */
let cartCount = 0;
const cartDot  = document.querySelector('.cart-dot');
const fabCount = document.getElementById('fabCount');
const toast    = document.getElementById('toast');

function updateCartUI() {
  const n = cartCount.toString();
  cartDot.textContent  = n;
  fabCount.textContent = n;
}

function showToast() {
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2200);
}

document.querySelectorAll('.js-cart').forEach(btn => {
  btn.addEventListener('click', e => {
    e.stopPropagation();
    cartCount++;
    updateCartUI();
    showToast();

    btn.textContent = '✓ 담겼습니다';
    btn.style.background = '#2d6a4f';
    btn.style.color = '#fff';
    setTimeout(() => {
      btn.textContent = '장바구니 담기';
      btn.style.background = '';
      btn.style.color = '';
    }, 1600);
  });
});

/* ── HEADER SCROLL EFFECT ── */
const header = document.getElementById('header');
let lastY = 0;

window.addEventListener('scroll', () => {
  const y = window.scrollY;
  if (y > 80) {
    header.style.boxShadow = '0 2px 12px rgba(0,0,0,.08)';
  } else {
    header.style.boxShadow = 'none';
  }
  lastY = y;
}, { passive: true });

/* ── SUBNAV SCROLL ── */
document.querySelectorAll('.sub-item').forEach(item => {
  item.addEventListener('click', () => {
    document.querySelectorAll('.sub-item').forEach(s => s.classList.remove('active'));
    item.classList.add('active');
  });
});

/* ── SCROLL REVEAL ── */
const revealEls = document.querySelectorAll(
  '.pcard, .review-card, .event-card, .qcat, .vip-card, .benefit'
);

const revealObs = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      revealObs.unobserve(entry.target);
    }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

revealEls.forEach((el, i) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = `opacity .5s ease ${(i % 4) * 60}ms, transform .5s ease ${(i % 4) * 60}ms`;
  revealObs.observe(el);
});
