import { logout } from "../lib/actions";

export default function AdminPage() {
  return (
    <main className="admin-page">

      <h1>
        Admin Dashboard
      </h1>

      <p>
        Welcome to the DevBlog admin dashboard.
      </p>

      <form action={logout}>
        <button type="submit">
          Logout
        </button>
      </form>

    </main>
  );
}