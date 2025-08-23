"use client"

import React from 'react'
import Header from '@/components/Header/Header'

export default function ScanPlaceholderPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header title="SCAN" showBack />
      <main className="flex-1 flex flex-col items-center justify-center px-6 text-center gap-4">
        <div className="max-w-sm">
          <h1 className="text-2xl font-bold mb-2">Scan Coming Soon</h1>
          <p className="text-sm text-gray-600">This is a placeholder page. The QR scanning feature will be integrated here later.</p>
        </div>
      </main>
    </div>
  )
}
