export default function AIFunctions(targetId = 'app') {
  const root = document.getElementById(targetId);
  if (!root) return;

  const tabs = [
    { key: 'inpaint', label: 'Image Inpaint', image: './imgs/ai-functions/1.png', title: 'Image Inpaint', desc: 'Easily modify the details of the picture' },
    { key: 'inspiration', label: 'Inspiration draw', image: './imgs/ai-functions/2.png', title: 'Inspiration draw', desc: 'Quickly sketch ideas and variations' },
    { key: 'realtime', label: 'Real-time Inspiration draw', image: './imgs/ai-functions/3.png', title: 'Real-time Inspiration draw', desc: 'Live preview while you ideate' },
    { key: 'outpaint', label: 'Outpaint', image: './imgs/ai-functions/4.png', title: 'Outpaint', desc: 'Extend beyond the original canvas' },
    { key: 'facade', label: 'Facade Renovation', image: './imgs/ai-functions/5.png', title: 'Facade Renovation', desc: 'One-click exterior remodeling' },
    { key: 'superres', label: 'AI-Super Resolution', image: './imgs/ai-functions/6.png', title: 'AI-Super Resolution', desc: 'Upscale with fine detail' },
    { key: 'weather', label: 'Weather/Season Swap', image: './imgs/ai-functions/7.png', title: 'Weather/Season Swap', desc: 'Change weather or season instantly' },
    { key: 'background', label: 'Background Swap', image: './imgs/ai-functions/1.png', title: 'Background Swap', desc: 'Replace backgrounds intelligently' },
  ];

  const tabsHtml = tabs
    .map((t, i) => `
      <button
        data-key="${t.key}"
        class="ai-tab ${i === 0 ? 'bg-red-600 text-white' : 'bg-gray-700 text-white'} px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-600 transition-colors">
        ${t.label}
      </button>
    `)
    .join('');

  root.insertAdjacentHTML('beforeend', `
    <section id="blog" class="bg-gray-900 py-16">
      <div class="px-6 max-w-7xl mx-auto">
        <div class="text-center mb-10">
          <h2 class="text-white text-3xl font-bold">More introductions to AI functions</h2>
        </div>

        <div class="flex flex-wrap gap-4 justify-start mb-10">${tabsHtml}</div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div class="lg:col-span-7">
            <div class="bg-gray-800 rounded-lg overflow-hidden shadow-2xl">
              <img id="aiFunctionsImage" src="${tabs[0].image}" alt="AI Function" class="w-full h-[420px] object-contain bg-black" />
            </div>
          </div>

          <div class="lg:col-span-5">
            <h3 id="aiFunctionsTitle" class="text-white text-3xl font-bold mb-4">${tabs[0].title}</h3>
            <div class="w-full h-px bg-gray-700 mb-6"></div>
            <p id="aiFunctionsDesc" class="text-gray-300 mb-8">${tabs[0].desc}</p>
            <button class="bg-red-600 text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-red-700 transition-colors">
              Immediate use
            </button>
          </div>
        </div>
      </div>
    </section>
  `);

  // Wire interactions
  const imageEl = document.getElementById('aiFunctionsImage');
  const titleEl = document.getElementById('aiFunctionsTitle');
  const descEl = document.getElementById('aiFunctionsDesc');
  const tabButtons = Array.from(document.querySelectorAll('.ai-tab'));

  tabButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const key = btn.getAttribute('data-key');
      const tab = tabs.find((t) => t.key === key);
      if (!tab) return;

      // Update active styles
      tabButtons.forEach((b) => (b.className = 'ai-tab bg-gray-700 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-600 transition-colors'));
      btn.className = 'ai-tab bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-red-700 transition-colors';

      // Swap content
      imageEl.src = tab.image;
      titleEl.textContent = tab.title;
      descEl.textContent = tab.desc;
    });
  });
}


