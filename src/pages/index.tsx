import Head from 'next/head'
import { Inter } from 'next/font/google'
import { About } from '@/components/Home/About'
import { Sponsor } from '@/components/Home/Sponsor'
import { Team } from '@/components/Home/Team'
import { Footer } from '@/components/Home/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Aagam</title>
        <meta
          name="description"
          content="Colleg"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <About />
      <Sponsor />
      <Team />
      <Footer />
    </>
  )
}