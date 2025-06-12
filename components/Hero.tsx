export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-white">
      <div className="relative grid min-h-screen lg:grid-cols-2">
        {/* Left Content Section - White Background */}
        <div className="relative z-10 flex items-center px-6 py-20 lg:px-16">
          {/* Subtle Geometric Pattern */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle, #00000008 1px, transparent 1px)`,
              backgroundSize: '24px 24px',
              backgroundPosition: '0 0, 12px 12px',
            }}
          />

          <div className="relative w-full max-w-xl space-y-8">
            <h1 className="text-5xl font-bold leading-tight text-gray-900 lg:text-6xl">
              We put the Performance Improvement Process on a{' '}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                PIP
              </span>
              .
            </h1>

            <p className="text-xl leading-relaxed text-gray-600 lg:text-2xl">
              Transform your organization&apos;s performance management with our innovative
              platform. Say goodbye to outdated processes and hello to a smarter, more efficient way
              of driving continuous improvement across your entire workforce.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="rounded-lg border-2 border-transparent bg-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:bg-blue-700 hover:shadow-xl">
                Start Free Trial
              </button>
              <button className="rounded-lg border-2 border-gray-300 bg-transparent px-8 py-4 text-lg font-semibold text-gray-700 transition-all hover:border-blue-600 hover:text-blue-600">
                Watch Demo
              </button>
            </div>
          </div>
        </div>

        {/* Right Visual Section - Gradient Background */}
        <div
          className="relative bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700"
          style={{
            clipPath: 'ellipse(75% 100% at 100% 50%)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-700/20" />
        </div>

        {/* Dashboard Preview - Positioned Above Both Sections */}
        <div className="absolute right-8 top-1/2 z-20 w-full max-w-2xl -translate-y-1/2 lg:right-20">
          <div className="relative">
            <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-blue-400 to-purple-400 opacity-30 blur-3xl" />
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-gray-900/90 shadow-2xl backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900">
                <div className="flex h-full items-center justify-center">
                  <div className="text-center">
                    <div className="mb-6 text-8xl">📊</div>
                    <p className="text-2xl font-medium text-gray-300">Dashboard Preview</p>
                    <p className="mt-3 text-base text-gray-400">
                      Your performance metrics at a glance
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
