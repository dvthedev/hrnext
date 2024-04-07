import './globals.css'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import AppProvider from '@/components/AppProvider'
import ArchiveButton from '@/components/ArchiveButton'
import { Button } from '@/components/ui/button'
import { Dosis } from 'next/font/google'
import Header from '@/components/Header'
import HelpButton from '@/components/HelpButton'
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
          <div className="relative bg-background text-foreground">
            <div className="w-full min-h-screen grid lg:grid-cols-[280px_1fr_280px] md:grid-cols-[220px_1fr_220px] sm:grid-cols-[220px_1fr_220px]">
              <div className="hidden md:block">
                <aside className="flex flex-col h-full max-h-screen">
                  <header className="flex items-center justify-between px-4 border-b h-16">
                    <Header />
                  </header>
                  <div className="flex-1 p-2">
                    <SideNav />
                  </div>
                </aside>
              </div>
              <main className="flex flex-col">
                <div className="flex-1 border-x-2">{children}</div>
                <div className="h-28 border-gradient-x-2"></div>
              </main>
              <div className="hidden md:block">
                <div className="flex flex-col h-full max-h-screen">
                  <div className="border-b h-8">right top</div>
                  <div className="flex-1">right middle</div>
                  <div className="max-h-60 overflow-auto hover:z-10 p-2">
                    <div className="flex flex-col gap-2">
                      <Card>
                        <CardHeader className="p-2 pt-0 md:p-4">
                          <CardTitle className="text-xl">
                            Upgrade to Pro
                          </CardTitle>
                          <CardDescription>
                            Unlock all features and get unlimited access to our
                            support team.
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
                          <Button size="sm" className="w-full rounded-full">
                            Upgrade
                          </Button>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader className="p-2 pt-0 md:p-4">
                          <CardTitle className="text-xl">
                            Introducing New Cloud
                          </CardTitle>
                          <CardDescription>
                            Get started with our new cloud service and get
                            unlimited storage.
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
                          <Button size="sm" className="w-full rounded-full">
                            Get Started
                          </Button>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <MagicInput />
            <ArchiveButton />
            <HelpButton />
          </div>
        </AppProvider>
      </body>
    </html>
  )
}

export default RootLayout
