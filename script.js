// Tab switching
document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
  });
});

// Wishlist toggle
document.querySelectorAll('.wish-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const active = btn.textContent === '♥';
    btn.textContent = active ? '♡' : '♥';
    btn.style.color = active ? '' : '#ef4444';
  });
});

// Add to cart
document.querySelectorAll('.add-cart').forEach(btn => {
  btn.addEventListener('click', () => {
    const cartCount = document.querySelector('.cart-count');
    const current = parseInt(cartCount.textContent);
    cartCount.textContent = current + 1;

    btn.textContent = '✓ 담겼습니다!';
    btn.style.background = '#22c55e';
    setTimeout(() => {
      btn.textContent = '장바구니 담기';
      btn.style.background = '';
    }, 1500);
  });
});

// Hero dot navigation
const dots = document.querySelectorAll('.dot');
dots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    dots.forEach(d => d.classList.remove('active'));
    dot.classList.add('active');
  });
});

// Scroll reveal animation
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.product-card, .review-card, .new-arrival-card, .category-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});
