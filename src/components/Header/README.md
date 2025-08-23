# Header component

Modern, accessible header intended for app pages. Sticky, blurred background and optional subtitle.

Usage

import Header from '@/components/Header/Header'

<Header title="ALL ZONES" showBack subtitle="Optional small subtitle" />

Props
- title?: string - main title text
- subtitle?: string - small subtitle under the title
- showBack?: boolean - show/hide back button
- onBack?: () => void - custom back handler
- right?: ReactNode - content to render on the right side
