import React, { FC } from 'react'

type PropsType = {
  text: string
  isCenter?: boolean
}

const QuestionParagraph: FC<PropsType> = ({ text, isCenter = false }) => {
  const textList = text.split('\n')
  return (
    <p style={{ textAlign: isCenter ? 'center' : 'left' }}>
      {textList.map((t, index) => (
        <span key={index}>
          {index > 0 && <br />}
          {t}
        </span>
      ))}
    </p>
  )
}

export default QuestionParagraph
