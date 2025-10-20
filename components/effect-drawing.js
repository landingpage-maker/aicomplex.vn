export default function EffectDrawing(targetId = 'app') {
  const root = document.getElementById(targetId);
  if (!root) return;

  root.insertAdjacentHTML('beforeend', `
    <!-- Effect Drawing Enhancement Section -->
    <section class="bg-gray-900 py-16">
      <div class="px-6">
        <!-- Title and Subtitle Area -->
        <div class="max-w-7xl mx-auto text-center mb-12">
          <!-- Main Title -->
          <h2 class="text-white text-xl md:text-2xl font-bold mb-6">
            Tăng chất lượng hình ảnh chỉ trong 1 click
          </h2>

          <!-- Subtitle/Description -->
          <p class="text-gray-300 text-sm md:text-base leading-relaxed max-w-4xl mx-auto">
            Với AIcomplex, mọi bức ảnh kiến trúc hay nội thất của bạn đều có thể được nâng cấp độ sắc nét, ánh sáng và chi tiết vật liệu chỉ trong một vài giây.
            AI tự động phục hồi độ phân giải, tinh chỉnh ánh sáng, loại bỏ nhiễu và làm nổi bật từng đường nét thiết kế — giúp hình ảnh trở nên sắc nét, chân thực và chuyên nghiệp như ảnh render 4K.
          </p>
        </div>

        <!-- Image Display Area -->
        <div class="max-w-7xl mx-auto mb-12">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <!-- Frame 1: Comparison Container (Hiện mặc định là ảnh thứ 3) -->
            <div class="relative bg-gray-800 rounded-lg overflow-hidden shadow-2xl" id="effectDrawingComparisonContainer1" style="height: 400px;">
              <!-- After Image (Background) -->
              <img
                id="effectDrawingAfterImage1"
                src="./imgs/effect-drawing/1.1.png"
                alt="After Enhancement 3"
                class="w-full h-full object-cover"
                style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; z-index: 1;"
              />

              <!-- Before Image (Foreground with clip) -->
              <img
                id="effectDrawingBeforeImage1"
                src="./imgs/effect-drawing/1.2.png"
                alt="Before Enhancement 3"
                class="w-full h-full object-cover"
                style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; z-index: 2;"
              />

              <!-- Interactive Slider -->
              <div class="absolute top-0 bottom-0 w-1 bg-red-500 cursor-ew-resize z-10" id="effectDrawingSlider1" style="left: 50%;">
                <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center shadow-lg">
                  <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"/>
                  </svg>
                </div>
              </div>
            </div>

            <!-- Frame 2: Comparison Container (Vẫn giữ hình 2 cũ) -->
            <div class="relative bg-gray-800 rounded-lg overflow-hidden shadow-2xl" id="effectDrawingComparisonContainer2" style="height: 400px;">
              <!-- After Image (Background) -->
              <img
                id="effectDrawingAfterImage2"
                src="./imgs/effect-drawing/2.2.png"
                alt="After Enhancement 2"
                class="w-full h-full object-cover"
                style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; z-index: 1;"
              />

              <!-- Before Image (Foreground with clip) -->
              <img
                id="effectDrawingBeforeImage2"
                src="./imgs/effect-drawing/2.1.png"
                alt="Before Enhancement 2"
                class="w-full h-full object-cover"
                style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; z-index: 2;"
              />

              <!-- Interactive Slider -->
              <div class="absolute top-0 bottom-0 w-1 bg-red-500 cursor-ew-resize z-10" id="effectDrawingSlider2" style="left: 50%;">
                <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center shadow-lg">
                  <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Call-to-Action Button -->
        <div class="max-w-7xl mx-auto text-center">
          <button class="bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-700 transition-colors">
            Sử dụng ngay
          </button>
        </div>
      </div>
    </section>
  `);

  // Initialize functionality after DOM is updated
  setTimeout(() => {
    initializeEffectDrawing();
  }, 100);
}

// Initialize Effect Drawing functionality
function initializeEffectDrawing() {
  // Initialize both comparison sliders
  initializeEffectDrawingComparison('effectDrawingSlider1', 'effectDrawingBeforeImage1', 'effectDrawingComparisonContainer1');
  initializeEffectDrawingComparison('effectDrawingSlider2', 'effectDrawingBeforeImage2', 'effectDrawingComparisonContainer2');
  
  // Set initial state for both comparison containers
  setTimeout(() => {
    // Frame 1
    const beforeImage1 = document.getElementById('effectDrawingBeforeImage1');
    const afterImage1 = document.getElementById('effectDrawingAfterImage1');
    const container1 = document.getElementById('effectDrawingComparisonContainer1');
    const slider1 = document.getElementById('effectDrawingSlider1');

    if (beforeImage1 && afterImage1 && container1 && slider1) {
      const rect1 = container1.getBoundingClientRect();
      const initialPosition1 = rect1.width / 2;
      beforeImage1.style.clip = 'rect(auto, auto, auto, ' + initialPosition1 + 'px)';
      slider1.style.left = initialPosition1 + 'px';
      setupImageStyles(beforeImage1, afterImage1);
    }

    // Frame 2
    const beforeImage2 = document.getElementById('effectDrawingBeforeImage2');
    const afterImage2 = document.getElementById('effectDrawingAfterImage2');
    const container2 = document.getElementById('effectDrawingComparisonContainer2');
    const slider2 = document.getElementById('effectDrawingSlider2');

    if (beforeImage2 && afterImage2 && container2 && slider2) {
      const rect2 = container2.getBoundingClientRect();
      const initialPosition2 = rect2.width / 2;
      beforeImage2.style.clip = 'rect(auto, auto, auto, ' + initialPosition2 + 'px)';
      slider2.style.left = initialPosition2 + 'px';
      setupImageStyles(beforeImage2, afterImage2);
    }
  }, 200);
}

// Helper function to setup image styles
function setupImageStyles(beforeImage, afterImage) {
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

// Interactive slider functionality for effect drawing
function initializeEffectDrawingComparison(sliderId, beforeImageId, containerId) {
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


