<template>
  <div
    class="min-h-screen antialiased selection:bg-orange-500/30 selection:text-orange-100"
  >
    <Header />
    <slot />
    <Footer />
  </div>
</template>
<script setup lang="ts">
// aucun problème ici
</script>
<style lang="css" scoped>
.style1 {
  background:
    radial-gradient(
      circle at 30% 30%,
      rgba(249, 115, 22, 0.55),
      transparent 55%
    ),
    radial-gradient(
      circle at 70% 50%,
      rgba(244, 63, 94, 0.45),
      transparent 55%
    ),
    radial-gradient(
      circle at 40% 80%,
      rgba(251, 191, 36, 0.35),
      transparent 55%
    );
}

.style2 {
  background:
    radial-gradient(
      circle at 35% 35%,
      rgba(245, 158, 11, 0.45),
      transparent 55%
    ),
    radial-gradient(circle at 70% 60%, rgba(239, 68, 68, 0.35), transparent 55%);
}
</style>
