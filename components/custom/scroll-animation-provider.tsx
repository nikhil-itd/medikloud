"use client"

import type React from "react"

import { useEffect } from "react"

interface ScrollAnimationProviderProps {
  children: React.ReactNode
}

export default function ScrollAnimationProvider({ children }: ScrollAnimationProviderProps) {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible")
        }
      })
    }, observerOptions)

    const sections = document.querySelectorAll(".section-fade-in")
    sections.forEach((section) => {
      observer.observe(section)
    })

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section)
      })
    }
  }, [])

  return <>{children}</>
}
