<script setup lang="ts">
import BoltLogo from '../components/BoltLogo.vue'
import NavBar from '../components/NavBar.vue'
import MegaModalBody from '../components/MegaModalBody.vue'
// import { ref } from 'vue'
import { showModal } from '../composables/megaModal'

// const isMegaModalOpen = ref(false)
const handleTarara = () => console.log('tarara emitted')
</script>

<template>
  <div>
    <Teleport to="#mega-menu-modal" v-if="showModal">
      <div class="absolute inset-0 bg-green-800">
        <div>
          <header class="w-8/12 flex justify-between mx-auto p-5">
            <BoltLogo />
            <NavBar @tarara="handleTarara" />
            <!-- <NavBar @tarara="isMegaModalOpen = !isMegaModalOpen" /> -->
          </header>
          <MegaModalBody />
        </div>
      </div>
    </Teleport>
  </div>
</template>

<style scoped></style>
