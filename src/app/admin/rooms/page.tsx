
"use client";

import { useState } from "react";
import AdminSidebar from "../components/AdminSidebar";

type RoomStatus =
  | "Disponible"
  | "Réservé"
  | "En maintenance"
  | "Indisponible";

type Room = {
  id: number;
  type: string;
  capacity: number;
  status: RoomStatus;
};

const initialRooms: Room[] = Array.from({ length: 10 }, (_, index) => ({
  id: 101 + index,
  type: "F3",
  capacity: 10,
  status: "Indisponible",
}));

const statusStyles: Record<RoomStatus, string> = {
  Disponible: "bg-green-50 text-green-700 border-green-200",
  Réservé: "bg-blue-50 text-blue-700 border-blue-200",
  "En maintenance": "bg-amber-50 text-amber-700 border-amber-200",
  Indisponible: "bg-red-50 text-red-700 border-red-200",
};

const statusOptions: RoomStatus[] = [
  "Disponible",
  "Réservé",
  "En maintenance",
  "Indisponible",
];

export default function AdminRoomsPage() {
  const [rooms, setRooms] = useState<Room[]>(initialRooms);

  function handleStatusChange(roomId: number, newStatus: RoomStatus) {
    setRooms((currentRooms) =>
      currentRooms.map((room) =>
        room.id === roomId ? { ...room, status: newStatus } : room
      )
    );
  }

  const availableCount = rooms.filter(
    (room) => room.status === "Disponible"
  ).length;

  const reservedCount = rooms.filter(
    (room) => room.status === "Réservé"
  ).length;

  const maintenanceCount = rooms.filter(
    (room) => room.status === "En maintenance"
  ).length;

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
              Consultez les logements et modifiez leur statut.
            </p>
          </div>
        </header>

        <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8">
          <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <article className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <p className="text-sm text-muted">Total des logements</p>
              <p className="mt-3 text-3xl font-bold text-primary">
                {rooms.length}
              </p>
            </article>

            <article className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <p className="text-sm text-muted">Disponibles</p>
              <p className="mt-3 text-3xl font-bold text-success">
                {availableCount}
              </p>
            </article>

            <article className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <p className="text-sm text-muted">Réservés</p>
              <p className="mt-3 text-3xl font-bold text-secondary">
                {reservedCount}
              </p>
            </article>

            <article className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <p className="text-sm text-muted">En maintenance</p>
              <p className="mt-3 text-3xl font-bold text-warning">
                {maintenanceCount}
              </p>
            </article>
          </section>

          <section className="mt-10">
            <h2 className="text-lg font-bold text-primary">
              Liste des logements
            </h2>

            <p className="mt-1 text-sm text-muted">
              Sélectionnez un statut pour chaque logement.
            </p>

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

                    <span className="rounded-lg bg-gray-100 px-3 py-2 text-sm font-semibold text-primary">
                      {room.type}
                    </span>
                  </div>

                  <div className="mt-5 space-y-4 border-t border-gray-100 pt-4">
                    <div className="flex justify-between gap-3 text-sm">
                      <span className="text-muted">Capacité maximale</span>
                      <span className="font-medium text-primary">
                        {room.capacity} personnes
                      </span>
                    </div>

                    <div>
                      <label
                        htmlFor={`status-${room.id}`}
                        className="mb-2 block text-sm font-medium text-primary"
                      >
                        Statut du logement
                      </label>

                      <select
                        id={`status-${room.id}`}
                        value={room.status}
                        onChange={(event) =>
                          handleStatusChange(
                            room.id,
                            event.target.value as RoomStatus
                          )
                        }
                        className="w-full rounded-xl border border-gray-300 bg-white px-3 py-3 text-sm text-primary outline-none transition focus:border-secondary focus:ring-2 focus:ring-secondary/20"
                      >
                        {statusOptions.map((status) => (
                          <option key={status} value={status}>
                            {status}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <span className="mb-2 block text-sm text-muted">
                        Statut actuel
                      </span>

                      <span
                        className={`inline-flex rounded-lg border px-3 py-2 text-sm font-semibold ${statusStyles[room.status]}`}
                      >
                        {room.status}
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <p className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-900">
              Mode de démonstration : les modifications sont temporaires.
              Elles seront perdues après le rechargement de la page. Les
              statuts ne sont pas encore synchronisés avec les réservations
              ni enregistrés dans une base de données.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
