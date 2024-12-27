import Head from 'next/head'
import QuestionInput from '../components/QuestionComponents/QuestionInput'
import QuestionRadio from '../components/QuestionComponents/QuestionRadio'

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
          <QuestionRadio
            fe_id="c2"
            props={{
              title: '内驱周期',
              options: ['1个月', '2个月', '3个月'],
              selectedOption: '2个月',
              isVertical: false,
            }}
          />
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
