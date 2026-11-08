"use client";

import { useState } from "react";
import AdminSidebar from "../components/AdminSidebar";
import Link from "next/link";

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

const demoBookings = [
  {
    id: 1,
    name: "Client de démonstration 1",
    status: "En attente",
    bookingDate: "2026-10-25",
    arrivalDate: "2026-11-15",
  },
  {
    id: 2,
    name: "Ahmed Benali",
    status: "Confirmées",
    bookingDate: "2026-10-28",
    arrivalDate: "2026-11-20",
  },
  {
    id: 3,
    name: "Mohamed Boudiaf",
    status: "En attente",
    bookingDate: "2026-10-30",
    arrivalDate: "2026-11-12",
  },
  {
    id: 4,
    name: "Karim Mansouri",
    status: "Refusées",
    bookingDate: "2026-10-22",
    arrivalDate: "2026-11-18",
  },
  {
    id: 5,
    name: "Amine Haddad",
    status: "Confirmées",
    bookingDate: "2026-11-01",
    arrivalDate: "2026-11-25",
  },
  {
    id: 6,
    name: "Samir Khelifi",
    status: "Annulées",
    bookingDate: "2026-10-20",
    arrivalDate: "2026-11-10",
  },
  {
    id: 7,
    name: "Yacine Belkacem",
    status: "En attente",
    bookingDate: "2026-11-02",
    arrivalDate: "2026-11-22",
  },
  {
    id: 8,
    name: "Nadir Merabet",
    status: "Confirmées",
    bookingDate: "2026-10-27",
    arrivalDate: "2026-11-14",
  },
  {
    id: 9,
    name: "Rachid Saidi",
    status: "Refusées",
    bookingDate: "2026-10-23",
    arrivalDate: "2026-11-17",
  },
  {
    id: 10,
    name: "Sofiane Amrani",
    status: "En attente",
    bookingDate: "2026-11-03",
    arrivalDate: "2026-11-13",
  },
  {
    id: 11,
    name: "Walid Cherif",
    status: "Confirmées",
    bookingDate: "2026-10-29",
    arrivalDate: "2026-11-24",
  },
  {
    id: 12,
    name: "Mourad Djelloul",
    status: "Annulées",
    bookingDate: "2026-10-21",
    arrivalDate: "2026-11-16",
  },
];

