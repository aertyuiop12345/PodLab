<template>
  <nav
    id="navbar"
    class="fixed top-0 w-full z-50 transition-all duration-500 border-b border-transparent py-6 bg-[#0a0a0a]"
  >
    <div class="container mx-auto px-6 flex justify-between items-center">
      <a href="#" class="text-xl font-medium tracking-tighter uppercase"
        >PL<span class="text-[#D4A853]">.</span>STUDIO</a
      >
      <div
        class="hidden md:flex gap-10 text-xs font-light tracking-widest uppercase items-center"
      >
        <a href="#about" class="hover:text-[#D4A853] transition-colors"
          >Concept</a
        >
        <a href="#invites" class="hover:text-[#D4A853] transition-colors"
          >Invités</a
        >
        <a href="#episodes" class="hover:text-[#D4A853] transition-colors"
          >Épisodes</a
        >
        <a
          href="#contact"
          class="bg-[#D4A853] text-[#0A0A0A] px-5 py-2 rounded-full font-semibold hover:bg-white transition-all"
          >S'abonner</a
        >
      </div>
      <button class="md:hidden">
        <Icon
          name="solar:hamburger-menu-linear"
          class="text-2xl"
          stroke-width="1.5"
        />
      </button>
    </div>
  </nav>
</template>
<script lang="ts" setup>
import { onMounted, onUnmounted } from "vue";

onMounted(() => {
  const handleScroll = () => {
    const nav = document.getElementById("navbar");

    if (window.scrollY > 50) {
      nav?.classList.add(
        "bg-[#0A0A0A]/90",
        "backdrop-blur-md",
        "py-4",
        "border-white/5",
      );
      nav?.classList.remove("py-6", "border-transparent");
    } else {
      nav?.classList.remove(
        "bg-[#0A0A0A]/90",
        "backdrop-blur-md",
        "py-4",
        "border-white/5",
      );
      nav?.classList.add("py-6", "border-transparent");
    }
  };

  window.addEventListener("scroll", handleScroll);

  onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
  });
});
</script>
