export default function Footer(targetId = 'app') {
  const root = document.getElementById(targetId);
  if (!root) return;

  root.insertAdjacentHTML('beforeend', `
    <footer class="bg-gray-900 border-t border-gray-800">
      <div class="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        <!-- Về chúng tôi -->
        <div>
          <h4 class="text-white font-semibold mb-4">Về chúng tôi</h4>
          <ul class="space-y-3 text-gray-300">
            <li><a href="#" class="hover:text-white">Giới thiệu đội ngũ</a></li>
            <li><a href="#" class="hover:text-white">Kênh YouTube chính thức</a></li>
            <li><a href="#" class="hover:text-white">Đối tác hợp tác</a></li>
          </ul>
        </div>

        <!-- Trung tâm hỗ trợ -->
        <div>
          <h4 class="text-white font-semibold mb-4">Trung tâm hỗ trợ</h4>
          <ul class="space-y-3 text-gray-300">
            <li><a href="#" class="hover:text-white">Chính sách bảo mật</a></li>
            <li><a href="#" class="hover:text-white">Điều khoản sử dụng</a></li>
          </ul>
        </div>

        <!-- Theo dõi chúng tôi -->
        <div>
          <h4 class="text-white font-semibold mb-4">Theo dõi chúng tôi</h4>
          <img src="./imgs/logo.png" alt="QR Code" class="w-28 h-28 bg-white object-contain p-1 rounded" />
        </div>
      </div>
      <div class="border-t border-gray-800 text-center text-gray-400 text-sm py-4">© 2025 AIcomplex.vn All rights reserved.</div>
    </footer>
  `);
}


