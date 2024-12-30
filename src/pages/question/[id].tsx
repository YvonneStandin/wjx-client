import PageWrapper from '../components/PageWrapper'
import styles from '@/styles/Question.module.scss'
import QuestionInput from '../components/QuestionComponents/QuestionInput'
import QuestionRadio from '../components/QuestionComponents/QuestionRadio'

type PropsType = {
  id: string
}

export default function About(props: PropsType) {
  return (
    <PageWrapper title="Question">
      <form action="/api/answer" method="post">
        <input type="hidden" name="questionId" defaultValue={props.id} />
        <div className={styles['component-wrapper']}>
          <QuestionInput fe_id="c1" props={{ title: '姓名', placeholder: '请输入姓名' }} />
        </div>
        <div className={styles['component-wrapper']}>
          <QuestionRadio
            fe_id="c2"
            props={{
              title: '内驱周期',
              options: ['1个月', '2个月', '3个月'],
              selectedOption: '2个月',
              isVertical: false,
            }}
          />
        </div>

        <div className={styles['submit-wrapper']}>
          <button type="submit">提交</button>
        </div>
      </form>
    </PageWrapper>
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
