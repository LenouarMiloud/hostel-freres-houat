import AdminSidebar from "../components/AdminSidebar";

const bookingStatuses = [
  {
    label: "En attente",
    description: "Demandes à examiner",
    color: "text-warning",
    bg: "bg-amber-50",
  },
  {
    label: "Confirmées",
    description: "Réservations validées",
    color: "text-success",
    bg: "bg-green-50",
  },
  {
    label: "Refusées",
    description: "Demandes refusées",
    color: "text-error",
    bg: "bg-red-50",
  },
  {
    label: "Annulées",
    description: "Réservations annulées",
    color: "text-muted",
    bg: "bg-gray-100",
  },
];

export default function AdminBookingsPage() {
  return (
    <main className="min-h-screen bg-background lg:pl-72">
      <AdminSidebar />

      <div className="min-h-screen">
        <header className="border-b border-gray-200 bg-white px-5 py-8 sm:px-8">
          <div className="mx-auto max-w-7xl">
            <a
              href="/admin"
              className="text-sm font-medium text-secondary hover:text-primary"
            >
              ← Retour au tableau de bord
            </a>

            <h1 className="mt-4 text-2xl font-bold text-primary sm:text-3xl">
              Gestion des réservations
            </h1>

            <p className="mt-2 text-sm text-muted">
              Consultez et gérez les demandes de réservation de votre établissement.
            </p>
          </div>
        </header>

        <div className="mx-auto max-w-7xl space-y-8 px-5 py-8 sm:px-8">
          <section aria-labelledby="booking-stats-heading">
            <h2
              id="booking-stats-heading"
              className="mb-4 text-lg font-bold text-primary"
            >
              Vue d'ensemble
            </h2>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {bookingStatuses.map((status) => (
                <article
                  key={status.label}
                  className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
                >
                  <div
                    className={`inline-flex rounded-lg px-3 py-1 text-xs font-semibold ${status.color} ${status.bg}`}
                  >
                    {status.label}
                  </div>

                  <p className="mt-4 text-3xl font-bold text-primary">
                    —
                  </p>

                  <p className="mt-2 text-sm text-muted">
                    {status.description}
                  </p>
                </article>
              ))}
            </div>

            <p className="mt-3 text-xs text-muted">
              Les statistiques seront disponibles après la connexion à la base de données.
            </p>
          </section>

          <section aria-labelledby="booking-list-heading">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2
                  id="booking-list-heading"
                  className="text-lg font-bold text-primary"
                >
                  Liste des réservations
                </h2>

                <p className="mt-1 text-sm text-muted">
                  Les demandes réelles apparaîtront ici après le branchement de la base de données.
                </p>
              </div>

              <span className="text-sm text-muted">
                0 réservation affichée
              </span>
            </div>

            <div className="mt-5 rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm">
              <div
                aria-hidden="true"
                className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-100 text-2xl text-primary"
              >
                ▤
              </div>

              <h3 className="mt-4 font-bold text-primary">
                Aucune réservation à afficher
              </h3>

              <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-muted">
                Les demandes de réservation apparaîtront dans cet espace
                lorsque le système sera connecté à la base de données.
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}