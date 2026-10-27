"use client";

import { useState } from "react";

export default function ReservationPage() {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(1);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [email, setEmail] = useState("");
  const [specialRequests, setSpecialRequests] = useState("");
  const [formError, setFormError] = useState("");
const [formSuccess, setFormSuccess] = useState(false);

  const today = new Date();
  const todayString = [
    today.getFullYear(),
    String(today.getMonth() + 1).padStart(2, "0"),
    String(today.getDate()).padStart(2, "0"),
  ].join("-");

  const nights =
    checkIn && checkOut
      ? Math.round(
          (new Date(`${checkOut}T12:00:00`).getTime() -
            new Date(`${checkIn}T12:00:00`).getTime()) /
            (1000 * 60 * 60 * 24),
        )
      : 0;
      function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        setFormError("");
        setFormSuccess(false);

        if (!checkIn || !checkOut || nights <= 0) {
          setFormError("Veuillez sélectionner des dates de séjour valides.");
          return;
        }

        if (
          !firstName.trim() ||
          !lastName.trim() ||
          !phone.trim() ||
          !whatsapp.trim()
        ) {
          setFormError("Veuillez remplir tous les champs obligatoires.");
          return;
        }

        const bookingMessage = [
          "🏨 *Nouvelle demande de réservation*",
          "",
          "📍 Hostel Frères Houat — Maghnia",
          "",
          "👤 *Informations du client*",
          `Nom : ${firstName.trim()} ${lastName.trim()}`,
          `Téléphone : ${phone.trim()}`,
          `WhatsApp : ${whatsapp.trim()}`,
          `Email : ${email.trim() || "Non renseigné"}`,
          "",
          "📅 *Détails du séjour*",
          `Date d'arrivée : ${checkIn}`,
          `Date de départ : ${checkOut}`,
          `Nombre de nuits : ${nights}`,
          `Nombre de personnes : ${guests}`,
          "",
          "📝 *Demandes particulières*",
          specialRequests.trim() || "Aucune",
          "",
          "⏳ Statut : En attente de confirmation",
          "💳 Paiement : À l'arrivée",
        ].join("\n");

        const whatsappUrl = `https://wa.me/213551566768?text=${encodeURIComponent(
          bookingMessage,
        )}`;

        window.open(whatsappUrl, "_blank", "noopener,noreferrer");

        setFormSuccess(true);
      }

  return (
    <main className="min-h-screen bg-background">
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
          <a href="/" className="text-sm font-bold text-primary sm:text-base">
            ← Hostel Frères Houat
          </a>
          <a
            href="/"
            className="text-sm font-medium text-muted hover:text-primary"
          >
            Accueil
          </a>
        </div>
      </header>

      <section className="px-4 pb-8 pt-10 sm:px-6 sm:pt-14">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Hostel Frères Houat · Maghnia
          </p>
          <h1 className="mt-3 text-3xl font-bold text-primary sm:text-4xl lg:text-5xl">
            Réservez votre séjour
          </h1>
          <p className="mt-4 max-w-2xl leading-7 text-muted">
            Préparez votre séjour en quelques étapes. Envoyez votre demande
            et nous vous contacterons pour confirmer votre réservation.
          </p>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 lg:grid-cols-3">
          <form onSubmit={handleSubmit} className="space-y-6 lg:col-span-2" noValidate> 
            {/* Dates du séjour */}
            <section className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:p-7">
              <h2 className="text-xl font-bold text-primary">
                Dates du séjour
              </h2>
              <p className="mt-2 text-sm text-muted">
                Choisissez vos dates d'arrivée et de départ.
              </p>

              <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="checkIn"
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    Date d'arrivée
                  </label>
                  <input
                    id="checkIn"
                    type="date"
                    min={todayString}
                    value={checkIn}
                    onChange={(event) => {
                      const value = event.target.value;
                      setCheckIn(value);

                      if (checkOut && checkOut <= value) {
                        setCheckOut("");
                      }
                    }}
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="checkOut"
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    Date de départ
                  </label>
                  <input
                    id="checkOut"
                    type="date"
                    min={checkIn ? getNextDate(checkIn) : getNextDate(todayString)}
                    value={checkOut}
                    disabled={!checkIn}
                    onChange={(event) => setCheckOut(event.target.value)}
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10 disabled:cursor-not-allowed disabled:bg-gray-100"
                  />
                </div>
              </div>

              <div className="mt-6 rounded-xl bg-background p-4">
                <p className="text-sm text-muted">Nombre de nuits</p>
                <p className="mt-1 text-2xl font-bold text-primary">
                  {nights > 0 ? nights : "—"}
                  {nights > 0 && (
                    <span className="ml-2 text-sm font-normal text-muted">
                      {nights === 1 ? "nuit" : "nuits"}
                    </span>
                  )}
                </p>
                {checkIn && checkOut && nights > 0 && (
                  <p className="mt-2 text-sm text-success">
                    Dates sélectionnées avec succès.
                  </p>
                )}
              </div>
            </section>

            {/* Autres sections — à compléter progressivement */}
            <section className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:p-7">
              <h2 className="text-xl font-bold text-primary">
                Nombre de personnes
              </h2>

              <p className="mt-2 text-sm text-muted">
                Indiquez le nombre de personnes qui séjourneront dans l'hébergement.
              </p>

              <div className="mt-6 flex items-center justify-between gap-4">
                <div>
                  <p className="font-semibold text-foreground">Voyageurs</p>
                  <p className="mt-1 text-sm text-muted">
                    Maximum 10 personnes
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <button
                    type="button"
                    onClick={() => setGuests((current) => Math.max(1, current - 1))}
                    disabled={guests <= 1}
                    aria-label="Diminuer le nombre de personnes"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 text-xl font-semibold text-primary transition hover:bg-background disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    −
                  </button>

                  <span
                    className="min-w-6 text-center text-xl font-bold text-primary"
                    aria-live="polite"
                  >
                    {guests}
                  </span>

                  <button
                    type="button"
                    onClick={() => setGuests((current) => Math.min(10, current + 1))}
                    disabled={guests >= 10}
                    aria-label="Augmenter le nombre de personnes"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 text-xl font-semibold text-primary transition hover:bg-background disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    +
                  </button>
                </div>
              </div>
            </section>

            <section className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:p-7">
              <h2 className="text-xl font-bold text-primary">
                Informations du client
              </h2>

              <p className="mt-2 text-sm text-muted">
                Ces informations nous permettront de vous contacter au sujet de votre réservation.
              </p>

              <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="firstName" className="mb-2 block text-sm font-medium text-foreground">
                    Prénom *
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    autoComplete="given-name"
                    required
                    value={firstName}
                    onChange={(event) => setFirstName(event.target.value)}
                    placeholder="Votre prénom"
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none transition placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/10"
                  />
                </div>

                <div>
                  <label htmlFor="lastName" className="mb-2 block text-sm font-medium text-foreground">
                    Nom *
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    autoComplete="family-name"
                    required
                    value={lastName}
                    onChange={(event) => setLastName(event.target.value)}
                    placeholder="Votre nom"
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none transition placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/10"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="mb-2 block text-sm font-medium text-foreground">
                    Téléphone *
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    autoComplete="tel"
                    required
                    value={phone}
                    onChange={(event) => setPhone(event.target.value)}
                    placeholder="Ex. : 0550 12 34 56"
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none transition placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/10"
                  />
                </div>

                <div>
                  <label htmlFor="whatsapp" className="mb-2 block text-sm font-medium text-foreground">
                    WhatsApp *
                  </label>
                  <input
                    id="whatsapp"
                    type="tel"
                    autoComplete="tel"
                    required
                    value={whatsapp}
                    onChange={(event) => setWhatsapp(event.target.value)}
                    placeholder="Votre numéro WhatsApp"
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none transition placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/10"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
                    Email <span className="font-normal text-muted">(optionnel)</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="exemple@email.com"
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none transition placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/10"
                  />
                </div>
              </div>

              <p className="mt-4 text-xs text-muted">
                * Champs obligatoires
              </p>
            </section>

            <section className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:p-7">
              <h2 className="text-xl font-bold text-primary">
                Demandes particulières
              </h2>

              <p className="mt-2 text-sm text-muted">
                Vous avez une demande particulière concernant votre séjour ?
                Vous pouvez nous la préciser ici.
              </p>

              <div className="mt-6">
                <label
                  htmlFor="specialRequests"
                  className="mb-2 block text-sm font-medium text-foreground"
                >
                  Vos demandes
                  <span className="ml-2 font-normal text-muted">(optionnel)</span>
                </label>

                <textarea
                  id="specialRequests"
                  name="specialRequests"
                  rows={4}
                  value={specialRequests}
                  onChange={(event) => setSpecialRequests(event.target.value)}
                  placeholder="Précisez vos besoins ou vos remarques..."
                  className="w-full resize-y rounded-xl border border-gray-200 bg-white px-4 py-3 text-foreground outline-none transition placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/10"
                />
              </div>
            </section>
              {formError && (
              <div
                role="alert"
                className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700"
              >
                {formError}
              </div>
            )}

            {formSuccess && (
              <div
                role="status"
                className="rounded-xl border border-green-200 bg-green-50 p-4 text-sm text-green-800"
              >
                WhatsApp a été ouvert avec votre demande préremplie. Veuillez appuyer sur « Envoyer » dans WhatsApp pour transmettre votre demande. Votre réservation ne sera confirmée qu'après validation par notre équipe.
              </div>
            )}

            <button
              type="submit"
              className="w-full rounded-xl bg-primary px-6 py-4 font-semibold text-white shadow-sm transition hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              Envoyer ma demande de réservation
            </button>
          </form>

          {/* Résumé de la réservation */}
          <aside className="h-fit rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:p-7 lg:sticky lg:top-6">
            <h2 className="text-xl font-bold text-primary">
              Résumé de la réservation
            </h2>
            <div className="mt-5 space-y-4 text-sm">
              <div>
                <p className="text-muted">Arrivée</p>
                <p className="mt-1 font-medium text-foreground">
                  {checkIn || "À sélectionner"}
                </p>
              </div>
              <div>
                <p className="text-muted">Départ</p>
                <p className="mt-1 font-medium text-foreground">
                  {checkOut || "À sélectionner"}
                </p>
              </div>
              <div>
                <p className="text-muted">Nombre de nuits</p>
                <p className="mt-1 font-medium text-foreground">
                  {nights > 0 ? nights : "—"}
                </p>
              </div>
              <div>
                <p className="text-muted">Nombre de personnes</p>
                <p className="mt-1 font-medium text-foreground">
                  {guests} {guests === 1 ? "personne" : "personnes"}
                </p>
              </div>
              <div className="border-t border-gray-100 pt-4">
                <p className="text-sm text-muted">Nom du client</p>
                <p className="mt-1 font-medium text-foreground">
                  {firstName || lastName
                    ? `${firstName} ${lastName}`.trim()
                    : "À renseigner"}
                </p>
              </div>

              <div>
                <p className="text-sm text-muted">Téléphone</p>
                <p className="mt-1 break-words font-medium text-foreground">
                  {phone || "À renseigner"}
                </p>
              </div>

              <div>
                <p className="text-sm text-muted">WhatsApp</p>
                <p className="mt-1 break-words font-medium text-foreground">
                  {whatsapp || "À renseigner"}
                </p>
              </div>

              {email && (
                <div>
                  <p className="text-sm text-muted">Email</p>
                  <p className="mt-1 break-words font-medium text-foreground">
                    {email}
                  </p>
                </div>
              )}

              {specialRequests.trim() && (
                <div>
                  <p className="text-sm text-muted">Demandes particulières</p>
                  <p className="mt-1 whitespace-pre-wrap break-words text-foreground">
                    {specialRequests}
                  </p>
                </div>
              )}
            </div>

            <div className="mt-6 rounded-xl bg-background p-4">
              <p className="text-sm font-medium text-primary">
                Paiement à l'arrivée
              </p>
              <p className="mt-1 text-xs leading-5 text-muted">
                Aucun paiement en ligne n'est nécessaire.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

function getNextDate(date: string) {
  const nextDate = new Date(`${date}T12:00:00`);
  nextDate.setDate(nextDate.getDate() + 1);

  const year = nextDate.getFullYear();
  const month = String(nextDate.getMonth() + 1).padStart(2, "0");
  const day = String(nextDate.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}