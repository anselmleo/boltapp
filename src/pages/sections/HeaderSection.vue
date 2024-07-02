<script setup lang="ts">
import MegaMenuModal from '../../components/MegaMenu.vue'
import NavBar from '../../components/NavBar.vue'
import BoltLogo from '@/components/BoltLogo.vue'
</script>

<template>
  <header>
    <div class="absolute top-0 left-0 right-0 container flex justify-between w-8/12 mx-auto p-5">
      <BoltLogo />
      <NavBar />
    </div>
  </header>
  <MegaMenuModal />
</template>

<style scoped></style>
