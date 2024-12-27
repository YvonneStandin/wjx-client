import Head from 'next/head'

type PropsType = {
  info: string
}

export default function About(props: PropsType) {
  return (
    <>
      <Head>
        <title>about page</title>
        <meta name="description" content="about" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>about page</h1>
        <p>{props.info}</p>
      </main>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      info: 'info from getStaticProps',
    },
  }
}
