import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
    <Head>
      <title>KyawZinThein Page</title>
    </Head>
    <h1>KyawZinThein Page</h1>
    <p>
      This is Final Exam Project stock-final.
    </p>
    <Link href="/about">About</Link>
    </>
  )
}
