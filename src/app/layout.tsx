import './globals.css'

import { Dosis } from 'next/font/google'
import type { Metadata } from 'next'

const primary_font = Dosis({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'HT Next',
  description: 'AI First Next(js) Generation HR Solution',
}

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <html lang="en">
      <body className={primary_font.className}>{children}</body>
    </html>
  )
}

export default RootLayout
