export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen max-w-2xl flex-col justify-center gap-4 px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">
        Validation Test Run Tracker
      </h1>
      <p className="text-lg leading-relaxed">
        A small web application for validation technicians: start a test run
        for a software build on a device, record pass, fail or blocked against
        a seeded list of test cases, complete the run only when every case is
        recorded, and see a pass-rate summary per run and per build. Built with
        Next.js, TypeScript and Tailwind CSS, backed by PostgreSQL. All data is
        synthetic; no employer information is included.
      </p>
    </main>
  );
}
