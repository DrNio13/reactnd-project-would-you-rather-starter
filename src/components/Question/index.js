import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleSaveQuestionAnswer } from '../../actions/questions';

const Question = (props) => {
    const { questionId } = useParams();
    const { author, optionOne, optionTwo } = props.questions[questionId];
    const [checkedOption, setCheckedOption] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();
        const questionAnswer = {
            qid: questionId,
            authedUser: props.authedUser,
            answer: checkedOption
        }
        props.dispatch(handleSaveQuestionAnswer(questionAnswer))
        setSubmitted(true)
    }

    return <div className='card'>
        {submitted ? <div className='card-body'>
            <div className="card-title">Asked by {props.users[author]['name']}</div>
            {props.users[author]['avatarURL'] ? <img src={props.users[author]['avatarURL']} className='img-thumbnail' alt='avatar' /> : ''}

            <div>
                <h3>Results</h3>

                <div className={`${checkedOption === 'optionOne' ? 'alert alert-success' : ''}`}>
                    Would you rather {optionOne.text}? {checkedOption === 'optionOne' ? '(Your vote)' : ''}
                    <div>Votes: {optionOne.votes.length}</div>
                    Percentage: {(optionOne.votes.length / (optionOne.votes.length + optionTwo.votes.length)) * 100}%
                </div>
                <div className={`${checkedOption === 'optionTwo' ? 'alert alert-success' : ''}`}>
                    Would you rather {optionTwo.text}? {checkedOption === 'optionTwo' ? '(Your vote)' : ''}
                    <div>Votes: {optionTwo.votes.length}</div>
                    Percentage: {(optionTwo.votes.length / (optionOne.votes.length + optionTwo.votes.length)) * 100}%
                </div>
            </div>
        </div> : <div className='card-body'>
                <div className="card-title">{props.users[author]['name']} asks:</div>
                {props.users[author]['avatarURL'] ? <img src={props.users[author]['avatarURL']} className='img-thumbnail' alt='avatar' /> : ''}
                <h3>Would you rather...</h3>
                <form onSubmit={onSubmit}>
                    <div className="form-check">
                        <input className="form-check-input" id='one' type="radio" value={'optionOne'} checked={checkedOption === 'optionOne'} onChange={(e) => { setCheckedOption('optionOne') }} />
                        <label htmlFor='one' className='form-check-label'>
                            <span>{optionOne.text}</span>
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" id='two' type="radio" value={'optionTwo'} checked={checkedOption === 'optionTwo'} onChange={(e) => { setCheckedOption('optionTwo') }} />
                        <label htmlFor='two' className='form-check-label'>
                            <span>{optionTwo.text}</span>
                        </label>
                    </div>
                    <button type='submit' className='btn btn-primary'>Submit</button>
                </form>
            </div>}
    </div>
}

export default connect()(Question)