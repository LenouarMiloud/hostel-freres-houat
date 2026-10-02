import Header from "./components/Header";

export default function Home() {
  return (
    <main>
      <section
        id="accueil"
        className="relative flex min-h-screen items-center justify-center overflow-hidden"
      >
        {/* Temporary Hero Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=2000&q=85')",
          }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-primary/65" />

        {/* Header */}
        <Header />

        {/* Hero Content */}
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center text-white">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-accent sm:text-base">
            Hostel Frères Houat
          </p>

          <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Bienvenue à Tlemcen
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/90 sm:text-lg">
            Profitez d’un séjour confortable dans nos hébergements F3 et
            découvrez une expérience agréable au cœur de Tlemcen.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#reservation"
              className="rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-xl"
            >
              Réserver
            </a>

            <a
              href="#hebergement"
              className="rounded-full border border-white/60 bg-white/10 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:bg-white hover:text-primary"
            >
              Découvrir nos hébergements
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
          <div className="flex flex-col items-center gap-2 text-white/70">
            <span className="text-xs">Découvrir</span>
            <span className="h-8 w-px bg-white/50" />
          </div>
        </div>
      </section>

      {/* Temporary content to test scrolling */}
      <section
        id="hebergement"
        className="flex min-h-[600px] items-center justify-center bg-background px-6"
      >
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Hébergement
          </p>

          <h2 className="mt-3 text-3xl font-bold text-primary sm:text-4xl">
            Nos hébergements
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-muted">
            Cette section sera développée dans la prochaine étape.
          </p>
        </div>
      </section>

      <section id="services" className="min-h-[500px]" />

      <section id="contact" className="min-h-[500px]" />

      <section id="reservation" className="min-h-[500px]" />
    </main>
  );
}