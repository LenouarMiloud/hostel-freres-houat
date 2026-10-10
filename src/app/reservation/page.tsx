export default function ReservationPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header الخاص بصفحة الحجز */}
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
          <a
            href="/"
            className="text-sm font-bold text-primary sm:text-base"
          >
            ← Hostel Frères Houat
          </a>

          <a
            href="/"
            className="text-sm font-medium text-muted transition-colors hover:text-primary"
          >
            Accueil
          </a>
        </div>
      </header>

      {/* Introduction */}
      <section className="px-4 pb-8 pt-10 sm:px-6 sm:pt-14">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Hostel Frères Houat · Maghnia
          </p>

          <h1 className="mt-3 text-3xl font-bold text-primary sm:text-4xl lg:text-5xl">
            Réservez votre séjour
          </h1>

          <p className="mt-4 max-w-2xl leading-7 text-muted">
            Préparez votre séjour en quelques étapes.
            Envoyez votre demande et nous vous contacterons
            pour confirmer votre réservation.
          </p>
        </div>
      </section>

      {/* Zone principale : formulaire et résumé */}
      <section className="px-4 pb-16 sm:px-6">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Zone du formulaire */}
          <div className="space-y-6 lg:col-span-2">
            <section className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:p-7">
              <h2 className="text-xl font-bold text-primary">
                Dates du séjour
              </h2>
              <p className="mt-2 text-sm text-muted">
                Choisissez vos dates d'arrivée et de départ.
              </p>
            </section>

            <section className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:p-7">
              <h2 className="text-xl font-bold text-primary">
                Nombre de personnes
              </h2>
              <p className="mt-2 text-sm text-muted">
                La capacité maximale est de 10 personnes.
              </p>
            </section>

            <section className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:p-7">
              <h2 className="text-xl font-bold text-primary">
                Informations du client
              </h2>
              <p className="mt-2 text-sm text-muted">
                Vos coordonnées seront utilisées pour vous contacter
                au sujet de votre demande.
              </p>
            </section>

            <section className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:p-7">
              <h2 className="text-xl font-bold text-primary">
                Demandes particulières
              </h2>
              <p className="mt-2 text-sm text-muted">
                Vous pouvez préciser vos besoins ou laisser ce champ vide.
              </p>
            </section>
          </div>

          {/* Résumé de la réservation */}
          <aside className="h-fit rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:p-7 lg:sticky lg:top-6">
            <h2 className="text-xl font-bold text-primary">
              Résumé de la réservation
            </h2>

            <p className="mt-3 text-sm leading-6 text-muted">
              Les dates, le nombre de personnes et le prix total
              apparaîtront ici.
            </p>

            <div className="mt-6 rounded-xl bg-background p-4">
              <p className="text-sm font-medium text-primary">
                Paiement à l'arrivée
              </p>
              <p className="mt-1 text-xs leading-5 text-muted">
                Aucun paiement en ligne n'est nécessaire.
              </p>
            </div>

            <p className="mt-5 text-xs leading-5 text-muted">
              Votre demande sera en attente jusqu'à sa confirmation
              par le responsable.
            </p>
          </aside>
        </div>
      </section>
    </main>
  );
}