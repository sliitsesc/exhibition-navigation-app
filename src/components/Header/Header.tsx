"use client"

import React from 'react'
import { useRouter } from 'next/navigation'
import styles from './Header.module.css'

interface HeaderProps {
  title?: string
  subtitle?: string
  showBack?: boolean
  onBack?: () => void
  right?: React.ReactNode
}

export default function Header({ title = 'ALL ZONES', subtitle, showBack = true, onBack, right }: HeaderProps) {
  const router = useRouter()
  const handleBack = () => {
    if (onBack) return onBack()
    // prefer router.back but fallback to history
    if (router && typeof router.back === 'function') router.back()
    else if (typeof window !== 'undefined') window.history.back()
  }

  return (
    <header className={styles.header} role="banner">
      <div className={styles.inner}>
        <button
          type="button"
          className={styles.back}
          aria-label="Go back"
          onClick={handleBack}
        >
          <svg viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <div className={styles.titleWrap}>
          <h1 className={styles.title}>{title}</h1>
          {subtitle ? <p className={styles.subtitle}>{subtitle}</p> : null}
        </div>

        <div className={styles.right}>{right ?? <div className={styles.rightPlaceholder} />}</div>
      </div>
    </header>
  )
}
