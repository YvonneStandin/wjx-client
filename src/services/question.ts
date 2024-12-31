import { get } from './ajax'

// 获取问卷信息
export async function getQuestionById(id: string) {
  const data = get(`/api/question/${id}`)
  return data
}
