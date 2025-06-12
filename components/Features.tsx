import { Button } from '@/components/ui/Button'

export default function Features() {
  const features = [
    {
      title: 'Feature Category One',
      heading: 'Secure your workflow',
      description:
        'Stop workflow breaches with unified agent and agentless protection. Secure AI with new AI model scanning and AI security dashboard.',
      icon: '🔒',
    },
    {
      title: 'Feature Category Two',
      heading: 'Stop identity attacks',
      description:
        'Real-time visibility, detection, and protection against all types of identity-based attacks.',
      icon: '🎯',
    },
    {
      title: 'Feature Category Three',
      heading: 'Accelerate your SOC with AI',
      description: 'Speed, scale, and unified visibility to stop breaches—not just log them.',
      icon: '🚀',
    },
  ]

  return (
    <section className="relative bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-gray-900 lg:text-5xl">
            Transform Your{' '}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Performance
            </span>
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Discover powerful features designed to elevate your organization
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative flex flex-col overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Card Background Pattern */}
              <div
                className="absolute right-0 top-0 size-32 opacity-5"
                style={{
                  background: `radial-gradient(circle, #000 1px, transparent 1px)`,
                  backgroundSize: '8px 8px',
                }}
              />

              {/* Content Area - Grows to fill space */}
              <div className="grow">
                {/* Icon Container */}
                <div className="mb-6 inline-flex size-16 items-center justify-center rounded-xl bg-gradient-to-br from-blue-100 to-indigo-100 text-3xl transition-transform duration-300 group-hover:scale-110">
                  {feature.icon}
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <p className="text-sm font-semibold text-red-600">{feature.title}</p>
                  <h3 className="text-2xl font-bold text-gray-900">{feature.heading}</h3>
                  <p className="leading-relaxed text-gray-600">{feature.description}</p>
                </div>
              </div>

              {/* Action Buttons - Always at bottom */}
              <div className="mt-8 flex items-center gap-3">
                <Button variant="primary">Latest news →</Button>
                <Button variant="secondary">Learn more →</Button>
              </div>

              {/* Hover Gradient Effect */}
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
