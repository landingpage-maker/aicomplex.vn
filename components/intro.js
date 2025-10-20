export default function Intro(targetId = 'app') {
  const root = document.getElementById(targetId);
  if (!root) return;

  root.insertAdjacentHTML('beforeend', `
    <!-- Introduction to Core AI Functions Section -->
    <section id="about" class="bg-gray-900 py-16">
      <div class="px-6">
        <!-- Section Title -->
        <div class="text-center mb-12">
          <h2 class="text-white text-3xl font-bold mb-4">
            <span class="inline-block w-8 h-0.5 bg-red-500 mr-4"></span>
            Giới thiệu các chức năng AI cốt lõi
            <span class="inline-block w-8 h-0.5 bg-red-500 ml-4"></span>
          </h2>
        </div>

        <!-- Section 1: Layout 8-4 (Content Left, Image Right) -->
        <div class="max-w-7xl mx-auto mb-12 md:mb-16">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
            <!-- Left Content Area (8 columns) -->
            <div class="lg:col-span-4 space-y-4 lg:space-y-6 order-2 lg:order-1">
              <!-- Main Heading -->
              <h3 class="text-white text-xl md:text-2xl font-bold leading-tight">
                Biến đổi ánh sáng & thời tiết chỉ trong vài giây
              </h3>

              <!-- Separator Line -->
              <div class="w-full h-px bg-gray-400"></div>

              <!-- Description -->
              <div class="text-gray-300 text-sm md:text-base leading-relaxed space-y-3 md:space-y-4">
                <p>
                  AIcomplex mang đến trải nghiệm "ma thuật" cho kiến trúc sư và sinh viên thiết kế:
                </p>
                <p>
                  Chỉ với một cú nhấp chuột, bạn có thể:
                </p>
                <div class="space-y-1 md:space-y-2">
                  <p>Chuyển cảnh ban ngày thành ban đêm lung linh ánh đèn</p>
                  <p>Biến nắng thành mưa, thay đổi cảm xúc không gian</p>
                  <p>Điều chỉnh ánh sáng, thời tiết, bầu trời theo ý muốn</p>
                </div>
                <p class="font-semibold text-red-400">
                  Tất cả chỉ trong 1 click
                </p>
              </div>

              <!-- Call-to-Action Button -->
            
            </div>

             <!-- Right Image Display Area (4 columns) -->
             <div class="lg:col-span-8 relative order-1 lg:order-2">
               <!-- Comparison Container -->
               <div class="relative bg-gray-800 rounded-lg overflow-hidden shadow-2xl" id="introComparisonContainer1" style="height: 450px;">
                 <!-- After Image (Background) -->
                 <img
                   id="introAfterImage1"
                   src="./imgs/intro/1/1.2.png"
                   alt="After Interior"
                   class="w-full h-full object-contain"
                   style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; z-index: 1;"
                 />

                 <!-- Before Image (Foreground with clip) -->
                 <img
                   id="introBeforeImage1"
                   src="./imgs/intro/1/1.1.png"
                   alt="Before Interior"
                   class="w-full h-full object-contain"
                   style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; z-index: 2;"
                 />

                 <!-- Interactive Slider -->
                 <div class="absolute top-0 bottom-0 w-1 bg-red-500 cursor-ew-resize z-10" id="introSlider1" style="left: 50%;">
                   <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center shadow-lg">
                     <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                       <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"/>
                     </svg>
                   </div>
                 </div>
               </div>

               <!-- Case Selection Buttons -->
               <div class="flex flex-wrap gap-2 mt-4">
                 <button
                   class="bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-red-700 transition-colors"
                   onclick="changeIntroComparison('./imgs/intro/1/1.1.png', './imgs/intro/1/1.2.png', this, 'introComparisonContainer1', 'introBeforeImage1', 'introAfterImage1', 'introSlider1')"
                 >
                   Trường hợp 1
                 </button>
                 <button
                   class="bg-gray-700 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-600 transition-colors"
                   onclick="changeIntroComparison('./imgs/intro/1/2.1.png', './imgs/intro/1/2.2.png', this, 'introComparisonContainer1', 'introBeforeImage1', 'introAfterImage1', 'introSlider1')"
                 >
                   Trường hợp 2
                 </button>
                 <button
                   class="bg-gray-700 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-600 transition-colors"
                   onclick="changeIntroComparison('./imgs/intro/1/3.1.png', './imgs/intro/1/3.2.png', this, 'introComparisonContainer1', 'introBeforeImage1', 'introAfterImage1', 'introSlider1')"
                 >
                   Trường hợp 3
                 </button>
                 <button
                   class="bg-gray-700 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-600 transition-colors"
                   onclick="changeIntroComparison('./imgs/intro/1/4.1.png', './imgs/intro/1/4.2.png', this, 'introComparisonContainer1', 'introBeforeImage1', 'introAfterImage1', 'introSlider1')"
                 >
                   Trường hợp 4
                 </button>
               </div>
             </div>
          </div>
        </div>

        <!-- Section 2: Layout 4-8 (Image Left, Content Right) -->
        <div class="max-w-7xl mx-auto">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <!-- Left Image Display Area (4 columns) -->
            <div class="lg:col-span-8 relative order-2 lg:order-1">
               <!-- Main Image -->
               <div class="relative bg-gray-800 rounded-lg overflow-hidden shadow-2xl">
                 <img
                   id="introMainImage2"
                   src="./imgs/intro/2/1.jpg"
                   alt="AI Architecture Design"
                   class="w-full h-[500px] object-cover"
                 />
               </div>

               <!-- Case Selection Buttons -->
               <div class="flex flex-wrap gap-2 mt-4">
                 <button
                   class="bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-red-700 transition-colors"
                   onclick="changeIntroImage('./imgs/intro/2/1.jpg', this, 'introMainImage2')"
                 >
                   Trường hợp 1
                 </button>
                 <button
                   class="bg-gray-700 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-600 transition-colors"
                   onclick="changeIntroImage('./imgs/intro/2/2.png', this, 'introMainImage2')"
                 >
                   Trường hợp 2
                 </button>
                 <button
                   class="bg-gray-700 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-600 transition-colors"
                   onclick="changeIntroImage('./imgs/intro/2/3.png', this, 'introMainImage2')"
                 >
                   Trường hợp 3
                 </button>
                 <button
                   class="bg-gray-700 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-600 transition-colors"
                   onclick="changeIntroImage('./imgs/intro/2/4.png', this, 'introMainImage2')"
                 >
                   Trường hợp 4
                 </button>
               </div>
            </div>

            <!-- Right Content Area (8 columns) -->
            <div class="lg:col-span-4 space-y-6 order-1 lg:order-2">
              <!-- Main Heading -->
              <h3 class="text-white text-xl md:text-2xl font-bold leading-tight">
                Công nghệ AI Rendering tiên tiến
              </h3>

              <!-- Separator Line -->
              <div class="w-full h-px bg-gray-400"></div>

              <!-- Description -->
              <p class="text-gray-300 text-sm md:text-base leading-relaxed">
                Trải nghiệm công nghệ AI tiên tiến biến đổi các khái niệm kiến trúc thành hình ảnh render chân thực với ánh sáng thông minh, mô phỏng vật liệu và hiệu ứng môi trường.
              </p>

              <!-- Call-to-Action Button -->
              <button onclick="window.open('https://app.archmaster.ai', '_blank')" class="bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-700 transition-colors">
                Thử ngay
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  `);

  // Initialize functionality after DOM is updated
  setTimeout(() => {
    initializeIntro();
  }, 100);
}

