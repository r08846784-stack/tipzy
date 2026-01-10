export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white px-6 py-20">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-5xl font-bold tracking-tight">
            About <span className="text-blue-500">Tipzy</span>
          </h1>
          <p className="mt-4 text-lg text-slate-400">
            Support creators. One tip at a time.
          </p>
        </div>

        {/* Main content */}
        <div className="grid gap-10 md:grid-cols-2">
          
          {/* Left */}
          <div className="space-y-4 text-slate-300 leading-relaxed">
            <p>
              <span className="text-white font-semibold">Tipzy</span> is a
              creator-support platform where fans can show appreciation through
              small, meaningful contributions.
            </p>

            <p>
              Whether you are an artist, developer, writer, or educator, Tipzy
              helps you receive support directly from your audience.
            </p>

            <p>
              No subscriptions. No pressure. Just simple support.
            </p>
          </div>

          {/* Right (Cards) */}
          <div className="space-y-4">
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-2">💡 Why Tipzy?</h3>
              <p className="text-slate-400">
                Because creators deserve an easy and transparent way to get
                support without complicated systems.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-2">🪙 How it works</h3>
              <p className="text-slate-400">
                Supporters send small tips, creators receive motivation and
                funding to keep building what they love.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 text-center text-slate-500 text-sm">
          Built with ❤️ by <span className="text-white font-medium">Tanmoy Roy</span>
        </div>

      </div>
    </div>
  )
}
