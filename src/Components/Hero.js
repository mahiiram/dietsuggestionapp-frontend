import React from 'react'
import '../Components/styles/Hero.css';
import { useNavigate } from 'react-router-dom';
import Heart from '../Components/assets/heart.png';
import hero_img from '../Components/assets/hero_image.png';
import hero_img_back from '../Components/assets/hero_image_back.png';
import Navbar from '../Components/Navbar.js'
 
function Hero() {

    const navigate = useNavigate();
  const handlePrograms = ()=>{
    if(localStorage.getItem('token')){
        navigate('/programs')
    }else{
        navigate('/login')
    }
  }

  return (
    <div className='hero'>
       <div className='hero-left'>
        <Navbar />
        {/* <Header /> */}
        <div className='best-add'>
            <div></div>
            <span>The Best Diet Suggestion App in the Town</span>
        </div>

        <div className='hero-text'>
            <div>
                <span className='Stroke-test'>Shape </span>
                <span>Your</span>
            </div>
            <div>
                <span>Ideal Body</span>
            </div>
            <div>
                <span>
                IN HERE WE WILL HELP YOU TO SHAPE YOUR BODY AND LIVE UP YOUR LIFE TO FULLEST 
                </span>
            </div>   
        </div>
        <div className='figures'>
                <div>
                    <span>50+</span>
                    <span>Diet and fitness programs</span>
                </div>
            </div>
       </div>
       <div className='hero-right'>
        <div style={{display:'flex',justifyContent:'center'}}>
        <button onClick={handlePrograms} className='btn-orange'>JoinNow</button>
        </div>

        <div className='heart'>
            <img src={Heart}  alt='heartpng'/>
            <span>Heart Rate</span><span>BBM</span>
        </div>
        <img src={hero_img} className='hero_img' alt='hero'/>
        <img src={hero_img_back} className='hero_img_back' alt='heroback'/>
       </div>
    </div>
  )
}

export default Hero