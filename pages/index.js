import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="https://dsc.gg/ouq" />
        <p className="description">
          Use code yip in the fortnite item shop! My socials -  
https://tiktok.com/@ouq
https://tiktok.com/@yip
https://dsc.gg/ouq
ouq#0001</code>
        </p
      </main>

      <Footer />
    </div>
  )
}
