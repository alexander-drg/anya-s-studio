import { createFileRoute, redirect } from "@tanstack/react-router";

/** Înlocuită de Expoziții alese. */
export const Route = createFileRoute("/proiecte-artistice")({
  beforeLoad: () => {
    throw redirect({ to: "/expozitii", replace: true });
  },
});
