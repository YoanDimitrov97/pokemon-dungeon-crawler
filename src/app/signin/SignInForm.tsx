"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "@/lib/auth-client";
import css from "./SignInForm.module.css";

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
      callbackURL: "/play",
    });

    setLoading(false);
    if (error) {
      setError(error.message ?? "Invalid credentials");
      return;
    }
    router.push("/play");
  };

  return (
    <div className={css.login_holder}>
      <div className={css.header}>
        <h1 className={css.brand_title}>Trainer Sign In</h1>
        <p className={css.brand_sub}>Sign In to an Existing Account</p>
      </div>

      <div className={css.glass_panel}>
        <form onSubmit={handleSubmit} className={css.login_form}>
          <label htmlFor="email" className={css.form_label}>
            Email
          </label>
          <input
            placeholder="Email"
            type="email"
            value={form.email}
            className={`${css.input_field} ${css.flicker_focus}`}
            id="email"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />

          <label htmlFor="password" className={css.form_label}>
            Password
          </label>
          <input
            placeholder="Password"
            type="password"
            value={form.password}
            className={`${css.input_field} ${css.flicker_focus}`}
            id="password"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            required
          />

          <button type="submit" disabled={loading} className={css.login_btn}>
            {loading ? "Signing in..." : "INITIALIZE LOGIN"}
          </button>
        </form>

        <p className={css.divider_text}>OR CONNECT WITH</p>

        <div className={css.social_grid}>
          <button
            disabled
            onClick={() =>
              signIn.social({ provider: "google", callbackURL: "/dashboard" })
            }
            className={css.social_btn}
          >
            Continue with Google
          </button>
          <button
            onClick={() =>
              signIn.social({ provider: "discord", callbackURL: "/dashboard" })
            }
            className={`${css.social_btn} ${css.social_btn_discord}`}
          >
            Continue with Discord
          </button>
        </div>

        {error && <p className={css.error_message}>{error}</p>}
      </div>
    </div>
  );
}
