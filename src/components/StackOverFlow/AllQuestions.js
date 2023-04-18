import { Avatar } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import './css/AllQuestion.css' ;

function AllQuestions() {
  return (
    <div className='all-questions'>
      <div className='all-questions-container'>

        <div className='all-questions-left'>
          <div className='all-options'>
            <div className='all-option'>
              <p>0</p>
              <span>votes</span>
            </div>
            <div className='all-option'>
              <p>0</p>
              <span>answers</span>
            </div>
            <div className='all-option'>
              <small>0 views</small>
            </div>
          </div>
        </div>

        <div className='question-answer'>
          <Link to = './question'> Formulas that relate electromotive 
          force with distance and magnetic field?</Link>
          <div style={{
            width:"90%"
          }}>
            <div >
               A magnet is initially 0.6 m away and 
              is moved to a distance of 0.1 m away from 
              the loop of wire with a radius of 15 cm. 
              The magnet initially has a magnetic field 
              strength of 10 T, and is then ignored.
            </div>
          </div>

          <div style = {{
            display:"flex"
          }}>
            <span className = "question-tags">
              react
            </span>
            <span className = "question-tags">
              mern
            </span>
            <span className = "question-tags">
              fronted
            </span>
          </div>
          <div className='author'>
            <small>Timestamp</small>
             
            <div className='author-details'>
              <Avatar/>
              <p>User name</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default AllQuestions