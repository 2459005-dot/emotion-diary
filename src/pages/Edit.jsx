import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Editor from '../components/Editor'
import Header from '../components/Header'
import Button from '../components/Button'
import { DiaryDispatchContext, DiaryStateContext } from '../App'

const Edit = () => {

  const nav = useNavigate()
  const { id } = useParams()
  const { onDelete, onUpdate } = useContext(DiaryDispatchContext)
  const data = useContext(DiaryStateContext)
  const [curDiaryItem, setCurDiaryItem] = useState(null)

  useEffect(() => {
    const currentDiaryItem = data.find(
      (item) => String(item.id) === String(id)
    )
    if (!currentDiaryItem) {
      window.alert('존재하지 않음')
      nav('/', { replace: true })
    }
    setCurDiaryItem(currentDiaryItem)
  }, [id, data, nav])

  const onSubmit = (input) => {
    if (window.confirm('일기를 수정합니다')) {
      onUpdate(
        id,
        input.createdDate.getTime(),
        input.emotionId,
        input.content
      )
      nav('/', { replace: true })
    }
  }

  const onClickDelete = () => {
    if (window.confirm('일기를 삭제합니다')) {
      onDelete(
        id
      )
      nav('/', { replace: true })
    }
  }

  return (
    <div>
      <Header
        leftChild={<Button text={"< 뒤로가기"} onClick={() => nav(-1)} />}
        rightChild={<Button text={" 삭제하기"} type={'NEGATIVE'} onClick={onClickDelete} />}
        title={"일기 수정하기"} />
      <Editor initData={curDiaryItem} onSubmit={onSubmit} />
    </div>
  )
}

export default Edit