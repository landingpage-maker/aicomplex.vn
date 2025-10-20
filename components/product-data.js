export default function ProductData(targetId = 'app') {
  const root = document.getElementById(targetId);
  if (!root) return;

  root.insertAdjacentHTML('beforeend', `
    <!-- Product Data section -->
    <section class="bg-gray-900">
      <div
        class="w-full bg-center bg-no-repeat bg-cover"
        style="background-image: url('./imgs/product-data/nen.png');"
      >
        <div class="max-w-7xl mx-auto px-6 py-14">
          <!-- Title -->
          <div class="text-center mb-10">
            <h2 class="text-white text-xl md:text-2xl font-bold">
              <span class="inline-block w-8 h-0.5 bg-red-500 mr-3 align-middle"></span>
              Product data
              <span class="inline-block w-8 h-0.5 bg-red-500 ml-3 align-middle"></span>
            </h2>
          </div>

          <!-- KPIs -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
            <!-- Users -->
            <div class="flex flex-col items-center">
              <div class="text-blue-400 mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" viewBox="0 0 24 24" fill="currentColor"><path d="M16 11c1.657 0 3-1.79 3-4s-1.343-4-3-4-3 1.79-3 4 1.343 4 3 4zm-8 0c1.657 0 3-1.79 3-4S9.657 3 8 3 5 4.79 5 7s1.343 4 3 4zm0 2c-2.761 0-8 1.39-8 4.167V20h10v-2.833C10 14.39 5.761 13 3 13zm13 0c-.641 0-1.359.06-2.111.171 1.247.893 2.111 2.084 2.111 3.829V20h8v-2.833C24 14.39 18.761 13 16 13z"/></svg>
              </div>
              <div class="text-blue-400 text-3xl md:text-4xl font-bold leading-none">10w+</div>
              <div class="text-gray-300 mt-2 text-sm md:text-base">Cumulative user</div>
            </div>

            <!-- Generated images -->
            <div class="flex flex-col items-center">
              <div class="text-blue-400 mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" viewBox="0 0 24 24" fill="currentColor"><path d="M21 19V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14l4-4h12a2 2 0 0 0 2-2zM7 9a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm10 4h-8l-2 2V7h10v6z"/></svg>
              </div>
              <div class="text-blue-400 text-3xl md:text-4xl font-bold leading-none">100w+</div>
              <div class="text-gray-300 mt-2 text-sm md:text-base">Cumulatively generated images</div>
            </div>

            <!-- Customer country -->
            <div class="flex flex-col items-center">
              <div class="text-blue-400 mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm1 17.931V15h3.931A7.962 7.962 0 0 1 13 19.931zM7.069 14H11v5.931A7.962 7.962 0 0 1 7.069 14zM13 5.069A7.962 7.962 0 0 1 16.931 10H13V5.069zM11 5.069V10H7.069A7.962 7.962 0 0 1 11 5.069z"/></svg>
              </div>
              <div class="text-blue-400 text-3xl md:text-4xl font-bold leading-none">20+</div>
              <div class="text-gray-300 mt-2 text-sm md:text-base">Customer country</div>
            </div>

            <!-- Enterprise cooperation -->
            <div class="flex flex-col items-center">
              <div class="text-blue-400 mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" viewBox="0 0 24 24" fill="currentColor"><path d="M12.1 21.55l-1.1-.99C5.14 15.24 2 12.39 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09A6.003 6.003 0 0 1 22 8.5c0 3.89-3.14 6.74-8.9 12.06l-1 0.99z"/></svg>
              </div>
              <div class="text-blue-400 text-3xl md:text-4xl font-bold leading-none">200+</div>
              <div class="text-gray-300 mt-2 text-sm md:text-base">Enterprise cooperation</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `);
}


