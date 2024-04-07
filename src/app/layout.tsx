import './globals.css'

import AppProvider from '@/components/AppProvider'
import { Dosis } from 'next/font/google'
import Header from '@/components/Header'
import MagicInput from '@/components/MagicInput'
import type { Metadata } from 'next'
import SideNav from '@/components/SideNav'

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
      <body className={primary_font.className}>
        <AppProvider>
          <main className="relative bg-background text-foreground">
            <div className="w-full min-h-screen grid lg:grid-cols-[280px_1fr_280px] md:grid-cols-[220px_1fr_220px] sm:grid-cols-[220px_1fr_220px]">
              <div className="hidden border-r md:block">
                <aside className="flex flex-col h-full max-h-screen">
                  <header className="flex items-center justify-between px-4 border-b h-16">
                    <Header />
                  </header>
                  <div className="flex-1 p-2">
                    <SideNav />
                  </div>
                </aside>
              </div>
              {children}
              <div className="hidden border-l md:block">
                <div className="flex flex-col h-full max-h-screen">
                  <div className="border-b h-8">right top</div>
                  <div className="flex-1">right middle</div>
                  <div className="max-h-60 overflow-auto border-t hover:z-10">
                    right bottom
                  </div>
                </div>
              </div>
            </div>
            <MagicInput />
          </main>
        </AppProvider>
      </body>
    </html>
  )
}

export default RootLayout
