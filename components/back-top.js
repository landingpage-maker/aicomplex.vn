export default function BackTop() {
  // Create button element
  const btn = document.createElement('button');
  btn.setAttribute('aria-label', 'Back to top');
  btn.className = 'fixed bottom-6 right-6 z-50 hidden items-center justify-center w-12 h-12 rounded-full bg-red-600 text-white shadow-lg hover:bg-red-700 transition';
  btn.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 4l-7 7h4v9h6v-9h4z"/>
    </svg>
  `;
  document.body.appendChild(btn);

  // Show/hide on scroll
  const toggle = () => {
    if (window.scrollY > 300) {
      btn.classList.remove('hidden');
      btn.classList.add('flex');
    } else {
      btn.classList.add('hidden');
      btn.classList.remove('flex');
    }
  };
  window.addEventListener('scroll', toggle, { passive: true });
  toggle();

  // Smooth scroll to top
  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}


