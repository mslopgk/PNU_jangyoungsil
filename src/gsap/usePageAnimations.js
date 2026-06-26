import { useLayoutEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const REVEAL_SELECTORS = [
  '.visual-panel',
  '.it-hero',
  '.heritage-card',
  '.it-showcase',
  '.axis-info',
  '.hanji-hero',
  '.ir52',
  '.card',
  '.field',
  '.inv-card',
  '.bio-card',
  '.spec-card',
  '.eco-grid',
  '.floor-card',
  '.gallery',
  '.gpu-card',
  '.loc-card',
  '.news-card',
  '.partner-c',
  '.t1-card',
  '.widget',
  '.cta-card',
  '.h-cell',
  '.rb-card',
  '.acts-deep-cell',
  '.acts-cell',
  '.og-cell',
  '.obang-cell',
  '.spec-cell',
  '.eco-card',
  '.floor-row',
  '.gal-card',
  '.it-stat-card',
]

export default function usePageAnimations() {
  const { pathname } = useLocation()
  const scope = useRef(null)

  useLayoutEffect(() => {
    const root = scope.current
    if (!root) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const ctx = gsap.context(() => {
      // above-the-fold entrance (clearProps keeps CSS :hover transforms working)
      gsap.from('.page-header > *', {
        y: 26, autoAlpha: 0, duration: 0.6, ease: 'power3.out', stagger: 0.08, clearProps: 'transform',
      })
      gsap.from('.kpi-row .kpi-tile', {
        y: 26, autoAlpha: 0, duration: 0.5, ease: 'power3.out', stagger: 0.07, delay: 0.12, clearProps: 'transform',
      })
      gsap.from('.field-nav .fn-pill', {
        y: 18, autoAlpha: 0, duration: 0.4, ease: 'power3.out', stagger: 0.05, delay: 0.1, clearProps: 'transform',
      })

      // scroll-triggered reveals
      REVEAL_SELECTORS.forEach((sel) => {
        gsap.utils.toArray(sel).forEach((el) => {
          gsap.from(el, {
            y: 34, autoAlpha: 0, duration: 0.6, ease: 'power2.out', clearProps: 'transform',
            scrollTrigger: { trigger: el, start: 'top 88%', once: true },
          })
        })
      })

      ScrollTrigger.refresh()
    }, root)

    const t = setTimeout(() => ScrollTrigger.refresh(), 350)

    return () => {
      clearTimeout(t)
      ctx.revert()
    }
  }, [pathname])

  return scope
}
