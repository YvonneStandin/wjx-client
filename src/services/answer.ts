/* eslint-disable @typescript-eslint/no-explicit-any */
import { post } from './ajax'

// 提交答卷
export async function postAnswer(answerInfo: any) {
  const data = post('/api/answer', answerInfo)
  return data
}
