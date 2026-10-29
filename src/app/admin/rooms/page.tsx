import AdminSidebar from "../components/AdminSidebar";

const rooms = Array.from({ length: 10 }, (_, index) => ({
  id: 101 + index,
  type: "F3",
  capacity: 10,
}));

export default function AdminRoomsPage() {
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
              Gestion des logements
            </h1>

            <p className="mt-2 text-sm text-muted">
              Consultez les logements de Hostel Frères Houat.
            </p>
          </div>
        </header>

        <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8">
          <section className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <article className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <p className="text-sm text-muted">Nombre total de logements</p>
              <p className="mt-3 text-3xl font-bold text-primary">10</p>
              <p className="mt-2 text-xs text-muted">
                Logements répertoriés
              </p>
            </article>

            <article className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <p className="text-sm text-muted">Type de logement</p>
              <p className="mt-3 text-3xl font-bold text-primary">F3</p>
              <p className="mt-2 text-xs text-muted">
                Deux chambres et un salon
              </p>
            </article>

            <article className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <p className="text-sm text-muted">Capacité maximale</p>
              <p className="mt-3 text-3xl font-bold text-primary">10</p>
              <p className="mt-2 text-xs text-muted">
                Personnes par logement
              </p>
            </article>
          </section>

          <section className="mt-10">
            <div>
              <h2 className="text-lg font-bold text-primary">
                Liste des logements
              </h2>

              <p className="mt-1 text-sm text-muted">
                Les statuts seront définis à partir des données réelles.
              </p>
            </div>

            <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {rooms.map((room) => (
                <article
                  key={room.id}
                  className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                        Logement
                      </p>

                      <h3 className="mt-2 text-2xl font-bold text-primary">
                        N° {room.id}
                      </h3>
                    </div>

                    <span className="rounded-lg bg-gray-100 px-3 py-2 text-sm font-semibold text-gray-500">
                      F3
                    </span>
                  </div>

                  <div className="mt-5 space-y-3 border-t border-gray-100 pt-4">
                    <div className="flex justify-between gap-3 text-sm">
                      <span className="text-muted">Type</span>
                      <span className="font-medium text-primary">
                        {room.type}
                      </span>
                    </div>

                    <div className="flex justify-between gap-3 text-sm">
                      <span className="text-muted">Capacité maximale</span>
                      <span className="font-medium text-primary">
                        {room.capacity} personnes
                      </span>
                    </div>

                    <div className="flex justify-between gap-3 text-sm">
                      <span className="text-muted">Statut</span>
                      <span className="font-medium text-gray-500">
                        Non défini
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}