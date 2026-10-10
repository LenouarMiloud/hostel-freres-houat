import Header from "./components/Header";

export default function Home() {
  return (
    <main>
      {/* ==================== HERO ==================== */}
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
              href="/reservation"
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

      {/* ==================== HÉBERGEMENT ==================== */}
      <section
        id="hebergement"
        className="bg-background px-6 py-20 sm:py-24 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
          {/* Section Heading */}
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Hébergement
            </p>

            <h2 className="mt-3 text-3xl font-bold text-primary sm:text-4xl">
              Un hébergement pensé pour votre confort
            </h2>

            <p className="mt-5 text-base leading-7 text-muted sm:text-lg">
              Découvrez nos logements F3, conçus pour accueillir
              confortablement familles, couples et groupes lors de votre séjour
              à Tlemcen.
            </p>
          </div>

          {/* Accommodation Content */}
          <div className="grid overflow-hidden rounded-3xl bg-surface shadow-xl lg:grid-cols-2">
            {/* Image */}
            <div className="relative min-h-[320px] lg:min-h-[520px]">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=85')",
                }}
              />

              <div className="absolute inset-0 bg-primary/15" />

              {/* Image Badge */}
              <div className="absolute left-6 top-6 rounded-full bg-white/95 px-4 py-2 text-sm font-semibold text-primary shadow-lg">
                Hébergement F3
              </div>
            </div>

            {/* Information */}
            <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-14">
              <p className="text-sm font-semibold uppercase tracking-widest text-accent">
                Votre espace
              </p>

              <h3 className="mt-3 text-2xl font-bold text-primary sm:text-3xl">
                Confort et espace pour votre séjour
              </h3>

              <p className="mt-5 leading-7 text-muted">
                Nos hébergements F3 offrent un espace agréable et fonctionnel
                pour profiter pleinement de votre séjour. Chaque logement
                dispose des équipements essentiels pour vous accueillir dans
                les meilleures conditions.
              </p>

              {/* Features */}
              <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
                {/* Capacity */}
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    👥
                  </div>

                  <div>
                    <p className="font-semibold text-foreground">
                      Jusqu’à 10 personnes
                    </p>
                    <p className="mt-1 text-sm text-muted">
                      Capacité d’accueil
                    </p>
                  </div>
                </div>

                {/* Bedrooms */}
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    🛏️
                  </div>

                  <div>
                    <p className="font-semibold text-foreground">
                      2 chambres
                    </p>
                    <p className="mt-1 text-sm text-muted">
                      Espaces de repos
                    </p>
                  </div>
                </div>

                {/* Living room */}
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    🛋️
                  </div>

                  <div>
                    <p className="font-semibold text-foreground">Salon</p>
                    <p className="mt-1 text-sm text-muted">
                      Espace de vie convivial
                    </p>
                  </div>
                </div>

                {/* Kitchen */}
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    🍳
                  </div>

                  <div>
                    <p className="font-semibold text-foreground">Cuisine</p>
                    <p className="mt-1 text-sm text-muted">
                      Espace fonctionnel
                    </p>
                  </div>
                </div>

                {/* Bathroom */}
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    🚿
                  </div>

                  <div>
                    <p className="font-semibold text-foreground">Salle de bain</p>
                    <p className="mt-1 text-sm text-muted">
                      Confort quotidien
                    </p>
                  </div>
                </div>

                {/* Toilet */}
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    🚽
                  </div>

                  <div>
                    <p className="font-semibold text-foreground">Toilettes</p>
                    <p className="mt-1 text-sm text-muted">
                      Installations séparées
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-10">
                <a
                  href="#reservation"
                  className="inline-flex rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
                >
                  Réserver votre séjour
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SERVICES ==================== */}
      <section
  id="services"
  className="bg-surface px-6 py-20 sm:py-24 lg:py-28"
