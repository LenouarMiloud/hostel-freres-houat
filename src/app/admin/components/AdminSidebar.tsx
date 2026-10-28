
"use client";

import { useState } from "react";

const navigationItems = [
  { label: "Tableau de bord", href: "/admin", icon: "▦", active: true },
  { label: "Réservations", href: null, icon: "▣", active: false },
  { label: "Logements", href: null, icon: "⌂", active: false },
  { label: "Tarifs", href: null, icon: "€", active: false },
  { label: "Paramètres", href: null, icon: "⚙", active: false },
];

export default function AdminSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label="Ouvrir le menu"
        aria-expanded={isOpen}
        className="fixed left-4 top-4 z-40 flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-2xl text-white shadow-lg lg:hidden"
      >
        ☰
      </button>

      {isOpen && (
        <button
          type="button"
          aria-label="Fermer le menu"
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
        />
      )}

      <aside
        aria-label="Navigation d'administration"
        className={`fixed inset-y-0 left-0 z-50 flex w-72 flex-col border-r border-gray-200 bg-white transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        <div className="flex items-center justify-between border-b border-gray-100 px-5 py-6">
          <a href="/admin" className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
              Hostel Frères Houat
            </p>
            <p className="mt-2 text-lg font-bold text-primary">
              Administration
            </p>
          </a>

          <button
            type="button"
            onClick={() => setIsOpen(false)}
            aria-label="Fermer le menu"
            className="rounded-lg px-3 py-2 text-xl text-muted hover:bg-gray-100 lg:hidden"
          >
            ×
          </button>
        </div>

        <nav className="flex-1 space-y-2 overflow-y-auto px-4 py-6">
          <p className="mb-4 px-3 text-xs font-semibold uppercase tracking-wider text-muted">
            Menu principal
          </p>

          {navigationItems.map((item) => (
            <div key={item.label}>
              {item.href ? (
                <a
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  aria-current={item.active ? "page" : undefined}
                  className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition ${
                    item.active
                      ? "bg-primary text-white shadow-sm"
                      : "text-gray-600 hover:bg-gray-100 hover:text-primary"
                  }`}
                >
                  <span className="w-6 text-center text-lg" aria-hidden="true">
                    {item.icon}
                  </span>
                  {item.label}
                </a>
              ) : (
                <div
                  aria-disabled="true"
                  title="Cette section sera disponible prochainement"
                  className="flex cursor-not-allowed items-center gap-3 rounded-xl px-4 py-3 text-sm text-gray-400"
                >
                  <span className="w-6 text-center text-lg" aria-hidden="true">
                    {item.icon}
                  </span>
                  <span className="flex-1">{item.label}</span>
                  <span className="text-xs">Bientôt</span>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="border-t border-gray-100 p-4">
          <a
            href="/"
            className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-gray-600 transition hover:bg-gray-100 hover:text-primary"
          >
            <span aria-hidden="true">←</span>
            Retour au site
          </a>
        </div>
      </aside>
    </>
  );
}