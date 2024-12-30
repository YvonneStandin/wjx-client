/* eslint-disable @typescript-eslint/no-explicit-any */
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

function genAnswerInfo(reqBody: any) {
  const answerList: any[] = []

  Object.keys(reqBody).forEach(key => {
    if (key === 'questionId') return
    answerList.push({
      componentId: key,
      value: reqBody[key],
    })
  })

  return {
    questionId: reqBody.questionId,
    answerList,
  }
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.status(200).json({ error: -1, msg: ' method 错误' })
  }
  const answerInfo = genAnswerInfo(req.body)
  console.log('answerInfo:', answerInfo)

  try {
    //TODO body 提交到服务端 mock
    //提交成功
    res.redirect('/success')

    //提交失败
    // res.redirect('/fail')
  } catch (error) {
    res.status(200).json({ error: -1, msg: error })
  }
}
