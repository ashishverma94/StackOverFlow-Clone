import { Bookmark, History } from '@mui/icons-material'
import { Avatar } from '@mui/material'
import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import { Link } from 'react-router-dom'
// import "react-quill/dist/quill.snow.css"
import './index.css'

function MainQuestion() {
    const [show, setShow] = useState(false);
    return (
        <div className='main'>
            <div className='main-container'>
                <div className='main-top'>
                    <h2 className='main-question'>How to determine a call made is local or STD or ISD ?</h2>
                    <Link to='/add-question'>
                        <button>Ask Question</button>
                    </Link>
                </div>
                <div className='main-desc'>
                    <div className='info'>
                        <p> TimeStamp</p>
                        <p> Active <span> today</span></p>
                        <p> Viewed <span> 43 times</span></p>
                    </div>
                </div>

                <div className="all-questions">
                    <div className='all-questions-container'>
                        <div className='all-questions-left'>
                            <div className='all-options'>
                                <p className='arrow'><i class="fa-solid fa-caret-up"></i></p>
                                <p className='arrow'>6</p>
                                <p className='arrow'><i class="fa-solid fa-caret-down"></i></p>
                                <Bookmark />
                                <History />
                            </div>
                        </div>
                        <div className='question-answer'>
                            <p>I am developing an application which requires to keep
                                track of the outgoing calls made by user, which I am
                                able to track by Using Broadcast Receiver. I also want
                                to detect that is that call is Local or STD or ISD,
                                but I am not able to detect that.</p>
                            <div className='author'>
                                <small>asked timeStamp </small>
                                <div className='auth-details'>
                                    <Avatar />
                                    <p>Author Name</p>
                                </div>
                            </div>
                            <div className='comments'>
                                <div className='comment'>
                                    <p>Looks very interesting, have you been able to
                                        figure out the home network of the user for
                                        a start? from there u can determine if the
                                        call is going out of state or out of country.
                                        <span>UserName</span>
                                        <small>Timestamp</small>
                                    </p>
                                </div>
                                <p onClick={() => setShow(!show)}>Add a comment</p>
                                {
                                    show && (
                                        <div className='title'>
                                            <textarea
                                                type='text'
                                                style={{
                                                    margin:'5px 0px',
                                                    padding:'10px',
                                                    border:'1px solid rgba(0,0,0,0.2)',
                                                    borderRadius:'3px',
                                                    outline:'none',
                                                }}
                                                placeholder='Add your comment...'
                                                rows={5}
                                            >
                                            </textarea>
                                            <button style={{
                                                maxWidth:'fit-content',
                                            }}>Add comment</button>
                                        </div>)
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div style = {{
                    flexDirection:'column',

                }} className='all-questions'>
                    <p style={{
                        marginBottom:"20px",
                        fontSize:'1.3rem',
                        fontWeight:'300',
                    }}>No. of answers</p>
                    <div className='all-questions-container'>
                        <div className='all-questions-left'>
                            <div className='all-options'>
                                <p className='arrow'><i class="fa-solid fa-caret-up"></i></p>
                                <p className='arrow'>6</p>
                                <p className='arrow'><i class="fa-solid fa-caret-down"></i></p>
                                <Bookmark />
                                <History />
                            </div>
                        </div>
                        <div className='question-answer'>
                            <p>I am developing an application which requires to keep
                                track of the outgoing calls made by user, which I am
                                able to track by Using Broadcast Receiver. I also want
                                to detect that is that call is Local or STD or ISD,
                                but I am not able to detect that.</p>
                            <div className='author'>
                                <small>asked timeStamp </small>
                                <div className='auth-details'>
                                    <Avatar />
                                    <p>Author Name</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className='main-answer'>
                <h3 style={{
                    fontSize:'22px',
                    margin:'10px 0',
                    fontWeight:'400',
                }}>Your answer</h3>
                <ReactQuill 
                    className='react-quill' 
                    theme = "snow"
                    style={{
                        height:'180px'
                    }}
                    />
            </div>
            <button style={{
                marginTop:'80px',
                maxWidth:'fit-content'
            }}>Post Your Answer</button>
        </div>
    )
}

export default MainQuestion