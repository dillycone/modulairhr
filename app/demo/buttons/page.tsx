import { Button } from '@/components/ui/Button'

export default function ButtonDemoPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="mx-auto max-w-4xl space-y-8">
        <h1 className="text-3xl font-bold text-gray-900">Button Component Demo</h1>

        {/* Alignment Demo */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">Button Alignment</h2>
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <p className="mb-4 text-sm text-gray-600">
              All button variants maintain consistent height through invisible borders
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Button variant="primary">Primary Button</Button>
              <Button variant="secondary">Secondary Button</Button>
              <Button variant="ghost">Ghost Button</Button>
              <Button variant="destructive">Destructive</Button>
            </div>

            {/* Visual alignment guide */}
            <div className="relative mt-8 flex items-center gap-4">
              <div className="absolute inset-y-0 left-0 w-full border-y-2 border-dashed border-red-300 opacity-50" />
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <span className="ml-4 text-sm text-gray-500">← Alignment guides</span>
            </div>
          </div>
        </section>

        {/* Size Variants */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">Size Variants</h2>
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <div className="flex flex-wrap items-end gap-4">
              <Button size="sm" variant="primary">
                Small (36px)
              </Button>
              <Button size="md" variant="primary">
                Medium (44px)
              </Button>
              <Button size="lg" variant="primary">
                Large (48px)
              </Button>
            </div>
          </div>
        </section>

        {/* Mixed Variants in Cards */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">Card Example</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="rounded-lg bg-white p-6 shadow-sm">
                <h3 className="mb-2 text-lg font-semibold">Feature {i}</h3>
                <p className="mb-6 text-sm text-gray-600">
                  Example feature description with some content to fill the card.
                </p>
                <div className="flex items-center gap-3">
                  <Button variant="primary" size="sm">
                    Get Started →
                  </Button>
                  <Button variant="secondary" size="sm">
                    Learn More
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Details */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">Implementation Details</h2>
          <div className="rounded-lg bg-gray-900 p-6 text-gray-100">
            <pre className="overflow-x-auto text-sm">
              {`// Key implementation details:

1. All variants include 'border-2' class
   - Primary: border-transparent
   - Secondary: border-gray-300
   - Ghost: border-transparent
   
2. Fixed height classes ensure consistency:
   - Small: h-9 (36px)
   - Medium: h-11 (44px) 
   - Large: h-12 (48px)
   
3. Box-sizing: border-box ensures borders 
   don't add to total height
   
4. Shadow effects don't affect layout`}
            </pre>
          </div>
        </section>
      </div>
    </div>
  )
}
