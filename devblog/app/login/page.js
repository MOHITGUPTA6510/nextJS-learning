import { login } from "../lib/actions";

export default function LoginPage() {
  return (
    <main className="login-page">

      <h1>
        Login
      </h1>

      <form
        className="login-form"
        action={login}
      >

        <input
          type="email"
          name="email"
          placeholder="Email"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          required
        />

        <button type="submit">
          Login
        </button>

      </form>

    </main>
  );
}