import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Button } from './Button'

describe('Button', () => {
  it('renders with consistent height across variants', () => {
    const { container } = render(
      <div>
        <Button variant="primary" data-testid="primary">
          Primary
        </Button>
        <Button variant="secondary" data-testid="secondary">
          Secondary
        </Button>
        <Button variant="ghost" data-testid="ghost">
          Ghost
        </Button>
        <Button variant="destructive" data-testid="destructive">
          Destructive
        </Button>
      </div>
    )

    const buttons = container.querySelectorAll('button')
    const heights = Array.from(buttons).map((button) => {
      const styles = window.getComputedStyle(button)
      return styles.height
    })

    // All buttons should have the same computed height
    expect(new Set(heights).size).toBe(1)

    // Check that all buttons have the h-11 class (44px)
    buttons.forEach((button) => {
      expect(button.classList.contains('h-11')).toBe(true)
    })
  })

  it('maintains consistent sizing with different size props', () => {
    const { container } = render(
      <div>
        <Button size="sm" data-testid="sm">
          Small
        </Button>
        <Button size="md" data-testid="md">
          Medium
        </Button>
        <Button size="lg" data-testid="lg">
          Large
        </Button>
      </div>
    )

    const buttons = container.querySelectorAll('button')

    expect(buttons[0]?.classList.contains('h-9')).toBe(true) // small
    expect(buttons[1]?.classList.contains('h-11')).toBe(true) // medium
    expect(buttons[2]?.classList.contains('h-12')).toBe(true) // large
  })

  it('all variants have border-2 class for consistent sizing', () => {
    const { container } = render(
      <div>
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="destructive">Destructive</Button>
      </div>
    )

    const buttons = container.querySelectorAll('button')
    buttons.forEach((button) => {
      expect(button.classList.contains('border-2')).toBe(true)
    })
  })

  it('applies custom className correctly', () => {
    const { container } = render(
      <Button className="mt-4" variant="primary">
        Custom
      </Button>
    )

    const button = container.querySelector('button')
    expect(button?.classList.contains('mt-4')).toBe(true)
    // Should still have base classes
    expect(button?.classList.contains('h-11')).toBe(true)
  })

  it('renders fullWidth variant correctly', () => {
    const { container } = render(
      <Button fullWidth variant="primary">
        Full Width
      </Button>
    )

    const button = container.querySelector('button')
    expect(button?.classList.contains('w-full')).toBe(true)
  })
})
