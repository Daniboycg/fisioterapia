import { Navbar } from '@/components/shared/Navbar'
import { Hero } from '@/components/landing/hero/Hero'
import { Services } from '@/components/landing/features/Services'
import { Process } from '@/components/landing/features/Process'
import { Coverage } from '@/components/landing/features/Coverage'
import { Contact } from '@/components/landing/cta/Contact'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col">
        <Hero />
        <Services />
        <Process />
        <Coverage />
        <Contact />
      </main>
    </>
  )
}
