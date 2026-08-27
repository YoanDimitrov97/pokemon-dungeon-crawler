"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "@/lib/auth-client";

export default function SignInForm() {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const { error } = await signIn.email({
      email: form.email,
      password: form.password,
      callbackURL: "/dashboard",
    });

    setLoading(false);
    if (error) {
      setError(error.message ?? "Invalid credentials");
      return;
    }
    router.push("/dashboard");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Email"
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />
        <input
          placeholder="Password"
          type="password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? "Signing in..." : "Sign in"}
        </button>
      </form>

      <div>
        {/* <button onClick={() => signIn.social({ provider: "google", callbackURL: "/dashboard" })}>
          Continue with Google
        </button>*/}
        <button onClick={() => signIn.social({ provider: "discord", callbackURL: "/dashboard" })}>
          Continue with Discord
        </button> 
      </div>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}