const stats = [
  {
    title: "Réservations en attente",
    value: "—",
    description: "Demandes à examiner",
  },
  {
    title: "Réservations confirmées",
    value: "—",
    description: "Séjours validés",
  },
  {
    title: "Arrivées du jour",
    value: "—",
    description: "Clients attendus aujourd'hui",
  },
  {
    title: "Logements disponibles",
    value: "10",
    description: "Unités à gérer",
  },
];

const quickLinks = [
  {
    number: "01",
    title: "Gérer les réservations",
    description:
      "Consulter les demandes et suivre leur statut.",
    href: "#reservations",
  },
  {
    number: "02",
    title: "Gérer les logements",
    description:
      "Consulter les 10 logements et leur disponibilité.",
    href: "#logements",
  },
  {
    number: "03",
    title: "Gérer les tarifs",
    description:
      "Préparer les tarifs selon la saison et le week-end.",
    href: "#tarifs",
  },
];

export default function AdminPage() {
  return (
    <main className="min-h-screen bg-background">
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <div>
            <a
              href="/"
              className="text-sm font-medium text-secondary hover:text-primary"
            >
              ← Retour au site
            </a>

            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Hostel Frères Houat
            </p>

            <h1 className="mt-2 text-2xl font-bold text-primary sm:text-3xl">
              Tableau de bord
            </h1>

            <p className="mt-2 text-sm text-muted">
              Gérez les réservations et les logements.
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 px-4 py-3">
            <p className="text-xs text-muted">Espace d'administration</p>
            <p className="mt-1 font-semibold text-primary">
              Gestionnaire
            </p>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 sm:py-10">
        <section aria-labelledby="stats-heading">
          <div className="mb-5">
            <h2
              id="stats-heading"
              className="text-lg font-bold text-primary"
            >
              Vue d'ensemble
            </h2>
            <p className="mt-1 text-sm text-muted">
              Les statistiques réelles seront disponibles après la
              connexion à la base de données.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat) => (
              <article
                key={stat.title}
                className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
              >
                <p className="text-sm leading-6 text-muted">
                  {stat.title}
                </p>

                <p className="mt-4 text-3xl font-bold text-primary">
                  {stat.value}
                </p>

                <p className="mt-2 text-xs text-muted">
                  {stat.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-10" aria-labelledby="management-heading">
          <h2
            id="management-heading"
            className="text-lg font-bold text-primary"
          >
            Gestion de l'établissement
          </h2>

          <p className="mt-1 text-sm text-muted">
            Accédez aux principales fonctions de gestion.
          </p>

          <div className="mt-5 grid grid-cols-1 gap-4 lg:grid-cols-3">
            {quickLinks.map((item) => (
              <article
                key={item.number}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <p className="text-sm font-semibold text-accent">
                  {item.number}
                </p>

                <h3 className="mt-4 text-lg font-bold text-primary">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-muted">
                  {item.description}
                </p>

                <span className="mt-5 inline-block text-sm font-semibold text-secondary">
                  Disponible dans une prochaine étape
                </span>
              </article>
            ))}
          </div>
        </section>

        <footer className="mt-12 border-t border-gray-200 py-6 text-center text-xs text-muted">
          Hostel Frères Houat · Administration
        </footer>
      </div>
    </main>
  );
}