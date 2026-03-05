<template>
  <NuxtLayout
    ><NuxtPage
      :transition="{
        name: 'fade',
        mode: 'out-in',
      }"
    ></NuxtPage
  ></NuxtLayout>
</template>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
</style>
