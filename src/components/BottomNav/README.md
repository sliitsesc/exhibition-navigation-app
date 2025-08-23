# BottomNav component

Simple, modern bottom navigation used in the app. Place near the root layout so it sits above page content.

Usage example (React / Next.js):

import BottomNav from '@/components/BottomNav/BottomNav'

function Layout() {
  const [index, setIndex] = React.useState(1)
  return (
    <>
      {/* page content */}
      <BottomNav activeIndex={index} onChange={setIndex} />
    </>
  )
}

Props:
- items?: array of { key, label, ariaLabel?, icon? }
- activeIndex?: number
- onChange?: (index) => void
