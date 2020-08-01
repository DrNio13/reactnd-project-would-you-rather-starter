import React, { useState } from 'react';
import { connect } from 'react-redux';
import { handleSaveQuestion } from '../../actions/questions';

const NewQuestion = (props) => {
    const [optionOne, setOptionOne] = useState('')
    const [optionTwo, setOptionTwo] = useState('')
    const [success, setSuccess] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault();
        props.dispatch(handleSaveQuestion({ optionOneText: optionOne, optionTwoText: optionTwo, author: props.authedUser })).then(data => setSuccess(true));
    }

    const handleChange = (e, id) => {
        if (id === 'optionOne') {
            setOptionOne(e.target.value)
        } else {
            setOptionTwo(e.target.value)
        }
    }

    return <div className="card">
        <h3 className='card-title'>Create new question</h3>
        <div className='card-body'>
            <form onSubmit={handleSubmit}>
                <div>Complete the question</div>
                <div>
                    <label>
                        Would you rather...
        <input type="text" name="optionOne" value={optionOne} onChange={(e) => { handleChange(e, 'optionOne') }} placeholder='Enter option one text here' />
                    </label>
                </div>

                <div>
                    <label>OR
        <input type="text" name="optionTwo" value={optionTwo} onChange={(e) => { handleChange(e, 'optionTwo') }} placeholder='Enter option two text here' />
                    </label>
                </div>

                <button disabled={!optionOne || !optionTwo} onClick={handleSubmit} className="btn btn-primary" value="Submit" >Submit</button>

                {success && <div className='alert alert-success'>Question saved!</div>}

            </form>
        </div>
    </div>
}

export default connect()(NewQuestion)