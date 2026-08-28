"use client";
import { useRouter } from "next/navigation";
import { signOut } from "@/lib/auth-client";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    await signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/signin");
          router.refresh(); // clears any cached server-rendered session state
        },
      },
    });
  };

  return <button onClick={handleLogout}>Log out</button>;
}