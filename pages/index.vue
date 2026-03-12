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
      <div class="flex justify-center mb-10 hero-item">
        <div class="soundwave">
          <div class="bar" style="animation-delay: 0.1s"></div>
          <div class="bar" style="animation-delay: 0.3s; height: 60%"></div>
          <div class="bar" style="animation-delay: 0.5s; height: 100%"></div>
          <div class="bar" style="animation-delay: 0.2s; height: 40%"></div>
          <div class="bar" style="animation-delay: 0.4s; height: 70%"></div>
        </div>
      </div>
      <h1
        class="text-5xl md:text-8xl font-medium tracking-tight mb-8 hero-item"
      >
        <span class="text-underline-grow">PodLab Studio</span>
      </h1>
      <p
        class="text-lg md:text-xl font-light text-[#F0EDE6]/70 max-w-2xl mx-auto mb-12 hero-item"
      >
        Conversations intimes avec des artistes et entrepreneurs qui façonnent
        le monde de demain.
      </p>
      <div class="flex flex-col sm:flex-row justify-center gap-6 hero-item">
        <a
          href="#episodes"
          class="bg-[#D4A853] text-[#0A0A0A] px-10 py-5 rounded-full font-semibold text-sm uppercase tracking-widest hover:bg-white hover:scale-105 transition-all flex items-center justify-center gap-3"
        >
          <Icon name="solar:play-linear" class="text-xl" />
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
            <Icon
              name="solar:palette-linear"
              class="text-3xl text-[#D4A853] mb-4"
            />
            <h3 class="text-xl font-medium mb-2">Artistes invités</h3>
            <p class="text-sm font-light text-[#F0EDE6]/60">
              Découvrez le processus créatif et les doutes qui habitent les plus
              grands esprits artistiques.
            </p>
          </div>
          <div
            class="glass-card p-8 rounded-2xl border-l-4 border-l-white/10 fade-up stagger-2 group hover:border-l-[#D4A853] transition-all"
          >
            <Icon
              name="solar:case-linear"
              class="text-3xl text-[#D4A853] mb-4"
            />
            <h3 class="text-xl font-medium mb-2">Entrepreneurs</h3>
            <p class="text-sm font-light text-[#F0EDE6]/60">
              Plongez dans les coulisses de la création d'entreprise, des échecs
              aux succès mondiaux.
            </p>
          </div>
          <div
            class="glass-card p-8 rounded-2xl border-l-4 border-l-white/10 fade-up stagger-3 group hover:border-l-[#D4A853] transition-all"
          >
            <Icon
              name="solar:heart-linear"
              class="text-3xl text-[#D4A853] mb-4"
            />
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
          src="/fanicko.jpg"
          alt="Guest"
          class="w-full aspect-4/5 object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
        />
        <div
          class="absolute inset-0 bg-linear-to-t from-[#0A0A0A] via-transparent to-transparent opacity-90"
        ></div>
        <div
          class="absolute bottom-0 left-0 p-8 w-full transform group-hover:-translate-y-2 transition-transform duration-500"
        >
          <p
            class="text-[#D4A853] text-xs font-semibold uppercase tracking-widest mb-2"
          >
            Artiste Chanteur
          </p>
          <h3 class="text-2xl font-medium mb-4">Fanicko de Jésus</h3>
          <p
            class="text-sm font-light italic text-white/0 group-hover:text-white/80 transition-all duration-500 max-h-0 group-hover:max-h-20 overflow-hidden"
          >
            Fanicko révèle enfin l'histoire derrière son nom d'artiste et tout a
            commencé avec son grand frère.."
          </p>
        </div>
      </div>
      <!-- Guest 2 -->
      <div
        class="relative group cursor-pointer overflow-hidden rounded-3xl fade-up stagger-2"
      >
        <img
          src="/shado.jpg"
          alt="Guest"
          class="w-full aspect-4/5 object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
        />
        <div
          class="absolute inset-0 bg-linear-to-t from-[#0A0A0A] via-transparent to-transparent opacity-90"
        ></div>
        <div
          class="absolute bottom-0 left-0 p-8 w-full transform group-hover:-translate-y-2 transition-transform duration-500"
        >
          <p
            class="text-[#D4A853] text-xs font-semibold uppercase tracking-widest mb-2"
          >
            Artiste Musicienne
          </p>
          <h3 class="text-2xl font-medium mb-4">Shado Chris</h3>
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
          src="/first.jpg"
          alt="Guest"
          class="w-full aspect-4/5 object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
        />
        <div
          class="absolute inset-0 bg-linear-to-t from-[#0A0A0A] via-transparent to-transparent opacity-90"
        ></div>
        <div
          class="absolute bottom-0 left-0 p-8 w-full transform group-hover:-translate-y-2 transition-transform duration-500"
        >
          <p
            class="text-[#D4A853] text-xs font-semibold uppercase tracking-widest mb-2"
          >
            Artiste Chanteur
          </p>
          <h3 class="text-2xl font-medium mb-4">First King</h3>
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
  <section id="episodes" class="py-10 bg-[#0C0C0C]">
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
          href="https://www.youtube.com/@PodlabStudio"
          target="_blank"
          class="hidden md:block text-xs font-semibold tracking-widest uppercase border-b border-[#D4A853] pb-1 hover:text-[#D4A853] transition-all"
          >Voir tout</a
        >
      </div>

      <!-- ── Épisode featured (grande carte) ── -->
      <div
        class="episode-card glass-card rounded-3xl overflow-hidden mb-10 fade-up"
        data-ep="124"
      >
        <div class="grid lg:grid-cols-[1fr_420px]">
          <!-- Iframe YouTube -->
          <div class="relative bg-black group">
            <div
              class="ep-thumb relative cursor-pointer"
              data-video="dQw4w9WgXcQ"
            >
              <iframe
                class="w-full aspect-video object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                src="https://www.youtube.com/embed/97Pwlm4pNIY"
                title="Épisode 124"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
          <!-- Détails -->
          <div class="p-8 flex flex-col justify-between">
            <div>
              <div class="flex items-center gap-3 mb-5">
                <span
                  class="text-xs font-medium text-[#D4A853] bg-[#D4A853]/10 px-3 py-1 rounded-full italic"
                  >Épisode #124</span
                >
                <span
                  class="text-[10px] uppercase tracking-widest text-white/30 font-semibold"
                  >Nouveau</span
                >
              </div>
              <h3 class="text-2xl font-medium leading-snug mb-3">
                Pour réussir, il faut vivre comme un orphelin
              </h3>
              <p class="text-sm text-[#D4A853] font-medium mb-4">
                avec King Mensah — Artiste et Entrepreneur Social
              </p>
              <p
                class="text-sm font-light text-[#F0EDE6]/55 leading-relaxed mb-6"
              >
                King Mensah reconnaît avec fierté la main de Dieu dans sa
                carrière et il en parle davantage dans notre podcast.
              </p>
              <div class="flex flex-wrap gap-2 mb-6">
                <span
                  class="text-[10px] uppercase tracking-widest px-3 py-1 rounded-full border border-white/10 text-white/40"
                  >Résilience</span
                >
                <span
                  class="text-[10px] uppercase tracking-widest px-3 py-1 rounded-full border border-white/10 text-white/40"
                  >Leadership</span
                >
                <span
                  class="text-[10px] uppercase tracking-widest px-3 py-1 rounded-full border border-white/10 text-white/40"
                  >Bien-être</span
                >
              </div>
            </div>
            <div
              class="border-t border-white/5 pt-6 flex items-center justify-between"
            >
              <div class="flex items-center gap-4 text-xs text-[#F0EDE6]/40">
                <span class="flex items-center gap-1"
                  ><Icon name="solar:clock-linear"></Icon> 1h 52 min</span
                >
                <span class="flex items-center gap-1"
                  ><Icon name="solar:eye-linear"></Icon> Plus de 20 000
                  vues</span
                >
                <span class="flex items-center gap-1"
                  ><Icon name="solar:calendar-linear"></Icon> 01 mars.
                  2026</span
                >
              </div>
              <div class="flex gap-3">
                <button
                  class="opacity-40 hover:opacity-100 hover:text-[#D4A853] transition-all cursor-pointer"
                >
                  <Icon name="solar:share-linear" class="text-lg"></Icon>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- ── Grille 2 épisodes secondaires ── -->
      <div class="grid md:grid-cols-2 gap-8">
        <!-- Épisode #123 -->
        <div
          class="episode-card glass-card rounded-3xl overflow-hidden fade-up stagger-1"
          data-ep="123"
        >
          <div
            class="ep-thumb relative cursor-pointer group"
            data-video="ScMzIvxBSi4"
          >
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/n391rT7I1GA?si=-tf9abk54e95Mn11"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>

          <div class="p-6">
            <div class="flex items-center gap-3 mb-3">
              <span
                class="text-xs font-medium text-[#D4A853] bg-[#D4A853]/10 px-3 py-1 rounded-full italic"
                >Épisode #123</span
              >
            </div>
            <h3 class="text-lg font-medium mb-2">
              J’ai trouvé Dieu dans le vodoun et ça m’a permis de survivre dans
              la musique.
            </h3>
            <p class="text-sm text-[#D4A853]/80 mb-3">
              avec BOBO Wê — Artiste Chanteur
            </p>
            <p
              class="text-xs font-light text-[#F0EDE6]/45 leading-relaxed mb-5"
            >
              Derrière le village, il y a un autre village et BOBO WÊ en a vécu
              l'histoire la plus incroyable ... Cette anecdote a changé sa
              vision du respect.
            </p>
            <div class="flex flex-wrap gap-2 mb-5">
              <span
                class="text-[10px] uppercase tracking-widest px-2 py-1 rounded-full border border-white/10 text-white/35"
                >Carrière</span
              >
              <span
                class="text-[10px] uppercase tracking-widest px-2 py-1 rounded-full border border-white/10 text-white/35"
                >Rencontre</span
              >
            </div>
            <div
              class="border-t border-white/5 pt-5 flex items-center gap-4 text-xs text-[#F0EDE6]/35"
            >
              <span class="flex items-center gap-1"
                ><Icon name="solar:clock-linear"></Icon> 1h 33 min</span
              >
              <span class="flex items-center gap-1"
                ><Icon name="solar:eye-linear"></Icon> Plus de 60 000 vues</span
              >
              <span class="flex items-center gap-1"
                ><Icon name="solar:calendar-linear"></Icon> 19 oct. 2025</span
              >
            </div>
          </div>
        </div>

        <!-- Épisode #122 -->
        <div
          class="episode-card glass-card rounded-3xl overflow-hidden fade-up stagger-2"
          data-ep="122"
        >
          <div
            class="ep-thumb relative cursor-pointer group"
            data-video="3JZ_D3ELwOQ"
          >
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/u5p5v-3XhNc?si=L0tYkbtOjlxDUp7u"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
          <div class="p-6">
            <div class="flex items-center gap-3 mb-3">
              <span
                class="text-xs font-medium text-[#D4A853] bg-[#D4A853]/10 px-3 py-1 rounded-full italic"
                >Épisode #122</span
              >
            </div>
            <h3 class="text-lg font-medium mb-2">De 400.000F à 4 MILLIARDS</h3>
            <p class="text-sm text-[#D4A853]/80 mb-3">
              avec Aziz Yerima — Entrepreneur
            </p>
            <p
              class="text-xs font-light text-[#F0EDE6]/45 leading-relaxed mb-5"
            >
              Il s'agit d'Aziz Yérima, fondateur de la FinTech PayDunya, dont le
              parcours est inspirant pour tout entrepreneur ambitieux.
            </p>
            <div class="flex flex-wrap gap-2 mb-5">
              <span
                class="text-[10px] uppercase tracking-widest px-2 py-1 rounded-full border border-white/10 text-white/35"
                >Entrepreneuriat</span
              >
              <span
                class="text-[10px] uppercase tracking-widest px-2 py-1 rounded-full border border-white/10 text-white/35"
                >Mental</span
              >
            </div>
            <div
              class="border-t border-white/5 pt-5 flex items-center gap-4 text-xs text-[#F0EDE6]/35"
            >
              <span class="flex items-center gap-1"
                ><Icon name="solar:clock-linear"></Icon> 3h 45 min</span
              >
              <span class="flex items-center gap-1"
                ><Icon name="solar:eye-linear"></Icon> Plus de 11 000 vues</span
              >
              <span class="flex items-center gap-1"
                ><Icon name="solar:calendar-linear"></Icon> 8 mars. 2026</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!--localisation-->
  <section id="localisation" class="py-32 bg-[#0A0A0A]">
    <div class="container mx-auto px-6">
      <div class="mb-16 fade-up">
        <p
          class="text-xs font-semibold tracking-widest uppercase text-[#D4A853] mb-3"
        >
          Nos Studios
        </p>
        <h2 class="text-3xl md:text-5xl font-medium tracking-tight mb-3">
          Où nous enregistrons
        </h2>
        <p class="text-[#F0EDE6]/50 font-light max-w-xl">
          Chaque épisode naît dans un lieu chargé d'histoire. Retrouvez nos
          studios à travers le monde.
        </p>
      </div>

      <!-- Layout : carte gauche, liste droite -->
      <div class="grid lg:grid-cols-[1fr_380px] gap-8 items-stretch">
        <!-- Carte OpenStreetMap embed -->
        <div class="relative rounded-3xl overflow-hidden fade-up min-h-[480px]">
          <div class="relative w-full h-full">
            <iframe
              id="map-frame"
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3965.2765151250596!2d2.3962029999999994!3d6.358243999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwMjEnMjkuNyJOIDLCsDIzJzQ2LjMiRQ!5e0!3m2!1sfr!2sbj!4v1773077952781!5m2!1sfr!2sbj"
              class="absolute inset-0 w-full h-full border-0"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              title="Localisation PodLab Studio"
              allowfullscreen
            >
            </iframe>
          </div>

          <!-- Badge -->
          <div
            class="absolute top-4 left-4 glass-card rounded-2xl px-4 py-3 flex items-center gap-3 pointer-events-none"
          >
            <div class="w-2 h-2 rounded-full bg-[#D4A853] animate-pulse"></div>
            <span
              class="text-xs font-semibold uppercase tracking-widest text-[#D4A853]"
              >Studio actif</span
            >
          </div>
        </div>

        <!-- Liste des studios avec bouton switcher -->
        <div class="flex flex-col gap-4 fade-up stagger-1">
          <div
            class="studio-item glass-card rounded-2xl p-5 cursor-pointer transition-all duration-300 hover:border-[#D4A853]/40 active-studio"
            data-bbox="2.2685,48.8375,2.4105,48.9005"
            data-marker="48.8566,2.3522"
            data-zoom="13"
          >
            <div
              class="flex items-start gap-4 border border-[#D4A853]/40 rounded-2xl p-3"
            >
              <div
                class="w-10 h-10 rounded-xl bg-[#D4A853]/10 flex items-center justify-center shrink-0 mt-0.5"
              >
                <Icon
                  name="solar:microphone-large-bold"
                  class="text-[#D4A853] text-xl"
                ></Icon>
              </div>
              <div class="flex-1">
                <div class="flex items-center justify-between mb-1">
                  <h4 class="font-medium text-sm">Studio d'enregistrement</h4>
                  <span
                    class="text-[9px] uppercase tracking-widest px-2 py-0.5 rounded-full bg-[#D4A853]/10 text-[#D4A853] font-semibold"
                    >Principal</span
                  >
                </div>
                <p class="text-xs text-[#F0EDE6]/45">Cotonou - Bénin</p>
                <p class="text-xs text-[#F0EDE6]/45 my-2">
                  Téléphone : 01 97 10 62 88
                </p>
                <p class="text-xs text-[#F0EDE6]/35">
                  Épisodes #100 → #124 • Capacité 6 pers.
                </p>
              </div>
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
          <Icon name="solar:eye-linear" class="text-2xl text-[#D4A853] mb-4" />
          <h4
            class="text-3xl md:text-4xl font-medium mb-1 stat-number"
            data-target="1.2"
            data-suffix="M"
          >
            0
          </h4>
          <p
            class="text-[10px] font-semibold uppercase tracking-widest text-[#F0EDE6]/40"
          >
            Vues totales
          </p>
        </div>
        <div class="fade-up stagger-2">
          <Icon
            name="solar:microphone-large-linear"
            class="text-2xl text-[#D4A853] mb-4"
          />
          <h4
            class="text-3xl md:text-4xl font-medium mb-1 stat-number"
            data-target="124"
          >
            0
          </h4>
          <p
            class="text-[10px] font-semibold uppercase tracking-widest text-[#F0EDE6]/40"
          >
            Épisodes
          </p>
        </div>
        <div class="fade-up stagger-3">
          <Icon name="solar:user-linear" class="text-2xl text-[#D4A853] mb-4" />
          <h4
            class="text-3xl md:text-4xl font-medium mb-1 stat-number"
            data-target="85"
            data-suffix="K"
          >
            0
          </h4>
          <p
            class="text-[10px] font-semibold uppercase tracking-widest text-[#F0EDE6]/40"
          >
            Abonnés YT
          </p>
        </div>
        <div class="fade-up stagger-4">
          <Icon
            name="solar:music-note-linear"
            class="text-2xl text-[#D4A853] mb-4"
          />
          <h4
            class="text-3xl md:text-4xl font-medium mb-1 stat-number"
            data-target="42"
            data-suffix="K"
          >
            0
          </h4>
          <p
            class="text-[10px] font-semibold uppercase tracking-widest text-[#F0EDE6]/40"
          >
            Spotify
          </p>
        </div>
        <div class="fade-up stagger-5">
          <Icon
            name="solar:earth-linear"
            class="text-2xl text-[#D4A853] mb-4"
          />
          <h4
            class="text-3xl md:text-4xl font-medium mb-1 stat-number"
            data-target="18"
          >
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
        <NuxtLink class="fade-up stagger-1" target="_blank">
          <Icon
            name="simple-icons:spotify"
            class="text-4xl hover:text-[#1DB954] hover:opacity-100 transition-all cursor-pointer"
          />
        </NuxtLink>
        <NuxtLink>
          <Icon
            name="simple-icons:applepodcasts"
            class="text-4xl hover:text-[#9933CC] hover:opacity-100 transition-all cursor-pointer fade-up stagger-2"
          />
        </NuxtLink>
        <NuxtLink
          to="https://www.youtube.com/@PodlabStudio"
          class="fade-up stagger-3"
          target="_blank"
        >
          <Icon
            name="simple-icons:youtube"
            class="text-4xl hover:text-[#FF0000] hover:opacity-100 transition-all cursor-pointer"
          />
        </NuxtLink>
        <NuxtLink>
          <Icon
            name="simple-icons:deezer"
            class="text-4xl hover:text-[#EF5466] hover:opacity-100 transition-all cursor-pointer fade-up stagger-4"
          />
        </NuxtLink>
      </div>
    </div>
  </section>

  <!-- Newsletter -->
  <section id="contact" class="py-32 relative">
    <div class="container mx-auto px-6">
      <div
        class="max-w-4xl mx-auto rounded-[3rem] p-12 md:p-20 relative overflow-hidden bg-linear-to-br from-[#1a1a1a] to-[#0A0A0A] border border-[#D4A853]/20"
      >
        <div
          class="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-[#D4A853]/10 blur-[100px] rounded-full"
        ></div>
        <div class="relative z-10 text-center fade-up">
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
              class="grow bg-white/5 border border-white/10 rounded-full px-8 py-4 focus:outline-none focus:border-[#D4A853] transition-all text-sm font-light"
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
<script setup lang="ts">
import { onMounted } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);

  // Animation d'entrée pour le Hero
  const heroTl = gsap.timeline();

  heroTl.from(".hero-item", {
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    stagger: 0.2,
  });

  // Déclenchement de l'animation de l'underline
  heroTl.to(
    ".text-underline-grow",
    {
      onStart: () => {
        document
          .querySelector(".text-underline-grow")
          ?.parentElement?.classList.add("active-reveal");
      },
    },
    "-=0.4",
  );

  // Animation progressive des sections au scroll
  const fadeUps = document.querySelectorAll(".fade-up");
  fadeUps.forEach((el) => {
    // Calcul du délai basé sur les classes stagger-X
    const staggerMatch = el.className.match(/stagger-(\d+)/);
    const staggerDelay = staggerMatch ? parseInt(staggerMatch[1]) * 0.15 : 0;

    gsap.from(el, {
      scrollTrigger: {
        trigger: el,
        start: "top 92%",
        once: true,
      },
      y: 40,
      opacity: 0,
      duration: 1,
      delay: staggerDelay,
      ease: "power3.out",
    });
  });

  // Animation CountUp pour les stats
  const stats = document.querySelectorAll(".stat-number");
  stats.forEach((stat) => {
    const target = parseFloat(stat.getAttribute("data-target") || "0");
    const suffix = stat.getAttribute("data-suffix") || "";
    const decimals = target % 1 !== 0 ? 1 : 0;

    const obj = { value: 0 };
    gsap.to(obj, {
      value: target,
      duration: 2.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: stat,
        start: "top 90%",
        once: true,
      },
      onUpdate: () => {
        (stat as HTMLElement).innerText = obj.value.toFixed(decimals) + suffix;
      },
    });
  });
});
</script>
<style scoped lang="scss">
.soundwave {
  display: flex;
  align-items: center;
  gap: 4px;
  height: 40px;
}
.bar {
  width: 3px;
  height: 10%;
  background: #d4a853;
  animation: bounce 1s ease-in-out infinite;
}
@keyframes bounce {
  0%,
  100% {
    height: 10%;
  }
  50% {
    height: 80%;
  }
}

.text-underline-grow {
  position: relative;
  display: inline-block;
}
.text-underline-grow::after {
  content: "";
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #d4a853;
  transition: width 1.5s cubic-bezier(0.19, 1, 0.22, 1);
}
.active-reveal .text-underline-grow::after {
  width: 100%;
}
</style>
