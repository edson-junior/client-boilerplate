import Head from 'next/head'

type Props = {
  title: string
}

export default function Home({
  title = 'Homepage - Client Boilerplate'
}: Props) {
  return (
    <div>
      <Head>
        <title>Homepage - Client Boilerplate</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>{title}</h1>
      </main>
    </div>
  )
}
