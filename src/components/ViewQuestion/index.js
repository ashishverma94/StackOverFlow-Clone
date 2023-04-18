import React from 'react'
import Sidebar from '../StackOverFlow/Sidebar'
import '../StackOverFlow/css/index.css' ;
import MainQuestion from './MainQuestion';

function index() {
  return (
    <div className='stack-index'>
        <div className = 'stack-index-content'>
            <Sidebar/>
            <MainQuestion/>
        </div>
    </div>
  )
}

export default index