import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import LogoutButton from "@/components/LogoutButton";
import PokemonSelectionGrid from "@/components/PokemonSelectionGrid";

export default async function Play() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) redirect("/signin");

  return (
    <div>
      <h1>Welcome, {session.user.name}</h1>
      <LogoutButton />

      <PokemonSelectionGrid></PokemonSelectionGrid>
    </div>
  );
}
