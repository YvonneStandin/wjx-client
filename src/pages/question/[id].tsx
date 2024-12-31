/* eslint-disable @typescript-eslint/no-explicit-any */
import PageWrapper from '../components/PageWrapper'
import { getQuestionById } from '@/services/question'
import { getComponent } from '@/pages/components/QuestionComponents'
import styles from '@/styles/Question.module.scss'

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
    componentList: any[]
  }
  msg?: string
}

export default function About(props: PropsType) {
  const { errno, data, msg = '' } = props
  const { id, title = '', desc = '', isDeleted, isPublished, componentList = [] } = data || {}

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

        {componentList.map(comp => {
          return (
            <div key={comp.fe_id} className={styles['component-wrapper']}>
              {getComponent(comp)}
            </div>
          )
        })}

        <div className={styles['submit-wrapper']}>
          <button type="submit">提交</button>
        </div>
      </form>
    </PageWrapper>
  )
}

export async function getServerSideProps(context: any) {
  // 通过 id 获取问卷信息
  const { id = '' } = context.params
  const data = await getQuestionById(id)
  // {errno, data, msg}
  return {
    props: data,
  }
}
