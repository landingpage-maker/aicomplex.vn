export default function AIInteriorDecoration(targetId = 'app') {
  const root = document.getElementById(targetId);
  if (!root) return;

  root.insertAdjacentHTML('beforeend', `
    <!-- Custom Swiper Styles -->
    <style>
      .ai-interior-swiper {
        width: 100%;
        padding-top: 50px;
        padding-bottom: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .ai-interior-swiper .swiper-slide {
        background-position: center;
        background-size: cover;
        width: 300px;
        height: 400px;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
      }

      .ai-interior-swiper .swiper-slide img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .ai-interior-swiper .swiper-pagination-bullet {
        background: #dc2626;
        opacity: 0.5;
      }

      .ai-interior-swiper .swiper-pagination-bullet-active {
        opacity: 1;
        background: #dc2626;
      }

      @media (max-width: 768px) {
        .ai-interior-swiper .swiper-slide {
          width: 250px;
          height: 350px;
        }
      }
    </style>

    <!-- AI Interior Decoration Section -->
    <section class="bg-gray-900 py-16">
      <div class="px-6">
        <!-- Swiper Image Display Area (Upper Part) -->
        <div class="max-w-7xl mx-auto mb-12">
          <div class="swiper ai-interior-swiper flex justify-center">
            <div class="swiper-wrapper">
              <!-- Slide 1 -->
              <div class="swiper-slide">
                <img src="./imgs/ai-interior-decoration/1.webp" alt="Interior Design 1" />
              </div>

              <!-- Slide 2 -->
              <div class="swiper-slide">
                <img src="./imgs/ai-interior-decoration/2.webp" alt="Interior Design 2" />
              </div>

              <!-- Slide 3 -->
              <div class="swiper-slide">
                <img src="./imgs/ai-interior-decoration/3.webp" alt="Interior Design 3" />
              </div>
               <!-- Slide 1 -->
              <div class="swiper-slide">
                <img src="./imgs/ai-interior-decoration/1.webp" alt="Interior Design 1" />
              </div>

              <!-- Slide 2 -->
              <div class="swiper-slide">
                <img src="./imgs/ai-interior-decoration/2.webp" alt="Interior Design 2" />
              </div>

              <!-- Slide 3 -->
              <div class="swiper-slide">
                <img src="./imgs/ai-interior-decoration/3.webp" alt="Interior Design 3" />
              </div>
            </div>

            <!-- Pagination -->
            <div class="swiper-pagination"></div>
          </div>
        </div>

        <!-- Text and Call-to-Action Area (Lower Part) -->
        <div class="max-w-7xl mx-auto">
          <div class="flex flex-col lg:flex-row items-center justify-between gap-8">
            <!-- Left Content -->
            <div class="text-center lg:text-left flex-1">
              <!-- Title -->
              <h2 class="text-white text-xl md:text-2xl font-bold mb-4">
                Thiết kế nội thất bằng AI
              </h2>

              <!-- Description -->
              <p class="text-gray-300 text-sm md:text-base leading-relaxed">
                Chỉ cần tải lên ảnh hiện trạng thô và moodboard phong cách mong muốn,
                AI sẽ tự động biến đổi không gian thành một phòng khách hoàn chỉnh — với vật liệu, ánh sáng, đồ nội thất và tông màu hài hòa đúng concept.
              </p>
            </div>

            <!-- Right CTA Button -->
            <div class="flex-shrink-0">
              <button class="bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-700 transition-colors">
                Sử dụng ngay
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  `);

  // Initialize functionality after DOM is updated
  setTimeout(() => {
    initializeAIInteriorDecoration();
  }, 100);
}

// Initialize AI Interior Decoration functionality
function initializeAIInteriorDecoration() {
  // Initialize Swiper with coverflow effect (following the standard template)
  const swiper = new Swiper('.ai-interior-swiper', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    spaceBetween: 30,
    loop: true,
    coverflowEffect: {
      rotate: 30,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });

  console.log('AI Interior Decoration Swiper initialized');
}
