import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="min-h-screen bg-slate-950 text-white grid place-items-center px-6">
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8">
        <h1 className="text-2xl font-black tracking-tight">Crear cuenta</h1>
        <p className="mt-2 text-sm text-white/70">Friendly Finance</p>

        <div className="mt-6 space-y-3">
          <input className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm outline-none focus:border-white/25" placeholder="Nombre" />
          <input className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm outline-none focus:border-white/25" placeholder="Email" />
          <input className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm outline-none focus:border-white/25" placeholder="Teléfono" />
          <input className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm outline-none focus:border-white/25" placeholder="Contraseña" type="password" />
          <button className="w-full rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-white/90">
            Registrarme
          </button>
        </div>

        <p className="mt-6 text-sm text-white/70">
          ¿Ya tienes cuenta?{" "}
          <Link className="text-white underline underline-offset-4" to="/login">
            Iniciar sesión
          </Link>
        </p>
      </div>
    </div>
  );
}
