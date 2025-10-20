export default function QA(targetId = 'app') {
  const root = document.getElementById(targetId);
  if (!root) return;

  const leftItems = [
    { q: 'Làm thế nào để mở thành viên AI Master Builder?', a: 'Vào cài đặt tài khoản, chọn Thành viên, sau đó chọn gói phù hợp. Thanh toán để kích hoạt ngay lập tức.' },
    { q: 'Có hướng dẫn sử dụng sản phẩm không?', a: 'Có. Bấm vào "Hướng dẫn" trên header trang chủ để xem video và các chỉ dẫn nhanh.' },
    { q: 'Ưu đãi thành viên kéo dài bao lâu?', a: 'Giá ưu đãi có thể thay đổi theo thời điểm. Hiện tại ưu đãi vẫn còn hiệu lực, mọi thay đổi sẽ được thông báo trước.' },
  ];

  const rightItems = [
    { q: 'Một tài khoản thành viên đăng nhập được trên mấy thiết bị?', a: 'Một thành viên có thể đăng nhập trên nhiều thiết bị, nhưng có thể bị giới hạn sử dụng đồng thời. Bạn có thể quản lý thiết bị đang dùng trong tài khoản.' },
    { q: 'Mua số lượng lớn có ưu đãi thêm không?', a: 'Chúng tôi có chính sách ưu đãi cho doanh nghiệp/mua nhiều. Vui lòng liên hệ bộ phận kinh doanh để được tư vấn và hỗ trợ xuất hóa đơn.' },
    { q: 'Có xuất hóa đơn không?', a: 'Có, chúng tôi hỗ trợ xuất hóa đơn cho các đơn hàng đủ điều kiện. Quý khách gửi thông tin hóa đơn sau khi thanh toán hoặc liên hệ bộ phận hỗ trợ.' },
  ];

  function renderItems(items, columnId) {
    return items
      .map((item, idx) => `
        <div class="border-b border-gray-700">
          <button class="w-full flex items-center justify-between text-left py-5 group" data-qa-btn data-col="${columnId}" data-idx="${idx}">
            <span class="text-white text-lg">${item.q}</span>
            <svg class="w-5 h-5 text-gray-400 group-hover:text-white transition-transform" data-qa-icon viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clip-rule="evenodd"/></svg>
          </button>
          <div class="hidden pb-5 text-gray-300" data-qa-panel>${item.a}</div>
        </div>
      `)
      .join('');
  }

  root.insertAdjacentHTML('beforeend', `
    <section id="contact" class="bg-gray-900 py-16">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-10">
          <h2 class="text-white text-3xl font-bold">
            <span class="inline-block w-8 h-0.5 bg-red-500 mr-3 align-middle"></span>
            Hỏi đáp
            <span class="inline-block w-8 h-0.5 bg-red-500 ml-3 align-middle"></span>
          </h2>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>${renderItems(leftItems, 'L')}</div>
          <div>${renderItems(rightItems, 'R')}</div>
        </div>
      </div>
    </section>
  `);

  // Tương tác: bật/tắt từng câu hỏi (accordion đơn giản)
  const buttons = Array.from(document.querySelectorAll('[data-qa-btn]'));
  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const wrapper = btn.parentElement;
      const panel = wrapper.querySelector('[data-qa-panel]');
      const icon = btn.querySelector('[data-qa-icon]');
      const isOpen = !panel.classList.contains('hidden');

      // Đóng/mở riêng lẻ từng mục
      if (isOpen) {
        panel.classList.add('hidden');
        icon.style.transform = 'rotate(0deg)';
      } else {
        panel.classList.remove('hidden');
        icon.style.transform = 'rotate(90deg)';
      }
    });
  });
}