// Comparison image switching functionality
function changeIntroComparison(beforeSrc, afterSrc, clickedButton, containerId, beforeImageId, afterImageId, sliderId) {
  const beforeImage = document.getElementById(beforeImageId);
  const afterImage = document.getElementById(afterImageId);
  const container = document.getElementById(containerId);
  const slider = document.getElementById(sliderId);

  if (beforeImage && afterImage) {
    // Update image sources
    beforeImage.src = beforeSrc;
    afterImage.src = afterSrc;

    if (container && slider) {
      // Get container dimensions and set initial position
      const rect = container.getBoundingClientRect();
      const initialPosition = rect.width / 2; // 50% of container width

      // Set initial clip and slider position
      beforeImage.style.clip = 'rect(auto, auto, auto, ' + initialPosition + 'px)';
      slider.style.left = initialPosition + 'px';
    }

    // Ensure proper styling for comparison
    beforeImage.style.position = 'absolute';
    beforeImage.style.top = '0';
    beforeImage.style.left = '0';
    beforeImage.style.width = '100%';
    beforeImage.style.height = '100%';
    beforeImage.style.objectFit = 'cover';
    beforeImage.style.zIndex = '2';

    afterImage.style.position = 'absolute';
    afterImage.style.top = '0';
    afterImage.style.left = '0';
    afterImage.style.width = '100%';
    afterImage.style.height = '100%';
    afterImage.style.objectFit = 'cover';
    afterImage.style.zIndex = '1';
  }

  // Get all buttons in the same section (same parent container)
  const buttonContainer = clickedButton.closest('.lg\\:col-span-8');
  const allButtons = buttonContainer.querySelectorAll('button[onclick*="changeIntroComparison"]');

  // Update button states in the same section
  allButtons.forEach(button => {
    button.className = 'bg-gray-700 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-600 transition-colors';
  });

  // Set clicked button as active
  clickedButton.className = 'bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-red-700 transition-colors';
}

