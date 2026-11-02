
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
                <h2 className="text-lg font-semibold text-[#17324d]">
                  Informations du client
                </h2>
                <p className="mt-3 text-sm text-[#667085]">
                  Les informations du client seront affichées ici.
                </p>
              </section>

              <section className="rounded-xl bg-white p-6 shadow-sm">
                <h2 className="text-lg font-semibold text-[#17324d]">
                  Détails du séjour
                </h2>
                <p className="mt-3 text-sm text-[#667085]">
                  Les détails du séjour seront affichés ici.
                </p>
              </section>

              <section className="rounded-xl bg-white p-6 shadow-sm">
                <h2 className="text-lg font-semibold text-[#17324d]">
                  Demandes particulières
                </h2>
                <p className="mt-3 text-sm text-[#667085]">
                  Aucune demande affichée pour le moment.
                </p>
              </section>

            </div>

            {/* Right Column */}
            <div className="space-y-6">

              <section className="rounded-xl bg-white p-6 shadow-sm">
                <h2 className="text-lg font-semibold text-[#17324d]">
                  Statut de réservation
                </h2>

                <p className="mt-4 text-sm text-[#667085]">
                  Le statut sera chargé depuis la base de données.
                </p>
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