>
  <div className="mx-auto max-w-7xl">
    {/* Section Heading */}
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
        Nos services
      </p>

      <h2 className="mt-3 text-3xl font-bold text-primary sm:text-4xl">
        Tout pour un séjour agréable
      </h2>

      <p className="mt-5 text-base leading-7 text-muted sm:text-lg">
        Nous mettons à votre disposition les services essentiels pour vous
        permettre de profiter pleinement de votre séjour à Tlemcen.
      </p>
    </div>

    {/* Main Services */}
    <div className="mt-14 grid gap-6 md:grid-cols-3">
      {/* Wi-Fi */}
      <div className="group rounded-3xl border border-primary/5 bg-background p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-2xl shadow-md">
          📶
        </div>

        <h3 className="mt-6 text-xl font-bold text-primary">
          Wi-Fi disponible
        </h3>

        <p className="mt-3 leading-7 text-muted">
          Profitez d’une connexion Internet disponible pendant votre séjour
          pour rester connecté avec vos proches et vos activités.
        </p>
      </div>

      {/* Kitchen */}
      <div className="group rounded-3xl border border-primary/5 bg-background p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-2xl shadow-md">
          🍳
        </div>

        <h3 className="mt-6 text-xl font-bold text-primary">
          Cuisine équipée
        </h3>

        <p className="mt-3 leading-7 text-muted">
          Chaque hébergement dispose d’une cuisine fonctionnelle pour préparer
          vos repas en toute autonomie.
        </p>
      </div>

      {/* WhatsApp */}
      <div className="group rounded-3xl border border-primary/5 bg-background p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-2xl shadow-md">
          💬
        </div>

        <h3 className="mt-6 text-xl font-bold text-primary">
          Assistance WhatsApp
        </h3>

        <p className="mt-3 leading-7 text-muted">
          Contactez facilement notre équipe via WhatsApp pour vos questions et
          pour suivre votre demande de réservation.
        </p>
      </div>
    </div>

    {/* Secondary Services */}
    <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {/* Comfort */}
      <div className="rounded-2xl bg-background p-6 transition-all duration-300 hover:shadow-lg">
        <div className="text-2xl">🛋️</div>

        <h3 className="mt-4 font-bold text-primary">
          Espace confortable
        </h3>

        <p className="mt-2 text-sm leading-6 text-muted">
          Des espaces adaptés aux familles et aux groupes.
        </p>
      </div>

      {/* Check-in / Check-out */}
      <div className="rounded-2xl bg-background p-6 transition-all duration-300 hover:shadow-lg">
        <div className="text-2xl">🕐</div>

        <h3 className="mt-4 font-bold text-primary">
          Arrivée & départ
        </h3>

        <p className="mt-2 text-sm leading-6 text-muted">
          Arrivée à <span className="font-semibold text-foreground">08:00</span>{" "}
          et départ à{" "}
          <span className="font-semibold text-foreground">18:00</span>.
        </p>
      </div>

      {/* Easy Booking */}
      <div className="rounded-2xl bg-background p-6 transition-all duration-300 hover:shadow-lg">
        <div className="text-2xl">📱</div>

        <h3 className="mt-4 font-bold text-primary">
          Réservation facile
        </h3>

        <p className="mt-2 text-sm leading-6 text-muted">
          Envoyez votre demande directement depuis notre site.
        </p>
      </div>

      {/* Location */}
      <div className="rounded-2xl bg-background p-6 transition-all duration-300 hover:shadow-lg">
        <div className="text-2xl">📍</div>

        <h3 className="mt-4 font-bold text-primary">
          À Tlemcen
        </h3>

        <p className="mt-2 text-sm leading-6 text-muted">
          Profitez de votre séjour dans la région de Tlemcen.
        </p>
      </div>
    </div>
  </div>
</section>

      {/* ==================== CONTACT ==================== */}
      <section
  id="contact"
  className="bg-background px-6 py-20 sm:py-24 lg:py-28"
>
  <div className="mx-auto max-w-7xl">
    {/* Section Heading */}
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
        Contact
      </p>

      <h2 className="mt-3 text-3xl font-bold text-primary sm:text-4xl">
        Nous sommes à votre écoute
      </h2>

      <p className="mt-5 text-base leading-7 text-muted sm:text-lg">
        Une question concernant votre séjour ou votre réservation ?
        Contactez-nous directement.
      </p>
    </div>

    {/* Contact Content */}
    <div className="mt-14 grid overflow-hidden rounded-3xl bg-surface shadow-xl lg:grid-cols-2">
      {/* Contact Information */}
      <div className="p-8 sm:p-10 lg:p-14">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent">
          Hostel Frères Houat
        </p>

        <h3 className="mt-3 text-2xl font-bold text-primary sm:text-3xl">
          Contactez-nous
        </h3>

        <p className="mt-5 leading-7 text-muted">
          Notre équipe est disponible pour répondre à vos questions et vous
          accompagner dans votre demande de réservation.
        </p>

        {/* Address */}
        <div className="mt-8 flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-xl">
            📍
          </div>

          <div>
            <p className="font-semibold text-primary">Adresse</p>
            <p className="mt-1 leading-6 text-muted">
              Rue Akid Lotfi
              <br />
              Maghnia 13001, Algérie
            </p>
          </div>
        </div>

        {/* Phone */}
        <div className="mt-6 flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-xl">
            📞
          </div>

          <div>
            <p className="font-semibold text-primary">Téléphone</p>

            <a
              href="tel:+213551566768"
              className="mt-1 block text-muted transition-colors hover:text-primary"
            >
              0551 56 67 68
            </a>
          </div>
        </div>

        {/* WhatsApp */}
        <div className="mt-6 flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-xl">
            💬
          </div>

          <div>
            <p className="font-semibold text-primary">WhatsApp</p>

            <a
              href="https://wa.me/213551566768"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 block text-muted transition-colors hover:text-primary"
            >
              0551 56 67 68
            </a>
          </div>
        </div>

        {/* Plus Code */}
        <div className="mt-6 flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-xl">
            🗺️
          </div>

          <div>
            <p className="font-semibold text-primary">Plus Code</p>
            <p className="mt-1 text-muted">
              V72F+47 Maghnia
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a
            href="tel:+213551566768"
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
          >
            Appeler
          </a>

          <a
            href="https://wa.me/213551566768"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
          >
            WhatsApp
          </a>
        </div>
      </div>

      {/* Map */}
      <div className="relative min-h-[400px] bg-primary/5 lg:min-h-full">
        <iframe
          title="Hostel Frères Houat - Google Maps"
          src="https://www.google.com/maps?q=V72F%2B47%20Maghnia&output=embed"
          className="absolute inset-0 h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />

        {/* Map Overlay Badge */}
        <div className="absolute left-4 top-4 rounded-2xl bg-white/95 px-4 py-3 shadow-lg backdrop-blur-sm">
          <p className="text-sm font-semibold text-primary">
            Hostel Frères Houat
          </p>

          <p className="mt-1 text-xs text-muted">
            Maghnia, Algérie
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* ==================== RESERVATION ==================== */}
      <section id="reservation" className="min-h-[500px]" />
      
    </main>
  );
}