import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Hero from './Hero'

describe('Hero Component', () => {
  it('renders the main heading', () => {
    render(<Hero />)

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent('We put the Performance Improvement Process on a')
    expect(heading).toHaveTextContent('PIP')
  })

  it('renders the description text', () => {
    render(<Hero />)

    const description = screen.getByText(/Transform your organization's performance management/i)
    expect(description).toBeInTheDocument()
  })

  it('renders both CTA buttons', () => {
    render(<Hero />)

    const startTrialButton = screen.getByRole('button', { name: /Start Free Trial/i })
    const watchDemoButton = screen.getByRole('button', { name: /Watch Demo/i })

    expect(startTrialButton).toBeInTheDocument()
    expect(watchDemoButton).toBeInTheDocument()
  })

  it('renders the dashboard preview section', () => {
    render(<Hero />)

    const dashboardPreview = screen.getByText(/Dashboard Preview/i)
    expect(dashboardPreview).toBeInTheDocument()

    const metricsText = screen.getByText(/Your performance metrics at a glance/i)
    expect(metricsText).toBeInTheDocument()
  })
})
