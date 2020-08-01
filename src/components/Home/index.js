import React, { useEffect, useState } from 'react'
import { WouldYourRatherCard } from '../WouldYouRatherCard';

export const Home = (props) => {
    const [activeTab, setActiveTab] = useState('unanswered')
    const [answeredIds, setAnsweredIds] = useState([])

    useEffect(() => {
        // execute dispatch once
        setAnsweredIds(Object.keys(props.users[props.authedUser].answers))
    }, []) // eslint-disable-line

    return <div>
        <button onClick={() => { setActiveTab('answered') }}>Answered</button>
        <button onClick={() => { setActiveTab('unanswered') }}>Unanswered</button>

        {activeTab === 'answered' && <div>
            {Object.values(props.questions).filter(question => answeredIds.includes(question.id)).sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp)).map(question => <div key={question.id}><WouldYourRatherCard users={props.users} questions={props.questions} url={props.url} question={question} /></div>)}
        </div>}

        {activeTab === 'unanswered' && <div>
            {Object.values(props.questions).filter(question => !answeredIds.includes(question.id)).sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp)).map(question => <div key={question.id}><WouldYourRatherCard users={props.users} questions={props.questions} url={props.url} question={question} /></div>)}
        </div>}
    </div>
}