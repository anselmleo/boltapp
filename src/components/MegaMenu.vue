<script setup lang="ts">
import BoltLogo from '../components/BoltLogo.vue'
import NavBar from '../components/NavBar.vue'
import MegaMenuBody from './MegaMenuBody.vue'
import { showModal } from '../composables/megaModal'
</script>

<template>
  <div>
    <Teleport to="#mega-menu-modal" v-if="showModal">
      <div class="absolute h-4/6 inset-0 bg-green-800">
        <div>
          <header class="w-8/12 flex justify-between mx-auto p-5">
            <BoltLogo />
            <NavBar />
          </header>
          <MegaMenuBody />
        </div>
      </div>
    </Teleport>
  </div>
</template>

<style scoped></style>