export default function AdminBookingsPage() {
  const [searchTerm, setSearchTerm] = useState("");

const normalizedSearch = searchTerm.trim().toLowerCase();

const [selectedStatus, setSelectedStatus] = useState("Toutes");

const filteredBookings = demoBookings.filter((booking) => {
  const matchesSearch =
    booking.name.toLowerCase().includes(normalizedSearch) ||
    String(booking.id).includes(normalizedSearch);

  const matchesStatus =
    selectedStatus === "Toutes" || selectedStatus === booking.status;

  return matchesSearch && matchesStatus;
});

const displayedBookingsCount = filteredBookings.length;

const bookingsCountLabel =
  displayedBookingsCount === 1
    ? "1 réservation affichée"
    : `${displayedBookingsCount} réservations affichées`;

const [currentPage, setCurrentPage] = useState(1);

const bookingsPerPage = 5; 

const totalPages = Math.max(
  1,
  Math.ceil(filteredBookings.length / bookingsPerPage)
);

const startIndex = (currentPage - 1) * bookingsPerPage;

const paginatedBookings = filteredBookings.slice(
  startIndex,
  startIndex + bookingsPerPage
);

const displayedStart =
  filteredBookings.length === 0 ? 0 : startIndex + 1;

const displayedEnd = Math.min(
  startIndex + paginatedBookings.length,
  filteredBookings.length
);
   

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
                <div className="mt-4">
  <label
    htmlFor="booking-search"
    className="mb-2 block text-sm font-medium text-primary"
  >
    Rechercher une réservation
  </label>

  <div className="flex flex-col gap-2 sm:flex-row">
    <input
      id="booking-search"
      type="search"
      value={searchTerm}
      onChange={(event) => {setSearchTerm(event.target.value);setCurrentPage(1);}}
      placeholder="Numéro de réservation ou nom du client..."
      className="min-w-0 flex-1 rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-primary outline-none transition focus:border-secondary focus:ring-2 focus:ring-secondary/20"
    />

    {searchTerm.trim().length > 0 && (
      <button
        type="button"
        onClick={() => {setSearchTerm("");setCurrentPage(1);}}
        className="rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-primary transition hover:bg-gray-50"
      >
        Effacer
      </button>
    )}
  </div>
</div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {[
                    "Toutes",
                    "En attente",
                    "Confirmées",
                    "Refusées",
                    "Annulées",
                  ].map((status) => (
                    <button
                      key={status}
                      type="button"
                      onClick={() => {setSelectedStatus(status);setCurrentPage(1);}}
                      className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
                        selectedStatus === status
                          ? "bg-primary text-white"
                          : "border border-gray-200 bg-white text-primary hover:bg-gray-50"
                      }`}
                    >
                      {status}
                    </button>
                  ))}
                </div>

                <p className="mt-1 text-sm text-muted">
                  Les demandes réelles apparaîtront ici après le branchement de la base de données.
                </p>
              </div>

              <span className="text-sm text-muted">
                {displayedBookingsCount}{" "}
                {displayedBookingsCount === 1
                  ? "réservation affichée"
                  : "réservations affichées"}
              </span>
            </div>

            {filteredBookings.length > 0 ? (

            <div className="mt-5 space-y-4">
  {paginatedBookings.map((booking) => (
    <div
      key={booking.id}
      className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
    >
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="mb-2 flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800">
                {booking.status}
              </span>

              <span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-500">
                Exemple
              </span>
            </div>

            <h3 className="text-lg font-bold text-primary">
              Réservation #{booking.id}
            </h3>

            <p className="mt-1 text-sm text-muted">
              {booking.name}
            </p>
          </div>

          <Link
            href={`/admin/bookings/${booking.id}`}
            className="inline-flex w-full items-center justify-center rounded-lg bg-primary px-4 py-3 text-sm font-medium text-white transition hover:bg-secondary sm:w-auto sm:px-4 sm:py-2.5"
          >
            Voir les détails
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-4 border-t border-gray-100 pt-5 sm:grid-cols-2 lg:grid-cols-3">
  <div>
    <p className="text-xs text-muted">Date de réservation</p>
    <p className="mt-1 font-medium text-primary">
      {new Date(booking.bookingDate + "T12:00:00").toLocaleDateString(
        "fr-FR"
      )}
    </p>
  </div>

  <div>
    <p className="text-xs text-muted">Date d'arrivée</p>
    <p className="mt-1 font-medium text-primary">
      {new Date(booking.arrivalDate + "T12:00:00").toLocaleDateString(
        "fr-FR"
      )}
    </p>
  </div>

  <div>
    <p className="text-xs text-muted">Départ</p>
    <p className="mt-1 font-medium text-primary">
      Non renseigné
    </p>
  </div>

  <div>
    <p className="text-xs text-muted">Voyageurs</p>
    <p className="mt-1 font-medium text-primary">
      Non renseigné
    </p>
  </div>

  <div>
    <p className="text-xs text-muted">Logement</p>
    <p className="mt-1 font-medium text-primary">
      Non attribué
    </p>
  </div>
</div>
      </div>
    </div>
  ))}

{filteredBookings.length > 0 && (
  <div className="mt-6 flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-5 sm:flex-row">
    
    <div className="text-center sm:text-left">
  <p className="mt-1 text-xs text-muted">
    Affichage de {displayedStart} à {displayedEnd} sur{" "}
    {displayedBookingsCount} réservations
  </p>
</div>

    <div className="flex flex-wrap items-center justify-center gap-2">
  <button
    type="button"
    onClick={() =>
      setCurrentPage((page) => Math.max(1, page - 1))
    }
    disabled={currentPage === 1}
    className="rounded-lg border border-gray-200 px-3 py-2 text-sm font-medium text-primary transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40"
  >
    Précédent
  </button>

  {Array.from({ length: totalPages }, (_, index) => index + 1).map(
    (page) => (
      <button
        key={page}
        type="button"
        onClick={() => setCurrentPage(page)}
        aria-current={currentPage === page ? "page" : undefined}
        className={`min-w-10 rounded-lg px-3 py-2 text-sm font-medium transition ${
          currentPage === page
            ? "bg-primary text-white"
            : "border border-gray-200 bg-white text-primary hover:bg-gray-50"
        }`}
      >
        {page}
      </button>
    )
  )}

  <button
    type="button"
    onClick={() =>
      setCurrentPage((page) => Math.min(totalPages, page + 1))
    }
    disabled={currentPage === totalPages}
    className="rounded-lg border border-gray-200 px-3 py-2 text-sm font-medium text-primary transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40"
  >
    Suivant
  </button>
</div>
  </div>
)}


</div>
          ) : (
            <div className="mt-5 rounded-2xl border border-gray-200 bg-white p-6 text-center">
              <p className="text-sm text-muted">
                Aucune réservation ne correspond à votre recherche.
              </p>
            </div>
          )}            
          </section>
        </div>
      </div>
    </main>
  );
}