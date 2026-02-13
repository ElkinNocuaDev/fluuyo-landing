import { useMemo, useState } from "react";
import {
  Lock,
  BadgeCheck,
  TrendingUp,
  IdCard,
  BarChart3,
  Paperclip,
  ChevronDown,
} from "lucide-react";
import logo from "../assets/fluuyo-logo-web-outlines.svg";

const FaqItem = ({ q, a, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 p-6 text-left"
      >
        <span className="text-sm font-semibold text-white/90 md:text-base">
          {q}
        </span>
        <span
          className={[
            "rounded-xl border border-white/10 bg-white/5 p-2 transition",
            open ? "rotate-180" : "",
          ].join(" ")}
        >
          <ChevronDown className="h-4 w-4 text-white/70" />
        </span>
      </button>

      <div
        className={[
          "grid transition-all duration-300 ease-out",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        ].join(" ")}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-6 text-sm text-white/70">{a}</p>
        </div>
      </div>
    </div>
  );
};

export default function Landing() {
  const goToApp = () => {
    window.location.href = "https://app.fluuyo.com";
  };

  // --- Simulador (MVP)
  const [amount, setAmount] = useState(300000); // COP
  const [months, setMonths] = useState(3); // 1..12
  const monthlyRate = 0.07; // 7% mensual (placeholder). Ajustable.

  const fmtCOP = (n) =>
    new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      maximumFractionDigits: 0,
    }).format(Math.round(n));

  const sim = useMemo(() => {
    const P = Number(amount) || 0;
    const n = Number(months) || 1;
    const r = monthlyRate;

    if (P <= 0 || n <= 0) return { payment: 0, total: 0, interest: 0 };

    // Cuota método francés
    const pow = Math.pow(1 + r, n);
    const A = (P * r * pow) / (pow - 1);
    const total = A * n;
    const interest = total - P;

    return { payment: A, total, interest };
  }, [amount, months]);

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-6xl px-6 py-10 md:py-16">
        {/* Header */}
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="Fluuyo"
              className="h-10 w-auto"
              loading="eager"
            />
          </div>

          <button
            onClick={goToApp}
            className="rounded-xl border border-white/20 bg-white/5 px-4 py-2 text-sm font-semibold text-white/90 hover:bg-white/10"
          >
            Entrar
          </button>
        </header>

        {/* Hero */}
        <section className="mt-10 md:mt-14">
          <div className="rounded-[2.2rem] border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-8 shadow-[0_0_100px_rgba(124,58,237,0.12)] md:p-12">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              {/* Left */}
              <div>
                <p className="text-sm font-semibold tracking-wide text-white/70">
                  Friendly Finance
                </p>

                <h1 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">
                  Fluuyo: microcréditos simples, rápidos y humanos.
                </h1>

                <p className="mt-5 max-w-2xl text-base text-white/75 md:text-lg">
                  Crédito justo, sin letras pequeñas. Regístrate, valida tu
                  identidad (KYC) y solicita tu préstamo en minutos. Tu cupo
                  crece con tu historial.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <button
                    onClick={goToApp}
                    className="rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-white/90"
                  >
                    Ir a la app
                  </button>

                  <button
                    onClick={goToApp}
                    className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
                  >
                    Ver cómo funciona
                  </button>
                </div>

                {/* Trust signals (Lucide) */}
                <div className="mt-6 flex flex-wrap gap-4 text-xs text-white/70">
                  <span className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2">
                    <Lock className="h-4 w-4 text-white/70" />
                    Datos protegidos
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2">
                    <BadgeCheck className="h-4 w-4 text-white/70" />
                    KYC verificado
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2">
                    <TrendingUp className="h-4 w-4 text-white/70" />
                    Cupo crece con tu historial
                  </span>
                </div>
              </div>

              {/* Right — Simulador */}
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_0_70px_rgba(37,99,235,0.12)]">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-bold">Simulador rápido</h3>
                    <p className="mt-1 text-sm text-white/65">
                      Estima tu cuota en segundos (referencial).
                    </p>
                  </div>
                  <span className="rounded-xl border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                    COP
                  </span>
                </div>

                {/* Monto */}
                <div className="mt-6">
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-semibold text-white/80">
                      Monto
                    </label>
                    <span className="text-sm font-semibold text-white">
                      {fmtCOP(amount)}
                    </span>
                  </div>

                  <input
                    type="range"
                    min={100000}
                    max={2000000}
                    step={50000}
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                    className="mt-3 w-full accent-white"
                  />

                  <div className="mt-2 flex justify-between text-xs text-white/50">
                    <span>{fmtCOP(100000)}</span>
                    <span>{fmtCOP(2000000)}</span>
                  </div>
                </div>

                {/* Plazo */}
                <div className="mt-6">
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-semibold text-white/80">
                      Plazo
                    </label>
                    <span className="text-sm font-semibold text-white">
                      {months} {months === 1 ? "mes" : "meses"}
                    </span>
                  </div>

                  <div className="mt-3 grid grid-cols-4 gap-2">
                    {[1, 3, 6, 12].map((m) => (
                      <button
                        key={m}
                        type="button"
                        onClick={() => setMonths(m)}
                        className={[
                          "rounded-xl border px-3 py-2 text-sm font-semibold transition",
                          months === m
                            ? "border-white/30 bg-white text-slate-900"
                            : "border-white/10 bg-white/5 text-white/85 hover:bg-white/10",
                        ].join(" ")}
                      >
                        {m}m
                      </button>
                    ))}
                  </div>
                </div>

                {/* Resultados */}
                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs text-white/60">Cuota estimada</p>
                    <p className="mt-1 text-base font-bold">
                      {fmtCOP(sim.payment)}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs text-white/60">Total aprox.</p>
                    <p className="mt-1 text-base font-bold">
                      {fmtCOP(sim.total)}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs text-white/60">Interés aprox.</p>
                    <p className="mt-1 text-base font-bold">
                      {fmtCOP(sim.interest)}
                    </p>
                  </div>
                </div>

                <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-xs text-white/50">
                    *Cálculo referencial. La tasa y condiciones finales dependen
                    de tu perfil.
                  </p>

                  <button
                    onClick={goToApp}
                    className="rounded-2xl bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 hover:bg-white/90"
                  >
                    Empezar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features (Lucide) */}
        <section id="features" className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            {
              Icon: IdCard,
              t: "Registro + KYC",
              d: "Validación rápida para cumplir y protegerte.",
            },
            {
              Icon: BarChart3,
              t: "Préstamos por niveles",
              d: "Tu cupo sube con buen historial (smart score).",
            },
            {
              Icon: Paperclip,
              t: "Pagos con evidencia",
              d: "Soporte a comprobantes y revisión operativa.",
            },
          ].map(({ Icon, t, d }) => (
            <div
              key={t}
              className="rounded-3xl border border-white/10 bg-white/5 p-7"
            >
              <div className="mb-4 inline-flex rounded-2xl border border-white/10 bg-white/5 p-3">
                <Icon className="h-5 w-5 text-white/80" />
              </div>
              <h3 className="text-lg font-bold">{t}</h3>
              <p className="mt-2 text-sm text-white/70">{d}</p>
            </div>
          ))}
        </section>

        {/* How it works */}
        <section className="mt-20 md:mt-24">
          <h2 className="text-center text-3xl font-bold md:text-4xl">
            ¿Cómo funciona Fluuyo?
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              { n: "1", t: "Regístrate", d: "Crea tu cuenta en minutos." },
              { n: "2", t: "Valida tu identidad", d: "KYC simple y seguro." },
              { n: "3", t: "Solicita tu préstamo", d: "Cupos que crecen contigo." },
            ].map((step) => (
              <div
                key={step.n}
                className="rounded-3xl border border-white/10 bg-white/5 p-8"
              >
                <span className="text-4xl font-black text-white/20">
                  {step.n}
                </span>
                <h3 className="mt-4 text-lg font-bold">{step.t}</h3>
                <p className="mt-2 text-sm text-white/70">{step.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-20 md:mt-24">
          <h2 className="text-center text-3xl font-bold md:text-4xl">
            Preguntas frecuentes
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-white/70">
            Respuestas claras. Sin letras pequeñas.
          </p>

          <div className="mt-10 grid gap-4">
            <FaqItem
              defaultOpen
              q="¿Qué necesito para pedir un préstamo?"
              a="Crear tu cuenta y completar tu validación de identidad (KYC). Con eso podrás solicitar tu préstamo según el cupo disponible."
            />
            <FaqItem
              q="¿Cómo funciona el cupo por niveles?"
              a="Tu cupo puede aumentar con el buen comportamiento de pago. Si pagas a tiempo, tu perfil mejora y accedes a mejores montos."
            />
            <FaqItem
              q="¿Puedo pagar antes o abonar a capital?"
              a="Sí. Puedes realizar pagos anticipados o abonos y ver reflejado el avance. Las condiciones finales dependen de tu préstamo y validación."
            />
            <FaqItem
              q="¿Cómo reporto un pago?"
              a="Subes tu comprobante desde la app y el equipo lo revisa. Cuando se aprueba, se aplica a tus cuotas y se actualiza tu estado."
            />
            <FaqItem
              q="¿Mis datos están seguros?"
              a="Sí. Usamos prácticas de seguridad para proteger tu información y procesos de verificación para reducir fraude."
            />
          </div>
        </section>

        {/* Final CTA */}
        <section className="mt-24 text-center md:mt-32">
          <h2 className="text-3xl font-bold md:text-4xl">
            Empieza hoy con Fluuyo
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/70">
            Friendly Finance para personas reales: crédito claro, rápido y con
            progreso.
          </p>

          <button
            onClick={goToApp}
            className="mt-6 rounded-2xl bg-white px-8 py-3 font-semibold text-slate-900 hover:bg-white/90"
          >
            Crear cuenta
          </button>

          <p className="mt-6 text-xs text-white/50">
            © {new Date().getFullYear()} Fluuyo. Todos los derechos reservados.
          </p>
        </section>
      </div>
    </div>
  );
}
