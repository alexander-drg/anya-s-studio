import { createFileRoute, redirect } from "@tanstack/react-router";

/** Înlocuită de Expoziții selectate. */
export const Route = createFileRoute("/proiecte-artistice")({
  beforeLoad: () => {
    throw redirect({ to: "/expozitii", replace: true });
  },
});
