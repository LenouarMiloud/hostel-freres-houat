
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
        </div>
      </main>
    </div>
  );
}