<template>
  <div class="mb-10">
    <div class="mt-10 pb-1 flex items-center">
      <div class="w-3 mr-2">
        <slot name="icon"></slot>
      </div>
      <div class="font-semibold text-sm">
        <slot name="title"></slot>
      </div>
      <div class="w-3 h-3 mr-5 ml-auto">
        <img src="../assets/next.png" />
      </div>
    </div>
    <div class="ml-5 mr-10 text-xs text-gray-500">
      <slot name="description"></slot>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
