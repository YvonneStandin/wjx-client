import PageWrapper from '../components/PageWrapper'
import { getQuestionById } from '@/services/question'
import styles from '@/styles/Question.module.scss'
import QuestionInput from '../components/QuestionComponents/QuestionInput'
import QuestionRadio from '../components/QuestionComponents/QuestionRadio'

type PropsType = {
  errno: number
  data?: {
    id: string
    title: string
    desc?: string
    js?: string
    css?: string
    isPublished: boolean
    isDeleted: boolean
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    componentList: any[]
  }
  msg?: string
}

export default function About(props: PropsType) {
  const { errno, data, msg = '' } = props
  const { id, title = '', desc = '', isDeleted, isPublished } = data || {}

  // 问卷没有
  if (errno !== 0) {
    return (
      <PageWrapper title="错误">
        <h1>错误</h1>
        <p>{msg}</p>
      </PageWrapper>
    )
  }
  // 问卷已删除
  if (isDeleted) {
    return (
      <PageWrapper title={title} desc={desc}>
        <h1>{title}</h1>
        <p>该问卷已被删除</p>
      </PageWrapper>
    )
  }
  // 问卷尚未发布
  if (!isPublished) {
    return (
      <PageWrapper title={title} desc={desc}>
        <h1>{title}</h1>
        <p>该问卷尚未发布</p>
      </PageWrapper>
    )
  }
  // 遍历组件列表
  return (
    <PageWrapper title={title} desc={desc}>
      <form action="/api/answer" method="post">
        <input type="hidden" name="questionId" defaultValue={id} />
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
  // 通过 id 获取问卷信息
  const { id = '' } = context.params
  const data = await getQuestionById(id)
  // {errno, data, msg}
  return {
    props: data,
  }
}
