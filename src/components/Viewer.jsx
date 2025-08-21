import React from 'react'
import './Viewer.css'
import { getEmotion } from '../util/getEmotion'
import { emotionList } from '../util/constants'

const Viewer = ({ emotionId, content }) => {
    const emotionItem = emotionList.find(
        (item) => String(item.emotionId) === String(emotionId)
    )
    return (
        <div className='Viewer'>
            <section className="viewer-img-section">
                <h4>오늘의 감정</h4>
                <div className={`emotion-img-wrapper img-${emotionId}`}>
                    <img src={getEmotion(emotionId)} alt="" />
                    <div>
                        {emotionItem.emotionName}
                    </div>
                </div>
            </section>
            <section className="content-section">
                <h4>오늘의 일기</h4>
                <div className="content-wrapper">
                    <p>{content}</p>
                </div>
            </section>
        </div>
    )
}

export default Viewer