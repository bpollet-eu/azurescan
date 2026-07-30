export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="bg-blue-700 text-white p-16 text-center">
        <h1 className="text-5xl font-bold">AzureScan</h1>
        <p className="mt-4 text-xl">Azure FinOps & Kostenoptimalisatie</p>
        <a href="https://outlook.office.com/book/bpolleteu@bpollet.eu/?ismsaljsauthenabled" className="inline-block mt-6 bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold">Boek een kennismaking</a>
      </section>
      <section className="p-12 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Onze Diensten</h2>
        <div className="grid md:grid-cols-4 gap-4">
          <div className="border p-4 rounded">Resource Scan</div>
          <div className="border p-4 rounded">Rightsizing</div>
          <div className="border p-4 rounded">Savings Plans</div>
          <div className="border p-4 rounded">FinOps Rapport</div>
        </div>
      </section>
    </main>
  )
}
