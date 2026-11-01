
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

          <div className="rounded-xl border border-dashed border-[#c8c2b5] bg-white p-8 text-center">
            <h2 className="text-lg font-semibold text-[#17324d]">
              Détails de la réservation
            </h2>

            <p className="mt-3 text-sm text-[#667085]">
              Les informations de cette réservation apparaîtront ici
              après la connexion à la base de données.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}