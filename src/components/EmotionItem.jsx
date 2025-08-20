import React from 'react'
import './EmotionItem.css'
import { getEmotion } from '../util/getEmotion'

const EmotionItem = ({ emotionId, emotionName, isSelected, onClick }) => {

  return (
    <div 
    onClick={onClick}
    className={`EmotionItem ${isSelected? `item_on_${emotionId}`:""}`}>
      <img src={getEmotion(emotionId)} alt={emotionName} />
      <div>{emotionName}</div>
    </div>
  )
}

export default EmotionItem