<template>
  <nav
    id="navbar"
    class="fixed top-0 w-full z-50 transition-all duration-500 border-b border-transparent py-6"
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
        <iconify-icon
          icon="solar:hamburger-menu-linear"
          class="text-2xl"
          stroke-width="1.5"
        ></iconify-icon>
      </button>
    </div>
  </nav>
</template>
