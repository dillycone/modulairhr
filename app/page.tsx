import type { Metadata } from 'next'
import dynamic from 'next/dynamic'

export const metadata: Metadata = {
  title: 'ModulairHR – Performance Improvement',
}

const Hero = dynamic(() => import('@/components/Hero'), {
  loading: () => <div className="min-h-screen bg-white" />,
})

const Features = dynamic(() => import('@/components/Features'), {
  loading: () => <div className="min-h-screen bg-gray-50" />,
})

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
    </>
  )
}
