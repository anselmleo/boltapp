<script setup lang="ts">
import BoltLogo from '../components/BoltLogo.vue'
import NavBar from '../components/NavBar.vue'
import MegaModalBody from '../components/MegaModalBody.vue'
</script>

<template>
  <Teleport to="#mega-menu-modal">
    <div class="absolute inset-0 bg-green-800">
      <div>
        <header class="w-8/12 flex justify-between mx-auto p-5">
          <BoltLogo />
          <NavBar />
        </header>
        <MegaModalBody />
      </div>
    </div>
  </Teleport>
</template>

<style scoped></style>
