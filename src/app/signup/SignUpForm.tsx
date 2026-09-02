"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signUp, signIn } from "@/lib/auth-client";
import Link from 'next/link'
import css from "./SignUpForm.module.css";

export default function SignUpForm() {
  const router = useRouter();
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const { error } = await signUp.email({
      name: form.name,
      email: form.email,
      password: form.password,
      callbackURL: "/dashboard",
    });

    setLoading(false);
    if (error) {
      setError(error.message ?? "Something went wrong");
      return;
    }
    router.push("/dashboard");
  };
 return (
    <main className={css.main_container}>
      {/* Ambient background glows */}
      <div className={`${css.ambient_glow} ${css.ambient_glow_top}`}></div>
      <div className={`${css.ambient_glow} ${css.ambient_glow_bottom}`}></div>

      <div className={css.wrapper}>
        {/* Header Section */}
        <div className={css.header}>
          <h1 className={css.brand_title}>Trainer Sign Up</h1>
          <p className={css.brand_sub}>Sign Up New Account</p>
        </div>

        {/* Form Card */}
        <div className={css.glass_panel}>
          {/* Top Edge Highlight */}
          <div className={css.edge_highlight}></div>

          <form onSubmit={handleSubmit} className={css.signup_form}>
            {/* Name Input */}
            <div className={css.form_group}>
              <label htmlFor="name" className={css.form_label}>
                USERNAME
              </label>
              <div className={css.input_wrapper}>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Red"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={css.input_ghost}
                  required
                />
              </div>
            </div>

            {/* Email Input */}
            <div className={css.form_group}>
              <label htmlFor="email" className={css.form_label}>
                EMAIL ADDRESS
              </label>
              <div className={css.input_wrapper}>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="trainer@kanto.net"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={css.input_ghost}
                  required
                />
              </div>
            </div>

            {/* Primary Action */}
            <div className={css.button_wrapper}>
              <button
                type="submit"
                disabled={loading}
                className={css.btn_glass}
              >
                {loading ? "Creating account..." : "Create Account"}
              </button>
            </div>
          </form>

          {/* Divider */}
          <div className={css.divider}>
            <span className={css.divider_line}></span>
            <span className={css.divider_text}>OR SIGN UP VIA</span>
            <span className={css.divider_line}></span>
          </div>

          {/* Social Logins */}
          <div className={css.social_grid}>
            <button
              disabled
              onClick={() =>
                signIn.social({ provider: "google", callbackURL: "/dashboard" })
              }
              className={css.social_btn}
            >
              Continue with  Google
            </button>
            <button
              onClick={() =>
                signIn.social({ provider: "discord", callbackURL: "/dashboard" })
              }
              className={css.social_btn}
            >
              Continue with Discord
            </button>
          </div>

          {/* Secondary Link */}
          <div className={css.footer_link}>
            <p className={css.footer_text}>
              Already have an account?
              <Link className={css.footer_link_a} href="/signin">Log in</Link>
             
            </p>
          </div>

          {error && <p className={css.error_message}>{error}</p>}
        </div>
      </div>
    </main>
  );
}