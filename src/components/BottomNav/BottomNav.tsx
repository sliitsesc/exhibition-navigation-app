import React from 'react'
import { useRouter } from 'next/navigation'
import styles from './BottomNav.module.css'

type NavItem = {
  key: string
  label: string
  ariaLabel?: string
  icon?: React.ReactNode
}

interface BottomNavProps {
  items?: NavItem[]
  activeIndex?: number
  onChange?: (index: number) => void
}

const DefaultIcons = {
  scan: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <rect x="3" y="3" width="6" height="2" rx="1" fill="currentColor" />
      <rect x="3" y="19" width="6" height="2" rx="1" fill="currentColor" />
      <rect x="15" y="3" width="6" height="2" rx="1" fill="currentColor" />
      <rect x="15" y="19" width="6" height="2" rx="1" fill="currentColor" />
      <rect x="8" y="8" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.2" fill="none" />
    </svg>
  ),
  explore: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.77 5.82 22 7 14.14 2 9.27l6.91-1.01L12 2z" stroke="currentColor" strokeWidth="0.7" fill="currentColor" />
    </svg>
  ),
  help: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M12 2a10 10 0 100 20 10 10 0 000-20z" stroke="currentColor" strokeWidth="0.8" fill="none" />
      <path d="M9.5 9.5a2.5 2.5 0 115 0c0 1.5-2 2-2 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <circle cx="12" cy="17" r="0.6" fill="currentColor" />
    </svg>
  ),
}

const defaultItems: NavItem[] = [
  { key: 'scan', label: 'SCAN QR', ariaLabel: 'Scan QR code', icon: DefaultIcons.scan },
  { key: 'explore', label: 'EXPLORE', ariaLabel: 'Explore zones', icon: DefaultIcons.explore },
  { key: 'help', label: 'HELP', ariaLabel: 'Help', icon: DefaultIcons.help },
]

export default function BottomNav({ items = defaultItems, activeIndex = 0, onChange }: BottomNavProps) {
  const router = useRouter()
  return (
    <nav className={styles.wrapper} role="navigation" aria-label="Bottom Navigation">
      <ul className={styles.list}>
        {items.map((it, i) => {
          const active = i === activeIndex
          return (
            <li key={it.key} className={styles.item}>
              <button
                type="button"
                aria-label={it.ariaLabel ?? it.label}
                aria-pressed={active}
                className={`${styles.button} ${active ? styles.active : ''}`}
                onClick={() => {
                  if (onChange) onChange(i)
                  if (it.key === 'explore') {
                    router.push('/zones')
                  }
                }}
              >
                <span className={styles.icon} aria-hidden>
                  {it.icon}
                </span>
                <span className={styles.label}>{it.label}</span>
              </button>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
