import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./DiaryItem.css"
import { getEmotion } from "./../util/getEmotion"
import Button from './Button'
const DiaryItem = ({ id, emotionId, createdDate, content }) => {

  const nav = useNavigate()
  return (
    <div className='DiaryItem'>
      <div 
      onClick={()=>nav(`/diary/${id}`)}
      className={`img-section bg-${emotionId}`}>
        <img src={getEmotion(emotionId)} alt="emotion icon" />
      </div>
      <div
        onClick={()=>nav(`/diary/${id}`)}
      className="info-section" >
        <div className="created-date">
          {new Date(createdDate).toLocaleDateString()}
        </div>
        <div className="content">{content}</div>
      </div>
      <div className="button-section">
        <Button text={"수정하기"}  onClick={()=>nav(`/edit/${id}`)}/>
      </div>
    </div>
  )
}

export default DiaryItem