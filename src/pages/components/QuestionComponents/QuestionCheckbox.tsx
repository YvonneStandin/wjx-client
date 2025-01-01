import React, { FC, useEffect, useState } from 'react'
import styles from './QuestionCheckbox.module.scss'

type PropsType = {
  fe_id: string
  props: {
    title: string
    isVertical?: boolean
    optionList: Array<{
      value: string
      isSelected: boolean
    }>
  }
}

const QuestionCheckbox: FC<PropsType> = ({ fe_id, props }) => {
  const { title, isVertical, optionList } = props

  const [selectedValues, setSelectedValues] = useState<string[]>([])

  // 初始化选中
  useEffect(() => {
    const defaultSelectedValues: string[] = []
    optionList.forEach(o => {
      if (o.isSelected) defaultSelectedValues.push(o.value)
    })
    setSelectedValues(defaultSelectedValues)
  }, [optionList])

  // 切换选中
  function handleToggleSelected(value: string) {
    if (selectedValues.includes(value)) {
      // 已经被选中，解除选中
      setSelectedValues(selectedValues.filter(v => v !== value))
    } else {
      // 未被选中，设定选中
      setSelectedValues(selectedValues.concat(value))
    }
  }

  return (
    <>
      <p>{title}</p>

      {/* 用于提交选中数据 */}
      <input type="hidden" name={fe_id} value={selectedValues.toString()} />

      <ul className={styles.list}>
        {optionList.map(option => {
          const { value } = option
          return (
            <li
              key={value}
              className={isVertical ? styles['vertical-item'] : styles['horizontal-item']}
            >
              <label>
                <input
                  type="checkbox"
                  onChange={() => handleToggleSelected(value)}
                  checked={selectedValues.includes(value)}
                />
                {value}
              </label>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default QuestionCheckbox
