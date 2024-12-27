import Head from 'next/head'
import QuestionInput from '../components/QuestionComponents/QuestionInput'

type PropsType = {
  id: string
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
        <p>{props.id}</p>
        <form action="">
          <QuestionInput fe_id="c1" props={{ title: '姓名', placeholder: '请输入姓名' }} />
        </form>
      </main>
    </>
  )
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function getServerSideProps(context: any) {
  const { id = '' } = context.params

  return {
    props: {
      id,
    },
  }
}
