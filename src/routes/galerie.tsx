import { createFileRoute, redirect } from "@tanstack/react-router";

/** Adresa veche a galeriei; trimite la Picturi. */
export const Route = createFileRoute("/galerie")({
  beforeLoad: () => {
    throw redirect({ to: "/picturi", replace: true });
  },
});
