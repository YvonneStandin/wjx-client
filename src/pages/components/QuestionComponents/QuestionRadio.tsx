import React, { FC } from 'react'
import styles from './QuestionRadio.module.scss'

type PropsType = {
  fe_id: string
  props: {
    title: string
    options: string[]
    selectedOption: string
    isVertical: boolean
  }
}

const QuestionRadio: FC<PropsType> = ({ fe_id, props }) => {
  const { title, options, selectedOption, isVertical } = props
  return (
    <>
      <p>{title}</p>
      <ul className={styles.list}>
        {options.map(option => {
          return (
            <li
              key={option}
              className={isVertical ? styles['vertical-item'] : styles['horizontal-item']}
            >
              <label>
                <input
                  type="radio"
                  name={fe_id}
                  value={option}
                  defaultChecked={option === selectedOption}
                />
                {option}
              </label>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default QuestionRadio
