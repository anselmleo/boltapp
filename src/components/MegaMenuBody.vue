<script setup lang="ts">
import DriverMicro from '../components/DriverMicro.vue'
</script>

<template>
  <div class="flex w-8/12 mx-auto rounded-lg justify-between p-5">
    <div class="bg-gray-100 rounded-lg w-10/12 mr-5 pl-10 pr-10">
      <div class="flex mt-10 mb-10">
        <button class="font-semibold text-sm mr-10">Products</button
        ><button class="font-semibold text-sm mr-10">Earn with bolt</button
        ><button class="font-semibold text-sm mr-10">Company</button
        ><button class="font-semibold text-sm mr-10">Safety</button
        ><button class="font-semibold text-sm mr-10">Support</button
        ><button class="font-semibold text-sm mr-10">Cities</button>
      </div>
      <div class="flex justify-between">
        <div class="mb-10 mr-20">
          <div class="font-semibold text-sm mb-5 mr-10">Rides</div>
          <div class="text-sm text-gray-600 mb-5">Rider safety</div>
          <div class="text-sm text-gray-600 mb-5">Request a ride</div>
          <div class="text-sm text-gray-600 mb-5">Become a driver</div>
        </div>
        <div class="mb-10 mr-20">
          <div class="font-semibold text-sm mb-5 mr-10">Trotinete</div>
          <div class="text-sm text-gray-600 mb-5">Scooter safety</div>
          <div class="text-sm text-gray-600 mb-5">Report a scooter</div>
          <div class="text-sm text-gray-600 mb-5">Saftety lab</div>
        </div>
        <div class="mb-10 mr-20">
          <div class="font-semibold text-sm mb-5 mr-10">Bolt Market</div>
          <div class="text-sm text-gray-600 mb-5">Become a courier</div>
          <div class="text-sm text-gray-600 mb-5">Add a restuarant or store</div>
        </div>
        <div class="mb-10">
          <div class="font-semibold text-sm mb-5 mr-10">Bolt Food</div>
          <div class="text-sm text-gray-600 mb-5">Become a courier</div>
          <div class="text-sm text-gray-600 mb-5">Add a restuarant or store</div>
        </div>
      </div>
      <div class="flex">
        <div class="mb-10 mr-20">
          <div class="font-semibold text-sm mb-5 mr-10">Bolt Drive</div>
          <div class="text-sm mb-5 text-gray-600">FAQ</div>
          <div class="text-sm mb-5 text-gray-600">Report a vehicle</div>
        </div>
        <div class="mb-10 mr-20">
          <div class="font-semibold text-sm mb-5 mr-10">Bolt Business</div>
          <div class="text-sm mb-5 text-gray-600">Benefits</div>
          <div class="text-sm mb-5 text-gray-600">Work profile</div>
          <div class="text-sm mb-5 text-gray-600">Products</div>
          <div class="text-sm mb-5 text-gray-600">Bolt Food for Business</div>
        </div>
        <div class="mb-10 mr-20">
          <div class="font-semibold text-sm mb-5 mr-10">E-bikes</div>
          <div class="text-sm mb-5 text-gray-600">Saftety lab</div>
          <div class="text-sm mb-5 text-gray-600">Report an E-bike</div>
          <div class="text-sm mb-5 text-gray-600">FAQ</div>
        </div>
        <div class="mb-10">
          <div class="font-semibold text-sm mb-5 mr-10">Bolt Plus</div>
          <div class="text-sm mb-5 text-gray-600">Benefits</div>
          <div class="text-sm mb-5 text-gray-600">How to join</div>
          <div class="text-sm mb-5 text-gray-600">FAQ</div>
        </div>
      </div>
    </div>
    <div class="bg-gray-200 rounded-lg w-3/12 pl-5">
      <DriverMicro>
        <template #icon>
          <img src="../assets/driving.png" />
        </template>
        <template #title>
          <h4>Become a driver</h4>
        </template>
        <template #description><p>Make money on your terms</p></template>
      </DriverMicro>
      <DriverMicro>
        <template #icon>
          <img src="../assets/bike.png" />
        </template>
        <template #title>
          <h4>Become a courier</h4>
        </template>
        <template #description><p>Deliver food and get paid weekly</p></template>
      </DriverMicro>
      <DriverMicro>
        <template #icon>
          <img src="../assets/fork-and-knife.png" />
        </template>
        <template #title>
          <h4>Add a Restuarant</h4>
        </template>
        <template #description><p>Reach more customers and increase earnings</p></template>
      </DriverMicro>
      <DriverMicro>
        <template #icon>
          <img src="../assets/car.png" />
        </template>
        <template #title>
          <h4>Sign up as a fleet owner</h4>
        </template>
        <template #description><p>Add your fleet to Bolt and boost your income</p></template>
      </DriverMicro>
      <DriverMicro>
        <template #icon>
          <img src="../assets/suitcase.png" />
        </template>
        <template #title>
          <h4>Bolt business</h4>
        </template>
        <template #description
          ><p>Bolt products and services scaled-up for your business</p></template
        >
      </DriverMicro>
    </div>
  </div>
</template>

<style scoped></style>
