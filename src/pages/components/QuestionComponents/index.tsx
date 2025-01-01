import QuestionInput from './QuestionInput'
import QuestionRadio from './QuestionRadio'
import QuestionTitle from './QuestionTitle'
import QuestionInfo from './QuestionInfo'
import QuestionParagraph from './QuestionParagraph'
import QuestionTextarea from './QuestionTextarea'
import QuestionCheckbox from './QuestionCheckbox'

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

  if (type === 'QuestionTitle') {
    return <QuestionTitle {...props} />
  }

  if (type === 'QuestionInfo') {
    return <QuestionInfo {...props} />
  }

  if (type === 'QuestionParagraph') {
    return <QuestionParagraph {...props} />
  }

  if (type === 'QuestionTextarea') {
    return <QuestionTextarea fe_id={fe_id} props={props} />
  }

  if (type === 'QuestionCheckbox') {
    return <QuestionCheckbox fe_id={fe_id} props={props} />
  }

  // 兜底
  return null
}
