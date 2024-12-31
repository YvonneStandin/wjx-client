import QuestionInput from './QuestionInput'
import QuestionRadio from './QuestionRadio'

type ComponentInfoType = {
  fe_id: string
  type: string
  isHidden: boolean
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  props: any
}

export const getComponent = (comp: ComponentInfoType) => {
  const { fe_id, type, isHidden, props } = comp

  if (isHidden) return null

  if (type === 'QuestionInput') {
    return <QuestionInput fe_id={fe_id} props={props} />
  }

  if (type === 'QuestionRadio') {
    return <QuestionRadio fe_id={fe_id} props={props} />
  }

  // 兜底
  return null
}
