import React from 'react';
import '../Components/styles/Programs.css';
import { programsData } from '../programsData.js';
import RightArrow from '../Components/assets/rightArrow.png';
import { Link } from 'react-router-dom';

function Programs() {
  return (
    <div className='programs' id='programs'>
        <div className='programs-header'>
            <span className='Stroke-test'>
               Explore Our 
            </span>
            <span>
               Programs 
            </span>
            <span className='Stroke-test'>
               to shape you 
            </span>
        </div>
        <div className='program-category'>
        {programsData.map((programs)=>{
            return <Link to='/programs'>
                <div className='category'>
                 {programs.image}
                 <span>{programs.heading}</span>
                 <span>{programs.details}</span>
                 <div className='join-Now'><span>join Now</span><img src={RightArrow}  alt=''/></div>
            </div>

            </Link>
            
        })}
        </div>
    </div>
  )
}

export default Programs