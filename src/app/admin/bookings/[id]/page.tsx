
import AdminSidebar from "../../components/AdminSidebar";

type BookingDetailsPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function BookingDetailsPage({
  params,
}: BookingDetailsPageProps) {
  const { id } = await params;

  return (
    <div className="min-h-screen bg-[#f8f6f1]">
      <AdminSidebar />

      <main className="p-4 md:ml-64 md:p-8">
        <div className="mx-auto max-w-7xl">

          {/* Page Header */}
          <div className="mb-8">
            <p className="mb-2 text-sm text-[#667085]">
              Administration / Réservations / Détails
            </p>

            <h1 className="text-2xl font-bold text-[#17324d] md:text-3xl">
              Détails de la réservation
            </h1>

            <p className="mt-2 text-sm text-[#667085]">
              Réservation #{id}
            </p>
          </div>

          {/* Responsive Two-Column Layout */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">

            {/* Left Column */}
            <div className="space-y-6 lg:col-span-2">

              
              <section className="rounded-xl bg-white p-6 shadow-sm">
                <div className="mb-6 flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-[#17324d]">
                    Informations du client
                  </h2>

                  <span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-500">
                    Exemple
                  </span>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <p className="text-sm text-[#667085]">Nom</p>
                    <p className="mt-1 font-medium text-[#1f2933]">Exemple</p>
                  </div>

                  <div>
                    <p className="text-sm text-[#667085]">Prénom</p>
                    <p className="mt-1 font-medium text-[#1f2933]">Client</p>
                  </div>

                  <div>
                    <p className="text-sm text-[#667085]">Téléphone</p>
                    <p className="mt-1 font-medium text-[#1f2933]">
                      Non renseigné
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-[#667085]">WhatsApp</p>
                    <p className="mt-1 font-medium text-[#1f2933]">
                      Non renseigné
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-[#667085]">Email</p>
                    <p className="mt-1 font-medium text-[#1f2933]">
                      Non renseigné
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-[#667085]">Date de réservation</p>
                    <p className="mt-1 font-medium text-[#1f2933]">
                      Non renseignée
                    </p>
                  </div>
                </div>
              </section>

              <section className="rounded-xl bg-white p-6 shadow-sm">
                <div className="mb-6 flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-[#17324d]">
                    Détails du séjour
                  </h2>

                  <span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-500">
                    Exemple
                  </span>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <p className="text-sm text-[#667085]">Date d’arrivée</p>
                    <p className="mt-1 font-medium text-[#1f2933]">
                      Non renseignée
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-[#667085]">Date de départ</p>
                    <p className="mt-1 font-medium text-[#1f2933]">
                      Non renseignée
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-[#667085]">Durée du séjour</p>
                    <p className="mt-1 font-medium text-[#1f2933]">
                      Non renseignée
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-[#667085]">Nombre de voyageurs</p>
                    <p className="mt-1 font-medium text-[#1f2933]">
                      Non renseigné
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-[#667085]">Logement attribué</p>
                    <p className="mt-1 font-medium text-[#1f2933]">
                      Non attribué
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-[#667085]">Heure d’arrivée</p>
                    <p className="mt-1 font-medium text-[#1f2933]">
                      08:00
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-[#667085]">Heure de départ</p>
                    <p className="mt-1 font-medium text-[#1f2933]">
                      18:00
                    </p>
                  </div>
                </div>
              </section>


              <section className="rounded-xl bg-white p-6 shadow-sm">
                <div className="mb-6 flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-[#17324d]">
                    Demandes particulières
                  </h2>

                  <span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-500">
                    Exemple
                  </span>
                </div>

                <div className="rounded-lg border border-[#e5e7eb] bg-[#f8f6f1] p-4">
                  <p className="text-sm leading-6 text-[#667085]">
                    Aucune demande particulière n’a été renseignée pour cette
                    réservation.
                  </p>
                </div>
              </section>

            </div>

            {/* Right Column */}
            <div className="space-y-6">

              
              <section className="rounded-xl bg-white p-6 shadow-sm">
                <h2 className="text-lg font-semibold text-[#17324d]">
                  Statut de réservation
                </h2>

                <div className="mt-5 flex items-center gap-3">
                  <span className="h-3 w-3 rounded-full bg-amber-500" />

                  <span className="rounded-full bg-amber-100 px-3 py-1.5 text-sm font-medium text-amber-800">
                    En attente
                  </span>
                </div>

                <p className="mt-4 text-sm leading-6 text-[#667085]">
                  Cette réservation attend la validation du gestionnaire.
                </p>

                <div className="mt-5 border-t border-gray-100 pt-4">
                  <p className="text-xs text-[#667085]">
                    Dernière mise à jour
                  </p>

                  <p className="mt-1 text-sm font-medium text-[#1f2933]">
                    Non disponible
                  </p>
                </div>
              </section>

              <section className="rounded-xl bg-white p-6 shadow-sm">
                <h2 className="text-lg font-semibold text-[#17324d]">
                  Actions
                </h2>

                <p className="mt-4 text-sm text-[#667085]">
                  Les actions de gestion seront ajoutées dans une
                  prochaine étape.
                </p>
              </section>

            </div>

          </div>
        </div>
      </main>
    </div>
  );
}