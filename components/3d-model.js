export default function ThreeDModel(targetId = 'app') {
  const root = document.getElementById(targetId);
  if (!root) return;

  root.insertAdjacentHTML('beforeend', `
    <style>
      /* Emphasize center slide */
      .threeDModelSwiper .swiper-slide img {
        transition: transform .35s ease, filter .35s ease, opacity .35s ease;
        will-change: transform, filter, opacity;
      }
      .threeDModelSwiper .swiper-slide-active img {
        transform: scale(1.12);
        opacity: 1;
        filter: none;
      }
      .threeDModelSwiper .swiper-slide:not(.swiper-slide-active) img {
        transform: scale(0.86);
        opacity: 0.55;
        filter: blur(1px) brightness(0.85);
      }
    </style>
    <!-- AI image to 3D model Section -->
    <section class="bg-gray-900 py-16">
      <div class="px-6 max-w-7xl mx-auto">
        <!-- Title -->
        <div class="text-center mb-10">
          <h2 class="text-white text-3xl font-bold mb-2">AI image to 3D model</h2>
          <p class="text-gray-300">With just one click, you can convert object images into 3D format models and import them into software such as SU, 3Dmax, C4D, and Blender for use</p>
        </div>

        <!-- Swiper Carousel -->
        <div class="relative">
          <div class="swiper threeDModelSwiper select-none">
            <div class="swiper-wrapper">
              <div class="swiper-slide flex items-center justify-center">
                <img src="./imgs/3d-model/1.webp" alt="3D Model 1" class="h-[650px] object-contain" />
              </div>
              <div class="swiper-slide flex items-center justify-center">
                <img src="./imgs/3d-model/2.webp" alt="3D Model 2" class="h-[650px] object-contain" />
              </div>
              <div class="swiper-slide flex items-center justify-center">
                <img src="./imgs/3d-model/3.webp" alt="3D Model 3" class="h-[650px] object-contain" />
              </div>
              <div class="swiper-slide flex items-center justify-center">
                <img src="./imgs/3d-model/4.webp" alt="3D Model 4" class="h-[650px] object-contain" />
              </div>
              <div class="swiper-slide flex items-center justify-center">
                <img src="./imgs/3d-model/5.webp" alt="3D Model 5" class="h-[650px] object-contain" />
              </div>
              <div class="swiper-slide flex items-center justify-center">
                <img src="./imgs/3d-model/6.webp" alt="3D Model 6" class="h-[650px] object-contain" />
              </div>
            </div>
          </div>

          <!-- Navigation -->
          <div class="swiper-button-prev !text-white"></div>
          <div class="swiper-button-next !text-white"></div>
        </div>
      </div>
    </section>
  `);

  // Initialize after DOM paint
  setTimeout(() => {
    const swiper = new Swiper('.threeDModelSwiper', {
      slidesPerView: 3,
      centeredSlides: true,
      spaceBetween: 24,
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        0: { slidesPerView: 1.1, spaceBetween: 12 },
        640: { slidesPerView: 2, spaceBetween: 16 },
        1024: { slidesPerView: 3, spaceBetween: 24 },
      },
      effect: 'coverflow',
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 140,
        modifier: 1,
        slideShadows: false,
      },
    });
  }, 100);
}


