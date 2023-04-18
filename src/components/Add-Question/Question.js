import React from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css' // quill's css
import './Question.css'
import  {TagsInput}  from 'react-tag-input-component'

function Question() {
  return (
    <div className='add-question'>
        <div className='add-question-container'>
            <div className='head-title'>
                <h1>Ask a public question</h1>
            </div>
            <div className='question-container'>
                <div className='question-options'>
                    <div className='question-option'>
                        <div className='titile'>
                            <h3>title</h3>
                            <small>Be specific and imaging you're asking a question
                                to another person
                            </small>
                            <input type='text' placeholder='Add Question title' />
                        </div>
                        <div className='question-option'>
                            <h3>Body</h3>
                            <small>Include all information someone would need to answer
                                your question
                            </small>
                            <ReactQuill className='react-quill' theme = 'snow' />
                        </div>
                        
                        <div className='question-option'>
                            <h3>Tags</h3>
                            <small>Add up to 5 tags to describe what your question is about
                            </small>
                            <TagsInput
                                className = 'tags-input'
                                value = {[]}
                                name = 'tags'
                                placeholder = "Press enter to add new tag"
                            />
                        </div>
                        
                    </div>
                </div>
            </div>
            <button className='button'>Add Your Question</button>
        </div>
    </div>
  )
}

export default Question