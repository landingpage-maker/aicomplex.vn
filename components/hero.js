export default function Hero(targetId = 'app') {
  const root = document.getElementById(targetId);
  if (!root) return;

  root.insertAdjacentHTML('beforeend', `
    <!-- Header -->
    <header class="bg-gray-800">
      <div class=" flex items-center justify-between">
        <!-- Logo -->
        <div class="px-3 py-3 sm:py-4 flex items-center" style="background-color: #B3404B;">
          <span class="text-white font-bold text-xl sm:text-2xl">AIcomplex.vn</span>
        </div>
        <!-- Navigation -->
        <nav class="hidden md:flex items-center space-x-8">
          <a href="#" class="text-white hover:text-red-500 border-b-2 border-red-500 pb-1">Trang chủ</a>
          <a href="#about" class="text-white hover:text-red-500">Về chúng tôi</a>
          <a href="#services" class="text-white hover:text-red-500">Dịch vụ</a>
          <a href="#blog" class="text-white hover:text-red-500">Blog AI</a>
          <a href="#contact" class="text-white hover:text-red-500">Liên hệ</a>
        </nav>

        <!-- Mobile Menu Button -->
        <button class="md:hidden text-white p-2" id="mobileMenuBtn">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>

        <!-- Header Buttons -->
        <div class="hidden md:flex items-center space-x-2 mr-4">
        
          <button class="bg-gray-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-gray-600">
            <span class="text-red-500">♦</span>
            <span>Upgrade Vip</span>
          </button>
          <button class="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600">
            English
          </button>
        </div>
      </div>

      <!-- Mobile Navigation -->
      <div class="md:hidden hidden bg-gray-700 mt-4 rounded-lg" id="mobileMenu">
        <nav class="flex flex-col p-4 space-y-2">
          <a href="#" class="text-white hover:text-red-500 py-2">Trang chủ</a>
          <a href="#about" class="text-white hover:text-red-500 py-2">Về chúng tôi</a>
          <a href="#services" class="text-white hover:text-red-500 py-2">Dịch vụ</a>
          <a href="#blog" class="text-white hover:text-red-500 py-2">Blog AI</a>
          <a href="#contact" class="text-white hover:text-red-500 py-2">Liên hệ</a>
          <div class="flex flex-col space-y-2 pt-2 border-t border-gray-600">
   
            <button class="bg-gray-600 text-white px-4 py-2 rounded-lg flex items-center justify-center space-x-2">
              <span class="text-red-500">♦</span>
              <span>Upgrade Vip</span>
            </button>
            <button class="bg-gray-600 text-white px-4 py-2 rounded-lg">
              English
            </button>
          </div>
        </nav>
      </div>
    </header>

    <!-- Main Content -->
    <main class="min-h-screen bg-cover bg-center bg-no-repeat" style="background-image: url('./imgs/hero/bg.webp')">
      <div class="flex flex-col lg:flex-row min-h-screen">
        <!-- Left Content -->
        <div class="flex-1 flex items-center justify-center p-4 md:p-8">
          <div class="text-center max-w-2xl">
            <!-- AI Logo -->
            <div class="">
              <img src="./imgs/hero/logo.png" alt="ArchMaster.ai" class="w-24 h-24 md:w-32 md:h-32 mx-auto" />
            </div>

            <!-- ARCHMASTER Text -->
            <h1 class="text-white text-2xl md:text-3xl font-bold uppercase tracking-wider" style="width: fit-content; margin: 0 auto;">
            AIcomplex
            </h1>

            <!-- Description -->
            <p class="text-gray-300 py-4  text-base md:text-lg mb-8 md:mb-12 leading-relaxed px-4">
              Ứng dụng AI miễn phí được phát triển dành riêng cho cộng đồng kiến trúc sư và sinh viên kiến trúc – nội thất, giúp biến ý tưởng phác thảo thành hình ảnh render thực tế chỉ trong vài phút.
            </p>

            <!-- Buttons -->
            <div class="flex flex-col sm:flex-row gap-3 justify-center px-4">
              <button onclick="window.open('https://ai.studio/apps/drive/1V5lYK_UjqFwDwYiND0HD6dUXDvbr5fvZ', '_blank')" class="bg-red-600 text-white px-4 md:px-6 py-3 md:py-4 rounded-lg text-sm md:text-base font-semibold hover:bg-red-700 transition-colors">
                Bấm để tạo ảnh
              </button>
              <button class="bg-red-600 text-white px-4 md:px-6 py-3 md:py-4 rounded-lg text-sm md:text-base font-semibold hover:bg-red-700 transition-colors">
                Ehance/ Upscale
              </button>
              <button onclick="window.open('https://www.youtube.com/@NguyenKhanh-mp6xg', '_blank')" class="bg-red-600 text-white px-4 md:px-6 py-3 md:py-4 rounded-lg text-sm md:text-base font-semibold hover:bg-red-700 transition-colors">
                Hướng dẫn
              </button>
            </div>
          </div>
        </div>

        <!-- Right Content - Video Player -->
        <div class="flex-1 flex items-center justify-center p-4 md:p-8">
          <div class="w-full max-w-4xl">
            <div class="bg-black rounded-lg overflow-hidden shadow-2xl">
              <video
                class="w-full h-[250px] md:h-[400px]"
                src="./imgs/hero/video-hero.mp4"
                controls
                autoplay
                muted
                loop
                playsinline
              ></video>
            </div>
          </div>
        </div>
      </div>
    </main>
  `);

  // Add smooth scrolling for navigation links and mobile menu
  setTimeout(() => {
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
        // Close mobile menu when clicking on a link
        const mobileMenu = document.getElementById('mobileMenu');
        if (mobileMenu) {
          mobileMenu.classList.add('hidden');
        }
      });
    });

    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (mobileMenuBtn && mobileMenu) {
      mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
      });
    }
  }, 100);
}

