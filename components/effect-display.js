export default function EffectDisplay(targetId = 'app') {
  const root = document.getElementById(targetId);
  if (!root) return;

  root.insertAdjacentHTML('beforeend', `
    <!-- Khu vực Hiển thị Hiệu ứng -->
    <section id="services" class="bg-gray-900 py-10">
      <div class="px-6">
        <!-- Tiêu đề khu vực -->
        <div class="text-center mb-12">
          <h2 class="text-white text-3xl font-bold mb-4">
            <span class="inline-block w-8 h-0.5 bg-red-500 mr-4"></span>
            Hiển thị hiệu ứng
            <span class="inline-block w-8 h-0.5 bg-red-500 ml-4"></span>
          </h2>
        </div>

        <!-- Lưới: Mobile Stack, Desktop Grid -->
        <div class="flex flex-col md:grid md:grid-cols-10 md:grid-rows-4 gap-4 h-auto md:h-[450px]">
          <!-- Vị trí 1: Ảnh lớn với thanh trượt so sánh -->
          <div class="md:col-span-5 md:row-span-4 relative bg-gray-800 rounded-lg overflow-hidden h-[300px] md:h-full">
            <!-- Vùng so sánh -->
            <div class="relative w-full h-full overflow-hidden" id="comparisonContainer">
              <!-- Ảnh Sau (Nền) - Render -->
              <img
                id="afterImage"
                src="./imgs/effect-display/1_2.png"
                alt="Sau khi thiết kế"
                class="w-full h-full object-contain transition-transform duration-300 cursor-grab active:cursor-grabbing"
                style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; z-index: 1; transform: scale(1.1) translate(0px, 0px); object-position: center center;"
              />

              <!-- Ảnh Trước (Lớp cắt phía trên) - Sketch -->
              <img
                id="beforeImage"
                src="./imgs/effect-display/1_1.jpg"
                alt="Trước khi thiết kế"
                class="w-full h-full object-contain transition-transform duration-300 cursor-grab active:cursor-grabbing"
                style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; z-index: 2; transform: scale(1.05) translate(0px, 0px); object-position: center center;"
              />

              <!-- Thanh trượt tương tác -->
              <div class="absolute top-0 bottom-0 w-1 bg-red-500 cursor-ew-resize z-10" id="slider" style="left: 50%;">
                <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center shadow-lg">
                  <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"/>
                  </svg>
                </div>
              </div>

              <!-- Zoom Controls -->
              <div class="absolute top-4 right-4 z-20 flex flex-col space-y-2">
                <button onclick="adjustZoom(0.1)" class="bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                  </svg>
                </button>
                <button onclick="adjustZoom(-0.1)" class="bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 12H6"/>
                  </svg>
                </button>
                <button onclick="resetZoom()" class="bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all text-xs">
                  Reset
                </button>
              </div>
            </div>
          </div>

          <!-- Mobile: Grid ảnh nhỏ, Desktop: Cột riêng -->
          <div class="grid grid-cols-2 md:contents gap-2 md:gap-0">
            <!-- Vị trí 2: Ảnh nhỏ 1 -->
            <div class="md:col-start-6 md:row-start-1 bg-gray-700 rounded-lg overflow-hidden cursor-pointer hover:opacity-80 transition-opacity border-2 border-transparent hover:border-red-500 h-[60px] md:h-full" onclick="changeImages('./imgs/effect-display/1_1.jpg', './imgs/effect-display/1_2.png', 'Bảo tàng truyền thống Việt Nam', 'Ảnh chụp thực tế của bảo tàng truyền thống Việt Nam, mái cong lấy cảm hứng từ đình chùa, ngói đất nung màu nâu đỏ, tường đá ong và gạch bát tràng, khung thép nhẹ hiện đại, nằm bên hồ nước phẳng lặng, ánh sáng ban ngày dịu nhẹ, cây xanh và hàng tre bao quanh, phản chiếu công trình trên mặt nước, 8K, photorealistic, kiến trúc hòa quyện giữa truyền thống và hiện đại.')">
              <img src="./imgs/effect-display/1_2.png" alt="Nội thất 1" class="w-full h-full object-cover" />
          </div>

            <!-- Vị trí 3: Ảnh nhỏ 2 -->
            <div class="md:col-start-6 md:row-start-2 bg-gray-700 rounded-lg overflow-hidden cursor-pointer hover:opacity-80 transition-opacity border-2 border-transparent hover:border-red-500 h-[60px] md:h-full" onclick="changeImages('./imgs/effect-display/2_1.png', './imgs/effect-display/2_2.png', 'Phòng khách hiện đại tối giản', 'Ảnh chụp thực tế của phòng khách, phong cách thiết kế hiện đại tối giản, sofa da lớn màu nâu tối, tường và kệ ốp gỗ xám, bàn trà đá marble đen, sàn gạch lớn màu xám đậm, ánh sáng tự nhiên từ cửa sổ lớn kết hợp đèn downlight và đèn sàn trắng lạnh.')">
              <img src="./imgs/effect-display/2_2.png" alt="Phòng khách 1" class="w-full h-full object-cover" />
          </div>

            <!-- Vị trí 4: Ảnh nhỏ 3 -->
            <div class="md:col-start-6 md:row-start-3 bg-gray-700 rounded-lg overflow-hidden cursor-pointer hover:opacity-80 transition-opacity border-2 border-transparent hover:border-red-500 h-[60px] md:h-full" onclick="changeImages('./imgs/effect-display/3_1.jpg', './imgs/effect-display/3_2.png', 'Villa Tropical Resort', 'Ảnh chụp thực tế của không gian chung (villa), phong cách thiết kế Tropical Resort hiện đại, nội thất gỗ và vải trắng, tường kính lớn, có hồ bơi và nhiều cây xanh rủ, sàn gỗ tối, ánh sáng tự nhiên ngập tràn tạo cảm giác thư giãn, gần gũi thiên nhiên.')">
              <img src="./imgs/effect-display/3_2.png" alt="Bếp 1" class="w-full h-full object-cover" />
          </div>

            <!-- Vị trí 5: Ảnh nhỏ 4 -->
            <div class="md:col-start-6 md:row-start-4 bg-gray-700 rounded-lg overflow-hidden cursor-pointer hover:opacity-80 transition-opacity border-2 border-transparent hover:border-red-500 h-[60px] md:h-full" onclick="changeImages('./imgs/effect-display/4_1.png', './imgs/effect-display/4_2.png', 'Phòng ngủ AI', 'Thiết kế phòng ngủ sang trọng tập trung vào sự thoải mái và thư giãn. Chăn ga gối cao cấp, ánh sáng ấm áp, lưu trữ thông minh, tông màu dịu nhẹ, bố trí nội thất khoa học, giúp nghỉ ngơi tối ưu.')">
              <img src="./imgs/effect-display/4_2.png" alt="Phòng ngủ 1" class="w-full h-full object-cover" />
            </div>
          </div>

          <!-- Vị trí 6: Nội dung -->
          <div class="md:col-span-5 md:row-span-4 md:col-start-7 md:row-start-1 p-4 flex flex-col justify-start h-auto md:h-full">
            <div class="space-y-4">
              <div>
                <h3 class="text-white text-xl md:text-2xl font-bold mb-3 md:mb-4" id="contentTitle">Bảo tàng truyền thống Việt Nam</h3>
                <p class="text-gray-300 text-sm md:text-base leading-relaxed" id="contentDescription">
                  Ảnh chụp thực tế của bảo tàng truyền thống Việt Nam, mái cong lấy cảm hứng từ đình chùa, ngói đất nung màu nâu đỏ, tường đá ong và gạch bát tràng, khung thép nhẹ hiện đại, nằm bên hồ nước phẳng lặng, ánh sáng ban ngày dịu nhẹ, cây xanh và hàng tre bao quanh, phản chiếu công trình trên mặt nước, 8K, photorealistic, kiến trúc hòa quyện giữa truyền thống và hiện đại.
                </p>
              </div>

              <!-- Nội dung 2 cột -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                <!-- Cột trái -->
                <div class="space-y-2">
                  <h4 class="text-white text-sm md:text-base font-semibold">Đặc trưng thiết kế</h4>
                  <ul class="text-gray-300 text-xs md:text-sm space-y-1">
                    <li>• Mái cong truyền thống</li>
                    <li>• Ngói đất nung nâu đỏ</li>
                    <li>• Tường đá ong & gạch bát tràng</li>
                    <li>• Khung thép hiện đại</li>
                  </ul>
                </div>

                <!-- Cột phải -->
                <div class="space-y-2">
                  <h4 class="text-white text-sm md:text-base font-semibold">Lợi ích từ AI</h4>
                  <ul class="text-gray-300 text-xs md:text-sm space-y-1">
                    <li>• Xem ngay kết quả</li>
                    <li>• Đa dạng phong cách</li>
                    <li>• Lên kế hoạch tiết kiệm</li>
                    <li>• Kết quả chuyên nghiệp</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Nút hành động -->
     
      </div>
    </section>
  `);

  // Khởi tạo tính năng sau khi DOM cập nhật
  setTimeout(() => {
    initializeEffectDisplay();
    initializePan(); // Khởi tạo tính năng pan
    
    // Đảm bảo hiển thị đúng ban đầu
    const beforeImage = document.getElementById('beforeImage');
    const afterImage = document.getElementById('afterImage');
    const container = document.getElementById('comparisonContainer');
    const slider = document.getElementById('slider');

    if (beforeImage && afterImage && container && slider) {
      // Lấy kích thước container
      const rect = container.getBoundingClientRect();
      const initialPosition = rect.width / 2; // 50% chiều rộng container

      // Cập nhật vùng cắt ảnh & vị trí thanh trượt
      beforeImage.style.clip = 'rect(auto, auto, auto, ' + initialPosition + 'px)';
      slider.style.left = initialPosition + 'px';

      // Đảm bảo vị trí đúng
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
  }, 100);
}

// Hàm đổi ảnh, nội dung khi bấm vào ảnh nhỏ
function changeImages(beforeSrc, afterSrc, title, description) {
  const beforeImage = document.getElementById('beforeImage');
  const afterImage = document.getElementById('afterImage');
  const contentTitle = document.getElementById('contentTitle');
  const contentDescription = document.getElementById('contentDescription');

  if (beforeImage && afterImage) {
    // Đổi nguồn ảnh
    beforeImage.src = beforeSrc;
    afterImage.src = afterSrc;

    // Lấy vùng & thanh trượt
    const container = document.getElementById('comparisonContainer');
    const slider = document.getElementById('slider');

    if (container && slider) {
      // Lấy kích thước & đặt lại vị trí thanh trượt
      const rect = container.getBoundingClientRect();
      const initialPosition = rect.width / 2; // 50%

      // Cập nhật vùng cắt & vị trí slider
      beforeImage.style.clip = 'rect(auto, auto, auto, ' + initialPosition + 'px)';
      slider.style.left = initialPosition + 'px';
    }

    // Đảm bảo đúng style so sánh
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

  if (contentTitle && contentDescription) {
    contentTitle.textContent = title;
    contentDescription.textContent = description;
  }
}

// Tính năng kéo/thả thanh trượt so sánh ảnh
function initializeEffectDisplay() {
  const slider = document.getElementById('slider');
  const beforeImage = document.getElementById('beforeImage');
  const container = document.getElementById('comparisonContainer');

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

      // Cập nhật vị trí
      slider.style.left = pixelValue + 'px';
      // Cập nhật vùng cắt ảnh
      beforeImage.style.clip = 'rect(auto, auto, auto, ' + pixelValue + 'px)';
    });

    document.addEventListener('mouseup', function () {
      isDragging = false;
    });

    // Sự kiện cảm ứng cho di động
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

// Zoom and Pan functionality
let currentZoom = { before: 1.05, after: 1.1 };
let currentPan = { before: { x: 0, y: 0 }, after: { x: 0, y: 0 } };
let isDragging = false;
let dragStart = { x: 0, y: 0 };

function adjustZoom(delta) {
  currentZoom.before = Math.max(0.8, Math.min(2.0, currentZoom.before + delta));
  currentZoom.after = Math.max(0.8, Math.min(2.0, currentZoom.after + delta));
  
  updateImageTransforms();
}

function resetZoom() {
  currentZoom = { before: 1.05, after: 1.1 };
  currentPan = { before: { x: 0, y: 0 }, after: { x: 0, y: 0 } };
  
  updateImageTransforms();
}

function updateImageTransforms() {
  const beforeImage = document.getElementById('beforeImage');
  const afterImage = document.getElementById('afterImage');
  
  if (beforeImage && afterImage) {
    beforeImage.style.transform = `scale(${currentZoom.before}) translate(${currentPan.before.x}px, ${currentPan.before.y}px)`;
    afterImage.style.transform = `scale(${currentZoom.after}) translate(${currentPan.after.x}px, ${currentPan.after.y}px)`;
  }
}

// Pan functionality
function initializePan() {
  const beforeImage = document.getElementById('beforeImage');
  const afterImage = document.getElementById('afterImage');
  
  if (beforeImage && afterImage) {
    // Mouse events
    beforeImage.addEventListener('mousedown', startDrag);
    afterImage.addEventListener('mousedown', startDrag);
    
    document.addEventListener('mousemove', drag);
    document.addEventListener('mouseup', endDrag);
    
    // Touch events for mobile
    beforeImage.addEventListener('touchstart', startDragTouch);
    afterImage.addEventListener('touchstart', startDragTouch);
    
    document.addEventListener('touchmove', dragTouch);
    document.addEventListener('touchend', endDrag);
  }
}

function startDrag(e) {
  isDragging = true;
  dragStart.x = e.clientX - currentPan.before.x;
  dragStart.y = e.clientY - currentPan.before.y;
  e.preventDefault();
}

function startDragTouch(e) {
  isDragging = true;
  const touch = e.touches[0];
  dragStart.x = touch.clientX - currentPan.before.x;
  dragStart.y = touch.clientY - currentPan.before.y;
  e.preventDefault();
}

function drag(e) {
  if (!isDragging) return;
  
  const deltaX = e.clientX - dragStart.x;
  const deltaY = e.clientY - dragStart.y;
  
  // Limit pan based on zoom level
  const maxPanX = (currentZoom.before - 1) * 100;
  const maxPanY = (currentZoom.before - 1) * 50;
  
  currentPan.before.x = Math.max(-maxPanX, Math.min(maxPanX, deltaX));
  currentPan.before.y = Math.max(-maxPanY, Math.min(maxPanY, deltaY));
  currentPan.after.x = currentPan.before.x;
  currentPan.after.y = currentPan.before.y;
  
  updateImageTransforms();
}

function dragTouch(e) {
  if (!isDragging) return;
  
  const touch = e.touches[0];
  const deltaX = touch.clientX - dragStart.x;
  const deltaY = touch.clientY - dragStart.y;
  
  // Limit pan based on zoom level
  const maxPanX = (currentZoom.before - 1) * 100;
  const maxPanY = (currentZoom.before - 1) * 50;
  
  currentPan.before.x = Math.max(-maxPanX, Math.min(maxPanX, deltaX));
  currentPan.before.y = Math.max(-maxPanY, Math.min(maxPanY, deltaY));
  currentPan.after.x = currentPan.before.x;
  currentPan.after.y = currentPan.before.y;
  
  updateImageTransforms();
}

function endDrag() {
  isDragging = false;
}

// Đưa hàm lên global để gọi từ HTML
window.changeImages = changeImages;
window.adjustZoom = adjustZoom;
window.resetZoom = resetZoom;
