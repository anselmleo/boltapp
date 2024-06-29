<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router'
import { computed } from 'vue'

import { ref } from 'vue'

const isMegaModalOpen = ref(false)

const handleCloseMegaModal = () => {
  isMegaModalOpen.value = false
}

const handleOpenMegaModal = () => {
  alert('i got here')
  isMegaModalOpen.value = true
}

const route = useRoute()
const pageTheme = computed(() => {
  if (route.meta.theme === 'dark') {
    return {
      textColor: 'text-white',
      logoColor: 'text-white fill-current',
      borderColor: 'bg-white',
      signupTextColor: 'text-black'
    }
  } else {
    return {
      textColor: 'text-black',
      logoColor: 'text-black fill-current',
      borderColor: 'bg-black',
      signupTextColor: 'text-white'
    }
  }
})
</script>

<template>
  <nav class="h-10">
    <div class="flex" :class="pageTheme.textColor">
      <img src="../assets/ng.svg" alt="" class="w-4 mr-2" />
      <h3 class="mr-2 font-bold text-sm mt-1">EN</h3>
      <img
        v-if="route.meta.theme !== 'dark'"
        src="../assets/down-arrow-black.png"
        alt=""
        class="w-3 h-3 mt-2 mr-10"
      />
      <img v-else src="../assets/down-arrow-white.png" alt="" class="w-3 h-3 mt-2 mr-10" />
      <RouterLink to="/support" class="mr-10">Support</RouterLink>
      <div class="w-20 rounded-full border-current mr-10" :class="pageTheme.borderColor">
        <RouterLink to="/signup" class="pl-3.5 font-bold text-sm" :class="pageTheme.signupTextColor"
          >Sign up</RouterLink
        >
      </div>
      <div class="cursor-pointer" @click="handleOpenMegaModal" v-if="!isMegaModalOpen">
        <img
          v-if="route.meta.theme !== 'dark'"
          src="../assets/menu-black.png"
          alt=""
          class="w-5 h-5 mt-1"
        />
        <img v-else src="../assets/menu-white.png" alt="" class="w-5 h-5 mt-1" />
      </div>
      <div v-if="isMegaModalOpen" @click="handleCloseMegaModal" class="cursor-pointer">
        <img src="../assets/cancel-white.png" alt="" class="w-5 h-5 mt-1" />
      </div>
    </div>
  </nav>
</template>

<style scoped></style>
