<script setup lang="ts">
import HeaderSection from '../pages/sections/HeaderSection.vue'
import BannerContent from '../components/BannerContent.vue'
import BannerCTA from '../components/BannerCTA.vue'
</script>

<template>
  <main class="relative w-full h-580px">
    <img
      src="../assets/banner2.jpg"
      alt=""
      class="h-full w-full object-cover filter brightness-50"
    />
    <HeaderSection />
    <BannerContent />
    <BannerCTA />
    <div class="w-8/12 mx-auto mt-40 mb-40" id="earn-with-money-section">
      <h2 class="font-semibold text-6xl mb-6 text-center mx-6">Earn money with Bolt</h2>
      <div class="place-content-center flex justify-center mb-20">
        <button class="rounded-full border-gray-200 border-2 pl-2 pr-2 pt-1 pb-1 text-gray-500 m-2">
          Driver
        </button>
        <button class="rounded-full border-gray-200 border-2 pl-2 pr-2 pt-1 pb-1 text-gray-500 m-2">
          Courier
        </button>
        <button class="rounded-full border-gray-200 border-2 pl-2 pr-2 pt-1 pb-1 text-gray-500 m-2">
          Restuarant or store owner
        </button>
        <button class="rounded-full border-gray-200 border-2 pl-2 pr-2 pt-1 pb-1 text-gray-500 m-2">
          Fleet owner
        </button>
      </div>
      <div class="flex w-full">
        <div class="w-1/2 m-10">
          <img src="../assets/feature-car.webp" class="rounded-xl" alt="" />
        </div>
        <div class="w-1/2 pl-20 pr-20">
          <h1 class="text-4xl font-semibold mb-10">Drive and earn money</h1>
          <div class="mb-10">
            <div class="flex">
              <div
                class="flex items-center justify-center rounded-full bg-green-600 w-5 h-5 text-white mr-5 text-sm"
              >
                1
              </div>
              <h3 class="font-semibold">Drive more, earn more</h3>
            </div>
            <p class="pl-10 mt-2 text-gray-500">
              Our 150+ million riders will send you plenty of ride requests. When demand is high,
              you can earn even more.
            </p>
          </div>
          <div class="mb-10">
            <div class="flex">
              <div
                class="flex items-center justify-center rounded-full bg-green-600 w-5 h-5 text-white mr-5 text-sm"
              >
                2
              </div>
              <h3 class="font-semibold">Set your schedule</h3>
            </div>
            <p class="pl-10 mt-2 text-gray-500">
              Drive for as long and as often as you like. Weekdays; weekends; evenings — fit driving
              around your lifestyle.
            </p>
          </div>
          <div class="mb-10">
            <div class="flex">
              <div
                class="flex items-center justify-center rounded-full bg-green-600 w-5 h-5 text-white mr-5 text-sm"
              >
                3
              </div>
              <h3 class="font-semibold">Get paid each week</h3>
            </div>
            <p class="pl-10 mt-2 text-gray-500">
              You’ll receive your earnings at the end of each week — no need to wait around for
              payday.
            </p>
          </div>
          <button class="rounded-3xl bg-gray-100 w-32 h-10 font-semibold text-sm">
            Learn more
          </button>
        </div>
      </div>
    </div>
    <div class="w-8/12 mx-auto mb-40" id="our-services-section">
      <h2 class="font-semibold text-6xl mb-6 text-center mx-6">Our services</h2>
      <div class="place-content-center flex justify-center mb-20 text-gray-500">
        Products and features vary by country. Some features listed here may not be available in
        your app.
      </div>
      <div>
        <div class="flex w-1/3 mb-5">
          <img src="../assets/services-a.png" class="mr-5" alt="" />
          <img src="../assets/services-b.png" class="mr-5" alt="" />
          <img src="../assets/services-c.png" alt="" />
        </div>
        <div class="flex w-1/3">
          <img src="../assets/services-d.png" class="mr-5" alt="" />
          <img src="../assets/services-e.png" class="mr-5" alt="" />
          <img src="../assets/services-f.png" alt="" />
        </div>
      </div>
    </div>
    <div class="w-8/12 mx-auto mb-40">
      <div class="flex w-full">
        <div class="w-1/2 pl-20 pr-20">
          <h1 class="text-4xl font-semibold mb-5">Making cities for people, not cars</h1>
          <p class="mb-10 text-gray-500 text-xl">
            By sharing our knowledge of the industry and real-time data we’re helping to improve our
            cities.
          </p>
          <div class="mb-10">
            <div class="flex">
              <div
                class="flex items-center justify-center rounded-full bg-green-600 w-5 h-5 text-white mr-5 text-sm"
              >
                1
              </div>
              <h3 class="font-semibold">Sharing best practices</h3>
            </div>
            <p class="pl-10 mt-2 text-gray-500">
              We’re able to provide insights that help local authorities make their cities more
              connected and liveable.
            </p>
          </div>
          <div class="mb-10">
            <div class="flex">
              <div
                class="flex items-center justify-center rounded-full bg-green-600 w-5 h-5 text-white mr-5 text-sm"
              >
                2
              </div>
              <h3 class="font-semibold">One app, many ways to move</h3>
            </div>
            <p class="pl-10 mt-2 text-gray-500">
              With multiple transport services inside a single app, getting around safely, in a more
              sustainable way, has never been easier.
            </p>
          </div>
          <div class="mb-10">
            <div class="flex">
              <div
                class="flex items-center justify-center rounded-full bg-green-600 w-5 h-5 text-white mr-5 text-sm"
              >
                3
              </div>
              <h3 class="font-semibold">Less is more</h3>
            </div>
            <p class="pl-10 mt-2 text-gray-500">
              Shared transport can transform our cities by lowering emissions, reducing congestion,
              and the demand for parking spaces.
            </p>
          </div>
          <button class="rounded-3xl bg-gray-100 w-32 h-10 font-semibold text-sm">
            Learn more
          </button>
        </div>
        <div class="w-1/2 m-10">
          <img src="../assets/feature-cities-for-people.webp" class="rounded-xl" alt="" />
        </div>
      </div>
    </div>
    <div class="w-8/12 mx-auto mb-40">
      <div class="flex w-full">
        <div class="w-1/2 m-10">
          <img src="../assets/feature-bolt-building.webp" class="rounded-xl" alt="" />
        </div>
        <div class="w-1/2 pl-20 pr-20">
          <h1 class="text-4xl font-semibold mb-5">À propos</h1>
          <p class="mb-10 text-gray-500 text-xl">
            Bolt is the first European mobility super-app. We’re making cities for people, offering
            better alternatives for every purpose a private car serves — including ride-hailing,
            shared cars, scooters, and food and grocery delivery.
          </p>
          <div class="mb-10">
            <div class="flex">
              <div
                class="flex items-center justify-center rounded-full bg-green-600 w-5 h-5 text-white mr-5 text-sm"
              >
                1
              </div>
              <h3 class="font-semibold">150+ million</h3>
            </div>
            <p class="pl-10 mt-2 text-gray-500">customers around the world.</p>
          </div>
          <div class="mb-10">
            <div class="flex">
              <div
                class="flex items-center justify-center rounded-full bg-green-600 w-5 h-5 text-white mr-5 text-sm"
              >
                2
              </div>
              <h3 class="font-semibold">5 continents</h3>
            </div>
            <p class="pl-10 mt-2 text-gray-500">45+ countries.</p>
          </div>
          <div class="mb-10">
            <div class="flex">
              <div
                class="flex items-center justify-center rounded-full bg-green-600 w-5 h-5 text-white mr-5 text-sm"
              >
                3
              </div>
              <h3 class="font-semibold">3.1+ million</h3>
            </div>
            <p class="pl-10 mt-2 text-gray-500">drivers and couriers</p>
          </div>
        </div>
      </div>
    </div>
    <div class="w-8/12 mx-auto mt-40 mb-40" id="download-our-apps-section">
      <h2 class="font-semibold text-6xl mb-6 text-center mx-6">Download our apps</h2>
      <div class="place-content-center flex justify-center mb-10">
        <button class="rounded-full border-gray-200 border-2 pl-2 pr-2 pt-1 pb-1 text-gray-500 m-2">
          Rides
        </button>
        <button class="rounded-full border-gray-200 border-2 pl-2 pr-2 pt-1 pb-1 text-gray-500 m-2">
          Delivery
        </button>
      </div>
      <div class="flex w-full bg-green-700 rounded-xl">
        <div class="w-1/2 p-20">
          <h1 class="text-4xl font-semibold mt-20 mb-10 text-white">
            Request in seconds, ride in minutes.
          </h1>
          <h3 class="text-white text-lg mb-10">Available for iOs and Android devices.</h3>
          <button class="rounded-3xl bg-gray-100 w-32 h-10 font-semibold text-sm">
            Get the app
          </button>
        </div>
        <div class="w-1/2">
          <img src="../assets/app-shot.webp" class="rounded-xl" alt="" />
        </div>
      </div>
    </div>
    <div>Hey! I got here 👋</div>
  </main>
</template>
