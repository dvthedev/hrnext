import Announcements from '@/components/Announcements'
import ArchiveButton from '@/components/ArchiveButton'
import Header from '@/components/Header'
import HelpButton from '@/components/HelpButton'
import MagicInput from '@/components/MagicInput'
import SideNav from '@/components/SideNav'

const InternalLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <>
      <div className="w-full min-h-screen grid lg:grid-cols-[280px_1fr_280px] md:grid-cols-[220px_1fr_220px] sm:grid-cols-[220px_1fr_220px]">
        <div className="hidden md:block">
          <aside className="flex flex-col h-full max-h-screen">
            <header className="flex items-center justify-between px-4 border-b h-16">
              <Header />
            </header>
            <div className="flex-1 py-2">
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
            <div className="overflow-auto hover:z-10 p-2">
              <Announcements />
            </div>
          </div>
        </div>
      </div>
      <MagicInput />
      <ArchiveButton />
      <HelpButton />
    </>
  )
}

export default InternalLayout
