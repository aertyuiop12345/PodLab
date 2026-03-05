<template>
  <!-- Hero Section -->
  <section
    class="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
  >
    <div class="absolute inset-0 z-0">
      <div class="gradient-mesh absolute inset-0"></div>
      <!-- Animated SVG Waveform Background -->
      <svg
        class="absolute bottom-0 w-full h-64 opacity-10"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="#D4A853"
          fill-opacity="1"
          d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,149.3C672,149,768,203,864,192C960,181,1056,107,1152,90.7C1248,75,1344,117,1392,138.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        >
          <animate
            attributeName="d"
            dur="10s"
            repeatCount="indefinite"
            values="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,149.3C672,149,768,203,864,192C960,181,1056,107,1152,90.7C1248,75,1344,117,1392,138.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                                M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,213.3C672,224,768,224,864,208C960,192,1056,160,1152,144C1248,128,1344,128,1392,128L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                                M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,149.3C672,149,768,203,864,192C960,181,1056,107,1152,90.7C1248,75,1344,117,1392,138.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></animate>
        </path>
      </svg>
    </div>

    <div class="container mx-auto px-6 text-center relative z-10">
      <div class="flex justify-center mb-10 fade-up stagger-1">
        <div class="soundwave">
          <div class="bar" style="animation-delay: 0.1s"></div>
          <div class="bar" style="animation-delay: 0.3s; height: 60%"></div>
          <div class="bar" style="animation-delay: 0.5s; height: 100%"></div>
          <div class="bar" style="animation-delay: 0.2s; height: 40%"></div>
          <div class="bar" style="animation-delay: 0.4s; height: 70%"></div>
        </div>
      </div>
      <h1
        class="text-5xl md:text-8xl font-medium tracking-tight mb-8 fade-up stagger-2"
      >
        <span class="text-underline-grow">PodLab Studio</span>
      </h1>
      <p
        class="text-lg md:text-xl font-light text-[#F0EDE6]/70 max-w-2xl mx-auto mb-12 fade-up stagger-3"
      >
        Conversations intimes avec des artistes et entrepreneurs qui façonnent
        le monde de demain.
      </p>
      <div
        class="flex flex-col sm:flex-row justify-center gap-6 fade-up stagger-4"
      >
        <a
          href="#episodes"
          class="bg-[#D4A853] text-[#0A0A0A] px-10 py-5 rounded-full font-semibold text-sm uppercase tracking-widest hover:bg-white hover:scale-105 transition-all flex items-center justify-center gap-3"
        >
          <iconify-icon icon="solar:play-linear" class="text-xl"></iconify-icon>
          Écouter maintenant
        </a>
        <a
          href="#invites"
          class="border border-white/20 px-10 py-5 rounded-full font-semibold text-sm uppercase tracking-widest hover:border-[#D4A853] hover:text-[#D4A853] transition-all flex items-center justify-center gap-3"
        >
          Voir les épisodes
        </a>
      </div>
    </div>
  </section>

  <!-- About Section -->
  <section id="about" class="py-32 bg-[#0A0A0A]">
    <div class="container mx-auto px-6">
      <div class="grid lg:grid-cols-2 gap-20 items-center">
        <div class="fade-up">
          <h2
            class="text-4xl md:text-6xl font-medium tracking-tight leading-tight italic"
          >
            "Des histoires vraies. <br />
            <span class="text-[#D4A853]">Des leçons réelles.</span> <br />
            Un business différent."
          </h2>
        </div>
        <div class="grid gap-6">
          <div
            class="glass-card p-8 rounded-2xl border-l-4 border-l-[#D4A853]/50 fade-up stagger-1 group hover:border-l-[#D4A853] transition-all"
          >
            <iconify-icon
              icon="solar:palette-linear"
              class="text-3xl text-[#D4A853] mb-4"
            ></iconify-icon>
            <h3 class="text-xl font-medium mb-2">Artistes invités</h3>
            <p class="text-sm font-light text-[#F0EDE6]/60">
              Découvrez le processus créatif et les doutes qui habitent les plus
              grands esprits artistiques.
            </p>
          </div>
          <div
            class="glass-card p-8 rounded-2xl border-l-4 border-l-white/10 fade-up stagger-2 group hover:border-l-[#D4A853] transition-all"
          >
            <iconify-icon
              icon="solar:case-linear"
              class="text-3xl text-[#D4A853] mb-4"
            ></iconify-icon>
            <h3 class="text-xl font-medium mb-2">Entrepreneurs</h3>
            <p class="text-sm font-light text-[#F0EDE6]/60">
              Plongez dans les coulisses de la création d'entreprise, des échecs
              aux succès mondiaux.
            </p>
          </div>
          <div
            class="glass-card p-8 rounded-2xl border-l-4 border-l-white/10 fade-up stagger-3 group hover:border-l-[#D4A853] transition-all"
          >
            <iconify-icon
              icon="solar:heart-linear"
              class="text-3xl text-[#D4A853] mb-4"
            ></iconify-icon>
            <h3 class="text-xl font-medium mb-2">Business &amp; Vie</h3>
            <p class="text-sm font-light text-[#F0EDE6]/60">
              L'équilibre fragile entre ambition dévorante et épanouissement
              personnel au quotidien.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Guest Personalities -->
  <section id="invites" class="py-32 bg-[#0A0A0A] overflow-hidden">
    <div class="container mx-auto px-6 mb-16">
      <h2 class="text-3xl md:text-5xl font-medium tracking-tight mb-4 fade-up">
        Nos Derniers Invités
      </h2>
      <div class="w-20 h-1 bg-[#D4A853] fade-up stagger-1"></div>
    </div>

    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 container mx-auto px-6"
    >
      <!-- Guest 1 -->
      <div
        class="relative group cursor-pointer overflow-hidden rounded-3xl fade-up stagger-1"
      >
        <img
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;w=800&amp;q=80"
          alt="Guest"
          class="w-full aspect-[4/5] object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
        />
        <div
          class="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-90"
        ></div>
        <div
          class="absolute bottom-0 left-0 p-8 w-full transform group-hover:-translate-y-2 transition-transform duration-500"
        >
          <p
            class="text-[#D4A853] text-xs font-semibold uppercase tracking-widest mb-2"
          >
            Entrepreneur Tech
          </p>
          <h3 class="text-2xl font-medium mb-4">Diallo Koné</h3>
          <p
            class="text-sm font-light italic text-white/0 group-hover:text-white/80 transition-all duration-500 max-h-0 group-hover:max-h-20 overflow-hidden"
          >
            "La technologie n'est qu'un outil, le récit est ce qui reste."
          </p>
        </div>
      </div>
      <!-- Guest 2 -->
      <div
        class="relative group cursor-pointer overflow-hidden rounded-3xl fade-up stagger-2"
      >
        <img
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=crop&amp;w=800&amp;q=80"
          alt="Guest"
          class="w-full aspect-[4/5] object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
        />
        <div
          class="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-90"
        ></div>
        <div
          class="absolute bottom-0 left-0 p-8 w-full transform group-hover:-translate-y-2 transition-transform duration-500"
        >
          <p
            class="text-[#D4A853] text-xs font-semibold uppercase tracking-widest mb-2"
          >
            Artiste Musicienne
          </p>
          <h3 class="text-2xl font-medium mb-4">Aminata Diarra</h3>
          <p
            class="text-sm font-light italic text-white/0 group-hover:text-white/80 transition-all duration-500 max-h-0 group-hover:max-h-20 overflow-hidden"
          >
            "Le silence entre les notes est aussi important que la mélodie."
          </p>
        </div>
      </div>
      <!-- Guest 3 -->
      <div
        class="relative group cursor-pointer overflow-hidden rounded-3xl fade-up stagger-3"
      >
        <img
          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&amp;fit=crop&amp;w=800&amp;q=80"
          alt="Guest"
          class="w-full aspect-[4/5] object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
        />
        <div
          class="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-90"
        ></div>
        <div
          class="absolute bottom-0 left-0 p-8 w-full transform group-hover:-translate-y-2 transition-transform duration-500"
        >
          <p
            class="text-[#D4A853] text-xs font-semibold uppercase tracking-widest mb-2"
          >
            Architecte
          </p>
          <h3 class="text-2xl font-medium mb-4">Marc Lefebvre</h3>
          <p
            class="text-sm font-light italic text-white/0 group-hover:text-white/80 transition-all duration-500 max-h-0 group-hover:max-h-20 overflow-hidden"
          >
            "Bâtir c'est avant tout comprendre l'usage du temps."
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Latest Episodes -->
  <section id="episodes" class="py-32 bg-[#0C0C0C]">
    <div class="container mx-auto px-6">
      <div class="flex justify-between items-end mb-16">
        <div class="fade-up">
          <h2 class="text-3xl md:text-5xl font-medium tracking-tight mb-2">
            Épisodes Récents
          </h2>
          <p class="text-[#D4A853]/60 font-light">
            Explorez notre catalogue de connaissances
          </p>
        </div>
        <a
          href="#"
          class="hidden md:block text-xs font-semibold tracking-widest uppercase border-b border-[#D4A853] pb-1 hover:text-[#D4A853] transition-all"
          >Voir tout</a
        >
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Episode Item -->
        <div
          class="glass-card group p-6 rounded-3xl hover:bg-white/5 transition-all duration-500 fade-up stagger-1"
        >
          <div class="flex justify-between items-start mb-6">
            <span
              class="text-xs font-medium text-[#D4A853] bg-[#D4A853]/10 px-3 py-1 rounded-full italic"
              >Épisode #124</span
            >
            <iconify-icon
              icon="solar:play-circle-linear"
              class="text-4xl text-white/20 group-hover:text-[#D4A853] group-hover:scale-110 transition-all"
            ></iconify-icon>
          </div>
          <h3
            class="text-xl font-medium mb-2 group-hover:text-[#D4A853] transition-colors"
          >
            L'art de la résilience en période de crise
          </h3>
          <p class="text-sm font-light text-[#F0EDE6]/50 mb-6">
            avec Jean-Pierre Dupont — CEO de Lumina
          </p>
          <div
            class="flex items-center justify-between border-t border-white/5 pt-6"
          >
            <span class="text-xs font-light">54 min</span>
            <div class="flex gap-3">
              <iconify-icon
                icon="solar:medal-star-linear"
                class="text-lg opacity-40 hover:opacity-100 cursor-pointer"
              ></iconify-icon>
              <iconify-icon
                icon="solar:share-linear"
                class="text-lg opacity-40 hover:opacity-100 cursor-pointer"
              ></iconify-icon>
            </div>
          </div>
        </div>
        <!-- Episode Item -->
        <div
          class="glass-card group p-6 rounded-3xl hover:bg-white/5 transition-all duration-500 fade-up stagger-2"
        >
          <div class="flex justify-between items-start mb-6">
            <span
              class="text-xs font-medium text-[#D4A853] bg-[#D4A853]/10 px-3 py-1 rounded-full italic"
              >Épisode #123</span
            >
            <iconify-icon
              icon="solar:play-circle-linear"
              class="text-4xl text-white/20 group-hover:text-[#D4A853] group-hover:scale-110 transition-all"
            ></iconify-icon>
          </div>
          <h3
            class="text-xl font-medium mb-2 group-hover:text-[#D4A853] transition-colors"
          >
            Pourquoi le design sauvera le monde
          </h3>
          <p class="text-sm font-light text-[#F0EDE6]/50 mb-6">
            avec Sophie Renoir — Designer Produit
          </p>
          <div
            class="flex items-center justify-between border-t border-white/5 pt-6"
          >
            <span class="text-xs font-light">42 min</span>
            <div class="flex gap-3">
              <iconify-icon
                icon="solar:medal-star-linear"
                class="text-lg opacity-40 hover:opacity-100 cursor-pointer"
              ></iconify-icon>
              <iconify-icon
                icon="solar:share-linear"
                class="text-lg opacity-40 hover:opacity-100 cursor-pointer"
              ></iconify-icon>
            </div>
          </div>
        </div>
        <!-- Episode Item -->
        <div
          class="glass-card group p-6 rounded-3xl hover:bg-white/5 transition-all duration-500 fade-up stagger-3"
        >
          <div class="flex justify-between items-start mb-6">
            <span
              class="text-xs font-medium text-[#D4A853] bg-[#D4A853]/10 px-3 py-1 rounded-full italic"
              >Épisode #122</span
            >
            <iconify-icon
              icon="solar:play-circle-linear"
              class="text-4xl text-white/20 group-hover:text-[#D4A853] group-hover:scale-110 transition-all"
            ></iconify-icon>
          </div>
          <h3
            class="text-xl font-medium mb-2 group-hover:text-[#D4A853] transition-colors"
          >
            La solitude du fondateur
          </h3>
          <p class="text-sm font-light text-[#F0EDE6]/50 mb-6">
            avec Karim Benzé — Serial Entrepreneur
          </p>
          <div
            class="flex items-center justify-between border-t border-white/5 pt-6"
          >
            <span class="text-xs font-light">68 min</span>
            <div class="flex gap-3">
              <iconify-icon
                icon="solar:medal-star-linear"
                class="text-lg opacity-40 hover:opacity-100 cursor-pointer"
              ></iconify-icon>
              <iconify-icon
                icon="solar:share-linear"
                class="text-lg opacity-40 hover:opacity-100 cursor-pointer"
              ></iconify-icon>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Statistics Section -->
  <section id="stats" class="py-24 relative overflow-hidden bg-[#0A0A0A]">
    <div class="container mx-auto px-6 relative z-10">
      <div class="grid grid-cols-2 md:grid-cols-5 gap-10 text-center">
        <div class="fade-up stagger-1">
          <iconify-icon
            icon="solar:eye-linear"
            class="text-2xl text-[#D4A853] mb-4"
          ></iconify-icon>
          <h4 class="text-3xl md:text-4xl font-medium mb-1" data-count="500000">
            0
          </h4>
          <p
            class="text-[10px] font-semibold uppercase tracking-widest text-[#F0EDE6]/40"
          >
            Vues totales
          </p>
        </div>
        <div class="fade-up stagger-2">
          <iconify-icon
            icon="solar:microphone-large-linear"
            class="text-2xl text-[#D4A853] mb-4"
          ></iconify-icon>
          <h4 class="text-3xl md:text-4xl font-medium mb-1" data-count="120">
            0
          </h4>
          <p
            class="text-[10px] font-semibold uppercase tracking-widest text-[#F0EDE6]/40"
          >
            Épisodes
          </p>
        </div>
        <div class="fade-up stagger-3">
          <iconify-icon
            icon="solar:user-linear"
            class="text-2xl text-[#D4A853] mb-4"
          ></iconify-icon>
          <h4 class="text-3xl md:text-4xl font-medium mb-1" data-count="85000">
            0
          </h4>
          <p
            class="text-[10px] font-semibold uppercase tracking-widest text-[#F0EDE6]/40"
          >
            Abonnés YT
          </p>
        </div>
        <div class="fade-up stagger-4">
          <iconify-icon
            icon="solar:music-note-linear"
            class="text-2xl text-[#D4A853] mb-4"
          ></iconify-icon>
          <h4 class="text-3xl md:text-4xl font-medium mb-1" data-count="60000">
            0
          </h4>
          <p
            class="text-[10px] font-semibold uppercase tracking-widest text-[#F0EDE6]/40"
          >
            Spotify
          </p>
        </div>
        <div class="fade-up stagger-5">
          <iconify-icon
            icon="solar:earth-linear"
            class="text-2xl text-[#D4A853] mb-4"
          ></iconify-icon>
          <h4 class="text-3xl md:text-4xl font-medium mb-1" data-count="30">
            0
          </h4>
          <p
            class="text-[10px] font-semibold uppercase tracking-widest text-[#F0EDE6]/40"
          >
            Pays atteints
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Platforms -->
  <section class="py-24 bg-[#0A0A0A] border-t border-white/5">
    <div class="container mx-auto px-6 text-center">
      <h2
        class="text-sm font-semibold tracking-widest uppercase mb-12 text-[#F0EDE6]/40"
      >
        Disponible sur
      </h2>
      <div
        class="flex flex-wrap justify-center items-center gap-10 md:gap-20 opacity-60"
      >
        <iconify-icon
          icon="simple-icons:spotify"
          class="text-4xl hover:text-[#1DB954] hover:opacity-100 transition-all cursor-pointer"
        ></iconify-icon>
        <iconify-icon
          icon="simple-icons:applepodcasts"
          class="text-4xl hover:text-[#9933CC] hover:opacity-100 transition-all cursor-pointer"
        ></iconify-icon>
        <iconify-icon
          icon="simple-icons:youtube"
          class="text-4xl hover:text-[#FF0000] hover:opacity-100 transition-all cursor-pointer"
        ></iconify-icon>
        <iconify-icon
          icon="simple-icons:deezer"
          class="text-4xl hover:text-[#EF5466] hover:opacity-100 transition-all cursor-pointer"
        ></iconify-icon>
      </div>
    </div>
  </section>

  <!-- Newsletter -->
  <section id="contact" class="py-32 relative">
    <div class="container mx-auto px-6">
      <div
        class="max-w-4xl mx-auto rounded-[3rem] p-12 md:p-20 relative overflow-hidden bg-gradient-to-br from-[#1a1a1a] to-[#0A0A0A] border border-[#D4A853]/20"
      >
        <div
          class="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-[#D4A853]/10 blur-[100px] rounded-full"
        ></div>
        <div class="relative z-10 text-center">
          <h2 class="text-3xl md:text-5xl font-medium mb-6">
            Ne manquez aucun épisode
          </h2>
          <p class="text-[#F0EDE6]/60 font-light mb-10 max-w-lg mx-auto italic">
            Inscrivez-vous pour recevoir les notes de l'épisode et les coulisses
            directement dans votre boîte mail.
          </p>
          <form class="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Votre email"
              class="flex-grow bg-white/5 border border-white/10 rounded-full px-8 py-4 focus:outline-none focus:border-[#D4A853] transition-all text-sm font-light"
            />
            <button
              class="bg-[#D4A853] text-[#0A0A0A] px-10 py-4 rounded-full font-semibold uppercase text-xs tracking-widest hover:bg-white transition-all"
            >
              S'inscrire
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
