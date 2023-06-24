import React from 'react';
import '../Components/styles/Programs.css';
import { programsData } from '../programsData.js';
import RightArrow from '../Components/assets/rightArrow.png';
import { Link, useNavigate } from 'react-router-dom';

function Programs() {
     const navigate = useNavigate();
  const handleProgram  = ()=>{
    if(localStorage.getItem('token')){
         navigate('/programs')
    }else{
      navigate('/login')
    }
  }
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
            return <>
                <div onClick={handleProgram} className='category'>
                 {programs.image}
                 <span>{programs.heading}</span>
                 <span>{programs.details}</span>
                 <div className='join-Now'><span>join Now</span><img src={RightArrow}  alt=''/></div>
            </div>
              </>
        
            
        })}
        </div>
    </div>
  )
}

export default Programs