// Image switching functionality for section 2
function changeIntroImage(imageSrc, clickedButton, imageId) {
  const mainImage = document.getElementById(imageId);

  if (mainImage) {
    mainImage.src = imageSrc;
  }

  // Get all buttons in the same section (same parent container)
  const buttonContainer = clickedButton.closest('.lg\\:col-span-8');
  const allButtons = buttonContainer.querySelectorAll('button[onclick*="changeIntroImage"]');

  // Update button states in the same section
  allButtons.forEach(button => {
    button.className = 'bg-gray-700 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-600 transition-colors';
  });

  // Set clicked button as active
  clickedButton.className = 'bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-red-700 transition-colors';
}

// Initialize intro functionality
function initializeIntro() {
  // Initialize comparison sliders
  initializeIntroComparison('introSlider1', 'introBeforeImage1', 'introComparisonContainer1');
  
  // Set initial state for comparison container
  setTimeout(() => {
    const beforeImage = document.getElementById('introBeforeImage1');
    const afterImage = document.getElementById('introAfterImage1');
    const container = document.getElementById('introComparisonContainer1');
    const slider = document.getElementById('introSlider1');

    if (beforeImage && afterImage && container && slider) {
      // Get container dimensions
      const rect = container.getBoundingClientRect();
      const initialPosition = rect.width / 2; // 50% of container width

      // Set initial clip and slider position
      beforeImage.style.clip = 'rect(auto, auto, auto, ' + initialPosition + 'px)';
      slider.style.left = initialPosition + 'px';

      // Ensure proper positioning
      beforeImage.style.position = 'absolute';
      beforeImage.style.top = '0';
      beforeImage.style.left = '0';
      beforeImage.style.width = '100%';
      beforeImage.style.height = '100%';
      beforeImage.style.objectFit = 'cover';
      beforeImage.style.zIndex = '2';

      afterImage.style.position = 'absolute';
      afterImage.style.top = '0';
      afterImage.style.left = '0';
      afterImage.style.width = '100%';
      afterImage.style.height = '100%';
      afterImage.style.objectFit = 'cover';
      afterImage.style.zIndex = '1';
    }
  }, 200);
}

// Interactive slider functionality for intro
function initializeIntroComparison(sliderId, beforeImageId, containerId) {
  const slider = document.getElementById(sliderId);
  const beforeImage = document.getElementById(beforeImageId);
  const container = document.getElementById(containerId);

  if (slider && beforeImage && container) {
    let isDragging = false;

    slider.addEventListener('mousedown', function (e) {
      isDragging = true;
      e.preventDefault();
    });

    document.addEventListener('mousemove', function (e) {
      if (!isDragging) return;

      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
      const pixelValue = (percentage / 100) * rect.width;

      // Update slider position
      slider.style.left = pixelValue + 'px';

      // Update clip property
      beforeImage.style.clip = 'rect(auto, auto, auto, ' + pixelValue + 'px)';
    });

    document.addEventListener('mouseup', function () {
      isDragging = false;
    });

    // Touch events for mobile
    slider.addEventListener('touchstart', function (e) {
      isDragging = true;
      e.preventDefault();
    });

    document.addEventListener('touchmove', function (e) {
      if (!isDragging) return;

      const rect = container.getBoundingClientRect();
      const x = e.touches[0].clientX - rect.left;
      const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
      const pixelValue = (percentage / 100) * rect.width;

      slider.style.left = pixelValue + 'px';
      beforeImage.style.clip = 'rect(auto, auto, auto, ' + pixelValue + 'px)';
    });

    document.addEventListener('touchend', function () {
      isDragging = false;
    });
  }
}

// Make functions globally available
window.changeIntroComparison = changeIntroComparison;
window.changeIntroImage = changeIntroImage;
